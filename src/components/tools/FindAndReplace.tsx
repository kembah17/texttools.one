'use client';

import { useState, useMemo, useCallback } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default function FindAndReplace() {
  const [input, setInput] = useState('');
  const [find, setFind] = useState('');
  const [replace, setReplace] = useState('');
  const [useRegex, setUseRegex] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [globalMatch, setGlobalMatch] = useState(true);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const matchCount = useMemo(() => {
    if (!find || !input) return 0;
    try {
      if (useRegex) {
        const flags = (globalMatch ? 'g' : '') + (caseSensitive ? '' : 'i');
        const regex = new RegExp(find, flags);
        const matches = input.match(regex);
        return matches ? matches.length : 0;
      } else {
        const searchStr = caseSensitive ? find : find.toLowerCase();
        const sourceStr = caseSensitive ? input : input.toLowerCase();
        let count = 0;
        let pos = 0;
        while ((pos = sourceStr.indexOf(searchStr, pos)) !== -1) {
          count++;
          pos += searchStr.length;
        }
        return count;
      }
    } catch {
      return 0;
    }
  }, [input, find, useRegex, caseSensitive, globalMatch]);

  const handleReplace = useCallback(() => {
    setError('');
    if (!find) {
      setOutput(input);
      return;
    }

    try {
      if (useRegex) {
        const flags = (globalMatch ? 'g' : '') + (caseSensitive ? '' : 'i');
        const regex = new RegExp(find, flags);
        setOutput(input.replace(regex, replace));
      } else {
        if (globalMatch) {
          const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const flags = caseSensitive ? 'g' : 'gi';
          const regex = new RegExp(escaped, flags);
          setOutput(input.replace(regex, replace));
        } else {
          if (caseSensitive) {
            const idx = input.indexOf(find);
            if (idx !== -1) {
              setOutput(input.slice(0, idx) + replace + input.slice(idx + find.length));
            } else {
              setOutput(input);
            }
          } else {
            const idx = input.toLowerCase().indexOf(find.toLowerCase());
            if (idx !== -1) {
              setOutput(input.slice(0, idx) + replace + input.slice(idx + find.length));
            } else {
              setOutput(input);
            }
          }
        }
      }
    } catch (e) {
      setError(`Invalid regex: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }, [input, find, replace, useRegex, caseSensitive, globalMatch]);

  const highlightedHtml = useMemo(() => {
    if (!find || !input) return escapeHtml(input);
    try {
      let regex: RegExp;
      if (useRegex) {
        const flags = 'g' + (caseSensitive ? '' : 'i');
        regex = new RegExp(find, flags);
      } else {
        const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const flags = 'g' + (caseSensitive ? '' : 'i');
        regex = new RegExp(escaped, flags);
      }
      // Split by matches and escape each part to prevent XSS
      const parts: string[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      const re = new RegExp(regex.source, regex.flags);
      while ((match = re.exec(input)) !== null) {
        parts.push(escapeHtml(input.slice(lastIndex, match.index)));
        parts.push('<mark class="bg-yellow-300 dark:bg-yellow-600 text-text-dark px-0.5 rounded">' + escapeHtml(match[0]) + '</mark>');
        lastIndex = match.index + match[0].length;
        if (match[0].length === 0) {
          re.lastIndex++;
        }
      }
      parts.push(escapeHtml(input.slice(lastIndex)));
      return parts.join('');
    } catch {
      return escapeHtml(input);
    }
  }, [input, find, useRegex, caseSensitive]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="far-input" className="block text-sm font-medium text-text mb-2">Input Text</label>
        <textarea
          id="far-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full h-40 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary resize-y"
        />
        <TextStats text={input} className="mt-2" />
      </div>

      {find && input && (
        <div className="p-4 bg-surface border border-border rounded-lg shadow-sm">
          <p className="text-sm font-medium text-text mb-2">Preview (matches highlighted):</p>
          <div
            className="text-sm text-text whitespace-pre-wrap break-words font-mono"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </div>
      )}

      <div className="bg-surface border border-border rounded-lg p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="far-find" className="block text-sm font-medium text-text mb-2">Find</label>
            <input
              id="far-find"
              type="text"
              value={find}
              onChange={(e) => setFind(e.target.value)}
              placeholder={useRegex ? 'Regular expression...' : 'Text to find...'}
              className="w-full p-2.5 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary font-mono text-sm"
            />
          </div>
          <div>
            <label htmlFor="far-replace" className="block text-sm font-medium text-text mb-2">Replace with</label>
            <input
              id="far-replace"
              type="text"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
              placeholder="Replacement text..."
              className="w-full p-2.5 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-primary font-mono text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
            <input
              type="checkbox"
              checked={useRegex}
              onChange={(e) => setUseRegex(e.target.checked)}
              className="rounded border-border text-primary focus:ring-primary"
            />
            Use regex
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
          <label className="flex items-center gap-2 text-sm text-text cursor-pointer">
            <input
              type="checkbox"
              checked={globalMatch}
              onChange={(e) => setGlobalMatch(e.target.checked)}
              className="rounded border-border text-primary focus:ring-primary"
            />
            Replace all
          </label>
          {find && (
            <span className="text-sm text-primary font-medium">
              {matchCount} match{matchCount !== 1 ? 'es' : ''} found
            </span>
          )}
        </div>

        {error && (
          <div className="px-4 py-2 bg-error/10 border border-error/20 rounded-lg text-sm text-error">
            {error}
          </div>
        )}

        <button
          onClick={handleReplace}
          className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
        >
          Replace
        </button>
      </div>

      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="far-output" className="block text-sm font-medium text-text">Result</label>
            <CopyButton text={output} />
          </div>
          <textarea
            id="far-output"
            value={output}
            readOnly
            className="w-full h-40 p-4 bg-surface-alt border border-border rounded-lg text-text resize-y"
          />
          <TextStats text={output} className="mt-2" />
        </div>
      )}
    </div>
  );
}
