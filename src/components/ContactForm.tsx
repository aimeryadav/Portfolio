import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactMessage, validateContactPayload, type ContactPayload } from '../api/contact';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactPayload>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (field: keyof ContactPayload) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateContactPayload(formData);
    if (validationErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Mark all as touched
    setTouched({ name: true, email: true, subject: true, message: true });

    const validationErrors = validateContactPayload(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactMessage(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouched({});
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setSubmitError(null);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl bg-[#F4F8FA] dark:bg-[#071818] border border-slate-300 dark:border-[#13423E] shadow-sm space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 size={36} strokeWidth={2.2} />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
                Message Sent!
              </h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Thank you for reaching out. Your message has been received, and I will get back to you within 24 hours.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#050505] dark:bg-[#0B2F2F] text-white dark:text-[#F5F1EC] hover:bg-[#7A2635] dark:hover:bg-[#A83252] border border-transparent dark:border-[#13423E] transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            {submitError && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{submitError}</span>
                </div>
                <a
                  href={`mailto:amit20052020@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                  className="underline font-bold shrink-0 hover:opacity-80 ml-6 sm:ml-0"
                >
                  Open in Email App →
                </a>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground/80"
                >
                  Name <span className="text-[#7A2635] dark:text-[#A83252]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  className={`w-full rounded-xl px-4 py-3 bg-[#F4F8FA] dark:bg-[#071818] text-foreground text-sm font-medium border transition-colors placeholder:text-foreground/40 focus:outline-none ${
                    touched.name && errors.name
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-slate-300 dark:border-[#13423E] focus:border-[#7A2635] dark:focus:border-[#A83252]'
                  }`}
                />
                {touched.name && errors.name && (
                  <p className="text-xs text-rose-500 font-semibold">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground/80"
                >
                  Email <span className="text-[#7A2635] dark:text-[#A83252]">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                  className={`w-full rounded-xl px-4 py-3 bg-[#F4F8FA] dark:bg-[#071818] text-foreground text-sm font-medium border transition-colors placeholder:text-foreground/40 focus:outline-none ${
                    touched.email && errors.email
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-slate-300 dark:border-[#13423E] focus:border-[#7A2635] dark:focus:border-[#A83252]'
                  }`}
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-rose-500 font-semibold">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="block text-xs font-bold uppercase tracking-wider text-foreground/80"
              >
                Subject <span className="text-[#7A2635] dark:text-[#A83252]">*</span>
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={() => handleBlur('subject')}
                placeholder="ML Collaboration / Job Opportunity / Project Discussion"
                disabled={isSubmitting}
                className={`w-full rounded-xl px-4 py-3 bg-[#F4F8FA] dark:bg-[#071818] text-foreground text-sm font-medium border transition-colors placeholder:text-foreground/40 focus:outline-none ${
                  touched.subject && errors.subject
                    ? 'border-rose-500 focus:border-rose-500'
                    : 'border-slate-300 dark:border-[#13423E] focus:border-[#7A2635] dark:focus:border-[#A83252]'
                }`}
              />
              {touched.subject && errors.subject && (
                <p className="text-xs text-rose-500 font-semibold">{errors.subject}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold uppercase tracking-wider text-foreground/80"
              >
                Message <span className="text-[#7A2635] dark:text-[#A83252]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                placeholder="Tell me about your project, idea, or role..."
                disabled={isSubmitting}
                className={`w-full rounded-xl p-4 bg-[#F4F8FA] dark:bg-[#071818] text-foreground text-sm font-medium border transition-colors placeholder:text-foreground/40 focus:outline-none resize-none ${
                  touched.message && errors.message
                    ? 'border-rose-500 focus:border-rose-500'
                    : 'border-slate-300 dark:border-[#13423E] focus:border-[#7A2635] dark:focus:border-[#A83252]'
                }`}
              />
              {touched.message && errors.message && (
                <p className="text-xs text-rose-500 font-semibold">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-[#050505] dark:bg-[#0E3A37] text-white dark:text-[#F5F1EC] font-bold text-xs uppercase tracking-widest hover:bg-[#7A2635] dark:hover:bg-[#A83252] border border-transparent dark:border-[#13423E] transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
