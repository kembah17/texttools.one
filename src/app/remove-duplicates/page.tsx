import type { Metadata } from 'next';
import RemoveDuplicates from '@/components/tools/RemoveDuplicates';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Remove Duplicate Lines — Deduplicate Text Online Free',
  description: 'Remove duplicate lines from text with options for case-sensitive or case-insensitive matching and whitespace trimming. Free online tool.',
  alternates: { canonical: 'https://texttools.one/remove-duplicates' },
  openGraph: {
    title: 'Remove Duplicate Lines — Deduplicate Text Online Free',
    description: 'Remove duplicate lines from your text instantly. Case-sensitive or insensitive matching with whitespace trimming.',
    url: 'https://texttools.one/remove-duplicates',
  },
};

const faqs = [
  {
    question: 'How does the duplicate removal work?',
    answer: 'The tool reads your text line by line and keeps only the first occurrence of each unique line. Subsequent duplicates are removed while preserving the original order of unique lines.',
  },
  {
    question: 'What is the difference between case-sensitive and case-insensitive mode?',
    answer: 'In case-sensitive mode, "Apple" and "apple" are treated as different lines and both are kept. In case-insensitive mode, they are treated as duplicates and only the first occurrence is kept.',
  },
  {
    question: 'What does the trim whitespace option do?',
    answer: 'When enabled, leading and trailing spaces are removed from each line before comparing. This means "  hello  " and "hello" would be treated as duplicates.',
  },
  {
    question: 'Are blank lines removed?',
    answer: 'Blank lines are preserved by default. If you want to remove them, you can use our Whitespace Remover tool which has a dedicated "Remove Blank Lines" option.',
  },
];

export default function RemoveDuplicatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Remove Duplicate Lines</h1>
      <p className="text-text-light mb-8">Remove duplicate lines from your text with options for case sensitivity and whitespace handling.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <RemoveDuplicates />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Remove Duplicate Lines</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Remove Duplicates tool helps you clean up lists, data exports, and text files by eliminating repeated lines. Whether you are working with email lists, product catalogs, log files, or any line-based data, this tool quickly identifies and removes duplicates while preserving the original order of unique entries.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Paste your text into the input area. Each line is treated as a separate item for comparison. The tool works best with lists where each item is on its own line.
          </p>
          <p>
            <strong>Step 2:</strong> Configure your matching options. Enable "Case sensitive" if you want "Apple" and "apple" to be treated as different items. Enable "Trim whitespace" to ignore leading and trailing spaces when comparing lines.
          </p>
          <p>
            <strong>Step 3:</strong> Click the "Remove Duplicates" button. The tool processes your text and displays the deduplicated result in the output area. A notification shows how many duplicate lines were removed.
          </p>
          <p>
            <strong>Step 4:</strong> Copy the cleaned text using the "Copy" button, or select and copy it manually from the output area.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Common Use Cases</h3>
          <p>
            <strong>Email List Cleaning:</strong> When combining email lists from multiple sources, duplicates are inevitable. Paste your combined list and remove duplicates to ensure each email address appears only once, preventing duplicate sends in your campaigns.
          </p>
          <p>
            <strong>Data Processing:</strong> CSV exports and database dumps often contain duplicate rows. While this tool works on a line level, it is perfect for single-column data like names, IDs, URLs, or tags.
          </p>
          <p>
            <strong>Log Analysis:</strong> Server logs and error reports frequently contain repeated entries. Removing duplicates helps you identify unique errors and events without the noise of repetition.
          </p>
          <p>
            <strong>Keyword Research:</strong> When compiling keyword lists from multiple tools, duplicates are common. Clean your list to get an accurate count of unique keywords for your SEO strategy.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Tips for Best Results</h3>
          <p>
            For the most thorough deduplication, enable both "Trim whitespace" and disable "Case sensitive." This catches duplicates that differ only in spacing or capitalization. If you need to preserve case differences, keep case sensitivity enabled. The tool preserves the first occurrence of each unique line, maintaining your original ordering.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/remove-duplicates" />

      <AdSlot slot="footer" />
    </div>
  );
}
