import type { Metadata } from 'next';
import CaseConverter from '@/components/tools/CaseConverter';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Case Converter — Change Text Case Online Free',
  description: 'Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and more. Free online case converter tool.',
  alternates: { canonical: 'https://texttools.one/case-converter' },
  openGraph: {
    title: 'Case Converter — Change Text Case Online Free',
    description: 'Convert text between 10 different case formats instantly. Free, private, no sign-up required.',
    url: 'https://texttools.one/case-converter',
  },
};

const faqs = [
  {
    question: 'What case formats does this converter support?',
    answer: 'Our case converter supports 10 formats: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case, dot.case, tOGGLE cASE, and aLtErNaTiNg CaSe.',
  },
  {
    question: 'Is my text sent to a server for processing?',
    answer: 'No. All text conversion happens entirely in your browser using JavaScript. Your text never leaves your device, ensuring complete privacy.',
  },
  {
    question: 'What is the difference between camelCase and snake_case?',
    answer: 'camelCase joins words together with each new word starting with a capital letter (e.g., myVariableName). snake_case joins words with underscores and uses all lowercase (e.g., my_variable_name). Both are common in programming.',
  },
  {
    question: 'Can I convert large amounts of text?',
    answer: 'Yes. Since the tool runs in your browser, it can handle large texts efficiently. There is no file size limit imposed by a server.',
  },
  {
    question: 'What is Title Case vs Sentence case?',
    answer: 'Title Case capitalizes the first letter of every word (e.g., "The Quick Brown Fox"). Sentence case only capitalizes the first letter of each sentence (e.g., "The quick brown fox").',
  },
];

export default function CaseConverterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Case Converter</h1>
      <p className="text-text-light mb-8">Convert your text between 10 different case formats instantly. Free, private, and works entirely in your browser.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <CaseConverter />
      </div>

      <AdSlot slot="below-results" />

      {/* How-to Guide */}
      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use the Case Converter</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Case Converter is a versatile text transformation tool that lets you instantly change the capitalization and formatting of any text. Whether you are a developer needing to convert variable names between camelCase and snake_case, a writer fixing capitalization issues, or a student formatting a title, this tool handles it all with a single click.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Paste or type your text into the input field at the top of the tool. You can enter anything from a single word to multiple paragraphs. The character, word, and line counts update automatically as you type.
          </p>
          <p>
            <strong>Step 2:</strong> Click any of the 10 case format buttons to convert your text. The output updates in real-time as you type, so you can see the result immediately. The active format button is highlighted in blue.
          </p>
          <p>
            <strong>Step 3:</strong> Review the converted text in the output area below the buttons. Use the "Copy" button to copy the result to your clipboard with one click.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Understanding Each Case Format</h3>
          <p>
            <strong>UPPERCASE</strong> converts every letter to its capital form. This is commonly used for acronyms, headings, or emphasis. <strong>lowercase</strong> does the opposite, converting everything to small letters — useful for normalizing data or creating URL slugs.
          </p>
          <p>
            <strong>Title Case</strong> capitalizes the first letter of every word, making it perfect for headlines, book titles, and proper nouns. <strong>Sentence case</strong> capitalizes only the first letter after a period, question mark, or exclamation point, which is the standard for body text.
          </p>
          <p>
            For developers, <strong>camelCase</strong> is the standard in JavaScript and Java for variable and function names. <strong>snake_case</strong> is preferred in Python and Ruby. <strong>kebab-case</strong> is used in CSS class names and URL slugs. <strong>dot.case</strong> appears in configuration files and object property paths.
          </p>
          <p>
            <strong>tOGGLE cASE</strong> inverts the case of every character — uppercase becomes lowercase and vice versa. This is useful for fixing text that was accidentally typed with Caps Lock on. <strong>aLtErNaTiNg CaSe</strong> alternates between lowercase and uppercase for each character, often used for stylistic or humorous effect in social media.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Tips for Best Results</h3>
          <p>
            When converting to programming formats like camelCase or snake_case, the tool automatically strips special characters and splits on whitespace. For best results with these formats, ensure your input text uses spaces between words. The tool preserves your original text in the input field, so you can try multiple formats without retyping.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/case-converter" />

      <AdSlot slot="footer" />
    </div>
  );
}
