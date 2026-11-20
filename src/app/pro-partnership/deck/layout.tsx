import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Local Guardian Partnership',
  description: 'Exclusive Asia Golf Specialists PGA Club Professional partnership deck. Earn uncapped commissions hosting luxury Southeast Asia golf tours.',
  robots: {
    index: false,
    follow: false,
  },
    openGraph: {
        type: "website",
        title: { absolute: "PGA Pro Partnership Deck | Asia Golf Specialists" },
        description: "Exclusive Asia Golf Specialists PGA Club Professional partnership deck. Earn uncapped commissions hosting luxury Southeast Asia golf tours.",
        url: "https://www.asiagolfspecialists.com/pro-partnership/deck/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/og-default.jpg",
            width: 1200,
            height: 630,
            alt: "Asia Golf Specialists",
        }],
    },
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* When printing, hide the underlying body and only print the overlay */
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body > :not(#presentation-overlay-container) {
            display: none !important;
          }
          #presentation-overlay-container {
            position: relative !important;
            height: auto !important;
            overflow: visible !important;
            display: block !important;
          }
          /* Force backgrounds to print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />
      
      {/* THE BLANKET OVERLAY */}
      <div 
        id="presentation-overlay-container"
        className="fixed inset-0 w-screen h-screen overflow-y-auto bg-[#F8FAFC] z-[999999] text-[#020617] font-sans antialiased"
      >
        <main className="w-full relative bg-[#F8FAFC]">{children}</main>

        {/* Subtle Elephant Watermark */}
        <div className="fixed bottom-10 right-10 w-16 h-16 opacity-[0.08] pointer-events-none z-[1000000] print:opacity-20 hidden md:block">
          <Image 
            src="/images/brand-library/logos/ags-signature-icon.webp" 
            alt="AGS Watermark" 
            fill 
            className="object-contain" 
            style={{ filter: 'invert(1)' }} /* Make it dark for light bg */
          />
        </div>
      </div>
    </>
  );
}
