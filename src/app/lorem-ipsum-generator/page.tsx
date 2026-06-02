import type { Metadata } from 'next';
import LoremIpsumGenerator from '@/components/tools/LoremIpsumGenerator';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator — Generate Placeholder Text Free',
  description: 'Generate lorem ipsum placeholder text — paragraphs, sentences, or words. Free online lorem ipsum generator for designers and developers.',
  alternates: { canonical: 'https://www.texttools.one/lorem-ipsum-generator' },
  openGraph: {
    title: 'Lorem Ipsum Generator — Generate Placeholder Text Free',
    description: 'Generate paragraphs, sentences, or words of lorem ipsum placeholder text instantly.',
    url: 'https://www.texttools.one/lorem-ipsum-generator',
  },
};

const faqs = [
  {
    question: 'What is Lorem Ipsum?',
    answer: 'Lorem Ipsum is placeholder text used in the printing and typesetting industry since the 1500s. It is derived from a work by Cicero written in 45 BC. Designers use it to fill layouts before final content is available.',
  },
  {
    question: 'Can I generate a specific number of words?',
    answer: 'Yes. Select "Words" from the dropdown, enter the number of words you need, and click Generate. You can generate anywhere from 1 to 100 words at a time.',
  },
  {
    question: 'Why start with "Lorem ipsum dolor sit amet"?',
    answer: 'The traditional opening phrase is a convention in the design industry. Our tool includes an option to start with this classic phrase or generate fully random text. Toggle the checkbox to control this behavior.',
  },
  {
    question: 'Is the generated text truly random?',
    answer: 'The text is pseudo-random, drawing from a pool of over 100 Latin-derived words commonly used in lorem ipsum text. Each generation produces a different combination while maintaining a natural-looking text flow.',
  },
];

export default function LoremIpsumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FaqSchema faqs={faqs} />

      <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Lorem Ipsum Generator</h1>
      <p className="text-text-light mb-8">Generate placeholder text for your designs, mockups, and prototypes. Choose paragraphs, sentences, or words.</p>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
        <LoremIpsumGenerator />
      </div>

      <AdSlot slot="below-results" />

      <section className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text mb-4">How to Use the Lorem Ipsum Generator</h2>
        <div className="text-text-light space-y-4 leading-relaxed">
          <p>
            The Lorem Ipsum Generator creates placeholder text that designers, developers, and content creators use to fill layouts before final content is ready. This tool generates realistic-looking Latin text that helps you visualize how your design will look with actual content, without the distraction of meaningful text.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">Step-by-Step Instructions</h3>
          <p>
            <strong>Step 1:</strong> Choose your generation type from the dropdown menu. Select "Paragraphs" for full blocks of text suitable for article layouts, "Sentences" for shorter text fills, or "Words" for precise word-count control.
          </p>
          <p>
            <strong>Step 2:</strong> Enter the number of items you want to generate. You can create between 1 and 100 paragraphs, sentences, or words. For typical web design mockups, 3-5 paragraphs is a good starting point.
          </p>
          <p>
            <strong>Step 3:</strong> Optionally toggle the "Start with Lorem ipsum dolor sit amet..." checkbox. When enabled, the generated text begins with the traditional opening phrase that designers and clients recognize as placeholder text.
          </p>
          <p>
            <strong>Step 4:</strong> Click "Generate" to create your placeholder text. The output appears below with character, word, and line statistics. Use the "Copy" button to copy the text to your clipboard.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">When to Use Lorem Ipsum</h3>
          <p>
            <strong>Web Design Mockups:</strong> Fill page layouts, card components, and content sections with realistic text to evaluate typography, spacing, and visual hierarchy before the actual content is written.
          </p>
          <p>
            <strong>Presentation Templates:</strong> Use placeholder text in slide decks and presentation templates to demonstrate layout options to clients or stakeholders.
          </p>
          <p>
            <strong>Print Design:</strong> Fill brochures, flyers, and magazine layouts with placeholder text to assess readability and visual balance before final copy is approved.
          </p>
          <p>
            <strong>Software Development:</strong> Populate database seed files, test fixtures, and UI components with realistic text data during development and testing phases.
          </p>
          <h3 className="text-xl font-semibold text-text mt-6 mb-2">About Lorem Ipsum Text</h3>
          <p>
            Lorem Ipsum has been the industry standard placeholder text since the 1500s when an unknown printer scrambled a passage from Cicero's "De Finibus Bonorum et Malorum" (The Extremes of Good and Evil), written in 45 BC. The text has survived five centuries of typesetting technology, from movable type to digital publishing, because it provides a natural-looking distribution of letters and word lengths that closely resembles real content.
          </p>
        </div>
      </section>

      <AdSlot slot="in-content" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </section>

      <RelatedTools currentTool="/lorem-ipsum-generator" />

      <AdSlot slot="footer" />
    </div>
  );
}
