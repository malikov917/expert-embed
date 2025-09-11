import React, { useMemo, useRef, useState } from "react";
import emailjs from 'emailjs-com';

// ExpertEmbed — lightweight single-file React landing page
// Styling uses Tailwind (no import needed in this environment)
// Copy + paste into a React app (e.g., Vite/Next). No external UI libs required.

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("E‑commerce");
  const [faqOpen, setFaqOpen] = useState(null);
  const heroRef = useRef(null);

  const features = [
    {
      title: "Upload your knowledge",
      desc: "Drag‑and‑drop PDFs, FAQs, or text. The bot grounds answers in your content.",
      icon: "📚",
    },
    {
      title: "Industry templates",
      desc: "Pre‑tuned prompts for e‑commerce, SaaS, services, restaurants, real estate.",
      icon: "🧪",
    },
    {
      title: "On‑brand voice",
      desc: "Match tone, colors, greeting, and avatar in seconds.",
      icon: "🎨",
    },
    {
      title: "Embed in one line",
      desc: "Drop a tiny <script> on your site and you’re live.",
      icon: "🧩",
    },
  ];

  const templates = [
    {
      name: "E‑commerce",
      emoji: "🛒",
      bullets: ["Guided product picks", "Size/fit Q&A", "Returns & shipping"],
    },
    {
      name: "Professional Services",
      emoji: "👩‍⚖️",
      bullets: ["Scope & pricing", "Booking guidance", "Lead capture"],
    },
    {
      name: "SaaS",
      emoji: "🧰",
      bullets: ["Onboarding help", "Feature explainers", "Troubleshooting"],
    },
    {
      name: "Restaurants",
      emoji: "🍝",
      bullets: ["Menu & allergens", "Reservations", "Events"],
    },
    {
      name: "Real Estate",
      emoji: "🏠",
      bullets: ["Property info", "Viewing slots", "Neighborhood basics"],
    },
  ];

  // const pricing = [
  //   {
  //     plan: "Free",
  //     price: "$0",
  //     sub: "Great for testing",
  //     features: ["1 bot", "100 messages/mo", "Starter templates"],
  //     cta: "Start Free",
  //     popular: false,
  //   },
  //   {
  //     plan: "Starter",
  //     price: "$19",
  //     sub: "For growing sites",
  //     features: ["3 bots", "1,000 messages/mo", "Custom prompts", "Email support"],
  //     cta: "Choose Starter",
  //     popular: true,
  //   },
  //   {
  //     plan: "Pro",
  //     price: "$49",
  //     sub: "Serious volume",
  //     features: [
  //       "Unlimited bots",
  //       "5,000 messages/mo",
  //       "Priority support",
  //       "Advanced customization",
  //     ],
  //     cta: "Go Pro",
  //     popular: false,
  //   },
  // ];

  const faqs = [
    {
      q: "Do I need training or fine‑tuning?",
      a: "No. ExpertEmbed combines strong prompts with your uploaded content. That’s enough for accurate, on‑brand answers in most SMB use‑cases.",
    },
    {
      q: "How do I embed it?",
      a: "Paste a single <script> tag before </body> or use our React component. You’ll get copy‑ready code inside the dashboard.",
    },
    {
      q: "Which models are supported?",
      a: "We integrate leading providers and choose the best default for reliability and cost. You can override in settings.",
    },
    {
      q: "Can I control the voice?",
      a: "Yes—pick a template tone (concise, friendly, expert) or write your own brand voice. You can also restrict topics or add guardrails.",
    },
  ];

  const embedSnippet = useMemo(
    () =>
      `<!-- ExpertEmbed: paste near </body> -->\n<script>\n  window.expertEmbed = {\n    botId: "YOUR_BOT_ID",\n    theme: { primary: "#6D28D9", accent: "#22D3EE" },\n    greeting: "Hi! I’m your 24/7 product expert—ask me anything.",\n  };\n</script>\n<script src="https://cdn.example.com/expert-embed.min.js" defer></script>`,
    []
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(embedSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-fuchsia-400/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-md" />
            <span className="font-semibold tracking-tight">ExpertEmbed</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#templates" className="hover:text-white">Templates</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="text-sm px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition">Log in</a>
            <a href="#cta" className="text-sm px-4 py-1.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 hover:brightness-110 transition shadow">Get early access</a>
          </div>
          <button
            aria-label="Toggle navigation"
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="i i-menu">☰</span>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10">
            <nav className="px-4 py-3 flex flex-col gap-2">
              {[
                ["#features", "Features"],
                ["#templates", "Templates"],
                ["#how", "How it works"],
                ["#pricing", "Pricing"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2 rounded-lg hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <a href="#cta" onClick={() => setMobileOpen(false)} className="mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold">Get early access</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(236,72,153,0.25),transparent_60%),radial-gradient(70%_50%_at_80%_10%,rgba(34,211,238,0.22),transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-fuchsia-300/90 bg-white/5 px-3 py-1 rounded-full border border-fuchsia-300/30 mb-4">
              Seeking Early Adopters <span className="text-[9px]">•</span> Free beta access
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Turn your website into a <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">24/7 expert</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              ExpertEmbed lets any business spin up a custom AI consultant that understands your industry, products, and policies—then embed it on your site in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold shadow hover:brightness-110 transition">Get early access</a>
              <a href="#how" className="px-6 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition">How it works</a>
            </div>
            <div className="mt-6 text-sm text-slate-400">No credit card required.</div>
          </div>
          <div className="">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl">
              <div className="absolute -top-3 -left-3 px-2 py-1 text-xs rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold shadow">Live demo</div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* Widget mock */}
                <div className="grid md:grid-cols-2">
                  <div className="p-4 bg-slate-950">
                    <div className="text-xs text-slate-400">Embed snippet</div>
                    <pre className="mt-2 text-[11px] leading-5 bg-black/60 p-3 rounded-xl border border-white/10 overflow-auto">
{embedSnippet}
                    </pre>
                    <button onClick={copy} className="mt-3 text-xs px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10">
                      {copied ? "Copied ✓" : "Copy snippet"}
                    </button>
                  </div>
                  <div className="p-4 bg-slate-900/60">
                    <div className="text-xs text-slate-400">Conversation preview</div>
                    <div className="mt-2 h-64 rounded-xl border border-white/10 p-3 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col">
                      <div className="mt-3 flex-1 space-y-2 overflow-y-auto">
                        <ChatBubble who="bot" text="Hi! I’m your 24/7 product expert—how can I help?" />
                        <ChatBubble who="user" text="Which plan should I pick for ~2k chats/mo?" />
                        <ChatBubble who="bot" text="Starter covers 1k/mo. For ~2k, choose Pro—5k messages with unlimited bots. I can also email you usage tips." />
                      </div>
                      <div className="mt-3 flex gap-2">
                        <input className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 outline-none placeholder:text-slate-500" placeholder="Ask anything…" />
                        <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / social proof placeholder */}
      <section className="py-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm">Trusted by early adopters across e‑commerce, SaaS, and services</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">A simple builder that ships value on day one</h2>
            <p className="mt-3 text-slate-300">Upload your docs, pick a template, set the tone, and paste one line of code. That’s it.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Industry templates</h2>
              <p className="mt-3 text-slate-300">Not a blank page—jump‑start with sensible defaults per industry.</p>
            </div>
            <div className="flex gap-2 bg-white/5 border border-white/10 p-1 rounded-2xl">
              {templates.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setSelectedTemplate(t.name)}
                  className={
                    "text-sm px-3 py-1.5 rounded-2xl transition " +
                    (selectedTemplate === t.name
                      ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold"
                      : "hover:bg-white/10")
                  }
                >
                  <span className="mr-1">{t.emoji}</span>
                  {t.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div key={t.name} className={
                "rounded-3xl border p-6 bg-white/5 border-white/10 shadow transition " +
                (selectedTemplate === t.name ? "ring-2 ring-fuchsia-400/60" : "")
              }>
                <div className="text-3xl">{t.emoji}</div>
                <h3 className="mt-3 font-semibold">{t.name}</h3>
                <ul className="mt-3 text-sm text-slate-300 list-disc pl-5 space-y-1">
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-slate-400">Includes guardrails, tone, and recall tuning.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-slate-300">Four steps. No model ops, no fine‑tuning—just your content + strong prompts.</p>
          </div>
          <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 counter-reset">
            {["Upload knowledge", "Choose template", "Customize & test", "Embed & go live"].map((step, i) => (
              <li key={step} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-extrabold grid place-items-center">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {i === 0 && "Drag PDFs/FAQs/text. We index just what’s needed."}
                  {i === 1 && "Pick a tuned starting point for your industry."}
                  {i === 2 && "Set voice, colors, greeting. Try sample questions."}
                  {i === 3 && "Paste a tiny <script> into your site footer."}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      {/* <section id="pricing" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Simple, honest pricing</h2>
            <p className="mt-3 text-slate-300">Start free. Upgrade as you grow. Cancel anytime.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.plan} className={
                "rounded-3xl border p-6 bg-white/5 border-white/10 shadow flex flex-col " +
                (p.popular ? "ring-2 ring-cyan-400/70" : "")
              }>
                {p.popular && (
                  <div className="-mt-8 mb-2 self-start px-3 py-1 text-xs rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold shadow">
                    Most popular
                  </div>
                )}
                <h3 className="font-semibold text-lg">{p.plan}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-slate-400">/mo</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{p.sub}</p>
                <ul className="mt-4 text-sm text-slate-300 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-[3px]">✅</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#cta" className="mt-6 inline-block text-center px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold hover:brightness-110 transition">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Shape ExpertEmbed with us</h2>
          <p className="mt-3 text-slate-300">Join the beta. Get early access, priority feedback loops, and a founder channel.</p>
          <EarlyAccessForm />
          <div className="mt-3 text-xs text-slate-400">We’ll only email about the beta. No spam.</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">FAQ</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                open={faqOpen === q}
                onToggle={(e) => setFaqOpen((e.target).open ? q : null)}
                className="group p-4"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-semibold">{q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-2 text-sm text-slate-300">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            <span>© {new Date().getFullYear()} ExpertEmbed</span>
          </div>
          <div className="flex items-center gap-6">
            {/* <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}

function ChatBubble({ who, text }) {
  const isBot = who === "bot";
  return (
    <div className={"flex " + (isBot ? "justify-start" : "justify-end")}>
      <div
        className={
          "max-w-[85%] px-3 py-2 rounded-2xl text-sm " +
          (isBot
            ? "bg-white/10 border border-white/10"
            : "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900")
        }
      >
        {text}
      </div>
    </div>
  );
}

function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Prefer environment variables (Create React App style) with hard‑coded fallback for local dev
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_el8ixrs';
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_t7wts2m';
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'nmG_8kMJ6PofAHE3-';

  const validate = () => {
    if (!email) return 'Email is required.';
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
    if (!emailOk) return 'Enter a valid email.';
    if (name && name.length > 80) return 'Name seems too long.';
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const vError = validate();
    if (vError) {
      setError(vError);
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
          user_name: name || 'Unknown',
          message: `EXPERT-EMBED: New early access request from ${name || 'Unknown'} <${email}>`,
        },
        PUBLIC_KEY
      );
      setSubmittedData({ email, name });
      setSent(true);
      setEmail('');
      setName('');
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Something went wrong. Please retry in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-semibold">You’re on the list! 🎉</div>
        <p className="mt-1 text-slate-300">We’ll email {submittedData?.name ? submittedData.name + ' ' : ''}at {submittedData?.email} with beta details.</p>
        <button onClick={() => { setSent(false); setSubmittedData(null); setError(null); }} className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm">Add another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 grid sm:grid-cols-3 gap-3" noValidate>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-3 rounded-2xl bg-white/10 border border-white/10 outline-none placeholder:text-slate-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-3 rounded-2xl bg-white/10 border border-white/10 outline-none placeholder:text-slate-500"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={
          "px-4 py-3 rounded-2xl font-semibold transition " +
          (isSubmitting
            ? "bg-white/10 border border-white/10 text-slate-400 cursor-not-allowed"
            : "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 hover:brightness-110")
        }
      >
        {isSubmitting ? 'Sending…' : 'Request access'}
      </button>
      {error && <div className="sm:col-span-3 text-left text-sm text-rose-300">{error}</div>}
    </form>
  );
}
