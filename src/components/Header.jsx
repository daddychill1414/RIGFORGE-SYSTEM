// ============================================================
// Header.jsx
// Top navigation bar — receives props for live stats display & theme toggle
// Props: totalCost (number), totalWattage (number), theme (string), onToggleTheme (function)
// ============================================================

function Header({ totalCost, totalWattage, theme, onToggleTheme }) {
  return (
    <header className="header">
      {/* Brand / Logo */}
      <div className="header-brand">
        <div className="header-logo">
          {/* Custom RigForge Chipset/Rig SVG Logo */}
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        </div>
        <div>
          <div className="header-title">RigForge</div>
          <div className="header-subtitle">PC Build Inspector</div>
        </div>
      </div>

      {/* Live Stats + Theme Toggle */}
      <div className="header-actions">
        <div className="header-stats">
          <div className="header-stat">
            <div className="header-stat-value">
              {totalWattage > 0 ? `${totalWattage}W` : "—"}
            </div>
            <div className="header-stat-label">Power Draw</div>
          </div>
          <div className="header-stat">
            <div className="header-stat-value">
              {totalCost > 0 ? `₱${totalCost.toLocaleString()}` : "—"}
            </div>
            <div className="header-stat-label">Est. Cost</div>
          </div>
        </div>

        {/* Theme Switcher Button with clean SVG Mode Icons */}
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label="Toggle theme mode"
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        >
          <span className="theme-toggle-icon">
            {theme === "dark" ? (
              // Sun icon for switching to light mode
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              // Moon icon for switching to dark mode
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </span>
          <span className="theme-toggle-indicator">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
