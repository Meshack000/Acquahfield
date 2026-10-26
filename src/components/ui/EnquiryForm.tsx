import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type Props = { formName: "enquiry" | "contact"; showLevel?: boolean };

const field =
  "w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

export default function EnquiryForm({ formName, showLevel = false }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": formName, ...data }).toString(),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card bg-mint/15 p-8 text-center">
        <h3 className="text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-muted">We’ve received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input name="name" required placeholder="Your name" className={field} />
      <input name="phone" required type="tel" placeholder="Phone number" className={field} />
      <input name="email" type="email" placeholder="Email (optional)" className={`${field} ${showLevel ? "" : "sm:col-span-2"}`} />
      {showLevel && (
        <select name="level" required defaultValue="" className={field}>
          <option value="" disabled>Class you’re enquiring about</option>
          <option>Creche</option>
          <option>Kindergarten</option>
          <option>Grade 1–3</option>
          <option>Grade 4–7</option>
        </select>
      )}
      <textarea name="message" required rows={5} placeholder="Your message" className={`${field} sm:col-span-2`} />
      <div className="sm:col-span-2">
        <button
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-bubblegum px-7 py-3 font-display font-medium text-white transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"} <Send size={18} />
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-bubblegum">Something went wrong. Please try again or call us.</p>
        )}
      </div>
    </form>
  );
}