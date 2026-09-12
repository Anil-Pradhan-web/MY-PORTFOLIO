'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: Mail,
    text: 'anilpradhan9644@gmail.com',
    href: 'mailto:anilpradhan9644@gmail.com',
    label: 'Direct Email',
  },
  {
    icon: FaLinkedin,
    text: 'linkedin.com/in/anil-pradhan543',
    href: 'https://linkedin.com/in/anil-pradhan543',
    label: 'LinkedIn Network',
  },
  {
    icon: FaGithub,
    text: 'github.com/Anil-Pradhan-web',
    href: 'https://github.com/Anil-Pradhan-web',
    label: 'GitHub Codebase',
  },
  {
    icon: MapPin,
    text: 'Bhubaneswar, Odisha, India',
    label: 'Current Location',
  },
  {
    icon: Briefcase,
    text: 'Open to: Internships in Bangalore, Hyderabad, Bhubaneswar',
    label: 'Work Availability',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleIdRef = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('anilpradhan9644@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = 'mailto:anilpradhan9644@gmail.com';
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = rippleIdRef.current++;
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <section id="contact" className="section-padding w-full" aria-labelledby="contact-heading">
      <div className="container-custom">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get In Touch"
          title="Let's Build Together"
          subtitle="Have an engineering opportunity, collaboration idea, or question? I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-14">
          {/* Left Column: Direct Channels & Copy Action */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] as const }}
            className="space-y-6"
          >
            <div className="space-y-3.5">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-bg-card border border-border-primary hover:border-[#00e89d]/30 transition-all hover:-translate-y-0.5 duration-300 group flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-lg bg-bg-secondary border border-border-primary text-text-muted group-hover:text-[#00e89d] transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-0.5">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-body text-sm text-text-primary hover:text-[#00e89d] transition-colors font-medium break-words inline-flex items-center gap-1.5"
                        >
                          <span>{info.text}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-[#00e89d] transition-colors" />
                        </a>
                      ) : (
                        <span className="font-body text-sm text-text-secondary font-medium">
                          {info.text}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Copy Email Action */}
            <div className="pt-2">
              <button
                suppressHydrationWarning
                onClick={handleCopyEmail}
                className={cn(
                  'w-full py-3 px-4 rounded-xl border transition-all duration-200 font-mono text-xs flex items-center justify-center gap-2',
                  copiedEmail
                    ? 'bg-[#00e89d]/15 border-[#00e89d]/30 text-[#00e89d] shadow-[0_0_15px_rgba(0,232,157,0.15)]'
                    : 'bg-bg-card border-border-primary text-text-secondary hover:border-[#00e89d]/30 hover:text-text-primary'
                )}
                aria-label={copiedEmail ? 'Email address copied to clipboard' : 'Copy email address'}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#00e89d]" />
                    <span>anilpradhan9644@gmail.com copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-text-muted" />
                    <span>Copy Email Address (anilpradhan9644@gmail.com)</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] as const }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-7 md:p-8 rounded-2xl border border-border-primary bg-bg-card shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              <h3 className="font-display text-lg font-semibold text-text-primary mb-1">
                Send Direct Message
              </h3>
              <p className="body-xs text-text-muted mb-4">
                Fill in the details below and I&apos;ll get back to you promptly.
              </p>

              <Input
                id="contact-name"
                name="name"
                label="Your Full Name"
                placeholder="e.g. Alex Chen"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Input
                id="contact-email"
                name="email"
                type="email"
                label="Your Email Address"
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Textarea
                id="contact-message"
                name="message"
                label="Project Details or Message"
                rows={5}
                placeholder="Hi Anil, I'd like to talk about an engineering role / collaboration..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              {submitStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-body" role="status">
                  Thank you! Your message has been dispatched successfully. I will get back to you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-body" role="alert">
                  Failed to send message. Please reach out directly to anilpradhan9644@gmail.com.
                </div>
              )}

              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="w-full justify-center py-3.5 flex flex-row items-center gap-2 relative overflow-hidden"
                onClick={handleButtonClick}
              >
                {/* Ripple effects */}
                {ripples.map((r) => (
                  <span
                    key={r.id}
                    className="pointer-events-none absolute w-4 h-4 rounded-full bg-white/20"
                    style={{
                      left: r.x - 8,
                      top: r.y - 8,
                      animation: 'ripple 0.5s ease-out forwards',
                    }}
                  />
                ))}
                {!isSubmitting && <Send className="w-4 h-4 shrink-0 inline-block" />}
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Ripple keyframes injected via style tag */}
      <style>{`
        @keyframes ripple {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(6); opacity: 0; }
        }
      `}</style>
    </section>
  );
}