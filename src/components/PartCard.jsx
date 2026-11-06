// ============================================================
// PartCard.jsx
// A single selectable part card — used inside ComponentSelector
// Props: part (object), isSelected (boolean), onSelect (function)
// This is a reusable component rendered via map() with unique keys
// ============================================================

function PartCard({ part, isSelected, onSelect }) {
  // Map brand name to a CSS class for the colored badge
  const brandClass = part.brand.toLowerCase().replace(/\s+/g, "").replace("black", "");

  return (
    <li
      className={`part-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(part)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(part);
        }
      }}
    >
      {/* Brand color badge */}
      <div className={`part-brand-badge ${brandClass}`}>
        {part.brand.slice(0, 3).toUpperCase()}
      </div>

      {/* Part info */}
      <div className="part-info">
        <div className="part-name">{part.name}</div>
        <div className="part-specs">{part.specs}</div>
      </div>

      {/* Price & TDP */}
      <div className="part-meta">
        <div className="part-price">₱{part.price.toLocaleString()}</div>
        <div className="part-tdp">
          {part.category === "PSU" ? `${part.wattage}W cap` : `${part.tdp}W TDP`}
        </div>
      </div>
    </li>
  );
}

export default PartCard;

