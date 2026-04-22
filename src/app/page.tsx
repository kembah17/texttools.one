import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';

const tools = [
  {
    name: 'Case Converter',
    href: '/case-converter',
    description: 'Convert text to uppercase, lowercase, title case, camelCase, snake_case, and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    name: 'Text Diff',
    href: '/text-diff',
    description: 'Compare two texts side-by-side and highlight additions, deletions, and changes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    name: 'Remove Duplicates',
    href: '/remove-duplicates',
    description: 'Remove duplicate lines with options for case sensitivity and whitespace trimming.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    name: 'Lorem Ipsum Generator',
    href: '/lorem-ipsum-generator',
    description: 'Generate placeholder text — paragraphs, sentences, or words of lorem ipsum.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    name: 'Text Reverser',
    href: '/text-reverser',
    description: 'Reverse text by characters, words, or lines instantly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
  {
    name: 'Text Sorter',
    href: '/text-sorter',
    description: 'Sort lines alphabetically, by length, numerically, or shuffle randomly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ),
  },
  {
    name: 'Find & Replace',
    href: '/find-and-replace',
    description: 'Find and replace text with regex support, case sensitivity, and match highlighting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: 'Whitespace Remover',
    href: '/whitespace-remover',
    description: 'Remove extra spaces, trim lines, remove blank lines, and clean up whitespace.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />

      {/* Hero Section */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Free Online <span className="text-primary">Text Tools</span>
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto mb-8">
            Powerful text manipulation tools that run entirely in your browser.
            No uploads, no servers, no tracking — your text stays private.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              100% Free
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Privacy First
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Instant Results
            </span>
          </div>
        </div>
      </section>

      <AdSlot slot="leaderboard" className="max-w-6xl mx-auto px-4" />

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-text mb-8 text-center">All Text Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block p-6 bg-surface border border-border rounded-xl shadow-sm hover:shadow-lg hover:border-primary transition-all"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h3 className="font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="in-content" className="max-w-6xl mx-auto px-4" />

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-text mb-6">Why Use TextTools.one?</h2>
        <div className="prose prose-lg max-w-none text-text-light space-y-4">
          <p>
            TextTools.one provides a comprehensive suite of free online text manipulation tools designed for writers, developers, students, and anyone who works with text. Every tool runs entirely in your browser using client-side JavaScript — your text is never sent to any server.
          </p>
          <h3 className="text-xl font-semibold text-text mt-8 mb-3">Complete Privacy</h3>
          <p>
            Unlike many online text tools that upload your content to remote servers, TextTools.one processes everything locally in your browser. This means your sensitive documents, code snippets, and personal text never leave your device. There are no accounts to create, no data to store, and no privacy concerns.
          </p>
          <h3 className="text-xl font-semibold text-text mt-8 mb-3">Professional Text Tools</h3>
          <p>
            Our case converter supports 10 different formats including camelCase, snake_case, and kebab-case — essential for developers. The text diff tool provides a clear side-by-side comparison with color-coded changes. The find and replace tool supports full regular expressions for advanced text manipulation.
          </p>
          <h3 className="text-xl font-semibold text-text mt-8 mb-3">Built for Speed</h3>
          <p>
            With no server round-trips required, every tool delivers instant results. Paste your text, click a button, and get your output immediately. The tools handle large texts efficiently, making them suitable for processing entire documents, codebases, or data files.
          </p>
        </div>
      </section>

      <AdSlot slot="footer" className="max-w-6xl mx-auto px-4" />
    </>
  );
}
