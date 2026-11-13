// ============================================================
// BrandLogos.jsx
// High-visibility, prominent PC hardware vendor logos
// Auto-looping infinite scrolling marquee
// ============================================================

const brandLogos = [
  {
    name: "NVIDIA",
    sub: "GEFORCE RTX",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="brand-svg">
        <path d="M14 3C7.5 3 2.2 8.1 2 14.8c.2 6.6 5.5 11.8 12 11.8 4.8 0 9-2.8 11-7.1-1.8 1.8-4.3 2.8-7.1 2.8-5.6 0-10.3-4.6-10.5-10.2.2-5.6 4.9-10.2 10.5-10.2 2.6 0 5 1 6.8 2.6.7-.8 1.4-1.5 2.2-2.2C23.6 4.4 19.1 3 14 3zm0 5c-3.7 0-6.7 3-6.8 6.7.1 3.7 3.1 6.7 6.8 6.7 2.6 0 4.8-1.5 5.9-3.8-1.3 1-2.8 1.5-4.4 1.5-3 0-5.5-2.5-5.6-5.5.1-3 2.6-5.5 5.6-5.5 1.4 0 2.8.5 3.9 1.3.6-.7 1.2-1.3 1.9-1.9C20.3 9 17.3 8 14 8z" fill="#76b900" />
        <text x="34" y="21" fontFamily="var(--font-heading)" fontWeight="900" fontSize="16" letterSpacing="1.2">NVIDIA</text>
      </svg>
    ),
  },
  {
    name: "AMD",
    sub: "RYZEN / RADEON",
    svg: (
      <svg viewBox="0 0 110 30" fill="currentColor" className="brand-svg">
        <path d="M4 5h9v9H4zm10 0h9v9h-9zm0 10h9v9h-9z" fill="#ed1c24"/>
        <text x="31" y="22" fontFamily="var(--font-heading)" fontWeight="900" fontSize="18" letterSpacing="1.5">AMD</text>
      </svg>
    ),
  },
  {
    name: "INTEL",
    sub: "CORE ULTRA",
    svg: (
      <svg viewBox="0 0 110 30" fill="currentColor" className="brand-svg">
        <circle cx="10" cy="15" r="7" fill="none" stroke="#0071c5" strokeWidth="2.5"/>
        <text x="24" y="22" fontFamily="var(--font-heading)" fontWeight="900" fontSize="18" letterSpacing="2.2" fill="currentColor">intel</text>
      </svg>
    ),
  },
  {
    name: "CORSAIR",
    sub: "DOMINATOR / RMx",
    svg: (
      <svg viewBox="0 0 135 30" fill="currentColor" className="brand-svg">
        <path d="M5 23l6-15 6 15-6-4zm8-14l5 11 5-11-5 2.5z" fill="#f5a623"/>
        <text x="30" y="21" fontFamily="var(--font-heading)" fontWeight="900" fontSize="14" letterSpacing="3">CORSAIR</text>
      </svg>
    ),
  },
  {
    name: "ASUS ROG",
    sub: "REPUBLIC OF GAMERS",
    svg: (
      <svg viewBox="0 0 145 30" fill="currentColor" className="brand-svg">
        <path d="M4 8c4-4 9-4 13 0l-4 9c-3-3-5-3-8 0z" fill="#ff0033"/>
        <text x="25" y="21" fontFamily="var(--font-heading)" fontWeight="900" fontSize="15" letterSpacing="1.5">ASUS ROG</text>
      </svg>
    ),
  },
  {
    name: "SAMSUNG",
    sub: "990 PRO NVMe",
    svg: (
      <svg viewBox="0 0 135 30" fill="currentColor" className="brand-svg">
        <ellipse cx="12" cy="15" rx="8" ry="6" fill="none" stroke="#1428a0" strokeWidth="2"/>
        <text x="28" y="21" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" letterSpacing="2.5">SAMSUNG</text>
      </svg>
    ),
  },
  {
    name: "G.SKILL",
    sub: "TRIDENT Z5 RGB",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="brand-svg">
        <text x="2" y="22" fontFamily="var(--font-mono)" fontWeight="900" fontSize="17" letterSpacing="2.5" fill="#e63946">G.SKILL</text>
      </svg>
    ),
  },
  {
    name: "WD_BLACK",
    sub: "SN850X GEN4",
    svg: (
      <svg viewBox="0 0 140 30" fill="currentColor" className="brand-svg">
        <rect x="2" y="7" width="16" height="16" rx="3" fill="none" stroke="#005eb8" strokeWidth="2.5"/>
        <text x="25" y="21" fontFamily="var(--font-heading)" fontWeight="900" fontSize="14" letterSpacing="1.2">WD_BLACK</text>
      </svg>
    ),
  },
  {
    name: "THERMALTAKE",
    sub: "TOUGHPOWER",
    svg: (
      <svg viewBox="0 0 155 30" fill="currentColor" className="brand-svg">
        <circle cx="10" cy="15" r="6" fill="#ff9f43"/>
        <text x="22" y="21" fontFamily="var(--font-heading)" fontWeight="900" fontSize="13" letterSpacing="1.8">THERMALTAKE</text>
      </svg>
    ),
  },
  {
    name: "EVGA",
    sub: "SUPERNOVA",
    svg: (
      <svg viewBox="0 0 100 30" fill="currentColor" className="brand-svg">
        <text x="2" y="22" fontFamily="var(--font-heading)" fontWeight="900" fontSize="18" letterSpacing="3.5" fill="#c1121f">EVGA</text>
      </svg>
    ),
  },
  {
    name: "CRUCIAL",
    sub: "BY MICRON",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" className="brand-svg">
        <circle cx="10" cy="15" r="6" fill="none" stroke="#00d4ff" strokeWidth="2.5"/>
        <text x="22" y="21" fontFamily="var(--font-heading)" fontWeight="900" fontSize="16" letterSpacing="1.8">crucial</text>
      </svg>
    ),
  },
];

function BrandLogos() {
  const doubleList = [...brandLogos, ...brandLogos];

  return (
    <section className="brand-logos-section">
      <div className="brand-logos-header">
        <span className="brand-logos-tag">[HARDWARE ECOSYSTEM]</span>
        <span className="brand-logos-title">Certified Component Manufacturers & Architectural Partners</span>
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
