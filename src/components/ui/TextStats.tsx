interface TextStatsProps {
  text: string;
  className?: string;
}

export default function TextStats({ text, className = '' }: TextStatsProps) {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text.trim() ? text.split(/\n/).length : 0;

  return (
    <div className={`flex gap-4 text-sm text-text-light ${className}`}>
      <span><strong className="text-text">{chars.toLocaleString()}</strong> characters</span>
      <span><strong className="text-text">{words.toLocaleString()}</strong> words</span>
      <span><strong className="text-text">{lines.toLocaleString()}</strong> lines</span>
    </div>
  );
}
