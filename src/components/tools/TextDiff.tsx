'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

interface DiffLine {
  type: 'same' | 'added' | 'removed' | 'changed';
  left: string;
  right: string;
  lineNum: number;
}

function computeDiff(textA: string, textB: string): DiffLine[] {
  const linesA = textA.split('\n');
  const linesB = textB.split('\n');
  const maxLen = Math.max(linesA.length, linesB.length);
  const result: DiffLine[] = [];

  for (let i = 0; i < maxLen; i++) {
    const left = i < linesA.length ? linesA[i] : '';
    const right = i < linesB.length ? linesB[i] : '';

    if (i >= linesA.length) {
      result.push({ type: 'added', left: '', right, lineNum: i + 1 });
    } else if (i >= linesB.length) {
      result.push({ type: 'removed', left, right: '', lineNum: i + 1 });
    } else if (left === right) {
      result.push({ type: 'same', left, right, lineNum: i + 1 });
    } else {
      result.push({ type: 'changed', left, right, lineNum: i + 1 });
    }
  }

  return result;
}

export default function TextDiff() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [showOnlyDiffs, setShowOnlyDiffs] = useState(false);

  const diff = useMemo(() => computeDiff(textA, textB), [textA, textB]);
  const filteredDiff = showOnlyDiffs ? diff.filter(d => d.type !== 'same') : diff;

  const stats = useMemo(() => {
    const added = diff.filter(d => d.type === 'added').length;
    const removed = diff.filter(d => d.type === 'removed').length;
    const changed = diff.filter(d => d.type === 'changed').length;
    const same = diff.filter(d => d.type === 'same').length;
    return { added, removed, changed, same };
  }, [diff]);

  const diffReport = filteredDiff.map(d => {
    if (d.type === 'added') return `+ ${d.right}`;
    if (d.type === 'removed') return `- ${d.left}`;
    if (d.type === 'changed') return `- ${d.left}\n+ ${d.right}`;
    return `  ${d.left}`;
  }).join('\n');

  const colorMap = {
    same: '',
    added: 'bg-green-100 dark:bg-green-900/30',
    removed: 'bg-red-100 dark:bg-red-900/30',
    changed: 'bg-yellow-100 dark:bg-yellow-900/30',
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="diff-a" className="block text-sm font-medium text-text mb-2">Original Text</label>
          <textarea
            id="diff-a"
            value={textA}
            onChange={(e) => setTextA(e.target.value)}
            placeholder="Paste original text here..."
            className="w-full h-48 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y font-mono text-sm"
          />
        </div>
        <div>
          <label htmlFor="diff-b" className="block text-sm font-medium text-text mb-2">Modified Text</label>
          <textarea
            id="diff-b"
            value={textB}
            onChange={(e) => setTextB(e.target.value)}
            placeholder="Paste modified text here..."
            className="w-full h-48 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y font-mono text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-green-800 dark:text-green-300">+{stats.added} added</span>
          <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded text-red-800 dark:text-red-300">-{stats.removed} removed</span>
          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded text-yellow-800 dark:text-yellow-300">~{stats.changed} changed</span>
          <span className="text-text-light">{stats.same} identical</span>
        </div>
        <label className="flex items-center gap-2 text-sm text-text-light cursor-pointer">
          <input
            type="checkbox"
            checked={showOnlyDiffs}
            onChange={(e) => setShowOnlyDiffs(e.target.checked)}
            className="rounded border-border"
          />
          Show only differences
        </label>
        <CopyButton text={diffReport} label="Copy Diff" />
      </div>

      {(textA || textB) && (
        <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-[auto_1fr_1fr] text-sm font-mono">
            <div className="bg-surface-alt px-3 py-2 text-text-light font-semibold border-b border-border">#</div>
            <div className="px-3 py-2 font-semibold text-text border-b border-l border-border">Original</div>
            <div className="px-3 py-2 font-semibold text-text border-b border-l border-border">Modified</div>
            {filteredDiff.map((d, i) => (
              <div key={i} className="contents">
                <div className={`px-3 py-1 text-text-light border-b border-border text-right ${colorMap[d.type]}`}>{d.lineNum}</div>
                <div className={`px-3 py-1 border-b border-l border-border whitespace-pre-wrap break-all ${d.type === 'removed' || d.type === 'changed' ? 'text-red-700 dark:text-red-400 line-through' : 'text-text'} ${colorMap[d.type]}`}>
                  {d.left || '\u00A0'}
                </div>
                <div className={`px-3 py-1 border-b border-l border-border whitespace-pre-wrap break-all ${d.type === 'added' || d.type === 'changed' ? 'text-green-700 dark:text-green-400' : 'text-text'} ${colorMap[d.type]}`}>
                  {d.right || '\u00A0'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
