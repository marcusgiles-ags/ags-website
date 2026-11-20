import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Liability Waiver",
  description: "Assumption of risk and limitation of liability for Asia Golf Specialists tours, events, and tournaments.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.asiagolfspecialists.com/liability-waiver/" },
    openGraph: {
        type: "website",
        title: { absolute: "Tour Liability Waiver | Asia Golf Specialists" },
        description: "Assumption of risk and limitation of liability for Asia Golf Specialists tours, events, and tournaments.",
        url: "https://www.asiagolfspecialists.com/liability-waiver/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/og-default.jpg",
            width: 1200,
            height: 630,
            alt: "Liability Waiver",
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

export default function LiabilityWaiver() {
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
      <Navbar />
      <main style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: '#D4AF37', letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
            Legal
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
            Liability Disclaimer & Waiver
          </h1>
          <p style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Last updated: 1 May 2026 &nbsp;·&nbsp; Effective immediately
          </p>

          <div style={{
            padding: '1.5rem 2rem',
            border: '1px solid rgba(184,134,11,0.3)',
            backgroundColor: 'rgba(184,134,11,0.05)',
            borderRadius: '6px',
            marginBottom: '3rem',
          }}>
            <p style={{ margin: 0, color: 'rgba(248,250,252,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              <strong style={{ color: '#D4AF37' }}>IMPORTANT NOTICE:</strong>{' '}
              By participating in any Asia Golf Specialists tour, event, excursion, or tournament, you acknowledge that you have read, understood, and agree to the terms of this Liability Disclaimer & Waiver. If you do not agree, you must not participate.
            </p>
          </div>

          {section('1. Assumption of Risk — Golf & Sporting Activities', `
            <p>Golf and associated sporting activities involve inherent risks of injury, including but not limited to:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem">Physical injury from golf swings, errant golf balls, golf clubs, and golf cart operation</li>
              <li style="margin-bottom:0.5rem">Injuries resulting from uneven terrain, weather conditions, and course hazards</li>
              <li style="margin-bottom:0.5rem">Cardiovascular strain arising from physical exertion in tropical and humid climates</li>
              <li style="margin-bottom:0.5rem">Sun exposure, dehydration, and heat-related illness</li>
              <li>Animal or insect encounters on or adjacent to course grounds</li>
            </ul>
            <p style="margin-top:1rem">By participating in any AGS golf activity, <strong>you voluntarily assume all such risks</strong>, whether known or unknown, inherent to the activity.</p>
          `)}

          {section('2. Assumption of Risk — Adventure & Excursion Activities', `
            <p>AGS tours and events may include optional or included activities such as motorbike excursions (including Hai Van Pass), river cruises, cultural tours, and culinary experiences. These activities carry their own inherent risks including, but not limited to, road accidents, vessel incidents, food allergies, and physical exertion.</p>
            <p style="margin-top:1rem">You acknowledge that your participation in any excursion or activity is entirely voluntary, and that you assume full personal responsibility for any risk of injury or loss.</p>
          `)}

          {section('3. Assumption of Risk — International Travel', `
            <p>International travel to Vietnam, Thailand, and Cambodia involves risks including but not limited to: political instability, health risks, foodborne illness, exposure to local diseases, road conditions, and natural events. It is your responsibility to consult travel advisories issued by your home country government and to obtain appropriate vaccinations and travel health advice prior to departure.</p>
          `)}

          {section('4. Limitation of Liability', `
            <p>To the fullest extent permitted by applicable law:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.75rem">Asia Golf Specialists, its directors, employees, agents, and representatives shall not be liable for any <strong>direct, indirect, incidental, special, consequential, or punitive damages</strong> arising from your participation in any tour, event, or activity, including personal injury, death, property damage, or financial loss.</li>
              <li style="margin-bottom:0.75rem">AGS acts only as an arranger of services provided by independent Suppliers (golf courses, hotels, transport providers, activity operators). AGS is not responsible for the acts, omissions, or negligence of any Supplier.</li>
              <li style="margin-bottom:0.75rem">Where AGS liability cannot be excluded by law, it is limited to the total amount paid by you to AGS for the specific tour or service giving rise to the claim.</li>
              <li>AGS is not liable for any loss, damage, or expense arising from force majeure events as defined in the Terms of Service.</li>
            </ul>
          `)}

          {section('5. Tournament-Specific Waiver', `
            <p>Participants in AGS-organised golf tournaments (including the Horn Blower's Invitational and all future AGS invitationals) additionally agree that:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem">Tournament rules and scoring decisions made by AGS officials are final and binding</li>
              <li style="margin-bottom:0.5rem">AGS may use photographs and video taken during tournament events for promotional purposes without compensation</li>
              <li style="margin-bottom:0.5rem">Prize structures are at the sole discretion of AGS and may change without notice</li>
              <li>Participants with known medical conditions that may be exacerbated by physical exertion should consult a physician prior to registration and participation</li>
            </ul>
          `)}

          {section('6. Health & Fitness', `
            <p>You represent and warrant that you are in adequate health and physical condition to participate in the activities included in your booking. AGS strongly recommends that all participants consult a physician prior to undertaking any tour if they have any pre-existing medical conditions. AGS is not liable for any health incident arising during a tour or event.</p>
          `)}

          {section('7. Insurance', `
            <p>Comprehensive travel and personal liability insurance is mandatory for all AGS participants. <strong>Participation without adequate insurance cover constitutes a material breach of your booking terms.</strong> AGS strongly recommends a policy that includes emergency medical evacuation, trip cancellation, personal accident, and third-party liability cover.</p>
          `)}

          {section('8. Indemnification', `
            <p>You agree to indemnify, defend, and hold harmless Asia Golf Specialists, its directors, officers, employees, and agents from and against any claims, liabilities, damages, costs, and expenses (including reasonable legal fees) arising from your participation in any AGS tour, event, or activity, your breach of these terms, or your violation of any applicable law.</p>
          `)}

          {section('9. Governing Law', `
            <p>This Liability Disclaimer & Waiver is governed by the laws of the Socialist Republic of Vietnam. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Ho Chi Minh City, Vietnam.</p>
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
