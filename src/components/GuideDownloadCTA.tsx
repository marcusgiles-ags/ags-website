import Link from "next/link";

export default function GuideDownloadCTA() {
  return (
    <div style={{ width: '100%', padding: '2rem 1rem', display: 'flex', justifyContent: 'center' }}>
      <Link href="/download-guide/" className="btn-primary" style={{ 
        textDecoration: 'none',
        padding: '1.25rem 2.5rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderRadius: '4px'
      }}>
        <span>Download 2026 AGS Portfolio</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </Link>
    </div>
  );
}
