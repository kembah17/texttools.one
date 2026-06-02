import type { Metadata } from 'next';
import WhitespaceRemover from '@/components/tools/WhitespaceRemover';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Whitespace Remover — Clean Up Spaces & Blank Lines Free',
  description: 'Remove extra spaces, trim lines, remove blank lines, convert tabs to spaces, and clean up whitespace. Free online whitespace remover tool.',
  alternates: { canonical: 'https://www.texttools.one/whitespace-remover' },
  openGraph: {
    title: 'Whitespace Remover — Clean Up Spaces & Blank Lines Free',
    description: 'Clean up extra whitespace, trim lines, and remove blank lines instantly. Free and private.',
    url: 'https://www.texttools.one/whitespace-remover',
  },
};

const faqs = [
  {
    question: 'What types of whitespace can this tool remove?',
    answer: 'The tool handles multiple types of whitespace: extra spaces (multiple consecutive spaces), leading spaces (at the start of lines), trailing spaces (at the end of lines), blank lines, tabs, and can even remove all whitespace entirely.',
  },
  {
    question: 'Can I apply multiple cleaning actions at once?',
    answer: 'Yes. Select multiple checkboxes to combine cleaning actions. For example, you can trim lines, remove blank lines, and convert tabs to spaces all in one click. The actions are applied in a logical order for best results.',
  },
  {
    question: 'What does "Remove All Whitespace" do?',
    answer: 'This option strips every whitespace character from your text, including spaces, tabs, newlines, and carriage returns. The result is a continuous string with no breaks. Use this carefully as it removes all formatting.',
  },
  {
    question: 'How does "Tabs to Spaces" conversion work?',
    answer: 'Each tab character is replaced with 4 spaces. This is the standard convention in most code editors and ensures consistent indentation when sharing text between different systems.',
  },
  {
    question: 'Will this tool change my line endings?',
    answer: 'The tool preserves your line ending format. It only modifies whitespace within and around lines based on the options you select. Line breaks between non-blank lines are always preserved.',
  },
];

export default function WhitespaceRemoverPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Whitespace Remover</h1>
      <p className="text-text-light mb-8">Clean up extra spaces, trim lines, remove blank lines, and fix whitespace issues in your text.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <WhitespaceRemover />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use the Whitespace Remover</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Whitespace Remover is a comprehensive text cleaning tool that helps you eliminate unwanted spaces, tabs, and blank lines from your text. Whether you are cleaning up copied text from a PDF, formatting code, or preparing data for import, this tool provides seven different cleaning actions that can be combined for thorough whitespace management.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Paste your text into the input area. The tool displays character, word, and line counts to help you understand the scope of your text.
          </p>
          <p>
            <strong>Step 2:</strong> Select the cleaning actions you want to apply. By default, "Remove Extra Spaces," "Trim Lines," and "Remove Blank Lines" are pre-selected as the most common cleaning operations. Click any checkbox to toggle it on or off.
          </p>
          <p>
            <strong>Step 3:</strong> Click "Clean Whitespace" to process your text. The tool applies all selected actions in a logical order and displays the cleaned result. A notification shows how many characters of whitespace were removed.
          </p>
          <p>
            <strong>Step 4:</strong> Copy the cleaned text using the "Copy" button or select it manually from the output area.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Understanding Each Cleaning Action</h3>
          <p>
            <strong>Remove Extra Spaces:</strong> Collapses multiple consecutive spaces into a single space. This is the most common whitespace issue, often occurring when copying text from PDFs, websites, or formatted documents.
          </p>
          <p>
            <strong>Trim Lines:</strong> Removes both leading and trailing whitespace from every line. This combines the effects of "Remove Leading Spaces" and "Remove Trailing Spaces" into one convenient option.
          </p>
          <p>
            <strong>Remove Blank Lines:</strong> Eliminates lines that contain only whitespace or are completely empty. This is useful for compacting text and removing unnecessary vertical spacing.
          </p>
          <p>
            <strong>Remove All Whitespace:</strong> The nuclear option — strips every space, tab, newline, and carriage return from your text. Use this when you need a continuous string with absolutely no whitespace, such as when preparing data for certain APIs or concatenating values.
          </p>
          <p>
            <strong>Remove Leading/Trailing Spaces:</strong> These targeted options let you remove whitespace from only the beginning or end of each line, preserving the other side. Useful for fixing indentation issues or cleaning up trailing spaces in code.
          </p>
          <p>
            <strong>Tabs to Spaces:</strong> Converts every tab character to four spaces. This standardizes indentation and ensures consistent formatting across different editors and platforms that may render tabs differently.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Common Use Cases</h3>
          <p>
            Text copied from PDFs often contains irregular spacing. Use "Remove Extra Spaces" and "Trim Lines" to clean it up. Code formatting benefits from "Tabs to Spaces" and "Remove Trailing Spaces." Data preparation for CSV imports benefits from "Trim Lines" and "Remove Blank Lines" to ensure clean, consistent rows.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/whitespace-remover" />

      <AdSlot slot="footer" />
    </div>
  );
}
