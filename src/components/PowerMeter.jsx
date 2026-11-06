// ============================================================
// PowerMeter.jsx
// Clean technical power draw visualization with PSU headroom warnings
// Props: totalWattage (number), psuWattage (number | null)
// ============================================================

function PowerMeter({ totalWattage, psuWattage }) {
  const capacity = psuWattage || 1000;
  const percentage = Math.min((totalWattage / capacity) * 100, 100);

  let status = "none";
  let statusBadge = "IDLE";
  let statusMessage = "Select components to evaluate estimated power draw.";

  if (totalWattage > 0 && psuWattage) {
    const headroom = psuWattage - totalWattage;

    if (headroom >= 150) {
      status = "safe";
      statusBadge = "OPTIMAL";
      statusMessage = `Optimal headroom: ${headroom}W spare capacity. Balanced system draw.`;
    } else if (headroom >= 0) {
      status = "warning";
      statusBadge = "CAUTION";
      statusMessage = `Constrained capacity: only ${headroom}W headroom remaining.`;
    } else {
      status = "danger";
      statusBadge = "OVERLOAD";
      statusMessage = `Exceeds capacity by ${Math.abs(headroom)}W! Upgrade PSU rating.`;
    }
  } else if (totalWattage > 0) {
    status = "safe";
    statusBadge = "ACTIVE";
    statusMessage = `${totalWattage}W estimated consumption. Select a PSU to verify stability.`;
  }

  return (
    <div className="power-meter-card">
      {/* Header with live wattage */}
      <div className="power-meter-header">
        <div className="power-meter-title">
          Power Consumption
        </div>
        <div className={`power-meter-wattage ${status}`}>
          {totalWattage}
          <span className="power-meter-unit">W</span>
        </div>
      </div>

      {/* Animated power bar */}
      <div className="power-bar-container">
        <div
          className={`power-bar-fill ${status}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Bar labels */}
      <div className="power-bar-labels">
        <span>0W</span>
        <span>{psuWattage ? `${psuWattage}W (PSU Rating)` : "No PSU Assigned"}</span>
      </div>

      {/* Status message */}
      <div className={`power-status ${status}`}>
        <span className="power-status-badge">[{statusBadge}]</span>
        <span>{statusMessage}</span>
      </div>
    </div>
  );
}

export default PowerMeter;
