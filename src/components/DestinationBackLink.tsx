import Link from 'next/link';

interface DestinationBackLinkProps {
  country: string;
  countryLink: string;
}

/**
 * A standardized backlink component for course profile pages,
 * providing easy navigation back to the destination course hub.
 */
export default function DestinationBackLink({ country, countryLink }: DestinationBackLinkProps) {
  const normalizedLink = countryLink.endsWith('/') ? countryLink : `${countryLink}/`;
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Link 
        href={normalizedLink} 
        className="text-gold hover:opacity-70" 
        style={{ 
          textTransform: 'uppercase', 
          fontSize: '0.85rem', 
          letterSpacing: '0.1em', 
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'opacity 0.2s ease'
        }}
      >
        <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>&larr;</span> BACK TO {country}
      </Link>
    </div>
  );
}
