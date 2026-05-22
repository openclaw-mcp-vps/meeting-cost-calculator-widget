export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff]">
          Real-time meeting cost tracker
        </div>
        <h1 className="text-4xl font-bold text-white leading-tight">
          Stop Wasting Money on <span className="text-[#58a6ff]">Expensive Meetings</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Embed a live cost counter in any meeting platform or internal tool. Configure salaries once, generate an embed code, and watch the dollars tick in real time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-6 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mt-4 text-left">
          <div className="text-xs text-[#8b949e] mb-2 uppercase tracking-widest">Live Preview</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#8b949e]">Meeting Cost</div>
              <div className="text-3xl font-mono font-bold text-[#58a6ff]">$47.82</div>
              <div className="text-xs text-[#8b949e] mt-1">6 attendees · 23 min elapsed</div>
            </div>
            <div className="flex flex-col gap-1 text-xs text-[#8b949e]">
              <span className="bg-[#0d1117] border border-[#30363d] rounded px-2 py-1">Avg salary: $95k/yr</span>
              <span className="bg-[#0d1117] border border-[#30363d] rounded px-2 py-1">Cost/min: $2.08</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-white">Pro</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-1 rounded-full">Most Popular</span>
          </div>
          <div className="text-4xl font-bold text-white">
            $8<span className="text-lg font-normal text-[#8b949e]">/mo</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited widgets</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 50 team members</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom embed codes</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time cost tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Meeting history & reports</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg text-center transition-colors"
          >
            Start Free Trial
          </a>
          <p className="text-xs text-[#8b949e] text-center">Cancel anytime. No credit card required for trial.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">How does the widget work?</h3>
            <p className="text-[#8b949e] text-sm">You enter each attendee's annual salary in the dashboard. The widget calculates a per-second cost rate and displays a live running total that updates every second during the meeting.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Where can I embed the widget?</h3>
            <p className="text-[#8b949e] text-sm">Anywhere that accepts an iframe or JavaScript snippet — Notion, Confluence, internal dashboards, Slack tab apps, or any custom web tool your team uses.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Is salary data stored securely?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Salary data is encrypted at rest and never exposed in the embed code. The widget only receives an anonymous cost-per-second rate, keeping compensation data private.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Meeting Cost Calculator · <a href="#" className="hover:text-[#58a6ff]">Privacy</a> · <a href="#" className="hover:text-[#58a6ff]">Terms</a>
      </footer>
    </main>
  );
}
