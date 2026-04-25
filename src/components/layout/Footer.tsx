import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

const tools = [
  { name: 'Case Converter', href: '/case-converter', icon: '🔄' },
  { name: 'Text Diff', href: '/text-diff', icon: '📊' },
  { name: 'Remove Duplicates', href: '/remove-duplicates', icon: '🧹' },
  { name: 'Lorem Ipsum Generator', href: '/lorem-ipsum-generator', icon: '📝' },
  { name: 'Text Reverser', href: '/text-reverser', icon: '↩️' },
  { name: 'Text Sorter', href: '/text-sorter', icon: '📋' },
  { name: 'Find & Replace', href: '/find-and-replace', icon: '🔍' },
  { name: 'Whitespace Remover', href: '/whitespace-remover', icon: '✂️' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }} className="mt-16">
      <AdSlot slot="footer" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>TextTools.one</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footer-muted)' }}>
              Free online text manipulation tools. All processing happens in your browser — your text never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>Tools</h3>
            <ul className="space-y-2">
              {tools.map(tool => (
                <li key={tool.href}>
                  <Link href={tool.href} className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                    {tool.icon} {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>About</Link></li>
              <li><Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid var(--color-footer-border)', color: 'var(--color-footer-muted)' }}>
          &copy; {new Date().getFullYear()} TextTools.one. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
