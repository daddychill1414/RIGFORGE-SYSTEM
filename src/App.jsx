// ============================================================
// App.jsx — Root Component
// Manages application state, theme switching (Dark/Light),
// Presets, Bottleneck Compatibility Engine, and passes props.
// ============================================================

import { useState, useEffect } from "react";

// Components
import ParallaxBackground from "./components/ParallaxBackground";
import Header from "./components/Header";
import PresetSelector from "./components/PresetSelector";
import CompatibilityEngine from "./components/CompatibilityEngine";
import ComponentSelector from "./components/ComponentSelector";
import BuildSummary from "./components/BuildSummary";
import PowerMeter from "./components/PowerMeter";
import NotificationModal from "./components/NotificationModal";
import NotificationToast from "./components/NotificationToast";

// Data
import { allParts, presetBuilds } from "./data/parts";

function App() {
  // ---- Theme State: 'dark' or 'light' ----
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ---- State: selected parts (one per category) ----
  const [selectedParts, setSelectedParts] = useState({
    CPU: null,
    GPU: null,
    RAM: null,
    Storage: null,
    PSU: null,
  });

  // ---- State: build name (controlled input) ----
  const [buildName, setBuildName] = useState("");

  // ---- State: export manifest modal ----
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [manifestText, setManifestText] = useState("");

  // ---- State: toast notification ----
  const [toast, setToast] = useState({ visible: false, message: "", type: "info" });

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: "", type: "info" });
    }, 2800);
  };

  // ---- Derived values (computed from state) ----

  // Total cost: sum all selected part prices
  const totalCost = Object.values(selectedParts).reduce(
    (sum, part) => sum + (part?.price ?? 0),
    0
  );

  // Total power draw: sum all selected part TDPs (excluding PSU)
  const totalWattage = Object.entries(selectedParts).reduce(
    (sum, [category, part]) => {
      if (category === "PSU") return sum;
      return sum + (part?.tdp ?? 0);
    },
    0
  );

  // PSU capacity (if selected)
  const psuWattage = selectedParts.PSU?.wattage ?? null;

  // ---- Event handlers ----

  const handleSelectPart = (category, part) => {
    setSelectedParts((prev) => {
      const isDeselect = prev[category]?.id === part.id;
      return {
        ...prev,
        [category]: isDeselect ? null : part,
      };
    });
  };

  const handleApplyPreset = (preset) => {
    setSelectedParts({ ...preset.parts });
    setBuildName(preset.name);
    showToast(`Loaded "${preset.name}" preset build.`, "success");
  };

  const handleClearBuild = () => {
    setSelectedParts({
      CPU: null,
      GPU: null,
      RAM: null,
      Storage: null,
      PSU: null,
    });
    setBuildName("");
    showToast("Rig configuration cleared.", "info");
  };

  const handleExportBuild = () => {
    const title = buildName.trim() || "Custom PC Rig";
    let text = `========================================\n`;
    text += ` RIGFORGE SYSTEM MANIFEST: ${title.toUpperCase()}\n`;
    text += `========================================\n\n`;

    Object.entries(selectedParts).forEach(([cat, part]) => {
      if (part) {
        text += `[${cat.padEnd(7)}] ${part.brand} ${part.name}\n`;
        text += `          Specs: ${part.specs}\n`;
        text += `          Price: ₱${part.price.toLocaleString()} | Power: ${part.tdp}W\n\n`;
      } else {
        text += `[${cat.padEnd(7)}] (Empty Slot)\n\n`;
      }
    });

    text += `----------------------------------------\n`;
    text += `Total System TDP : ${totalWattage}W\n`;
    text += `PSU Capacity     : ${psuWattage ? `${psuWattage}W` : "Unassigned"}\n`;
    text += `Total Investment : ₱${totalCost.toLocaleString()} PHP\n`;
    text += `========================================\n`;

    setManifestText(text);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Animated parallax background layer */}
      <ParallaxBackground />

      {/* Main app container */}
      <div className="app-container">
        {/* Header with Theme Toggle */}
        <Header
          totalCost={totalCost}
          totalWattage={totalWattage}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overline">// SYSTEM HARDWARE INSPECTOR</div>
          <h1 className="hero-title">
            Forge your custom{" "}
            <span className="hero-title-gradient">hardware rig.</span>
          </h1>
          <p className="hero-description">
            Evaluate component specifications, cross-reference pricing in Philippine Pesos,
            and audit power draw headroom in real-time.
          </p>

          {/* Preset Builder Selector */}
          <PresetSelector
            presets={presetBuilds}
            onApplyPreset={handleApplyPreset}
          />
        </section>

        {/* Main two-column layout */}
        <main className="main-content">
          {/* Left: Part selector with search & sort */}
          <div className="left-column">
            {/* Real-time Hardware Synergy Diagnostics */}
            <CompatibilityEngine
              selectedParts={selectedParts}
              totalWattage={totalWattage}
              psuWattage={psuWattage}
            />

            <ComponentSelector
              allParts={allParts}
              selectedParts={selectedParts}
              onSelectPart={handleSelectPart}
            />
          </div>

          {/* Right: Sticky sidebar */}
          <aside className="summary-sidebar">
            <BuildSummary
              buildName={buildName}
              onBuildNameChange={setBuildName}
              selectedParts={selectedParts}
              totalCost={totalCost}
              onClearBuild={handleClearBuild}
              onExportBuild={handleExportBuild}
            />

            <PowerMeter
              totalWattage={totalWattage}
              psuWattage={psuWattage}
            />
          </aside>
        </main>
      </div>

      {/* Export System Manifest Modal */}
      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Hardware Configuration Manifest"
        content={manifestText}
        onNotify={(msg) => showToast(msg, "success")}
      />

      {/* Non-intrusive Toast Notification */}
      <NotificationToast
        message={toast.message}
        isVisible={toast.visible}
        type={toast.type}
      />
    </>
  );
}

export default App;
