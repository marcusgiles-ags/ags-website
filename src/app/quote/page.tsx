"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { captureAttribution, getAttribution, buildTrackedSourceUrl } from "@/lib/attribution";


function getDefaultTravelWindow() {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth() + 3, 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return {
    month: months[target.getMonth()],
    year: String(target.getFullYear()),
  };
}

export default function QuoteForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configuredBrief, setConfiguredBrief] = useState<{
    packageSlug: string;
    title: string;
    destination: string;
    group: string;
    duration: string;
    estUsd: string;
    estAud: string;
  } | null>(null);
  const defaultTravel = getDefaultTravelWindow();

  // Expanded Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonePrefix: '+61',
    phone: '',
    nationality: '',
    destination: 'Vietnam',
    groupSize: '4',
    travelMonth: defaultTravel.month,
    travelYear: defaultTravel.year,
    hotelTier: 'Luxury 5-Star',
    referralCode: '',
    message: '',
    privacy_consent: false,
    marketing_consent: false,
  });

  // Metadata State
  const [metadata, setMetadata] = useState({
    lead_source: '',
    landing_page: '',
    first_landing_page: '',
    device_type: '',
    browser: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    ref: '',
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    const attr = captureAttribution() || getAttribution();

    if (attr?.ref) {
      setFormData(prev => ({ ...prev, referralCode: prev.referralCode || attr.ref || '' }));
    }

    // Read PackageConfigurator query parameters (?package, ?title, ?destination, ?group, ?duration, ?estUsd, ?estAud)
    const params = new URLSearchParams(window.location.search);
    const pkgSlug = params.get('package') || '';
    const pkgTitle = params.get('title') || '';
    const pkgDest = params.get('destination') || '';
    const pkgGroup = params.get('group') || '';
    const pkgDuration = params.get('duration') || '';
    const pkgEstUsd = params.get('estUsd') || '';
    const pkgEstAud = params.get('estAud') || '';

    if (pkgTitle || pkgSlug) {
      setConfiguredBrief({
        packageSlug: pkgSlug,
        title: pkgTitle || pkgSlug,
        destination: pkgDest,
        group: pkgGroup,
        duration: pkgDuration,
        estUsd: pkgEstUsd,
        estAud: pkgEstAud,
      });

      const destLower = pkgDest.toLowerCase();
      const mappedDest = destLower.includes('thailand')
        ? 'Thailand'
        : destLower.includes('cambodia')
        ? 'Cambodia'
        : destLower.includes('multi')
        ? 'Multi-Country'
        : 'Vietnam';

      const grpLower = pkgGroup.toLowerCase();
      const mappedGroup = grpLower.includes('16')
        ? '16+'
        : grpLower.includes('12')
        ? '12'
        : grpLower.includes('8')
        ? '8'
        : grpLower.includes('couple') || grpLower.includes('2')
        ? '2'
        : grpLower.includes('1') || grpLower.includes('solo')
        ? '1'
        : '4';

      const audFmt = pkgEstAud && !Number.isNaN(Number(pkgEstAud)) ? `~$${Number(pkgEstAud).toLocaleString()} AUD` : '';
      const usdFmt = pkgEstUsd && !Number.isNaN(Number(pkgEstUsd)) ? `$${Number(pkgEstUsd).toLocaleString()} USD` : '';
      const priceNote = [audFmt, usdFmt].filter(Boolean).join(' / ');
      const prefilledMsg = `Configured Package: ${pkgTitle || pkgSlug}${pkgDuration ? ` • ${pkgDuration}` : ''}${pkgGroup ? ` • ${pkgGroup}` : ''}${priceNote ? ` (${priceNote} per golfer est.)` : ''}.`;

      setFormData(prev => ({
        ...prev,
        destination: mappedDest,
        groupSize: mappedGroup,
        message: prev.message || prefilledMsg,
      }));
    }

    setMetadata({
      lead_source: attr?.initial_referrer || document.referrer || 'Direct',
      landing_page: window.location.href,
      first_landing_page: attr?.first_landing_page || window.location.href,
      device_type: isMobile ? 'Mobile' : 'Desktop',
      browser: getBrowserName(userAgent),
      utm_source: attr?.utm_source || '',
      utm_medium: attr?.utm_medium || '',
      utm_campaign: attr?.utm_campaign || '',
      utm_content: attr?.utm_content || '',
      ref: attr?.ref || '',
    });
  }, []);

  const getBrowserName = (ua: string) => {
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy_consent) {
      alert("Please agree to the Privacy Policy to continue.");
      return;
    }
    setIsSubmitting(true);

    let telemetryProfile = null;
    try {
      const raw = localStorage.getItem('ags_telemetry');
      if (raw) telemetryProfile = JSON.parse(raw);
    } catch { /* silent */ }

    const attr = getAttribution();
    const activeRef = (formData.referralCode || metadata.ref || '').trim().toUpperCase();
    const enrichedMetadata = {
      ...metadata,
      landing_page: buildTrackedSourceUrl(metadata.landing_page, attr, activeRef),
      ref: activeRef || undefined,
      utm_source: metadata.utm_source || undefined,
      utm_medium: metadata.utm_medium || undefined,
      utm_campaign: metadata.utm_campaign || undefined,
      utm_content: metadata.utm_content || undefined,
    };

    const payload = { ...formData, referralCode: activeRef || undefined, metadata: enrichedMetadata, telemetry: telemetryProfile };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        if (typeof window !== 'undefined') {
          if ((window as any).dataLayer) {
            (window as any).dataLayer.push({
              event: 'form_submission_enquiry',
              form_type: 'quote_page',
              destination: formData.destination,
              group_size: formData.groupSize,
              package_slug: configuredBrief?.packageSlug || undefined,
              venue_name: configuredBrief?.title || undefined,
              estimated_aud: configuredBrief?.estAud ? Number(configuredBrief.estAud) : undefined,
              referral_code: activeRef || undefined,
              utm_source: metadata.utm_source || undefined,
              utm_medium: metadata.utm_medium || undefined,
              utm_campaign: metadata.utm_campaign || undefined,
              utm_content: metadata.utm_content || undefined,
            });
          }
          // GTM tag 'GA4 generate_lead' fires on form_submission_enquiry above.
          // Do NOT also send a gtag generate_lead event here - leads would double count.
        }
        router.push('/thank-you');
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle = { 
    display: 'flex', 
    alignItems: 'center',
    height: '2.5rem', // Fixed height to prevent unalignment if labels wrap
    marginBottom: '0.5rem', 
    fontWeight: 600, 
    color: '#A68A6B', // Heritage Brass
    fontSize: '0.85rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em'
  };

  const inputStyle = { 
    width: '100%', 
    height: '3.5rem', // Standardized height for all fields
    padding: '0 1.2rem', 
    borderRadius: '8px', 
    border: '1px solid rgba(166, 138, 107, 0.2)', 
    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    appearance: 'none' as const, // Remove default browser styling inconsistencies
  };

  return (
    <>
      <Navbar />

      <section className="section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '10rem', 
        paddingBottom: '5rem',
        backgroundColor: '#0A1C3C' // Imperial Navy
      }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.02)', 
            padding: 'clamp(1.75rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)', 
            borderRadius: '16px',
            border: '1px solid rgba(166, 138, 107, 0.15)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span style={{ display: 'inline-block', color: '#D4AF37', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Direct 24-Hour Proposal &bull; Australian Expat Team in Da Nang
              </span>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '1rem', color: 'white' }}>Design Your <span style={{ color: '#A68A6B' }}>Escape.</span></h1>
              <p style={{ opacity: 0.85, color: 'white', fontSize: '1.05rem', lineHeight: 1.6 }} itemProp="description" id="exec-summary">Bespoke golf itineraries engineered directly on the ground by Founder Marcus Giles &amp; our expat concierge team—zero third-party markups.</p>
            </div>

            {configuredBrief && (
              <div
                style={{
                  marginBottom: '2rem',
                  padding: '1.15rem 1.35rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.45)',
                  color: '#F8FAFC',
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: '0.35rem' }}>
                  Pre-Configured Itinerary Brief Loaded
                </div>
                <div style={{ fontSize: '0.98rem', lineHeight: 1.55 }}>
                  Configuring: <strong>{configuredBrief.title}</strong>
                  {configuredBrief.group ? ` • ${configuredBrief.group}` : ''}
                  {configuredBrief.duration ? ` • ${configuredBrief.duration}` : ''}
                  {configuredBrief.estAud && !Number.isNaN(Number(configuredBrief.estAud))
                    ? ` (~$${Number(configuredBrief.estAud).toLocaleString()} AUD/golfer)`
                    : ''}
                </div>
              </div>
            )}

            <form onSubmit={submitLead} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Row 1: Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required placeholder="John Citizen" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" style={inputStyle} />
                </div>
              </div>

              {/* Nationality (& Optional Referral Code when pre-tagged) */}
              <div style={{ display: 'grid', gridTemplateColumns: formData.referralCode ? 'repeat(auto-fit, minmax(220px, 1fr))' : '1fr', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="nationality" style={labelStyle}>Nationality</label>
                  <input id="nationality" name="nationality" type="text" value={formData.nationality} onChange={handleInputChange} placeholder="e.g. Australian" style={inputStyle} />
                </div>
                {formData.referralCode ? (
                  <div>
                    <label htmlFor="referralCode" style={labelStyle}>Referral Code</label>
                    <input
                      id="referralCode"
                      name="referralCode"
                      type="text"
                      value={formData.referralCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, referralCode: e.target.value.toUpperCase() }))}
                      placeholder="Optional"
                      style={{
                        ...inputStyle,
                        borderColor: 'rgba(212, 175, 55, 0.6)',
                        color: '#D4AF37',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    />
                  </div>
                ) : null}
              </div>

              {/* Row 2: Phone with Prefix */}
              <div>
                <label htmlFor="phone" style={labelStyle}>WhatsApp / Phone</label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <select 
                    id="phonePrefix" 
                    name="phonePrefix" 
                    value={formData.phonePrefix} 
                    onChange={handleInputChange}
                    style={{ ...inputStyle, width: '145px', paddingRight: '2rem' }}
                  >
                    <optgroup label="── Asia-Pacific ──" style={{ color: '#888' }}>
                      <option value="+61" style={{ color: 'black' }}>🇦🇺 +61 Australia</option>
                      <option value="+64" style={{ color: 'black' }}>🇳🇿 +64 New Zealand</option>
                      <option value="+65" style={{ color: 'black' }}>🇸🇬 +65 Singapore</option>
                      <option value="+852" style={{ color: 'black' }}>🇭🇰 +852 Hong Kong</option>
                      <option value="+81" style={{ color: 'black' }}>🇯🇵 +81 Japan</option>
                      <option value="+82" style={{ color: 'black' }}>🇰🇷 +82 South Korea</option>
                      <option value="+86" style={{ color: 'black' }}>🇨🇳 +86 China</option>
                      <option value="+886" style={{ color: 'black' }}>🇹🇼 +886 Taiwan</option>
                      <option value="+60" style={{ color: 'black' }}>🇲🇾 +60 Malaysia</option>
                      <option value="+62" style={{ color: 'black' }}>🇮🇩 +62 Indonesia</option>
                      <option value="+63" style={{ color: 'black' }}>🇵🇭 +63 Philippines</option>
                      <option value="+66" style={{ color: 'black' }}>🇹🇭 +66 Thailand</option>
                      <option value="+84" style={{ color: 'black' }}>🇻🇳 +84 Vietnam</option>
                      <option value="+855" style={{ color: 'black' }}>🇰🇭 +855 Cambodia</option>
                      <option value="+91" style={{ color: 'black' }}>🇮🇳 +91 India</option>
                      <option value="+94" style={{ color: 'black' }}>🇱🇰 +94 Sri Lanka</option>
                      <option value="+977" style={{ color: 'black' }}>🇳🇵 +977 Nepal</option>
                    </optgroup>
                    <optgroup label="── Europe ──" style={{ color: '#888' }}>
                      <option value="+44" style={{ color: 'black' }}>🇬🇧 +44 United Kingdom</option>
                      <option value="+353" style={{ color: 'black' }}>🇮🇪 +353 Ireland</option>
                      <option value="+49" style={{ color: 'black' }}>🇩🇪 +49 Germany</option>
                      <option value="+33" style={{ color: 'black' }}>🇫🇷 +33 France</option>
                      <option value="+31" style={{ color: 'black' }}>🇳🇱 +31 Netherlands</option>
                      <option value="+32" style={{ color: 'black' }}>🇧🇪 +32 Belgium</option>
                      <option value="+41" style={{ color: 'black' }}>🇨🇭 +41 Switzerland</option>
                      <option value="+43" style={{ color: 'black' }}>🇦🇹 +43 Austria</option>
                      <option value="+34" style={{ color: 'black' }}>🇪🇸 +34 Spain</option>
                      <option value="+351" style={{ color: 'black' }}>🇵🇹 +351 Portugal</option>
                      <option value="+39" style={{ color: 'black' }}>🇮🇹 +39 Italy</option>
                      <option value="+46" style={{ color: 'black' }}>🇸🇪 +46 Sweden</option>
                      <option value="+47" style={{ color: 'black' }}>🇳🇴 +47 Norway</option>
                      <option value="+45" style={{ color: 'black' }}>🇩🇰 +45 Denmark</option>
                      <option value="+358" style={{ color: 'black' }}>🇫🇮 +358 Finland</option>
                      <option value="+48" style={{ color: 'black' }}>🇵🇱 +48 Poland</option>
                      <option value="+420" style={{ color: 'black' }}>🇨🇿 +420 Czech Republic</option>
                      <option value="+36" style={{ color: 'black' }}>🇭🇺 +36 Hungary</option>
                      <option value="+30" style={{ color: 'black' }}>🇬🇷 +30 Greece</option>
                      <option value="+7" style={{ color: 'black' }}>🇷🇺 +7 Russia</option>
                    </optgroup>
                    <optgroup label="── Middle East ──" style={{ color: '#888' }}>
                      <option value="+971" style={{ color: 'black' }}>🇦🇪 +971 UAE</option>
                      <option value="+966" style={{ color: 'black' }}>🇸🇦 +966 Saudi Arabia</option>
                      <option value="+974" style={{ color: 'black' }}>🇶🇦 +974 Qatar</option>
                      <option value="+973" style={{ color: 'black' }}>🇧🇭 +973 Bahrain</option>
                      <option value="+968" style={{ color: 'black' }}>🇴🇲 +968 Oman</option>
                      <option value="+965" style={{ color: 'black' }}>🇰🇼 +965 Kuwait</option>
                      <option value="+972" style={{ color: 'black' }}>🇮🇱 +972 Israel</option>
                    </optgroup>
                    <optgroup label="── Americas ──" style={{ color: '#888' }}>
                      <option value="+1" style={{ color: 'black' }}>🇺🇸 +1 United States</option>
                      <option value="+1-CA" style={{ color: 'black' }}>🇨🇦 +1 Canada</option>
                      <option value="+52" style={{ color: 'black' }}>🇲🇽 +52 Mexico</option>
                      <option value="+55" style={{ color: 'black' }}>🇧🇷 +55 Brazil</option>
                      <option value="+54" style={{ color: 'black' }}>🇦🇷 +54 Argentina</option>
                      <option value="+56" style={{ color: 'black' }}>🇨🇱 +56 Chile</option>
                      <option value="+57" style={{ color: 'black' }}>🇨🇴 +57 Colombia</option>
                    </optgroup>
                    <optgroup label="── Africa ──" style={{ color: '#888' }}>
                      <option value="+27" style={{ color: 'black' }}>🇿🇦 +27 South Africa</option>
                      <option value="+254" style={{ color: 'black' }}>🇰🇪 +254 Kenya</option>
                      <option value="+20" style={{ color: 'black' }}>🇪🇬 +20 Egypt</option>
                      <option value="+212" style={{ color: 'black' }}>🇲🇦 +212 Morocco</option>
                      <option value="+234" style={{ color: 'black' }}>🇳🇬 +234 Nigeria</option>
                    </optgroup>
                  </select>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="400 000 000" 
                    style={{ ...inputStyle, flex: 1 }} 
                  />
                </div>
              </div>

              {/* Row 3: Destination & Group Size */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="destination" style={labelStyle}>Primary Destination</label>
                  <select id="destination" name="destination" value={formData.destination} onChange={handleInputChange} style={inputStyle}>
                    <option value="Vietnam" style={{ color: 'black' }}>Vietnam</option>
                    <option value="Thailand" style={{ color: 'black' }}>Thailand</option>
                    <option value="Cambodia" style={{ color: 'black' }}>Cambodia</option>
                    <option value="Multi-Country" style={{ color: 'black' }}>Multi-Country</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="groupSize" style={labelStyle}>Group Size</label>
                  <select id="groupSize" name="groupSize" value={formData.groupSize} onChange={handleInputChange} style={inputStyle}>
                    <option value="1" style={{ color: 'black' }}>1 Player (Solo)</option>
                    <option value="2" style={{ color: 'black' }}>2 Players</option>
                    <option value="4" style={{ color: 'black' }}>4 Players</option>
                    <option value="8" style={{ color: 'black' }}>8 Players</option>
                    <option value="12" style={{ color: 'black' }}>12 Players</option>
                    <option value="16+" style={{ color: 'black' }}>16+ Players</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Travel Date */}
              <div>
                <label style={labelStyle}>Estimated Travel Date</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <select name="travelMonth" value={formData.travelMonth} onChange={handleInputChange} style={inputStyle}>
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                      <option key={m} value={m} style={{ color: 'black' }}>{m}</option>
                    ))}
                  </select>
                  <select name="travelYear" value={formData.travelYear} onChange={handleInputChange} style={inputStyle}>
                    {["2026", "2027", "2028", "2029"].map(y => (
                      <option key={y} value={y} style={{ color: 'black' }}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Hotel Tier (Radio Buttons) */}
              <div>
                <label style={labelStyle}>Preferred Hotel Tier</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {[
                    "Private Beachfront Villa", 
                    "Luxury 5-Star", 
                    "Boutique/Heritage", 
                    "Premium 4-Star"
                  ].map(tier => (
                    <label key={tier} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      padding: '1rem', 
                      borderRadius: '8px', 
                      backgroundColor: formData.hotelTier === tier ? 'rgba(166, 138, 107, 0.1)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${formData.hotelTier === tier ? '#A68A6B' : 'rgba(255,255,255,0.05)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}>
                      <input 
                        type="radio" 
                        name="hotelTier" 
                        value={tier} 
                        checked={formData.hotelTier === tier} 
                        onChange={handleInputChange} 
                        style={{ accentColor: '#A68A6B' }}
                      />
                      <span style={{ fontSize: '0.85rem', color: 'white' }}>{tier}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', opacity: 0.1, marginTop: '2rem' }}>
                <div style={{ width: '200px', height: '60px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/images/brand-library/logos/ags-clubmark-outline-white.webp"
                    alt="AGS Club Mark"
                    style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Row 6: Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Special Requests / Courses</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Any specific courses or special requests?" 
                  style={{ ...inputStyle, height: '120px', padding: '1.2rem', resize: 'none' }}
                />
              </div>

              {/* Consent — Privacy (required) */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                  <input
                    id="privacy_consent"
                    name="privacy_consent"
                    type="checkbox"
                    checked={formData.privacy_consent}
                    onChange={handleInputChange}
                    required
                    style={{ marginTop: '0.3rem', accentColor: '#D4AF37', flexShrink: 0 }}
                  />
                  <label htmlFor="privacy_consent" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', lineHeight: 1.5 }}>
                    I have read and agree to the <a href="/privacy-policy/" target="_blank" style={{ color: '#D4AF37' }}>Privacy Policy</a> and <a href="/terms-of-service/" target="_blank" style={{ color: '#D4AF37' }}>Terms of Service</a>. <span style={{ color: 'rgba(255,100,100,0.8)' }}>*</span>
                  </label>
                </div>

                {/* Consent — Marketing (optional) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input
                    id="marketing_consent"
                    name="marketing_consent"
                    type="checkbox"
                    checked={formData.marketing_consent}
                    onChange={handleInputChange}
                    style={{ marginTop: '0.3rem', accentColor: '#D4AF37', flexShrink: 0 }}
                  />
                  <label htmlFor="marketing_consent" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', lineHeight: 1.5 }}>
                    I&apos;d like to receive exclusive offers, course updates, and golf travel inspiration from Asia Golf Specialists. <span style={{ color: 'rgba(200,200,200,0.4)', fontStyle: 'italic' }}>(Optional)</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                style={{ 
                  marginTop: '1.5rem',
                  padding: '1.5rem', 
                  borderRadius: '8px', 
                  backgroundColor: '#A68A6B', // Heritage Brass
                  color: 'white', 
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: 'none',
                  cursor: 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  boxShadow: '0 10px 20px rgba(166, 138, 107, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? 'Transmitting Request...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
