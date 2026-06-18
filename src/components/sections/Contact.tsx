import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

const SOCIALS = [
  { icon: Mail, label: 'krishnakumarm2k26@gmail.com', href: 'mailto:krishnakumarm2k26@gmail.com' },
  { icon: Linkedin, label: 'linkedin.com/in/krishna-kumar-m-b382bb210', href: 'https://www.linkedin.com/in/krishna-kumar-m-b382bb210' },
  { icon: Github, label: 'github.com/KrishnaMurugan18', href: 'https://github.com/KrishnaMurugan18' },
]

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(values: FormState) {
    const next: Partial<FormState> = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Please add a subject.'
    if (values.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      // Wire this up to your backend of choice (Formspree, EmailJS, a serverless
      // function, etc). See README.md → "Connecting the contact form".
      setSubmitted(true)
      setForm(INITIAL)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          index="08"
          file="contact.sh"
          title="Let's Build Something"
          description="Open to full-time Java/full-stack and cloud engineering roles — reach out directly or use the form."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan/10 text-cyan">
                  <Icon size={16} />
                </span>
                {label}
              </a>
            ))}
          </div>

          <Card className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="mb-3 text-cyan" size={40} />
                  <h3 className="font-display text-lg font-semibold">Message sent</h3>
                  <p className="mt-1 max-w-xs text-sm text-muted">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 font-tag text-xs text-cyan"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name"
                      value={form.name}
                      error={errors.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Jane Doe"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      error={errors.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <Field
                    label="Subject"
                    value={form.subject}
                    error={errors.subject}
                    onChange={(v) => setForm({ ...form, subject: v })}
                    placeholder="Backend Engineer opportunity"
                  />
                  <div>
                    <label className="mb-1.5 block font-tag text-xs text-muted">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Tell me a bit about the role..."
                      className="w-full resize-none rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-amber">{errors.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message <Send size={15} />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block font-tag text-xs text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
      />
      {error && <p className="mt-1 text-xs text-amber">{error}</p>}
    </div>
  )
}
