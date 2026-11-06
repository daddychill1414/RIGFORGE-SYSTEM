// ========================================
// PC Parts Database (Placeholder Data)
// Prices in Philippine Peso (₱)
// Each part has: id, name, brand, specs, price, tdp (power draw in watts)
// ========================================

export const cpuList = [
  {
    id: "cpu-1",
    name: "Ryzen 5 7600X",
    brand: "AMD",
    specs: "6 Cores / 12 Threads • 4.7–5.3 GHz",
    price: 11990,
    tdp: 105,
    category: "CPU",
  },
  {
    id: "cpu-2",
    name: "Ryzen 7 7800X3D",
    brand: "AMD",
    specs: "8 Cores / 16 Threads • 4.2–5.0 GHz • 96MB V-Cache",
    price: 19990,
    tdp: 120,
    category: "CPU",
  },
  {
    id: "cpu-3",
    name: "Core i5-14600K",
    brand: "Intel",
    specs: "14 Cores (6P+8E) / 20 Threads • 3.5–5.3 GHz",
    price: 16490,
    tdp: 125,
    category: "CPU",
  },
  {
    id: "cpu-4",
    name: "Core i7-14700K",
    brand: "Intel",
    specs: "20 Cores (8P+12E) / 28 Threads • 3.4–5.6 GHz",
    price: 22990,
    tdp: 253,
    category: "CPU",
  },
  {
    id: "cpu-5",
    name: "Ryzen 9 7950X",
    brand: "AMD",
    specs: "16 Cores / 32 Threads • 4.5–5.7 GHz",
    price: 31990,
    tdp: 170,
    category: "CPU",
  },
];

export const gpuList = [
  {
    id: "gpu-1",
    name: "RTX 4060",
    brand: "NVIDIA",
    specs: "8GB GDDR6 • 3072 CUDA Cores",
    price: 17990,
    tdp: 115,
    category: "GPU",
  },
  {
    id: "gpu-2",
    name: "RTX 4070",
    brand: "NVIDIA",
    specs: "12GB GDDR6X • 5888 CUDA Cores",
    price: 31990,
    tdp: 200,
    category: "GPU",
  },
  {
    id: "gpu-3",
    name: "RTX 4070 Ti SUPER",
    brand: "NVIDIA",
    specs: "16GB GDDR6X • 8448 CUDA Cores",
    price: 46990,
    tdp: 285,
    category: "GPU",
  },
  {
    id: "gpu-4",
    name: "RX 7800 XT",
    brand: "AMD",
    specs: "16GB GDDR6 • 3840 Stream Processors",
    price: 26990,
    tdp: 263,
    category: "GPU",
  },
  {
    id: "gpu-5",
    name: "RTX 4090",
    brand: "NVIDIA",
    specs: "24GB GDDR6X • 16384 CUDA Cores",
    price: 94990,
    tdp: 450,
    category: "GPU",
  },
];

export const ramList = [
  {
    id: "ram-1",
    name: "Vengeance DDR5-5600 16GB",
    brand: "Corsair",
    specs: "2x8GB • DDR5-5600 • CL36",
    price: 2990,
    tdp: 8,
    category: "RAM",
  },
  {
    id: "ram-2",
    name: "Vengeance DDR5-6000 32GB",
    brand: "Corsair",
    specs: "2x16GB • DDR5-6000 • CL30",
    price: 5490,
    tdp: 10,
    category: "RAM",
  },
  {
    id: "ram-3",
    name: "Trident Z5 RGB DDR5-6400 32GB",
    brand: "G.Skill",
    specs: "2x16GB • DDR5-6400 • CL32",
    price: 7290,
    tdp: 12,
    category: "RAM",
  },
  {
    id: "ram-4",
    name: "Trident Z5 RGB DDR5-6000 64GB",
    brand: "G.Skill",
    specs: "2x32GB • DDR5-6000 • CL30",
    price: 10990,
    tdp: 16,
    category: "RAM",
  },
];

export const storageList = [
  {
    id: "sto-1",
    name: "980 PRO 1TB",
    brand: "Samsung",
    specs: "NVMe M.2 • 7,000 MB/s Read • PCIe 4.0",
    price: 5290,
    tdp: 6,
    category: "Storage",
  },
  {
    id: "sto-2",
    name: "990 PRO 2TB",
    brand: "Samsung",
    specs: "NVMe M.2 • 7,450 MB/s Read • PCIe 4.0",
    price: 9290,
    tdp: 8,
    category: "Storage",
  },
  {
    id: "sto-3",
    name: "SN850X 1TB",
    brand: "WD Black",
    specs: "NVMe M.2 • 7,300 MB/s Read • PCIe 4.0",
    price: 4690,
    tdp: 7,
    category: "Storage",
  },
  {
    id: "sto-4",
    name: "T500 2TB",
    brand: "Crucial",
    specs: "NVMe M.2 • 7,400 MB/s Read • PCIe 4.0",
    price: 7990,
    tdp: 7,
    category: "Storage",
  },
];

export const psuList = [
  {
    id: "psu-1",
    name: "RM650x (2024)",
    brand: "Corsair",
    specs: "650W • 80+ Gold • Fully Modular",
    price: 5790,
    wattage: 650,
    tdp: 0,
    category: "PSU",
  },
  {
    id: "psu-2",
    name: "RM850x (2024)",
    brand: "Corsair",
    specs: "850W • 80+ Gold • Fully Modular",
    price: 7990,
    wattage: 850,
    tdp: 0,
    category: "PSU",
  },
  {
    id: "psu-3",
    name: "Toughpower GF3 1000W",
    brand: "Thermaltake",
    specs: "1000W • 80+ Gold • ATX 3.0",
    price: 9290,
    wattage: 1000,
    tdp: 0,
    category: "PSU",
  },
  {
    id: "psu-4",
    name: "Supernova 1300 G+",
    brand: "EVGA",
    specs: "1300W • 80+ Gold • Fully Modular",
    price: 11490,
    wattage: 1300,
    tdp: 0,
    category: "PSU",
  },
];

// Combine all categories for easy access
export const allParts = {
  CPU: cpuList,
  GPU: gpuList,
  RAM: ramList,
  Storage: storageList,
  PSU: psuList,
};
