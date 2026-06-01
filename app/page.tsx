export default function Home() {
  const faqs = [
    {
      q: "Which Discord servers are supported?",
      a: "Any Discord server where you have admin permissions to add a bot. Works with communities of all sizes."
    },
    {
      q: "How accurate are the transcripts?",
      a: "We use industry-leading speech-to-text APIs achieving 95%+ accuracy in English, with support for multiple languages."
    },
    {
      q: "Is my audio data private?",
      a: "Recordings are encrypted at rest and in transit. You own your data and can delete it at any time."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Discord Community Managers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Auto-record Discord voice calls<br />
          <span className="text-[#58a6ff]">with searchable transcripts</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your Discord bot, monitor voice channels automatically, and get AI-powered transcripts delivered to your dashboard — no manual effort required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Recording — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🎙️", label: "Auto-record voice channels" },
          { icon: "📝", label: "AI-generated transcripts" },
          { icon: "🔍", label: "Full-text search" }
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-sm text-[#c9d1d9]">{f.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited voice channel recordings",
              "AI transcripts with speaker labels",
              "Searchable transcript archive",
              "Up to 10 Discord servers",
              "30-day recording retention",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm mt-20">
        © {new Date().getFullYear()} Discord Meeting Recorder. All rights reserved.
      </footer>
    </main>
  );
}
