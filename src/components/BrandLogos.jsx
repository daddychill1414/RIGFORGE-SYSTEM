// ============================================================
// BrandLogos.jsx
// Infinite scrolling / auto-looping partner hardware vendor logos
// Similar to modern tech landing pages (ClientLogos / AutoLoopCards)
// ============================================================

const brandLogos = [
  {
    name: "NVIDIA",
    sub: "GEFORCE RTX",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="brand-svg">
        <path d="M12.4 2C6.8 2 2.2 6.4 2 12c.2 5.5 4.8 10 10.4 10 4.1 0 7.7-2.4 9.4-6-1.5 1.5-3.6 2.4-6 2.4-4.8 0-8.8-3.9-9-8.7.2-4.8 4.2-8.7 9-8.7 2.2 0 4.3.8 5.8 2.2.6-.7 1.2-1.3 1.9-1.9C20.6 3.2 16.7 2 12.4 2zm0 4.2c-3.1 0-5.7 2.5-5.8 5.7.1 3.2 2.7 5.7 5.8 5.7 2.2 0 4.1-1.3 5-3.2-1.1.8-2.4 1.3-3.8 1.3-2.6 0-4.7-2.1-4.8-4.7.1-2.6 2.2-4.7 4.8-4.7 1.2 0 2.4.4 3.3 1.1.5-.6 1-1.1 1.6-1.6-1.7-1-3.8-1.6-6.1-1.6z"/>
        <text x="30" y="17" fontFamily="var(--font-heading)" fontWeight="800" fontSize="13" letterSpacing="1">NVIDIA</text>
      </svg>
    ),
  },
  {
    name: "AMD",
    sub: "RYZEN / RADEON",
    svg: (
      <svg viewBox="0 0 90 24" fill="currentColor" className="brand-svg">
        <path d="M4 4h7v7H4zm8 0h7v7h-7zm0 8h7v7h-7z" fill="var(--accent-red)"/>
        <text x="26" y="17" fontFamily="var(--font-heading)" fontWeight="900" fontSize="14" letterSpacing="1.5">AMD</text>
      </svg>
    ),
  },
  {
    name: "INTEL",
    sub: "CORE ULTRA",
    svg: (
      <svg viewBox="0 0 85 24" fill="currentColor" className="brand-svg">
        <circle cx="8" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="20" y="17" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" letterSpacing="2">intel</text>
      </svg>
    ),
  },
  {
    name: "CORSAIR",
    sub: "DOMINATOR / RMx",
    svg: (
      <svg viewBox="0 0 110 24" fill="currentColor" className="brand-svg">
        <path d="M4 18l5-12 5 12-5-3zm6-11l4 9 4-9-4 2z" opacity="0.8"/>
        <text x="24" y="17" fontFamily="var(--font-heading)" fontWeight="800" fontSize="12" letterSpacing="2.5">CORSAIR</text>
      </svg>
    ),
  },
  {
    name: "ASUS ROG",
    sub: "REPUBLIC OF GAMERS",
    svg: (
      <svg viewBox="0 0 115 24" fill="currentColor" className="brand-svg">
        <path d="M4 7c3-3 7-3 10 0l-3 7c-2-2-4-2-6 0z" fill="var(--accent-red)"/>
        <text x="20" y="17" fontFamily="var(--font-heading)" fontWeight="900" fontSize="12" letterSpacing="1.5">ASUS ROG</text>
      </svg>
    ),
  },
  {
    name: "SAMSUNG",
    sub: "990 PRO NVMe",
    svg: (
      <svg viewBox="0 0 110 24" fill="currentColor" className="brand-svg">
        <ellipse cx="10" cy="12" rx="7" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="24" y="17" fontFamily="var(--font-heading)" fontWeight="800" fontSize="12" letterSpacing="2">SAMSUNG</text>
      </svg>
    ),
  },
  {
    name: "G.SKILL",
    sub: "TRIDENT Z5 RGB",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="brand-svg">
        <text x="4" y="17" fontFamily="var(--font-mono)" fontWeight="900" fontSize="14" letterSpacing="2">G.SKILL</text>
      </svg>
    ),
  },
  {
    name: "WD_BLACK",
    sub: "SN850X GEN4",
    svg: (
      <svg viewBox="0 0 115 24" fill="currentColor" className="brand-svg">
        <rect x="2" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="20" y="17" fontFamily="var(--font-heading)" fontWeight="900" fontSize="12" letterSpacing="1">WD_BLACK</text>
      </svg>
    ),
  },
  {
    name: "THERMALTAKE",
    sub: "TOUGHPOWER",
    svg: (
      <svg viewBox="0 0 130 24" fill="currentColor" className="brand-svg">
        <circle cx="8" cy="12" r="5" fill="var(--accent-orange)"/>
        <text x="18" y="17" fontFamily="var(--font-heading)" fontWeight="800" fontSize="11" letterSpacing="1.5">THERMALTAKE</text>
      </svg>
    ),
  },
  {
    name: "EVGA",
    sub: "SUPERNOVA",
    svg: (
      <svg viewBox="0 0 85 24" fill="currentColor" className="brand-svg">
        <text x="4" y="17" fontFamily="var(--font-heading)" fontWeight="900" fontSize="15" letterSpacing="3">EVGA</text>
      </svg>
    ),
  },
  {
    name: "CRUCIAL",
    sub: "BY MICRON",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="brand-svg">
        <circle cx="8" cy="12" r="5" fill="none" stroke="var(--accent-cyan)" strokeWidth="2"/>
        <text x="18" y="17" fontFamily="var(--font-heading)" fontWeight="800" fontSize="13" letterSpacing="1.5">crucial</text>
      </svg>
    ),
  },
];

function BrandLogos() {
  // Duplicate list to achieve continuous seamless marquee loop
  const doubleList = [...brandLogos, ...brandLogos];

  return (
    <section className="brand-logos-section">
      <div className="brand-logos-header">
        <span className="brand-logos-tag">[HARDWARE ECOSYSTEM]</span>
        <span className="brand-logos-title">Supported Architectural Partners & Manufacturers</span>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubleList.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="marquee-card">
              <div className="logo-svg-wrap">{logo.svg}</div>
              <span className="logo-sub">{logo.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;
