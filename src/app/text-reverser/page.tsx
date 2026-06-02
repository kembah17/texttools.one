import type { Metadata } from 'next';
import TextReverser from '@/components/tools/TextReverser';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Text Reverser — Reverse Text, Words & Lines Online Free',
  description: 'Reverse text by characters, words, or lines instantly. Free online text reverser tool — no sign-up, no data collection.',
  alternates: { canonical: 'https://www.texttools.one/text-reverser' },
  openGraph: {
    title: 'Text Reverser — Reverse Text, Words & Lines Online Free',
    description: 'Reverse text by characters, words, or lines instantly. Free and private.',
    url: 'https://www.texttools.one/text-reverser',
  },
};

const faqs = [
  {
    question: 'What is the difference between reversing characters, words, and lines?',
    answer: 'Reversing characters flips every character in the entire text (e.g., "hello" becomes "olleh"). Reversing words keeps each word intact but reverses their order on each line (e.g., "hello world" becomes "world hello"). Reversing lines keeps each line intact but reverses the order of lines.',
  },
  {
    question: 'Can I use this to create mirror text?',
    answer: 'The character reverse mode creates a mirror of your text by reversing the order of all characters. This is useful for creating backwards text, palindrome checking, and text puzzles.',
  },
  {
    question: 'Does reversing preserve spaces and punctuation?',
    answer: 'Yes. All characters including spaces, punctuation, and special characters are preserved in their reversed positions. The tool does not modify or remove any characters.',
  },
  {
    question: 'Can I reverse text in languages other than English?',
    answer: 'Yes. The tool works with any Unicode text including Arabic, Chinese, Japanese, Korean, Cyrillic, and other scripts. However, some complex scripts with combining characters may not display correctly when reversed.',
  },
];

export default function TextReverserPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Text Reverser</h1>
      <p className="text-text-light mb-8">Reverse your text by characters, words, or lines. Instant results with no server processing.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <TextReverser />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use the Text Reverser</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Text Reverser is a simple yet powerful tool that lets you flip text in three different ways. Whether you need to reverse individual characters for a text puzzle, reorder words in a sentence, or flip the order of lines in a document, this tool handles it instantly in your browser.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Enter or paste your text into the input area. The tool accepts any amount of text, from a single word to entire documents.
          </p>
          <p>
            <strong>Step 2:</strong> Choose your reversal mode by clicking one of the three buttons: "Reverse Characters" flips every character, "Reverse Words" reverses word order on each line, and "Reverse Lines" reverses the order of all lines.
          </p>
          <p>
            <strong>Step 3:</strong> The reversed text appears immediately in the output area. Click the "Copy" button to copy the result to your clipboard.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Understanding Reversal Modes</h3>
          <p>
            <strong>Reverse Characters</strong> is the most common reversal type. It takes your entire text and flips every character from end to start. For example, "Hello World" becomes "dlroW olleH". This is useful for creating backwards text, checking palindromes, and text-based puzzles or games.
          </p>
          <p>
            <strong>Reverse Words</strong> keeps each word intact but changes their order within each line. "The quick brown fox" becomes "fox brown quick The". This mode processes each line independently, so multi-line text has each line reversed separately. This is useful for reordering lists, creating word puzzles, or restructuring sentences.
          </p>
          <p>
            <strong>Reverse Lines</strong> keeps each line exactly as it is but reverses the order of all lines. The last line becomes the first, and the first becomes the last. This is particularly useful for reversing ordered lists, flipping log files to show newest entries first, or reordering any line-based data.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Practical Applications</h3>
          <p>
            Developers use text reversal for algorithm practice, string manipulation testing, and data transformation. Writers and puzzle creators use it for word games and creative writing exercises. Data analysts use line reversal to flip the order of CSV rows or log entries. Students use it to check palindromes and practice string operations.
          </p>
          <p>
            The tool preserves all formatting, including spaces, tabs, and special characters. Unicode text in any language is fully supported, making it versatile for international use cases.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/text-reverser" />

      <AdSlot slot="footer" />
    </div>
  );
}
