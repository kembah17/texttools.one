import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — TextTools.one',
  description: 'Privacy policy for TextTools.one. Learn how we protect your data — all text processing happens in your browser with no server uploads.',
  alternates: { canonical: 'https://texttools.one/privacy' },
  openGraph: {
    title: 'Privacy Policy — TextTools.one',
    description: 'Our privacy policy explains how TextTools.one protects your data with client-side processing.',
    url: 'https://texttools.one/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Privacy Policy</h1>
      <p className="text-text-light mb-8">Last updated: April 2026</p>

      <div className="bg-surface border border-border rounded-xl p-8 shadow-sm space-y-8">
        <section>
          <h2 className="text-xl font-bold text-text mb-3">Overview</h2>
          <p className="text-text-light leading-relaxed">
            TextTools.one (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website at texttools.one (the &quot;Service&quot;). Our core principle is simple: your text data stays on your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Client-Side Processing</h2>
          <p className="text-text-light leading-relaxed">
            All text processing tools on TextTools.one operate entirely within your web browser using client-side JavaScript. This means:
          </p>
          <ul className="mt-3 space-y-2 text-text-light">
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Your text is never transmitted to our servers or any third-party servers</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> We do not store, log, cache, or retain any text you input into our tools</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Processing results exist only in your browser&apos;s memory and are lost when you close the page</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> We have no ability to access, read, or recover any text you process</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Information We Collect</h2>
          <h3 className="text-lg font-semibold text-text mb-2">Information We Do NOT Collect</h3>
          <ul className="space-y-2 text-text-light">
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Text content you input into any tool</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Personal information (name, email, phone number)</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Account credentials (we don&apos;t have accounts)</li>
          </ul>

          <h3 className="text-lg font-semibold text-text mt-4 mb-2">Information That May Be Collected Automatically</h3>
          <p className="text-text-light leading-relaxed">
            Like most websites, our hosting provider and analytics services may automatically collect standard web server logs including IP addresses, browser type, referring pages, and pages visited. This information is used solely for maintaining the service and understanding general usage patterns.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Cookies</h2>
          <p className="text-text-light leading-relaxed">
            We use minimal cookies for essential functionality:
          </p>
          <ul className="mt-3 space-y-2 text-text-light">
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-text">Theme preference:</strong> A localStorage entry to remember your light/dark mode choice</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-text">Analytics cookies:</strong> If we use analytics services (such as Google Analytics), they may set cookies to help us understand how visitors use the site</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-text">Advertising cookies:</strong> If advertisements are displayed, ad networks may use cookies to serve relevant ads</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Third-Party Services</h2>
          <p className="text-text-light leading-relaxed">
            We may use third-party services for analytics and advertising. These services have their own privacy policies governing their use of information. We encourage you to review their policies:
          </p>
          <ul className="mt-3 space-y-2 text-text-light">
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Google Analytics — for understanding site usage</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> Google AdSense — for displaying advertisements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Children&apos;s Privacy</h2>
          <p className="text-text-light leading-relaxed">
            Our Service is not directed to children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Changes to This Policy</h2>
          <p className="text-text-light leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-text mb-3">Contact Us</h2>
          <p className="text-text-light leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:hello@texttools.one" className="text-primary hover:underline">hello@texttools.one</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
