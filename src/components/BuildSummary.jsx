// ============================================================
// BuildSummary.jsx
// Sidebar with Build Name input, Progress Meter, Specs breakdown,
// Total calculation in Philippine Pesos (₱), and Quick Actions
// ============================================================

const categoryOrder = ["CPU", "GPU", "RAM", "Storage", "PSU"];
const categoryShortTags = {
  CPU: "CORE",
  GPU: "VIDEO",
  RAM: "DDR",
  Storage: "NVME",
  PSU: "PWR",
};

function BuildSummary({
  buildName,
  onBuildNameChange,
  selectedParts,
  totalCost,
  onClearBuild,
  onExportBuild,
}) {
  const partsCount = Object.values(selectedParts).filter(Boolean).length;
  const progressPercent = Math.round((partsCount / 5) * 100);

  return (
    <div className="summary-card">
      {/* Build identity field */}
      <div className="build-name-section">
        <label className="build-name-label" htmlFor="build-name">
          Rig Configuration Name
        </label>
        <input
          id="build-name"
          type="text"
          className="build-name-input"
          placeholder="Custom Workstation Spec..."
          value={buildName}
          onChange={(e) => onBuildNameChange(e.target.value)}
        />
      </div>

      {/* Completion Meter */}
      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-title">Build Completion</span>
          <span className="progress-value">{progressPercent}%</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Card title with live indicator */}
      <div className="summary-card-title">
        <span className="dot"></span>
        Hardware Manifest
        <span className="manifest-count-tag">{partsCount}/5 Slots</span>
      </div>

      {/* Selected Parts List */}
      <div className="summary-parts-list">
        {categoryOrder.map((category) => {
          const part = selectedParts[category];

          return (
            <div
              key={category}
              className={`summary-part-row ${part ? "filled" : "empty"}`}
            >
              <div className="summary-part-left">
                <span className="summary-part-category">
                  [{categoryShortTags[category]}] {category}
                </span>
                <span className={`summary-part-name ${!part ? "empty-label" : ""}`}>
                  {part ? `${part.brand} ${part.name}` : "Pending selection"}
                </span>
              </div>
              {part && (
                <span className="summary-part-price">
                  ₱{part.price.toLocaleString()}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Total Cost Display in Philippine Pesos */}
      <div className="summary-total">
        <div>
          <span className="summary-total-label">Estimated Investment</span>
          <span className="summary-tax-note">Includes est. PH retail VAT</span>
        </div>
        <span className="summary-total-value">
          ₱{totalCost.toLocaleString()}
        </span>
      </div>

      {/* Action Buttons */}
      {partsCount > 0 && (
        <div className="summary-actions-grid">
          <button
            className="export-build-btn"
            onClick={onExportBuild}
            title="Export summary text"
          >
            Export Specs
          </button>
          <button
            className="clear-build-btn"
            onClick={onClearBuild}
            title="Reset your rig configuration"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default BuildSummary;
