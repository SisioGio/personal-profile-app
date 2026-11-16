import React, { useState } from "react";
import axios from "axios";

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-base text-ink transition-colors duration-200 placeholder:text-muted/70 hover:border-ink focus:border-ink focus:outline-none";

const links = [
  { name: "Experience", href: "#CV" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#familiarities" },
  { name: "About", href: "#about" },
];

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    setError(null);
    try {
      await axios.post(
        "https://q3oazozow7.execute-api.eu-central-1.amazonaws.com/prod/contact-email",
        data
      );
      setMessage("Thanks. Your message arrived and I will reply as soon as I can.");
    } catch (err) {
      console.error("Error:", err);
      setError("The message did not send. Please write to me by email instead.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <section id="contact" className="border-t border-line bg-ink py-24 text-paper sm:py-32">
      <div className="wrap">
        <p className="eyebrow !text-paper/60">Contact</p>
        <h2 className="mt-4 font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
          Let&apos;s talk.
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-paper/70">
              Hiring for automation, document AI or an AI agent? Write to me or
              leave your details and I will get back to you.
            </p>
            <ul className="mt-10 space-y-5 text-lg">
              <li>
                <a
                  href="mailto:alessiogiovannini23@gmail.com"
                  className="link-draw break-all text-xl"
                >
                  alessiogiovannini23@gmail.com
                </a>
              </li>
              <li className="text-paper/70">Barcelona, Spain</li>
              <li>
                <a href="tel:+34675212039" className="link-draw text-paper/70 hover:text-paper">
                  +34 675 212 039
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={sendEmail} className="space-y-5 text-ink">
            <div>
              <label htmlFor="name" className="text-sm text-paper/70">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={data.name}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-paper/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={data.email}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="tel" className="text-sm text-paper/70">
                Phone number
              </label>
              <input
                id="tel"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={data.phone}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn w-full bg-accent text-paper hover:bg-paper hover:text-ink disabled:opacity-60 sm:w-auto"
            >
              {sending ? "Sending..." : "Send message"}
            </button>

            {message && (
              <p role="status" className="text-base text-paper">
                {message}
              </p>
            )}
            {error && (
              <p role="alert" className="text-base text-[#FDBA74]">
                {error}
              </p>
            )}
          </form>
        </div>

        <footer className="mt-24 flex flex-col gap-6 border-t border-paper/20 pt-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alessio Giovannini</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="link-draw inline-flex min-h-[44px] items-center hover:text-paper"
              >
                {l.name}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
