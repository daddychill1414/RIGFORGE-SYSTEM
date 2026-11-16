# ITWM101 FINAL PROJECT: WRITTEN REPORT
**Course:** ITWM101 — Web Development / Front-End Technologies  
**Project Title:** RigForge — PC Setup & Hardware Specs Inspector  
**Student Name:** [Your Name / Student ID]  
**Date Submitted:** November 16, 2026  
**Instructor:** [Instructor's Name]  

---

## 1. Project Title and Description

### Project Title
**RigForge: PC Setup & Hardware Specs Inspector**

### Description
RigForge is a responsive, modern single-page React web application engineered to simplify custom desktop computer building and hardware budgeting. Building a desktop PC can be intimidating for beginners due to component incompatibilities, complex power requirements, and fluctuating local pricing. RigForge eliminates guesswork by functioning as an interactive hardware laboratory.

The application allows users to:
1. **Browse an Extensive Component Catalog:** Select components across five vital categories: Processors (CPU), Graphics Cards (GPU), Memory (RAM), High-Speed NVMe Storage, and Power Supply Units (PSU).
2. **Calculate Real-Time Power Draw & Headroom:** Automatically calculate estimated system power consumption (TDP) and compare it against the equipped PSU wattage, triggering real-time visual alerts (Safe, Caution, Overload).
3. **Analyze System Balance & Bottlenecks:** A built-in synergy engine detects tier discrepancies between the CPU and GPU (e.g., pairing an entry-level CPU with an ultra-enthusiast GPU).
4. **Instant 1-Click Architectural Presets:** Test configurations quickly through pre-configured setups (*Budget Esports*, *Pro Creator*, and *Ultimate Apex*).
5. **Sort, Search, & Categorize:** Search parts dynamically by brand, model, or specs, and sort parts by price or power consumption.
6. **Local Pricing in Philippine Pesos (₱):** Provides real-world Philippine market pricing with formatted currency and tax considerations.
7. **Export & Share Configurations:** Export an itemized hardware manifest to the clipboard with one click.
8. **Dark & Light Mode Support:** Toggle between cyber-dark and clean-light interfaces with dynamic SVG icons.

---

## 2. Justification for the App

### Why I Chose This Idea
Many first-time PC builders and computing students struggle with two major issues when choosing hardware:
- **Power Mismatches:** Selecting an inadequate power supply unit often leads to system crashes, thermal throttling, or damaged components.
- **Hardware Bottlenecks & Budget Imbalances:** Overspending on a high-tier graphics card while using an entry-level CPU wastes money because the CPU cannot feed the GPU fast enough.

I chose this project because it directly solves a real-world technological challenge while providing an excellent demonstration of React's core principles—specifically reactive state updates, unidirectional data flow, compound conditional logic, and modular component architectures.

### Target Audience
- **Students & Freelance Creatives:** Users seeking a balanced workstation tailored to editing, programming, or 3D design within a specific peso budget.
- **PC Enthusiasts & Gamers:** Individuals verifying power headroom and testing part combinations before buying.
- **Educators & IT Peers:** Anyone looking for a clear visual demonstration of hardware specifications, power loads, and front-end state manipulation.

---

## 3. Steps I Took

The development lifecycle progressed through structured engineering stages:

1. **Ideation & Requirements Mapping:**
   - Outlined all course rubric requirements (Vite build, at least 3 components, props, `useState`, list rendering with `.map()`, user inputs, and external CSS).
   - Planned the data structure for hardware specifications (IDs, names, brands, specs, pricing in ₱, TDP ratings, and balance tiers).

2. **Project Scaffolding with Vite:**
   - Generated a clean React environment using `npm create vite@latest pc-specs-inspector -- --template react`.
   - Structured the repository cleanly into `src/components/`, `src/data/`, and asset directories.

3. **Data Modeling (`parts.js`):**
   - Populated realistic specifications for AMD, Intel, NVIDIA, Corsair, Samsung, G.Skill, and Crucial products.
   - Assigned tier values (Tier 1 to Tier 5) to enable architectural bottleneck calculations.

4. **Component Hierarchy & Architecture:**
   - Separated features into focused components:
     - `Header.jsx`: Branding, real-time live power/cost counters, and Dark/Light mode toggle.
     - `PresetSelector.jsx`: One-click baseline builds (*Budget*, *Creator*, *Apex*).
     - `BrandLogos.jsx`: Infinite looping marquee showcasing certified hardware manufacturers.
     - `CompatibilityEngine.jsx`: Real-time synergy alerts and bottleneck analysis.
     - `ComponentSelector.jsx`: Search filtering, sorting (price/wattage), and collapsible category accordions.
     - `PartCard.jsx`: Reusable component displaying individual hardware cards with branded tags.
     - `BuildSummary.jsx`: Selected parts manifest, progress meter, build naming input, and total price calculation.
     - `PowerMeter.jsx`: Visual wattage meter with multi-stage color thresholds and safety headroom diagnostics.
     - `NotificationModal.jsx` & `NotificationToast.jsx`: Clean modal dialogs and toast alerts for exporting specs.
     - `ParallaxBackground.jsx`: Interactive canvas with animated stars and cursor-following depth.

5. **State Management & Unidirectional Logic:**
   - Centralized primary state in `App.jsx` (`selectedParts`, `buildName`, `theme`, `isModalOpen`, `toast`).
   - Derived values (`totalCost`, `totalWattage`, `psuWattage`) on each render to prevent desynchronization bugs.
   - Implemented immutable state updates when toggling parts or loading presets.

6. **Styling & Visual Design (`App.css`):**
   - Wrote over 1,700 lines of custom CSS using CSS custom properties (design tokens).
   - Designed both Dark and Light themes with glassmorphism card backdrops, smooth transitions, and responsive mobile adaptations.

7. **Build Verification & Version Control:**
   - Ran `npm run build` to verify zero production warnings or bundle errors.
   - Initialized a Git repository and pushed all commits to GitHub.

---

## 4. What I Learned

### About React
- **Unidirectional Data Flow:** I learned how state should live in the closest common ancestor (`App.jsx`) and be passed down to child components via props, with callback functions handling updates.
- **Derived State vs. Redundant State:** Calculating totals (`totalCost`, `totalWattage`) directly from state during rendering is much safer and cleaner than maintaining separate state variables that require manual synchronization.
- **Component Reusability:** Creating modular components like `PartCard.jsx` demonstrated how one clean template can render dozens of distinct hardware items via `.map()` using unique keys.

### About CSS
- **Design Tokens (CSS Variables):** Implementing `data-theme="dark"` and `data-theme="light"` via CSS custom properties made switching themes clean and instantaneous without duplicating rules.
- **Advanced Animations:** I learned how to build infinite seamless marquee animations using CSS `@keyframes` with `mask-image` linear gradients for smooth edge fading.
- **Glassmorphism & Depth:** Combining `backdrop-filter: blur()`, subtle inset borders, and radial gradients helped produce an interface that looks like professional hardware software.

### About JavaScript
- **Array Transformations:** Gained hands-on experience using `.reduce()` for summing power draws and costs, `.filter()` for live search queries, and immutable `.sort()` for multi-criteria ordering without modifying the original data array.
- **HTML5 Canvas & Math:** Implemented velocity vectors, distance formulas, and mouse interpolation (`lerp`) inside `requestAnimationFrame` for the interactive background.

### What Was Difficult
- **Managing Multiple Filter States Simultaneously:** Combining search text queries, category filter pills, sorting criteria (Price Low/High, Power Draw), and accordion collapse states without unexpected UI jumps required careful state organization.
- **Avoiding Over-Engineering:** Learning when to use pure CSS transitions instead of heavy third-party animation libraries kept the app lightweight, fast, and dependency-free.

---

## 5. Rubric Verification Checklist

| Requirement | Implementation Details | Status |
| :--- | :--- | :---: |
| **Vite React Project without Errors** | Scaffolds cleanly, builds with `vite build` in ~400ms with zero errors. | **PASSED** |
| **At least 3 Components in Separate Files** | Features **10 separate components** in `src/components/`. | **PASSED** |
| **Props Passed Between Components** | Passed data and handler callbacks across multiple parent-child layers. | **PASSED** |
| **State using `useState`** | Used in `App.jsx`, `ComponentSelector.jsx`, and modal/toast handlers. | **PASSED** |
| **List Shown with `.map()` and Unique Key** | Categorized hardware lists, preset cards, and manifests all use stable unique keys. | **PASSED** |
| **User Input / Form** | Includes real-time search, build name input, sort selector, and modal text area. | **PASSED** |
| **External CSS with at least 10 Properties** | Over 50 distinct CSS properties utilized in `src/App.css`. | **PASSED** |

---

## 6. Screenshots of the Running Application

> **Note for Word Document Submission:**  
> Paste your screenshots in the boxes below before submitting or converting to PDF.

### Screenshot 1: Main Application Interface (Dark Mode with Preset Loaded)
*(Capture the full screen showing the Hero section, Preset Builders, Real-time Bottleneck Engine, Hardware Catalog, and the Power Meter with Build Summary).*

```
+---------------------------------------------------------------------------------+
|                                                                                 |
|                        [ PASTE SCREENSHOT 1 HERE ]                              |
|         (Overview showing RigForge in Dark Mode with components selected)        |
|                                                                                 |
+---------------------------------------------------------------------------------+
```
*Caption: Figure 1 — RigForge running in Dark Mode, showing the active component selection, 1-click presets, and real-time power calculations in Philippine Pesos (₱).*

---

### Screenshot 2: Hardware Synergy Diagnostics, Light Mode, and Export Manifest
*(Capture the app switched to Light Mode, highlighting the Compatibility & Bottleneck Engine advisory banner, or the 1-Click Export Specs Modal window).*

```
+---------------------------------------------------------------------------------+
|                                                                                 |
|                        [ PASTE SCREENSHOT 2 HERE ]                              |
|          (Light Mode view OR the Export Hardware Manifest modal dialog)          |
|                                                                                 |
+---------------------------------------------------------------------------------+
```
*Caption: Figure 2 — RigForge demonstrating the Real-time Synergy & Bottleneck Engine and the Export Hardware Manifest modal.*

---

### Screenshot 3: Infinite Hardware Partner Marquee & Interactive Power Meter (Optional)
```
+---------------------------------------------------------------------------------+
|                                                                                 |
|                        [ PASTE SCREENSHOT 3 HERE ]                              |
|           (Close-up of Power Draw meter headroom and Brand Partner logos)       |
|                                                                                 |
+---------------------------------------------------------------------------------+
```
*Caption: Figure 3 — Detailed view of the Power Draw meter with PSU headroom alerts and infinite brand logo marquee strip.*

---

**GitHub Repository:** [https://github.com/daddychill1414/RIGFORGE-SYSTEM.git](https://github.com/daddychill1414/RIGFORGE-SYSTEM.git)
