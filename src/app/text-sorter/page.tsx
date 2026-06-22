import type { Metadata } from 'next';
import TextSorter from '@/components/tools/TextSorter';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Text Sorter — Sort Lines Alphabetically Online Free',
  description: 'Sort text lines alphabetically (A-Z, Z-A), by length, numerically, or shuffle randomly. Free online text sorting tool.',
  alternates: { canonical: 'https://texttools.one/text-sorter' },
  openGraph: {
    title: 'Text Sorter — Sort Lines Alphabetically Online Free',
    description: 'Sort text lines alphabetically, by length, numerically, or randomly. Free and private.',
    url: 'https://texttools.one/text-sorter',
  },
};

const faqs = [
  {
    question: 'What sorting methods are available?',
    answer: 'The tool offers six sorting methods: alphabetical A-Z, reverse alphabetical Z-A, shortest to longest line, longest to shortest line, numeric sort (by the number at the start of each line), and random shuffle.',
  },
  {
    question: 'How does numeric sorting work?',
    answer: 'Numeric sort extracts the first number found on each line and sorts by that value. Lines without numbers are treated as having a value of 0. This is useful for sorting numbered lists, prices, or any data with leading numbers.',
  },
  {
    question: 'Can I remove blank lines while sorting?',
    answer: 'Yes. Enable the "Remove blank lines" checkbox before sorting. This filters out any empty lines from the result, giving you a clean sorted list.',
  },
  {
    question: 'Is the sorting case-sensitive by default?',
    answer: 'No, sorting is case-insensitive by default, meaning "apple" and "Apple" are treated equally. You can enable case-sensitive sorting with the checkbox if you need uppercase letters to sort before lowercase.',
  },
];

export default function TextSorterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Text Sorter</h1>
      <p className="text-text-light mb-8">Sort lines of text alphabetically, by length, numerically, or shuffle them randomly.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <TextSorter />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use the Text Sorter</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Text Sorter organizes lines of text in various orders with a single click. Whether you need to alphabetize a list of names, sort items by length, arrange numbers in order, or randomize a list for a drawing, this tool provides instant results without any server processing.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Paste or type your text into the input area. Each line is treated as a separate item to be sorted. For best results, ensure each item you want to sort is on its own line.
          </p>
          <p>
            <strong>Step 2:</strong> Configure your sorting preferences. Check "Remove blank lines" to eliminate empty lines from the output. Check "Case sensitive" if you want uppercase letters to sort differently from lowercase.
          </p>
          <p>
            <strong>Step 3:</strong> Click one of the six sort buttons to sort your text. The result appears immediately in the output area. You can try different sort methods without re-entering your text.
          </p>
          <p>
            <strong>Step 4:</strong> Copy the sorted result using the "Copy" button, or select and copy it manually.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Sort Methods Explained</h3>
          <p>
            <strong>A → Z (Alphabetical):</strong> Sorts lines in ascending alphabetical order. This is the most common sorting method, perfect for organizing name lists, glossaries, bibliographies, and any text-based data.
          </p>
          <p>
            <strong>Z → A (Reverse Alphabetical):</strong> Sorts lines in descending alphabetical order. Useful when you need reverse ordering or want to find items at the end of the alphabet quickly.
          </p>
          <p>
            <strong>Shortest First / Longest First:</strong> Sorts lines by their character length. This is useful for organizing items by complexity, finding the shortest or longest entries in a dataset, or creating visually balanced lists.
          </p>
          <p>
            <strong>Numeric:</strong> Sorts lines by the first number found on each line. This handles integers and decimals, making it perfect for sorting prices, scores, measurements, or any numbered data.
          </p>
          <p>
            <strong>Shuffle:</strong> Randomly reorders all lines using the Fisher-Yates algorithm for true randomness. Use this for random selection, creating randomized quizzes, or shuffling any ordered list.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Tips for Best Results</h3>
          <p>
            When sorting mixed-case text alphabetically, keep case sensitivity disabled for natural ordering. Enable it only when you specifically need ASCII-based sorting where all uppercase letters come before lowercase. For numeric sorting, ensure numbers appear at the beginning of each line for accurate results. The shuffle function produces a different random order each time you click it.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/text-sorter" />

      <AdSlot slot="footer" />
    </div>
  );
}
