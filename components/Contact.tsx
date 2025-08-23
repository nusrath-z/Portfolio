"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="w-full p-2 pt-32">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s Connect</h2>
        <p className="text-gray-300 mt-2">Prefer email? I usually respond within a day.</p>

        <form
          className="mt-6 grid gap-4 bg-gray-800/60 p-5 md:p-6 rounded-2xl border border-white/10"
          onSubmit={(e) => {
            e.preventDefault();
            const subject = encodeURIComponent("Portfolio contact from " + form.name);
            const body = encodeURIComponent(form.message + "\n\nFrom: " + form.email);
            window.location.href = `email@example.com?subject=${subject}&body=${body}`;
          }}
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full bg-gray-900 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full bg-gray-900 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full bg-gray-900 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500 resize-y"
              placeholder="Tell me about your project or role..."
            />
          </div>
          <div className="flex gap-3 justify-end">
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-white text-black font-medium hover:opacity-90"
              aria-label="Send message via email"
            >
              Send
            </button>
            <a
              href="https://www.linkedin.com/in/nusrathzaman14"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-black border border-white/20 hover:bg-black/60"
            >
              LinkedIn
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;