import type { Metadata } from 'next';
import FindAndReplace from '@/components/tools/FindAndReplace';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Find and Replace — Search & Replace Text Online Free',
  description: 'Find and replace text with regex support, case sensitivity toggle, and match highlighting. Free online find and replace tool.',
  alternates: { canonical: 'https://texttools.one/find-and-replace' },
  openGraph: {
    title: 'Find and Replace — Search & Replace Text Online Free',
    description: 'Find and replace text with regex support and live match highlighting. Free and private.',
    url: 'https://texttools.one/find-and-replace',
  },
};

const faqs = [
  {
    question: 'Does this tool support regular expressions?',
    answer: 'Yes. Enable the "Use regex" checkbox to use JavaScript regular expressions in the find field. This allows powerful pattern matching like \\d+ for numbers, [A-Z] for uppercase letters, and complex patterns with groups and quantifiers.',
  },
  {
    question: 'What does the "Replace all" option do?',
    answer: 'When "Replace all" is enabled, every occurrence of the search term is replaced. When disabled, only the first occurrence is replaced. This is useful when you want to change just the first instance of a word.',
  },
  {
    question: 'How does match highlighting work?',
    answer: 'As you type in the find field, all matches in your input text are highlighted in yellow in the preview area. This helps you verify your search pattern is matching the correct text before performing the replacement.',
  },
  {
    question: 'Can I use capture groups in regex replacements?',
    answer: 'Yes. When regex mode is enabled, you can use capture groups in the find pattern with parentheses and reference them in the replacement with $1, $2, etc. For example, find "(\\w+) (\\w+)" and replace with "$2 $1" to swap two words.',
  },
  {
    question: 'Is there a limit to the text size?',
    answer: 'There is no server-imposed limit since all processing happens in your browser. Very large texts (millions of characters) may be slower depending on your device and the complexity of your regex pattern.',
  },
];

export default function FindAndReplacePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Find and Replace</h1>
      <p className="text-text-light mb-8">Search and replace text with regex support, case sensitivity options, and live match highlighting.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <FindAndReplace />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use Find and Replace</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Find and Replace tool is a powerful text search and substitution utility that supports both plain text and regular expression patterns. With live match highlighting, you can see exactly what your search pattern matches before making any changes. This tool is essential for developers, writers, and data professionals who need precise text manipulation.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Paste or type your text into the main input area at the top. This is the text that will be searched and modified.
          </p>
          <p>
            <strong>Step 2:</strong> Enter your search term in the "Find" field. As you type, the preview area highlights all matches in yellow, and the match count updates in real-time.
          </p>
          <p>
            <strong>Step 3:</strong> Enter your replacement text in the "Replace with" field. This is what each match will be replaced with. Leave it empty to delete matches.
          </p>
          <p>
            <strong>Step 4:</strong> Configure your options: enable "Use regex" for pattern matching, "Case sensitive" for exact case matching, and "Replace all" to replace every occurrence or just the first one.
          </p>
          <p>
            <strong>Step 5:</strong> Click "Replace" to perform the substitution. The result appears in the output area where you can copy it.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Using Regular Expressions</h3>
          <p>
            Regular expressions (regex) are powerful patterns for matching text. Common patterns include: <code>\d+</code> matches one or more digits, <code>\w+</code> matches word characters, <code>[A-Z]</code> matches uppercase letters, <code>^</code> matches the start of a line, and <code>$</code> matches the end. You can combine these with quantifiers like <code>*</code> (zero or more), <code>+</code> (one or more), and <code>?</code> (optional).
          </p>
          <p>
            Capture groups using parentheses let you reference matched text in your replacement. For example, finding <code>(\d{3})-(\d{4})</code> and replacing with <code>($1) $2</code> transforms "555-1234" into "(555) 1234".
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Common Use Cases</h3>
          <p>
            <strong>Data Cleaning:</strong> Remove unwanted characters, standardize formats, or fix common typos across large texts. <strong>Code Refactoring:</strong> Rename variables, update function calls, or modify patterns across source code. <strong>Content Editing:</strong> Replace outdated terms, fix formatting issues, or update references throughout documents.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/find-and-replace" />

      <AdSlot slot="footer" />
    </div>
  );
}
