'use client';

import { useState } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

type ReverseMode = 'characters' | 'words' | 'lines';

export default function TextReverser() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<ReverseMode>('characters');

  const handleReverse = (m: ReverseMode) => {
    setMode(m);
    let result = '';
    switch (m) {
      case 'characters':
        result = input.split('').reverse().join('');
        break;
      case 'words':
        result = input.split('\n').map(line => line.split(/\s+/).reverse().join(' ')).join('\n');
        break;
      case 'lines':
        result = input.split('\n').reverse().join('\n');
        break;
    }
    setOutput(result);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="rev-input" className="block text-sm font-medium text-text mb-2">Input Text</label>
        <textarea
          id="rev-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-40 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y"
        />
        <TextStats text={input} className="mt-2" />
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          { value: 'characters' as ReverseMode, label: 'Reverse Characters', icon: '🔤' },
          { value: 'words' as ReverseMode, label: 'Reverse Words', icon: '📝' },
          { value: 'lines' as ReverseMode, label: 'Reverse Lines', icon: '📋' },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => handleReverse(opt.value)}
            className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              mode === opt.value && output
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface border border-border text-text hover:bg-primary-light hover:text-primary'
            }`}
          >
            {opt.icon} {opt.label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="rev-output" className="block text-sm font-medium text-text">Reversed Output</label>
          <CopyButton text={output} />
        </div>
        <textarea
          id="rev-output"
          value={output}
          readOnly
          className="w-full h-40 p-4 bg-surface-alt border border-border rounded-lg text-text resize-y"
        />
        <TextStats text={output} className="mt-2" />
      </div>
    </div>
  );
}
