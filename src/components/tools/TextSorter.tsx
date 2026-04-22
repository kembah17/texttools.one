'use client';

import { useState } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

type SortMode = 'az' | 'za' | 'length-asc' | 'length-desc' | 'numeric' | 'random';

export default function TextSorter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [removeBlanks, setRemoveBlanks] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [activeSort, setActiveSort] = useState<SortMode>('az');

  const handleSort = (mode: SortMode) => {
    setActiveSort(mode);
    let lines = input.split('\n');

    if (removeBlanks) {
      lines = lines.filter(l => l.trim() !== '');
    }

    switch (mode) {
      case 'az':
        lines.sort((a, b) => {
          const aa = caseSensitive ? a : a.toLowerCase();
          const bb = caseSensitive ? b : b.toLowerCase();
          return aa.localeCompare(bb);
        });
        break;
      case 'za':
        lines.sort((a, b) => {
          const aa = caseSensitive ? a : a.toLowerCase();
          const bb = caseSensitive ? b : b.toLowerCase();
          return bb.localeCompare(aa);
        });
        break;
      case 'length-asc':
        lines.sort((a, b) => a.length - b.length);
        break;
      case 'length-desc':
        lines.sort((a, b) => b.length - a.length);
        break;
      case 'numeric':
        lines.sort((a, b) => {
          const na = parseFloat(a) || 0;
          const nb = parseFloat(b) || 0;
          return na - nb;
        });
        break;
      case 'random':
        for (let i = lines.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [lines[i], lines[j]] = [lines[j], lines[i]];
        }
        break;
    }

    setOutput(lines.join('\n'));
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="sort-input" className="block text-sm font-medium text-text mb-2">Input Text (one item per line)</label>
        <textarea
          id="sort-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to sort, one item per line..."
          className="w-full h-40 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y font-mono text-sm"
        />
        <TextStats text={input} className="mt-2" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
          <input
            type="checkbox"
            checked={removeBlanks}
            onChange={(e) => setRemoveBlanks(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          Remove blank lines
        </label>
        <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          Case sensitive
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { value: 'az' as SortMode, label: 'A → Z' },
          { value: 'za' as SortMode, label: 'Z → A' },
          { value: 'length-asc' as SortMode, label: 'Shortest First' },
          { value: 'length-desc' as SortMode, label: 'Longest First' },
          { value: 'numeric' as SortMode, label: 'Numeric' },
          { value: 'random' as SortMode, label: '🎲 Shuffle' },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => handleSort(opt.value)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeSort === opt.value && output
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface border border-border text-text hover:bg-primary-light hover:text-primary'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="sort-output" className="block text-sm font-medium text-text">Sorted Output</label>
          <CopyButton text={output} />
        </div>
        <textarea
          id="sort-output"
          value={output}
          readOnly
          className="w-full h-40 p-4 bg-surface-alt border border-border rounded-lg text-text resize-y font-mono text-sm"
        />
        <TextStats text={output} className="mt-2" />
      </div>
    </div>
  );
}
