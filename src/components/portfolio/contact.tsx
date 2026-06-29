"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import SectionTitle from "./section-title";
import { profile } from "@/lib/portfolio/cv-data";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon. 🚀", {
      description: `Thanks ${form.name || "there"}, I'll reply to ${form.email}.`,
    });
    setForm({ name: "", email: "", message: "" });
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: "var(--neo-accent)",
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      color: "var(--neo-accent-2)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: "#",
      color: "var(--neo-accent-3)",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Get In Touch"
          title={
            <>
              Let's <span className="text-gradient-accent">Connect</span>
            </>
          }
          subtitle="Have a project, opportunity, or just want to chat about business simulations or Laravel architecture? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="neo p-6 sm:p-8 relative overflow-hidden">
              {/* Decorative orb */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, var(--neo-accent), transparent)",
                }}
              />

              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-sm text-muted-c mb-6">
                Reach out through any of these channels — I usually respond
                within 24 hours.
              </p>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="neo-sm neo-hover p-4 rounded-2xl flex items-center gap-4 group cursor-pointer block"
                  >
                    <div
                      className="neo-inset-sm w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ boxShadow: `0 0 16px ${item.color}55` }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-muted-c tracking-wider uppercase font-semibold">
                        {item.label}
                      </p>
                      <p className="font-semibold text-sm truncate group-hover:text-accent-c transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social row */}
              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <p className="text-[10px] text-muted-c tracking-wider uppercase font-semibold mb-3">
                  Find Me Online
                </p>
                <div className="flex gap-2">
                  {[Github, Linkedin, Globe, MessageCircle].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="neo-sm neo-hover neo-press w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-muted-c hover:text-accent-c transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="neo p-6 sm:p-8 h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-c mb-6">
                Fill in the form and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-4 flex-1 flex flex-col">
                <div>
                  <label className="text-xs font-semibold text-muted-c mb-1.5 block tracking-wider uppercase">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="neo-inset-sm w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-accent-c transition-all bg-transparent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-c mb-1.5 block tracking-wider uppercase">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="neo-inset-sm w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-accent-c transition-all bg-transparent"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-semibold text-muted-c mb-1.5 block tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="neo-inset-sm w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-accent-c transition-all bg-transparent resize-none flex-1"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="neo neo-hover neo-press px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 neo-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-accent-c border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-accent-c" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
