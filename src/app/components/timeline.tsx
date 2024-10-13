"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "The Beginning",
  "A New Era",
  "The Turn of the Century",
  "Milestone Achieved",
  "A Decade of Growth",
  "Innovation Unleashed",
  "The New Normal",
  "Looking Ahead",
  // 新增的标题
  "Digital Revolution",
  "Global Expansion",
  "Sustainable Future",
  "AI Integration",
  "Market Disruption",
  "Quantum Leap",
  "Blockchain Adoption",
  "Space Exploration",
  "Renewable Energy Shift",
  "Biotech Breakthrough",
  "Virtual Reality Era",
  "Cybersecurity Focus",
  "Robotic Automation",
  "5G Connectivity",
  "Circular Economy",
  "Personalized Medicine",
  "Smart Cities",
  "Autonomous Vehicles",
  "Nanotechnology Advances",
  "Green Revolution",
  "Data-Driven Decisions",
  "Augmented Reality Integration",
  "Internet of Things Expansion",
  "Quantum Computing Era",
  "Sustainable Agriculture",
  "3D Printing Innovation",
  "Renewable Energy Dominance",
  "Space Tourism",
  "Artificial General Intelligence",
  "Fusion Energy Breakthrough",
  "Hyperloop Transportation",
  "Vertical Farming",
  "Brain-Computer Interfaces",
  "Longevity Research",
  "Underwater Colonization",
  "Holographic Communication",
  "Genetic Engineering Advancements",
  "Robotic Companions",
  "Sustainable Fashion",
  "Drone Delivery Networks",
  "Bionic Enhancements",
  "Zero-Waste Movement",
  "Quantum Internet",
  "Space Mining",
  "Lab-Grown Meat Industry",
  "Neuralink Integration",
  "Flying Cars",
  "Sustainable Ocean Farming",
  "Antimatter Energy",
  "Cryogenic Preservation",
  "Terraforming Mars",
  "Molecular Nanotechnology",
  "Quantum Cryptography",
  "Artificial Photosynthesis",
  "Exoskeleton Suits",
  "Interstellar Communication",
  "Bioprinting Organs",
  "Fusion-Powered Spacecraft",
  "Quantum Sensors",
  "Sustainable Megacities",
  "Asteroid Mining",
  "Synthetic Biology Revolution",
  "Quantum Teleportation",
  "Robotic Space Exploration",
  "Sustainable Desalination",
  "Artificial Superintelligence",
  "Wormhole Travel",
  "Nanomedicine Breakthroughs",
  "Dyson Sphere Construction",
  "Quantum Consciousness",
  "Sustainable Arctic Development",
  "Galactic Internet",
  "Time Crystal Technology",
  "Sustainable Moon Base",
  "Quantum Life Extension",
  "Interplanetary Commerce",
  "Sustainable Desert Greening",
  "Quantum Weather Control",
  "Martian Colonization",
  "Sustainable Ocean Cities",
  "Quantum Energy Grid",
  "Interstellar Propulsion",
  "Sustainable Atmospheric Cleaning",
  "Quantum Gravity Mastery",
  "Galactic Diplomacy",
  "Sustainable Polar Habitats",
  "Quantum Reality Manipulation",
  "Universal Translator",
  "Sustainable Space Elevators",
  "Quantum Dimension Travel",
  "Galactic Ecosystem Preservation",
  "Sustainable Asteroid Habitats",
  "Quantum Multiverse Navigation",
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const calculateScale = (index: number) => {
    if (hoveredIndex === null) return 0.4;
    const distance = Math.abs(index - hoveredIndex);
    return Math.max(1 - distance * 0.2, 0.4);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <div className="flex h-[500px]">
      <motion.div
        className="flex flex-col"
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {titles.map((title, i) => {
          const isSelected = selected === i;

          return (
            <motion.button
              key={i}
              custom={i}
              variants={itemVariants}
              className="relative flex items-center py-1 ml-32"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                // setSelected(i);
                window.location.href = `/blog/${encodeURIComponent(title)}`;
              }}
              onTouchStart={() => handleMouseEnter(i)}
              onTouchEnd={handleMouseLeave}
            >
              <motion.div
                key={i}
                className={`h-1 w-5 rounded-[4px] mr-2 ${
                  selected === i
                    ? "bg-sky-500 dark:bg-sky-400"
                    : "bg-neutral-600 dark:bg-neutral-300"
                }`}
                animate={{
                  scale: calculateScale(i),
                }}
                initial={{ scale: 0.4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.span
                className={`text-[11px] whitespace-nowrap overflow-hidden text-ellipsis ${
                  isSelected
                    ? "text-sky-500 dark:text-sky-400"
                    : "text-neutral-700 dark:text-neutral-300"
                }`}
              >
                {title}
              </motion.span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
