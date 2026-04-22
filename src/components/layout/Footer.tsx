import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

const tools = [
  { name: 'Case Converter', href: '/case-converter' },
  { name: 'Text Diff', href: '/text-diff' },
  { name: 'Remove Duplicates', href: '/remove-duplicates' },
  { name: 'Lorem Ipsum Generator', href: '/lorem-ipsum-generator' },
  { name: 'Text Reverser', href: '/text-reverser' },
  { name: 'Text Sorter', href: '/text-sorter' },
  { name: 'Find & Replace', href: '/find-and-replace' },
  { name: 'Whitespace Remover', href: '/whitespace-remover' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <AdSlot slot="footer" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-text mb-3">TextTools.one</h3>
            <p className="text-sm text-text-light leading-relaxed">
              Free online text manipulation tools. All processing happens in your browser — your text never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-text mb-3">Tools</h3>
            <ul className="space-y-2">
              {tools.map(tool => (
                <li key={tool.href}>
                  <Link href={tool.href} className="text-sm text-text-light hover:text-primary transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-text mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-text-light hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-sm text-text-light hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-light">
          &copy; {new Date().getFullYear()} TextTools.one. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
