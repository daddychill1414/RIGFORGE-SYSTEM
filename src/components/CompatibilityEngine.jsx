// ============================================================
// CompatibilityEngine.jsx
// Evaluates component synergy, balance ratios, and bottlenecks
// Props: selectedParts (object), totalWattage (number), psuWattage (number | null)
// ============================================================

function CompatibilityEngine({ selectedParts, totalWattage, psuWattage }) {
  const { CPU, GPU, RAM, Storage, PSU } = selectedParts;

  const diagnostics = [];

  // Check 1: CPU & GPU Tier Bottleneck Check
  if (CPU && GPU) {
    const tierDiff = GPU.tier - CPU.tier;

    if (tierDiff >= 3) {
      diagnostics.push({
        type: "warning",
        badge: "BOTTLENECK DETECTED",
        title: "Processor Bottleneck Alert",
        desc: `${CPU.name} (Tier ${CPU.tier}) may limit the potential of ${GPU.name} (Tier ${GPU.tier}) in CPU-bound tasks and high-refresh games.`,
      });
    } else if (tierDiff <= -3) {
      diagnostics.push({
        type: "info",
        badge: "GPU CONSTRAINED",
        title: "Graphics Bound Setup",
        desc: `${CPU.name} out-scales ${GPU.name} significantly. Excellent for code compilation or streaming, but gaming FPS will be GPU-limited.`,
      });
    } else {
      diagnostics.push({
        type: "success",
        badge: "OPTIMAL SYNERGY",
        title: "Balanced CPU & GPU Match",
        desc: `${CPU.name} and ${GPU.name} are proportionally paired with minimal processing latency overhead.`,
      });
    }
  }

  // Check 2: Memory & Platform Allocation
  if (RAM && CPU) {
    if (CPU.tier >= 4 && RAM.price < 5000) {
      diagnostics.push({
        type: "warning",
        badge: "MEMORY DEFICIT",
        title: "Memory Capacity Recommendation",
        desc: `High-end ${CPU.name} will benefit from upgrading to 32GB+ or tighter timing memory for sustained multi-threaded rendering.`,
      });
    } else if (RAM.tier >= 4) {
      diagnostics.push({
        type: "success",
        badge: "HIGH BANDWIDTH",
        title: "Ultra Memory Pool",
        desc: `${RAM.specs} provides high DDR5 bandwidth with ample headroom for heavy multi-tasking.`,
      });
    }
  }

  // Check 3: Power Headroom
  if (totalWattage > 0 && PSU) {
    const headroom = PSU.wattage - totalWattage;
    if (headroom < 0) {
      diagnostics.push({
        type: "danger",
        badge: "CRITICAL PSU OVERLOAD",
        title: "Insufficient Power Supply Capacity",
        desc: `Deficit of ${Math.abs(headroom)}W. System may trigger emergency thermal/power shutdowns under synthetic 100% loads.`,
      });
    } else if (headroom < 120) {
      diagnostics.push({
        type: "warning",
        badge: "TIGHT POWER BUFFER",
        title: "Recommended PSU Headroom Warning",
        desc: `Only ${headroom}W safety headroom available. Transient power spikes (especially with modern GPUs) could test PSU stability.`,
      });
    }
  }

  if (diagnostics.length === 0) {
    return (
      <div className="compat-engine-empty">
        <span className="compat-engine-tag">[DIAGNOSTICS]</span>
        <span className="compat-engine-hint">
          Equip at least a CPU and GPU to trigger real-time architectural compatibility & bottleneck analysis.
        </span>
      </div>
    );
  }

  return (
    <div className="compat-engine-panel">
      <div className="compat-engine-header">
        <span className="compat-engine-title">Real-Time Synergy & Bottleneck Diagnostics</span>
        <span className="compat-engine-count">{diagnostics.length} Active Insight(s)</span>
      </div>

      <div className="compat-engine-grid">
        {diagnostics.map((item, idx) => (
          <div key={idx} className={`compat-diag-card ${item.type}`}>
            <div className="compat-diag-top">
              <span className={`compat-diag-badge ${item.type}`}>
                [{item.badge}]
              </span>
              <span className="compat-diag-title">{item.title}</span>
            </div>
            <p className="compat-diag-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompatibilityEngine;
