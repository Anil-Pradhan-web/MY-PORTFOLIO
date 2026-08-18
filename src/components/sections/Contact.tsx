'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Briefcase, Copy, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

const contactInfo = [
  { icon: Mail, text: 'anilpradhan9644@gmail.com', href: 'mailto:anilpradhan9644@gmail.com', label: 'Email' },
  { icon: Linkedin, text: 'linkedin.com/in/anil-pradhan543', href: 'https://linkedin.com/in/anil-pradhan543', label: 'LinkedIn' },
  { icon: Github, text: 'github.com/Anil-Pradhan-web', href: 'https://github.com/Anil-Pradhan-web', label: 'GitHub' },
  { icon: MapPin, text: 'Bhubaneswar, Odisha' },
  { icon: Briefcase, text: 'Open to: Internships in Bangalore, Hyderabad, Bhubaneswar' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  return (
    <section id="contact" className="section-padding w-full border-t border-border-primary" aria-labelledby="contact-heading">
      <div className="container-custom">
        <SectionHeading
          id="contact-heading"
          title="Let&apos;s Build Together"
          subtitle="Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-bg-card border border-border-primary group-hover:border-teal-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-text-muted group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-text-secondary hover:text-teal-400 transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="font-body text-text-secondary">{info.text}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Copy email button */}
            <div className="pt-4">
              <button
                suppressHydrationWarning
                onClick={handleCopyEmail}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 font-mono text-sm',
                  copiedEmail
                    ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                    : 'bg-bg-card border-border-primary text-text-secondary hover:border-teal-500/30 hover:text-teal-400'
                )}
                aria-label={copiedEmail ? 'Email copied!' : 'Copy email address'}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email Address
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl border border-border-primary bg-bg-card">
              <Input
                id="contact-name"
                name="name"
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Input
                id="contact-email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Textarea
                id="contact-message"
                name="message"
                label="Message"
                rows={4}
                placeholder="Let's build something great together..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              {submitStatus === 'success' && (
                <p className="text-sm font-body text-teal-400" role="status">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm font-body text-red-400" role="alert">
                  Failed to send message. Please try again or email directly.
                </p>
              )}

              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}