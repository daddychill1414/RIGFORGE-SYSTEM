// ============================================================
// PresetSelector.jsx
// Quick 1-click Preset Rig Builder
// Props: presets (array), activePresetId (string|null), onApplyPreset (function)
// ============================================================

function PresetSelector({ presets, onApplyPreset }) {
  return (
    <div className="preset-selector-container">
      <div className="preset-selector-header">
        <span className="preset-title-label">Quick Architect Presets</span>
        <span className="preset-hint">1-click baseline configurations for rapid benchmarking</span>
      </div>

      <div className="preset-cards-grid">
        {presets.map((preset) => {
          const totalCost = Object.values(preset.parts).reduce(
            (acc, part) => acc + part.price,
            0
          );

          return (
            <div
              key={preset.id}
              className="preset-card"
              onClick={() => onApplyPreset(preset)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onApplyPreset(preset);
                }
              }}
            >
              <div className="preset-card-top">
                <span className="preset-tag">[{preset.tag}]</span>
                <span className="preset-cost">₱{totalCost.toLocaleString()}</span>
              </div>
              <h4 className="preset-name">{preset.name}</h4>
              <p className="preset-desc">{preset.description}</p>
              <div className="preset-load-btn">
                <span>LOAD PRESET //</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PresetSelector;

