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
        <div className="header-logo">RF</div>
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

        {/* Theme Switcher Button */}
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label="Toggle theme mode"
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        >
          <span className="theme-toggle-indicator">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
