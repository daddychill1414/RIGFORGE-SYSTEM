# RigForge — PC Specs & Hardware Inspector

## 1. Project Title and Description
**Project Title:** RigForge: PC Specs & Hardware Inspector  
**Description:** RigForge is a modern, single-page React hardware inspector, bottleneck evaluator, and system power calculator. It allows users to browse an extensive catalog of computer hardware components (CPUs, GPUs, RAM, High-speed NVMe Storage, and Power Supplies), configure a custom PC build or benchmark via 1-click curated architectural presets, and immediately inspect real-time metrics. These include real-time wattage consumption calculations (TDP calculation), power supply unit (PSU) headroom diagnostics with dynamic overload warnings, a hardware synergy/bottleneck engine, customizable hardware sorting (Price and Power), and automated Philippine Peso (₱) price summation.

---

## 2. Justification for the App
Building a computer requires carefully balancing component power draws, budget allocations, and component synergies. Mismatching a low-tier processor with an ultra-enthusiast graphics card causes severe CPU bottlenecks, while selecting an underpowered power supply unit can lead to system instability or hardware failure.

RigForge was created to solve these exact issues by providing an interactive, beginner-friendly system builder. It caters to:
- **PC Enthusiasts & Gamers:** Who want to preview builds, test compatibility, and monitor TDP requirements.
- **Students & Freelance Creatives:** Looking for a balanced workstation within a specific budget in Philippine Pesos (₱).
- **IT Instructors & Students:** Demonstrating state-driven dynamic calculations, compound Boolean logic, and component-driven web architecture.

---

## 3. Steps I Took
1. **Ideation & Architecture Planning:** Designed the component hierarchy, selecting a centralized state design (`App.jsx` as single source of truth) with dedicated children for catalog display, hardware cards, summary metrics, preset architecture, bottleneck diagnostics, and power gauges.
2. **Scaffolding with Vite:** Initialized a fast React template via Vite, establishing strict component directory structure and modular data files.
3. **Data Modeling & Tier Classification:** Built a comprehensive local hardware catalog (`parts.js`) featuring real-world specs, tier ratings (1 to 5), wattage ratings (TDP), and localized retail pricing in Philippine Pesos. Added curated preset configurations for Budget Esports, Pro Creator, and Ultimate Apex builds.
4. **State Management & Core Logic:** Implemented React hooks (`useState`, `useEffect`, `useRef`) to manage user selections, real-time search queries, multi-criteria sorting, category collapse states, and dynamic calculations:
   - Dynamic wattage sum via `reduce()`
   - Headroom calculation (`PSU Capacity - Total TDP`) with conditional warning thresholds
   - Architectural Synergy Engine assessing tier differences between CPU and GPU
   - Dynamic array manipulation for multi-criteria sorting (Price asc/desc, Power draw)
   - Budget tallying with numeric string formatting
5. **Interactive UI & Visual Engineering:** Developed an animated canvas-based starry constellation and particle parallax background with mouse-tracking depth, cyber glassmorphism design, filter tags, Dark/Light mode theme engine, and responsive layout.

---

## 4. What I Learned
- **React State & Props:** Gained deep practical understanding of unidirectional data flow — maintaining state in a parent component and passing callbacks down to trigger state mutations from nested cards.
- **Derived State vs. Extra State:** Learned that values like `totalCost`, `totalWattage`, and compatibility diagnostics don't require duplicate state hooks; calculating them on each render pass from `selectedParts` prevents race conditions and synchronization bugs.
- **Array Transformations in React:** Applied array `.sort()` and `.filter()` immutably to power dynamic price and wattage ordering without mutating the source dataset.
- **CSS Architecture:** Explored CSS custom properties (tokens), dual theme color token sets (Light/Dark mode), backdrop blur filters, custom keyframe animations, and flexible responsive grid layouts without relying on external UI libraries.
- **Challenges Overcome:** Coordinating the responsive sticky sidebar alongside collapsible categories, preset batch state updates, and bottleneck calculation rules while keeping canvas particle rendering performant and silky smooth across various screen sizes.

---

## 5. Technical Specification Checklist (For Evaluation)
- [x] **Vite React Project:** Runs error-free on localhost.
- [x] **Separate Components:** `Header.jsx`, `PresetSelector.jsx`, `CompatibilityEngine.jsx`, `ComponentSelector.jsx`, `PartCard.jsx`, `BuildSummary.jsx`, `PowerMeter.jsx`, `ParallaxBackground.jsx`, `NotificationModal.jsx`, `NotificationToast.jsx`.
- [x] **Props Passing:** Data flows seamlessly between parent and children.
- [x] **React State:** Managed with `useState` (build selection, query search, sort criteria, collapse states, build name, theme).
- [x] **Lists with `map()` and unique keys:** Categorized lists, preset cards, and manifests dynamically generated with stable keys.
- [x] **Interactive Form Inputs:** Search query input, sort dropdown selector, build name input, category filter pills, reset triggers, theme toggle.
- [x] **External CSS:** Comprehensive custom CSS (`App.css`) with over 50 distinct CSS rules and variables across both Dark and Light modes.
- [x] **Currency:** Localized in Philippine Pesos (₱).
