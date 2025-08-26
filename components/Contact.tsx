"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ContactRequestBody } from "@/types/api";
import { IconSend } from "@tabler/icons-react";


const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactRequestBody>();

  const onSubmit = async (data: ContactRequestBody) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        reset(); // clears the form
      } else {
        alert("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      alert("⚠️ Network error. Please try again.");
    }
  };

  return (
    <section className="w-full flex h-[80vh] items-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-primary-light text-3xl md:text-4xl font-bold">Let’s Connect</h2>
        <p className="text-gray-300 mt-2">
          Prefer email? I usually respond within a day.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid gap-4 bg-surface p-5 md:p-6 rounded-2xl border border-white/10"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Name
            </label>
            <input
              id="name"
              placeholder="Your name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
                pattern: { value: /^[A-Za-z\s]+$/, message: "Name can only contain letters and spaces" },
              })}
              className="w-full  bg-input border border-input-border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary-focus"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full bg-input border border-input-border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary-focus"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project or role..."
              {...register("message", {
                required: "Message cannot be empty",
                maxLength: { value: 1000, message: "Message cannot exceed 1000 characters" },
              })}
              className="w-full  bg-input border border-input-border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary-focus resize-y"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <div className="flex gap-3 justify-end items-center">
          <button
  type="submit"
  disabled={isSubmitting}
  className="px-6 py-2 bg-primary text-text-primary hover:bg-primary-light border border-white rounded-full disabled:opacity-50 flex items-center gap-2"
>
  {isSubmitting ? "Sending..." : "Send"}
  {!isSubmitting && <IconSend size={18} />}
</button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
