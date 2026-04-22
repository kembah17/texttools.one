import Link from 'next/link';

interface Tool {
  name: string;
  href: string;
  description: string;
}

const allTools: Tool[] = [
  { name: 'Case Converter', href: '/case-converter', description: 'Convert text between uppercase, lowercase, title case, and more' },
  { name: 'Text Diff', href: '/text-diff', description: 'Compare two texts and highlight differences' },
  { name: 'Remove Duplicates', href: '/remove-duplicates', description: 'Remove duplicate lines from your text' },
  { name: 'Lorem Ipsum Generator', href: '/lorem-ipsum-generator', description: 'Generate placeholder text for your designs' },
  { name: 'Text Reverser', href: '/text-reverser', description: 'Reverse characters, words, or lines in your text' },
  { name: 'Text Sorter', href: '/text-sorter', description: 'Sort lines alphabetically, by length, or numerically' },
  { name: 'Find & Replace', href: '/find-and-replace', description: 'Find and replace text with regex support' },
  { name: 'Whitespace Remover', href: '/whitespace-remover', description: 'Clean up extra spaces and blank lines' },
];

interface RelatedToolsProps {
  currentTool: string;
}

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  const related = allTools.filter(t => t.href !== currentTool).slice(0, 4);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-text mb-6">Related Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map(tool => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block p-4 bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <h3 className="font-semibold text-primary mb-1">{tool.name}</h3>
            <p className="text-sm text-text-light">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
