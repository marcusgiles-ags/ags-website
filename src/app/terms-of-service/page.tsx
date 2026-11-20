import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service",
  description: "Official terms and conditions governing Asia Golf Specialists bespoke golf tour bookings, travel packages, deposits, and concierge services.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.asiagolfspecialists.com/terms-of-service/" },
    openGraph: {
        type: "website",
        title: { absolute: "Terms of Service | Asia Golf Specialists" },
        description: "Terms and conditions governing use of Asia Golf Specialists tour bookings, packages, and services.",
        url: "https://www.asiagolfspecialists.com/terms-of-service/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/og-default.jpg",
            width: 1200,
            height: 630,
            alt: "Terms of Service",
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

export default function TermsOfService() {
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
      <Navbar />
      <main style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: '#D4AF37', letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>
            Legal
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '1rem', marginBottom: '0.5rem' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.85rem', marginBottom: '4rem' }}>
            Last updated: 1 May 2026 &nbsp;·&nbsp; Effective immediately
          </p>
          <p style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '3rem', lineHeight: 1.8 }}>
            By requesting a quotation, making a booking, or using the Asia Golf Specialists website, you agree to these Terms of Service. Please read them carefully.
          </p>

          {section('1. About Asia Golf Specialists', `
            <p>Asia Golf Specialists ("AGS", "we", "us") is a luxury golf tour operator. We act as a principal or as an agent for affiliated golf courses, accommodation providers, transport operators, and activity providers (collectively, "Suppliers"). Our role and liability varies depending on whether we are acting as principal or agent, which will be set out in your booking confirmation.</p>
          `)}

          {section('2. Booking & Confirmation', `
            <ul style="padding-left:1.5rem">
              <li style="margin-bottom:0.75rem">A booking is confirmed only upon receipt of a written confirmation from AGS and payment of the applicable deposit.</li>
              <li style="margin-bottom:0.75rem">Quotations are valid for 14 days from the date of issue. Prices are subject to change until a deposit is received.</li>
              <li style="margin-bottom:0.75rem">It is your responsibility to ensure all personal details provided (names, passport data, dietary requirements, handicap, etc.) are accurate. AGS bears no liability for errors arising from incorrect information supplied by the client.</li>
              <li>All bookings are subject to availability and Supplier terms and conditions.</li>
            </ul>
          `)}

          {section('3. Pricing & Payment', `
            <ul style="padding-left:1.5rem">
              <li style="margin-bottom:0.75rem">All prices are quoted in USD unless otherwise stated. Prices include only those items explicitly listed in the itinerary.</li>
              <li style="margin-bottom:0.75rem">A non-refundable deposit of 30% of the total tour cost is required to secure a booking. The remaining balance is due no later than 45 days before departure.</li>
              <li style="margin-bottom:0.75rem">AGS reserves the right to pass on any price increases arising from currency fluctuations, fuel surcharges, government taxes, or Supplier price changes occurring after booking confirmation.</li>
              <li>Payments may be made by bank transfer or credit card. Card payments may incur a processing fee of up to 3%.</li>
            </ul>
          `)}

          {section('4. Cancellation Policy', `
            <p>Cancellations must be notified in writing to <!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color:#D4AF37">marcus.giles@asiagolfspecialists.com</a><!--/email_off-->. The following cancellation fees apply:</p>
            <ul style="padding-left:1.5rem;margin-top:0.75rem">
              <li style="margin-bottom:0.5rem"><strong>More than 45 days before departure:</strong> Loss of deposit only</li>
              <li style="margin-bottom:0.5rem"><strong>31–45 days before departure:</strong> 50% of total tour cost</li>
              <li style="margin-bottom:0.5rem"><strong>15–30 days before departure:</strong> 75% of total tour cost</li>
              <li><strong>14 days or fewer before departure:</strong> 100% of total tour cost (no refund)</li>
            </ul>
            <p style="margin-top:1rem">AGS strongly recommends purchasing comprehensive travel insurance including cancellation cover.</p>
          `)}

          {section('5. Changes to Bookings', `
            <p>Requests to amend a confirmed booking are subject to availability and may incur an amendment fee. Any amendments requested within 30 days of departure are treated as a cancellation of the original booking and a new booking.</p>
          `)}

          {section('6. Force Majeure', `
            <p>AGS shall not be liable for any failure or delay in performance resulting from circumstances beyond our reasonable control, including but not limited to: natural disasters, pandemics, acts of government, civil unrest, terrorism, strikes, or extreme weather events. In such cases, AGS will use reasonable endeavours to offer alternative arrangements. Refunds will be subject to Supplier policies.</p>
          `)}

          {section('7. Travel Insurance', `
            <p>Comprehensive travel insurance with cover for cancellation, medical expenses, emergency evacuation, and personal liability is <strong>mandatory</strong> for all AGS tours and events. AGS reserves the right to refuse participation to any client who cannot evidence adequate coverage at the time of departure.</p>
          `)}

          {section('8. Passports, Visas & Health Requirements', `
            <p>It is the sole responsibility of each traveller to ensure they hold a valid passport, applicable visas, and comply with all health and vaccination requirements for all countries on the itinerary. AGS provides information as a courtesy only and accepts no liability for any client refused entry to any country.</p>
          `)}

          {section('9. Conduct', `
            <p>All participants are expected to behave respectfully towards fellow travellers, AGS staff, and Supplier personnel. AGS reserves the right to remove any participant from a tour without refund if their conduct is deemed disruptive, dangerous, or in breach of applicable laws.</p>
          `)}

          {section('10. Intellectual Property', `
            <p>All content on the AGS website, including text, images, itineraries, branding, and design, is the intellectual property of Asia Golf Specialists. Reproduction, commercial use, or redistribution without prior written consent is prohibited.</p>
          `)}

          {section('11. Governing Law', `
            <p>These Terms of Service are governed by the laws of the Socialist Republic of Vietnam. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ho Chi Minh City, Vietnam.</p>
          `)}

          {section('12. Contact', `
            <p>Asia Golf Specialists<br/>
            Email: <!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color:#D4AF37">marcus.giles@asiagolfspecialists.com</a><!--/email_off--><br/>
            Website: <a href="https://www.asiagolfspecialists.com/" style="color:#D4AF37">www.asiagolfspecialists.com</a></p>
          `)}
        </div>
      </main>
    </div>
  );
}
