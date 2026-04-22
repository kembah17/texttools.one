'use client';

import { useState } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

type CleanAction = 'extra-spaces' | 'trim-lines' | 'blank-lines' | 'all-whitespace' | 'leading' | 'trailing' | 'tabs-to-spaces';

const actions: { value: CleanAction; label: string; desc: string }[] = [
  { value: 'extra-spaces', label: 'Remove Extra Spaces', desc: 'Collapse multiple spaces into one' },
  { value: 'trim-lines', label: 'Trim Lines', desc: 'Remove leading/trailing spaces from each line' },
  { value: 'blank-lines', label: 'Remove Blank Lines', desc: 'Remove empty lines' },
  { value: 'all-whitespace', label: 'Remove All Whitespace', desc: 'Strip every space, tab, newline' },
  { value: 'leading', label: 'Remove Leading Spaces', desc: 'Remove spaces at start of each line' },
  { value: 'trailing', label: 'Remove Trailing Spaces', desc: 'Remove spaces at end of each line' },
  { value: 'tabs-to-spaces', label: 'Tabs → Spaces', desc: 'Convert tabs to spaces' },
];

function cleanText(text: string, action: CleanAction): string {
  switch (action) {
    case 'extra-spaces':
      return text.replace(/ {2,}/g, ' ');
    case 'trim-lines':
      return text.split('\n').map(l => l.trim()).join('\n');
    case 'blank-lines':
      return text.split('\n').filter(l => l.trim() !== '').join('\n');
    case 'all-whitespace':
      return text.replace(/\s/g, '');
    case 'leading':
      return text.split('\n').map(l => l.replace(/^\s+/, '')).join('\n');
    case 'trailing':
      return text.split('\n').map(l => l.replace(/\s+$/, '')).join('\n');
    case 'tabs-to-spaces':
      return text.replace(/\t/g, '    ');
    default:
      return text;
  }
}

export default function WhitespaceRemover() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selected, setSelected] = useState<Set<CleanAction>>(new Set(['extra-spaces', 'trim-lines', 'blank-lines']));

  const toggleAction = (action: CleanAction) => {
    const next = new Set(selected);
    if (next.has(action)) {
      next.delete(action);
    } else {
      next.add(action);
    }
    setSelected(next);
  };

  const handleClean = () => {
    let result = input;
    const order: CleanAction[] = ['tabs-to-spaces', 'extra-spaces', 'leading', 'trailing', 'trim-lines', 'blank-lines', 'all-whitespace'];
    for (const action of order) {
      if (selected.has(action)) {
        result = cleanText(result, action);
      }
    }
    setOutput(result);
  };

  const removedChars = input.length - output.length;

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="ws-input" className="block text-sm font-medium text-text mb-2">Input Text</label>
        <textarea
          id="ws-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text with extra whitespace here..."
          className="w-full h-40 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y font-mono text-sm"
        />
        <TextStats text={input} className="mt-2" />
      </div>

      <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
        <p className="text-sm font-medium text-text mb-3">Select cleaning actions:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {actions.map(a => (
            <label
              key={a.value}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                selected.has(a.value) ? 'bg-primary-light border border-primary/30' : 'hover:bg-surface-alt'
              }`}
            >
              <input
                type="checkbox"
                checked={selected.has(a.value)}
                onChange={() => toggleAction(a.value)}
                className="mt-0.5 rounded border-border text-primary focus:ring-primary"
              />
              <div>
                <span className="text-sm font-medium text-text">{a.label}</span>
                <p className="text-xs text-text-light">{a.desc}</p>
              </div>
            </label>
          ))}
        </div>

        <button
          onClick={handleClean}
          className="mt-4 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
        >
          Clean Whitespace
        </button>
      </div>

      {output && removedChars > 0 && (
        <div className="px-4 py-2 bg-success/10 border border-success/20 rounded-lg text-sm text-success font-medium">
          Removed {removedChars} character{removedChars !== 1 ? 's' : ''} of whitespace
        </div>
      )}

      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="ws-output" className="block text-sm font-medium text-text">Cleaned Output</label>
            <CopyButton text={output} />
          </div>
          <textarea
            id="ws-output"
            value={output}
            readOnly
            className="w-full h-40 p-4 bg-surface-alt border border-border rounded-lg text-text resize-y font-mono text-sm"
          />
          <TextStats text={output} className="mt-2" />
        </div>
      )}
    </div>
  );
}
