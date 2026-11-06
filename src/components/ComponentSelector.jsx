// ============================================================
// ComponentSelector.jsx
// Renders all part categories with search, category filtering & toggle collapse
// Props: allParts (object), selectedParts (object), onSelectPart (function)
// ============================================================

import { useState } from "react";
import PartCard from "./PartCard";

const categoryLabels = {
  CPU: "Processor",
  GPU: "Graphics Card",
  RAM: "Memory",
  Storage: "Storage Drive",
  PSU: "Power Supply Unit",
};

const categoryShortTags = {
  CPU: "CORE",
  GPU: "VIDEO",
  RAM: "DDR",
  Storage: "NVME",
  PSU: "POWER",
};

function ComponentSelector({ allParts, selectedParts, onSelectPart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCategory = (cat) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const filterParts = (parts) => {
    if (!searchQuery.trim()) return parts;
    const q = searchQuery.toLowerCase();
    return parts.filter(
      (part) =>
        part.name.toLowerCase().includes(q) ||
        part.brand.toLowerCase().includes(q) ||
        part.specs.toLowerCase().includes(q)
    );
  };

  const categories = Object.keys(allParts);

  return (
    <div className="selector-panel">
      <div className="selector-panel-title">
        <span>Hardware Catalog</span>
        <span className="live-counter-badge">
          {Object.values(selectedParts).filter(Boolean).length}/5 Selected
        </span>
      </div>

      {/* Filter / Search Bar */}
      <div className="catalog-controls">
        <div className="search-input-wrapper">
          <span className="search-icon">SRC //</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search specs, chipsets, or brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery("")}
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="category-pills">
          <button
            className={`pill-btn ${activeTab === "ALL" ? "active" : ""}`}
            onClick={() => setActiveTab("ALL")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              <span className="pill-tag">[{categoryShortTags[cat]}]</span> {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Render Categorized Hardware Blocks */}
      {Object.entries(allParts).map(([category, parts]) => {
        if (activeTab !== "ALL" && activeTab !== category) return null;

        const filteredParts = filterParts(parts);
        if (filteredParts.length === 0 && searchQuery) return null;

        const isCollapsed = collapsedCategories[category];
        const selected = selectedParts[category];

        return (
          <div className="category-block" key={category}>
            {/* Clickable Header for Collapsing/Expanding */}
            <div
              className="category-header clickable"
              onClick={() => toggleCategory(category)}
            >
              <div className="category-header-left">
                <span className="category-badge-chip">
                  {categoryShortTags[category]}
                </span>
                <div>
                  <span className="category-label">
                    {categoryLabels[category] || category}
                  </span>
                  {selected && (
                    <span className="category-selected-tag">
                      Equipped: {selected.name}
                    </span>
                  )}
                </div>
              </div>
              <span className={`collapse-chevron ${isCollapsed ? "collapsed" : ""}`}>
                {isCollapsed ? "[+]" : "[-]"}
              </span>
            </div>

            {/* Collapsible Content */}
            {!isCollapsed && (
              <ul className="parts-list">
                {filteredParts.length === 0 ? (
                  <li className="no-parts-found">No matching hardware found</li>
                ) : (
                  filteredParts.map((part) => (
                    <PartCard
                      key={part.id}
                      part={part}
                      isSelected={selectedParts[category]?.id === part.id}
                      onSelect={() => onSelectPart(category, part)}
                    />
                  ))
                )}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ComponentSelector;
