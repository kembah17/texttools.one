'use client';

import { useState } from 'react';
import CopyButton from '@/components/ui/CopyButton';
import TextStats from '@/components/ui/TextStats';

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
  'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
  'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
  'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
  'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'perspiciatis', 'unde',
  'omnis', 'iste', 'natus', 'error', 'voluptatem', 'accusantium', 'doloremque',
  'laudantium', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo',
  'inventore', 'veritatis', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta',
  'explicabo', 'nemo', 'ipsam', 'voluptas', 'aspernatur', 'aut', 'odit',
  'fugit', 'consequuntur', 'magni', 'dolores', 'eos', 'ratione', 'sequi',
  'nesciunt', 'neque', 'porro', 'quisquam', 'dolorem', 'adipisci', 'numquam',
  'eius', 'modi', 'tempora', 'magnam', 'quaerat', 'voluptatibus', 'maiores',
  'alias', 'perferendis', 'doloribus', 'asperiores', 'repellat',
];

const FIRST_SENTENCE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function randomWord(): string {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function generateSentence(minWords = 6, maxWords = 15): string {
  const count = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  const words = Array.from({ length: count }, () => randomWord());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(' ') + '.';
}

function generateParagraph(sentences = 5): string {
  return Array.from({ length: sentences }, () => generateSentence()).join(' ');
}

type GenType = 'paragraphs' | 'sentences' | 'words';

export default function LoremIpsumGenerator() {
  const [genType, setGenType] = useState<GenType>('paragraphs');
  const [count, setCount] = useState(3);
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    let result = '';

    switch (genType) {
      case 'paragraphs': {
        const paragraphs = Array.from({ length: count }, () => generateParagraph());
        if (startWithLorem && paragraphs.length > 0) {
          paragraphs[0] = FIRST_SENTENCE + ' ' + paragraphs[0];
        }
        result = paragraphs.join('\n\n');
        break;
      }
      case 'sentences': {
        const sentences = Array.from({ length: count }, () => generateSentence());
        if (startWithLorem && sentences.length > 0) {
          sentences[0] = FIRST_SENTENCE;
        }
        result = sentences.join(' ');
        break;
      }
      case 'words': {
        const words = Array.from({ length: count }, () => randomWord());
        if (startWithLorem && words.length >= 2) {
          words[0] = 'lorem';
          words[1] = 'ipsum';
        }
        result = words.join(' ');
        break;
      }
    }

    setOutput(result);
  };

  return (
    <div className="space-y-6">
      <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">Generate</label>
            <select
              value={genType}
              onChange={(e) => setGenType(e.target.value as GenType)}
              className="w-full p-2.5 bg-surface border border-border rounded-lg text-text focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-2">Count</label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
              className="w-full p-2.5 bg-surface border border-border rounded-lg text-text focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              className="w-full px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
            >
              Generate
            </button>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-text mt-4 cursor-pointer">
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="rounded border-border text-primary focus:ring-primary"
          />
          Start with &quot;Lorem ipsum dolor sit amet...&quot;
        </label>
      </div>

      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-text">Generated Text</label>
            <CopyButton text={output} />
          </div>
          <div className="p-4 bg-surface border border-border rounded-lg text-text leading-relaxed whitespace-pre-wrap shadow-sm">
            {output}
          </div>
          <TextStats text={output} className="mt-2" />
        </div>
      )}
    </div>
  );
}
