import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy",
  description: "How Asia Golf Specialists collects, uses, and protects your personal data in accordance with GDPR and Vietnam Decree 13/2023.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.asiagolfspecialists.com/privacy-policy/" },
    openGraph: {
        type: "website",
        title: { absolute: "Privacy Policy | Asia Golf Specialists" },
        description: "How Asia Golf Specialists collects, uses, and protects your personal data in accordance with GDPR and Vietnam Decree 13/2023.",
        url: "https://www.asiagolfspecialists.com/privacy-policy/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/og-default.jpg",
            width: 1200,
            height: 630,
            alt: "Privacy Policy",
        }],
    },
};

const section = (title: string, body: string) => (
  <section style={{ marginBottom: '3rem' }}>
    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#D4AF37', marginBottom: '1rem', fontWeight: 700 }}>
      {title}
    </h2>
    <div style={{ color: 'rgba(248,250,252,0.75)', lineHeight: 1.8, fontSize: '1rem' }}
      dangerouslySetInnerHTML={{ __html: body }} />
  </section>
);

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
      <Navbar />
      <main style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: '#D4AF37', letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
            Legal
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.85rem', marginBottom: '4rem' }}>
            Last updated: 1 May 2026 &nbsp;·&nbsp; Effective immediately
          </p>

          {section('1. Who We Are', `
            <p>Asia Golf Specialists ("AGS", "we", "us", or "our") is a luxury golf tour operator registered and operating in Vietnam. Our website is <strong>www.asiagolfspecialists.com</strong>. For all privacy inquiries, contact us at <!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color:#D4AF37">marcus.giles@asiagolfspecialists.com</a><!--/email_off-->.</p>
          `)}

          {section('2. Data We Collect', `
            <p>We collect the following categories of personal data when you interact with our website:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem"><strong>Identity Data:</strong> Full name, nationality</li>
              <li style="margin-bottom:0.5rem"><strong>Contact Data:</strong> Email address, phone number (including country code)</li>
              <li style="margin-bottom:0.5rem"><strong>Travel Preference Data:</strong> Destination, group size, travel dates, hotel tier, dietary requirements, golf handicap, home club</li>
              <li style="margin-bottom:0.5rem"><strong>Technical Data:</strong> IP address, browser type, device type, referring URL</li>
              <li style="margin-bottom:0.5rem"><strong>Consent Data:</strong> Records of your consent decisions including timestamp and consent type</li>
              <li><strong>Analytics Data:</strong> Pages visited, session duration (only if you consent to analytics cookies)</li>
            </ul>
          `)}

          {section('3. How We Use Your Data', `
            <p>We process your personal data for the following purposes:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem">To respond to consultation and quotation requests</li>
              <li style="margin-bottom:0.5rem">To process tournament registrations and Portfolio Guide download requests</li>
              <li style="margin-bottom:0.5rem">To send you marketing communications about our tours, events, and offers — <strong>only if you have explicitly opted in</strong></li>
              <li style="margin-bottom:0.5rem">To improve our website and services using aggregated analytics (consent-gated)</li>
              <li>To maintain records of consent as required by Vietnam Decree 13/2023 on Personal Data Protection</li>
            </ul>
          `)}

          {section('4. Legal Basis for Processing', `
            <p>We rely on the following legal bases to process your data:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem"><strong>Consent:</strong> Analytics cookies and marketing communications — you may withdraw consent at any time</li>
              <li style="margin-bottom:0.5rem"><strong>Contract:</strong> Processing your booking or inquiry</li>
              <li><strong>Legitimate Interests:</strong> Fraud prevention, internal administration</li>
            </ul>
          `)}

          {section('5. Data Sharing', `
            <p>We do not sell, rent, or trade your personal data. We may share data with:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem"><strong>Golf courses, hotels, and transport providers</strong> — only as necessary to fulfil your booking</li>
              <li style="margin-bottom:0.5rem"><strong>Google Analytics / Google Tag Manager</strong> — aggregated, anonymised website analytics (consent-gated)</li>
              <li><strong>Email service providers</strong> — for transactional email delivery only</li>
            </ul>
          `)}

          {section('6. Data Retention', `
            <p>We retain personal data for the following periods:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem">Inquiry and booking data: <strong>5 years</strong> from the date of last interaction</li>
              <li style="margin-bottom:0.5rem">Consent logs: <strong>5 years</strong> as required by Vietnamese law</li>
              <li>Marketing email lists: Until you unsubscribe or withdraw consent</li>
            </ul>
          `)}

          {section('7. Your Rights', `
            <p>Depending on your jurisdiction, you have the right to:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem">Access the personal data we hold about you</li>
              <li style="margin-bottom:0.5rem">Request correction of inaccurate data</li>
              <li style="margin-bottom:0.5rem">Request deletion of your data ("right to be forgotten")</li>
              <li style="margin-bottom:0.5rem">Object to or restrict processing</li>
              <li style="margin-bottom:0.5rem">Withdraw consent for analytics or marketing at any time without affecting prior processing</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
            <p style="margin-top:1rem">To exercise any right, email <!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color:#D4AF37">marcus.giles@asiagolfspecialists.com</a><!--/email_off-->. We will respond within 30 days.</p>
          `)}

          {section('8. Cookies & Analytics', `
            <p>We use Google Analytics 4 (GA4) and Google Tag Manager (GTM) to understand how visitors use our site. <strong>These scripts are completely dormant until you click "Accept All" on our consent banner.</strong> If you decline, no tracking of any kind occurs. You may change your preference at any time by clearing your browser's local storage for this site.</p>
          `)}

          {section('9. Vietnam Decree 13/2023 Compliance', `
            <p>In accordance with Vietnam's Decree 13/2023 on Personal Data Protection, we:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem">Obtain explicit, informed consent before collecting personal data</li>
              <li style="margin-bottom:0.5rem">Maintain a full audit log of all consent actions (consent_logs table)</li>
              <li style="margin-bottom:0.5rem">Do not use personal data for purposes beyond those stated at the time of collection</li>
              <li>Provide clear mechanisms for data subjects to withdraw consent</li>
            </ul>
          `)}

          {section('10. Contact', `
            <p>Asia Golf Specialists<br/>
            Email: <!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color:#D4AF37">marcus.giles@asiagolfspecialists.com</a><!--/email_off--><br/>
            Website: <a href="https://www.asiagolfspecialists.com/" style="color:#D4AF37">www.asiagolfspecialists.com</a></p>
          `)}
        </div>
      </main>
    </div>
  );
}
