'use client';

import { useState } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

type CaseType = 'upper' | 'lower' | 'title' | 'sentence' | 'camel' | 'snake' | 'kebab' | 'dot' | 'toggle' | 'alternating';

const caseOptions: { value: CaseType; label: string; desc: string }[] = [
  { value: 'upper', label: 'UPPERCASE', desc: 'ALL CAPS' },
  { value: 'lower', label: 'lowercase', desc: 'all lower' },
  { value: 'title', label: 'Title Case', desc: 'Each Word Capitalized' },
  { value: 'sentence', label: 'Sentence case', desc: 'First letter of each sentence' },
  { value: 'camel', label: 'camelCase', desc: 'camelCaseFormat' },
  { value: 'snake', label: 'snake_case', desc: 'snake_case_format' },
  { value: 'kebab', label: 'kebab-case', desc: 'kebab-case-format' },
  { value: 'dot', label: 'dot.case', desc: 'dot.case.format' },
  { value: 'toggle', label: 'tOGGLE cASE', desc: 'Inverts each character' },
  { value: 'alternating', label: 'aLtErNaTiNg', desc: 'Alternates upper/lower' },
];

function convertCase(text: string, type: CaseType): string {
  switch (type) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    case 'title':
      return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case 'sentence':
      return text.toLowerCase().replace(/(^\s*|[.!?]\s+)(\w)/g, (_, p, c) => p + c.toUpperCase());
    case 'camel': {
      const words = text.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().split(/\s+/);
      return words.map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    }
    case 'snake':
      return text.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().split(/\s+/).map(w => w.toLowerCase()).join('_');
    case 'kebab':
      return text.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().split(/\s+/).map(w => w.toLowerCase()).join('-');
    case 'dot':
      return text.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().split(/\s+/).map(w => w.toLowerCase()).join('.');
    case 'toggle':
      return text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    case 'alternating':
      return text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
    default:
      return text;
  }
}

export default function CaseConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [activeCase, setActiveCase] = useState<CaseType>('upper');

  const handleConvert = (type: CaseType) => {
    setActiveCase(type);
    setOutput(convertCase(input, type));
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="case-input" className="block text-sm font-medium text-text mb-2">Input Text</label>
        <textarea
          id="case-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOutput(convertCase(e.target.value, activeCase));
          }}
          placeholder="Type or paste your text here..."
          className="w-full h-40 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y"
          aria-label="Input text for case conversion"
        />
        <TextStats text={input} className="mt-2" />
      </div>

      <div className="flex flex-wrap gap-2">
        {caseOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => handleConvert(opt.value)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeCase === opt.value
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface border border-border text-text hover:bg-primary-light hover:text-primary'
            }`}
            title={opt.desc}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="case-output" className="block text-sm font-medium text-text">Output</label>
          <CopyButton text={output} />
        </div>
        <textarea
          id="case-output"
          value={output}
          readOnly
          className="w-full h-40 p-4 bg-surface-alt border border-border rounded-lg text-text resize-y"
          aria-label="Converted text output"
        />
        <TextStats text={output} className="mt-2" />
      </div>
    </div>
  );
}
