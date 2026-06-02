import type { Metadata } from 'next';
import TextDiff from '@/components/tools/TextDiff';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Text Diff — Compare Two Texts Online Free',
  description: 'Compare two texts side-by-side and highlight additions, deletions, and changes. Free online text diff and comparison tool.',
  alternates: { canonical: 'https://www.texttools.one/text-diff' },
  openGraph: {
    title: 'Text Diff — Compare Two Texts Online Free',
    description: 'Compare two texts side-by-side with color-coded differences. Free, private, no sign-up required.',
    url: 'https://www.texttools.one/text-diff',
  },
};

const faqs = [
  {
    question: 'How does the text diff comparison work?',
    answer: 'The tool compares your two texts line by line. Lines that exist only in the original are marked as removed (red), lines only in the modified version are marked as added (green), and lines that differ between versions are marked as changed (yellow).',
  },
  {
    question: 'Can I compare code with this tool?',
    answer: 'Yes. The diff tool uses a monospace font and preserves whitespace, making it suitable for comparing code, configuration files, and other structured text.',
  },
  {
    question: 'Is there a size limit for text comparison?',
    answer: 'There is no hard limit since all processing happens in your browser. However, very large texts (over 100,000 lines) may cause slower performance depending on your device.',
  },
  {
    question: 'Can I filter to show only the differences?',
    answer: 'Yes. Use the "Show only differences" checkbox to hide identical lines and focus on the additions, deletions, and changes between your two texts.',
  },
];

export default function TextDiffPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Text Diff</h1>
      <p className="text-text-light mb-8">Compare two texts side-by-side and instantly see additions, deletions, and changes highlighted in color.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <TextDiff />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use the Text Diff Tool</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Text Diff tool allows you to compare two pieces of text and instantly identify the differences between them. This is invaluable for proofreading, code review, document versioning, and quality assurance. The tool highlights additions, deletions, and modifications with intuitive color coding.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Paste your original text into the left text area labeled "Original Text." This serves as the baseline for comparison.
          </p>
          <p>
            <strong>Step 2:</strong> Paste the modified version into the right text area labeled "Modified Text." The comparison happens automatically as you type or paste.
          </p>
          <p>
            <strong>Step 3:</strong> Review the results in the comparison table below. Each line is color-coded: green for additions, red for removals, yellow for changes, and white for identical lines. Line numbers help you locate specific differences.
          </p>
          <p>
            <strong>Step 4:</strong> Use the "Show only differences" checkbox to filter out identical lines and focus on what changed. The statistics bar shows counts of added, removed, changed, and identical lines.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Common Use Cases</h3>
          <p>
            <strong>Code Review:</strong> Compare two versions of source code to see what changed between commits or branches. The monospace font and whitespace preservation make it easy to spot even subtle differences in indentation or spacing.
          </p>
          <p>
            <strong>Document Proofreading:</strong> Compare a draft with an edited version to review all changes made by an editor. This ensures no unintended modifications were introduced during the editing process.
          </p>
          <p>
            <strong>Configuration Comparison:</strong> Compare server configurations, environment files, or settings between different environments (development, staging, production) to identify discrepancies.
          </p>
          <p>
            <strong>Content Versioning:</strong> Track changes between different versions of articles, blog posts, or marketing copy. The visual diff makes it easy to see what was added, removed, or reworded.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Tips for Effective Comparison</h3>
          <p>
            For the most accurate comparison, ensure both texts use the same line ending format. The tool compares line by line, so restructuring paragraphs will show as multiple changes. Use the "Copy Diff" button to save the comparison results in a standard diff format that can be shared with colleagues.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/text-diff" />

      <AdSlot slot="footer" />
    </div>
  );
}
