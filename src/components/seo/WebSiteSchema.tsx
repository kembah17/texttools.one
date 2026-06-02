export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TextTools.one',
    url: 'https://www.texttools.one',
    description: 'Free online text manipulation tools. Case converter, text diff, duplicate remover, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.texttools.one/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
