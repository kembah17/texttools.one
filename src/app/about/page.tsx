import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About TextTools.one — Free Privacy-First Text Tools',
  description: 'Learn about TextTools.one — a free suite of online text manipulation tools that process everything in your browser for complete privacy.',
  alternates: { canonical: 'https://texttools.one/about' },
  openGraph: {
    title: 'About TextTools.one — Free Privacy-First Text Tools',
    description: 'Learn about TextTools.one and our commitment to free, private text processing tools.',
    url: 'https://texttools.one/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-6">About TextTools.one</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">Our Mission</h2>
          <p className="text-text-light leading-relaxed">
            TextTools.one provides a comprehensive suite of free online text manipulation tools designed for everyone — writers, developers, students, marketers, and data professionals. Our mission is to make powerful text processing accessible without compromising your privacy.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">Privacy First</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Every tool on TextTools.one runs entirely in your browser using client-side JavaScript. This means:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">✓</span>
              <span className="text-text-light"><strong className="text-text">No server uploads</strong> — Your text is never sent to any server. All processing happens locally on your device.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">✓</span>
              <span className="text-text-light"><strong className="text-text">No data storage</strong> — We don&apos;t store, log, or retain any text you process through our tools.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">✓</span>
              <span className="text-text-light"><strong className="text-text">No accounts required</strong> — Use any tool instantly without signing up or providing personal information.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success mt-1">✓</span>
              <span className="text-text-light"><strong className="text-text">Works offline</strong> — Once loaded, the tools work without an internet connection since all logic runs in your browser.</span>
            </li>
          </ul>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">Our Tools</h2>
          <p className="text-text-light leading-relaxed mb-4">
            We offer 8 carefully crafted text tools, each designed to solve common text manipulation tasks:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: 'Case Converter', href: '/case-converter', desc: '10 case formats' },
              { name: 'Text Diff', href: '/text-diff', desc: 'Side-by-side comparison' },
              { name: 'Remove Duplicates', href: '/remove-duplicates', desc: 'Deduplicate lines' },
              { name: 'Lorem Ipsum Generator', href: '/lorem-ipsum-generator', desc: 'Placeholder text' },
              { name: 'Text Reverser', href: '/text-reverser', desc: 'Reverse text 3 ways' },
              { name: 'Text Sorter', href: '/text-sorter', desc: '6 sorting methods' },
              { name: 'Find & Replace', href: '/find-and-replace', desc: 'Regex support' },
              { name: 'Whitespace Remover', href: '/whitespace-remover', desc: '7 cleaning actions' },
            ].map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-light transition-colors group"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                <div>
                  <span className="font-medium text-text group-hover:text-primary transition-colors">{tool.name}</span>
                  <span className="text-sm text-text-light ml-2">— {tool.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">Technology</h2>
          <p className="text-text-light leading-relaxed">
            TextTools.one is built with modern web technologies including Next.js, TypeScript, and Tailwind CSS. All text processing uses pure JavaScript string manipulation — no external libraries or APIs are needed for the core tool functionality. This ensures fast load times, reliable performance, and zero dependencies on third-party services.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">Contact</h2>
          <p className="text-text-light leading-relaxed">
            Have feedback, suggestions, or found a bug? We&apos;d love to hear from you. Reach out to us at{' '}
            <a href="mailto:hello@texttools.one" className="text-primary hover:underline">hello@texttools.one</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
