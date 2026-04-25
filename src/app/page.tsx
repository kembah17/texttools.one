'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';

const tools = [
  {
    name: 'Case Converter',
    href: '/case-converter',
    description: 'Convert text to uppercase, lowercase, title case, camelCase, snake_case, and more.',
    icon: '🔄',
  },
  {
    name: 'Text Diff',
    href: '/text-diff',
    description: 'Compare two texts side-by-side and highlight additions, deletions, and changes.',
    icon: '📊',
  },
  {
    name: 'Remove Duplicates',
    href: '/remove-duplicates',
    description: 'Remove duplicate lines with options for case sensitivity and whitespace trimming.',
    icon: '🧹',
  },
  {
    name: 'Lorem Ipsum Generator',
    href: '/lorem-ipsum-generator',
    description: 'Generate placeholder text — paragraphs, sentences, or words of lorem ipsum.',
    icon: '📝',
  },
  {
    name: 'Text Reverser',
    href: '/text-reverser',
    description: 'Reverse text by characters, words, or lines instantly.',
    icon: '↩️',
  },
  {
    name: 'Text Sorter',
    href: '/text-sorter',
    description: 'Sort lines alphabetically, by length, numerically, or shuffle randomly.',
    icon: '📋',
  },
  {
    name: 'Find & Replace',
    href: '/find-and-replace',
    description: 'Find and replace text with regex support, case sensitivity, and match highlighting.',
    icon: '🔍',
  },
  {
    name: 'Whitespace Remover',
    href: '/whitespace-remover',
    description: 'Remove extra spaces, trim lines, remove blank lines, and clean up whitespace.',
    icon: '✂️',
  },
];

export default function HomePage() {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <>
      <WebSiteSchema />

      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--color-bg-card)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>
            Free Online <span style={{ color: 'var(--color-brand)' }}>Text Tools</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Powerful text manipulation tools that run entirely in your browser.
            No uploads, no servers, no tracking — your text stays private.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full" style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}>
              ✅ 100% Free
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full" style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}>
              🔒 Privacy First
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full" style={{ backgroundColor: 'var(--color-brand-bg)', color: 'var(--color-brand)' }}>
              ⚡ Instant Results
            </span>
          </div>
        </div>
      </section>

      <AdSlot slot="leaderboard" className="max-w-6xl mx-auto px-4" />

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-heading)' }}>All Text Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block p-6 rounded-xl transition-all duration-200 no-underline"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: hoveredHref === tool.href ? '2px solid var(--color-brand)' : '2px solid var(--color-border)',
                boxShadow: hoveredHref === tool.href ? 'var(--shadow-lg)' : 'var(--shadow-card)',
                transform: hoveredHref === tool.href ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredHref(tool.href)}
              onMouseLeave={() => setHoveredHref(null)}
            >
              <div className="text-3xl mb-3">
                {tool.icon}
              </div>
              <h3 className="font-semibold mb-2 transition-colors" style={{ color: hoveredHref === tool.href ? 'var(--color-brand)' : 'var(--color-text-heading)' }}>
                {tool.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="in-content" className="max-w-6xl mx-auto px-4" />

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>Why Use TextTools.one?</h2>
        <div className="prose prose-lg max-w-none space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
          <p>
            TextTools.one provides a comprehensive suite of free online text manipulation tools designed for writers, developers, students, and anyone who works with text. Every tool runs entirely in your browser using client-side JavaScript — your text is never sent to any server.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: 'var(--color-text-heading)' }}>Complete Privacy</h3>
          <p>
            Unlike many online text tools that upload your content to remote servers, TextTools.one processes everything locally in your browser. This means your sensitive documents, code snippets, and personal text never leave your device. There are no accounts to create, no data to store, and no privacy concerns.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: 'var(--color-text-heading)' }}>Professional Text Tools</h3>
          <p>
            Our case converter supports 10 different formats including camelCase, snake_case, and kebab-case — essential for developers. The text diff tool provides a clear side-by-side comparison with color-coded changes. The find and replace tool supports full regular expressions for advanced text manipulation.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: 'var(--color-text-heading)' }}>Built for Speed</h3>
          <p>
            With no server round-trips required, every tool delivers instant results. Paste your text, click a button, and get your output immediately. The tools handle large texts efficiently, making them suitable for processing entire documents, codebases, or data files.
          </p>
        </div>
      </section>

      <AdSlot slot="footer" className="max-w-6xl mx-auto px-4" />
    </>
  );
}
