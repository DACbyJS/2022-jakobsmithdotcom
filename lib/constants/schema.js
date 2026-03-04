export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jakob Smith',
  url: 'https://jakobsmith.com',
  email: 'hello@jakobsmith.com',
  jobTitle: 'Web Developer',
  description:
    'Qualified digital designer and web developer with many years of diverse experience creating, refactoring and maintaining marketing websites, emails, advertisements and web applications.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Albuquerque',
    addressRegion: 'NM',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/jakob-smith-webdev/',
    'https://github.com/DACbyJS',
  ],
};
