# RigForge — PC Specs & Hardware Inspector

## 1. Project Title and Description
**Project Title:** RigForge: PC Specs & Hardware Inspector  
**Description:** RigForge is a modern, single-page React hardware inspector and system calculator designed to simplify PC building. The application allows users to browse an extensive catalog of computer hardware components (CPUs, GPUs, RAM, High-speed NVMe Storage, and Power Supplies), configure a custom PC build, and immediately inspect real-time metrics. These include real-time wattage consumption calculations (TDP calculation), power supply unit (PSU) headroom diagnostics with dynamic overload warnings, and automated Philippine Peso (₱) price summation.

---

## 2. Justification for the App
Building a computer requires carefully balancing component power draws and budget allocations. Mismatching a high-end graphics card with an underpowered power supply unit can lead to system instability or hardware failure. 

RigForge was created to solve this problem by providing an interactive, beginner-friendly system builder. It caters to:
- **PC Enthusiasts & Gamers:** Who want to preview builds, test compatibility, and monitor TDP requirements.
- **Students & Freelance Creatives:** Looking for a workstation within a specific budget in Philippine Pesos (₱).
- **IT Instructors & Students:** Demonstrating state-driven dynamic calculations and component-driven web architecture.

---

## 3. Steps I Took
1. **Ideation & Architecture Planning:** Designed the component hierarchy, selecting a centralized state design (`App.jsx` as single source of truth) with dedicated children for catalog display, hardware cards, summary metrics, and power gauges.
2. **Scaffolding with Vite:** Initialized a fast React template via Vite, establishing strict component directory structure and modular data files.
3. **Data Modeling:** Built a comprehensive local hardware catalog (`parts.js`) featuring real-world specs, wattage ratings (TDP), and localized retail pricing in Philippine Pesos.
4. **State Management & Core Logic:** Implemented React hooks (`useState`, `useEffect`, `useRef`) to manage user selections, real-time search queries, category collapse states, and dynamic calculations:
   - Dynamic wattage sum via `reduce()`
   - Headroom calculation (`PSU Capacity - Total TDP`) with conditional warning thresholds
   - Budget tallying with numeric string formatting
5. **Interactive UI & Visual Engineering:** Developed an animated canvas-based starry constellation and particle parallax background with mouse-tracking depth, cyber glassmorphism design, filter tags, and responsive layout.

---

## 4. What I Learned
- **React State & Props:** Gained deep practical understanding of unidirectional data flow — maintaining state in a parent component and passing callbacks down to trigger state mutations from nested cards.
- **Derived State vs. Extra State:** Learned that values like `totalCost` and `totalWattage` don't require duplicate state hooks; calculating them on each render pass from `selectedParts` prevents race conditions and synchronization bugs.
- **CSS Architecture:** Explored CSS custom properties (tokens), backdrop blur filters, custom keyframe animations, and flexible responsive grid layouts without relying on external UI libraries.
- **Challenges Overcome:** Coordinating the responsive sticky sidebar alongside collapsible categories while keeping canvas particle rendering performant and silky smooth across various screen sizes.

---

## 5. Technical Specification Checklist (For Evaluation)
- [x] **Vite React Project:** Runs error-free on localhost.
- [x] **Separate Components:** `Header.jsx`, `ComponentSelector.jsx`, `PartCard.jsx`, `BuildSummary.jsx`, `PowerMeter.jsx`, `ParallaxBackground.jsx`.
- [x] **Props Passing:** Data flows seamlessly between parent and children.
- [x] **React State:** Managed with `useState` (build selection, query search, collapse states, build name).
- [x] **Lists with `map()` and unique keys:** Categorized lists and manifests dynamically generated with stable keys.
- [x] **Interactive Form Inputs:** Search query input, build name input, category filter pills, reset triggers.
- [x] **External CSS:** Comprehensive custom CSS (`App.css`) with over 40 distinct CSS rules and variables.
- [x] **Currency:** Localized in Philippine Pesos (₱).

