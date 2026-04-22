'use client';

import { useState } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

export default function RemoveDuplicates() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimWhitespace, setTrimWhitespace] = useState(true);
  const [removedCount, setRemovedCount] = useState(0);

  const handleRemove = () => {
    const lines = input.split('\n');
    const seen = new Set<string>();
    const unique: string[] = [];
    let removed = 0;

    for (const line of lines) {
      let key = trimWhitespace ? line.trim() : line;
      if (!caseSensitive) key = key.toLowerCase();

      if (key === '' && trimWhitespace) {
        unique.push(line);
        continue;
      }

      if (!seen.has(key)) {
        seen.add(key);
        unique.push(trimWhitespace ? line.trim() : line);
      } else {
        removed++;
      }
    }

    setOutput(unique.join('\n'));
    setRemovedCount(removed);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="dup-input" className="block text-sm font-medium text-text mb-2">Input Text (one item per line)</label>
        <textarea
          id="dup-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here, one item per line...\nApple\nBanana\nApple\nCherry\nBanana"
          className="w-full h-48 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y font-mono text-sm"
        />
        <TextStats text={input} className="mt-2" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          Case sensitive
        </label>
        <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
          <input
            type="checkbox"
            checked={trimWhitespace}
            onChange={(e) => setTrimWhitespace(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          Trim whitespace
        </label>
        <button
          onClick={handleRemove}
          className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
        >
          Remove Duplicates
        </button>
      </div>

      {removedCount > 0 && (
        <div className="px-4 py-2 bg-success/10 border border-success/20 rounded-lg text-sm text-success font-medium">
          Removed {removedCount} duplicate line{removedCount !== 1 ? 's' : ''}
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="dup-output" className="block text-sm font-medium text-text">Output (unique lines)</label>
          <CopyButton text={output} />
        </div>
        <textarea
          id="dup-output"
          value={output}
          readOnly
          className="w-full h-48 p-4 bg-surface-alt border border-border rounded-lg text-text resize-y font-mono text-sm"
        />
        <TextStats text={output} className="mt-2" />
      </div>
    </div>
  );
}
