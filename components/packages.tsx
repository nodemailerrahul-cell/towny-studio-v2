"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Check, Crown, Home, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type PackageSection = {
  title: string;
  items: string[];
};

type PackageData = {
  name: string;
  price: string;
  icon: typeof Home;
  popular?: boolean;
  description: string;
  features: string[];
  sections: PackageSection[];
};

const packages: PackageData[] = [
  {
    name: "Basic Package",
    price: "₹1,650",
    icon: Home,
    description:
      "Essential construction package with practical design, standard materials, and core site management.",
    features: [
      "3D Elevation & Interiors Design",
      "2D Scheme, Electrical & Plumbing Drawings",
      "Soil Test Report Included",
      "Sunvik TMT / Kamadhenu Steel",
      "Cera Bath & CP Fittings",
      "Vitrified Tiles up to ₹60/sqft",
    ],
    sections: [
      {
        title: "Design",
        items: ["3D Elevation Design", "3D Interiors Design"],
      },
      {
        title: "Drawing",
        items: [
          "Scheme Drawing: All Floors",
          "Electrical Drawings: All Floors",
          "Plumbing Drawing: All Floors",
        ],
      },
      {
        title: "Soil Test Report",
        items: ["Included"],
      },
      {
        title: "Structure",
        items: [
          "Steel: Sunvik TMT / Kamadhenu or equivalent",
          "Concrete Grade: M20 / M25 or as per structural designer recommendation (Manual Mix)",
          "Cement: Zuari / Bharathi or equivalent of 43 or 53 grade",
          "Solid Blocks: 6-inch thick exterior walls | 4-inch thick inner walls",
          "M Sand: Blockwork & all masonry works",
          "P Sand: Plastering works",
          "Basement Height: Up to 2 feet",
          "Ceiling Height: 10 feet",
          'Parapet Wall: 3 feet height | 4" thick (only for floor with headroom)',
          "Sump: 4000 / 6000 litres",
        ],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles: Up to 9' height, 2'x1' or 2'x2' vitrified tile, up to ₹55/sqft",
          "Bath & CP Fittings: Cera or equivalent | Up to ₹14,000 per bathroom",
          "Floor mounted EWC, wall mounted wash basin, pillar tap, health faucet, shower set, 2-in-1 wall mixer",
          "CP fittings up to ₹36,000 per 1200 sqft",
          "Plumbing Pipes & Fittings: Inner CPVC, outer PVC | APL Apollo or equivalent",
          "Overhead Tank: 1000 litres Sintex | 3 layered | UV protected",
          "Solar Heater Plumbing Lines: Included",
          "Solar Heater: Not included",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen: 2'x2' vitrified tiles up to ₹60/sqft",
          "Balcony & Utility: 1'x1' tiles up to ₹40/sqft",
          "Staircase: 1'x1' up to ₹40/sqft or Sadarahalli Granite up to ₹60/sqft",
          "Car Parking: Anti-skid 1'x1' parking tile up to ₹30/sqft",
          "Terrace Flooring: Screed concreting with waterproofing",
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall / Dado Tile: Vitrified tile (2'x1') up to ₹60/sqft",
          "Sink Faucet: Up to ₹1,500",
          "Kitchen Sink: Stainless steel single bowl with drain board up to ₹3,500",
          "Dining: Wall mounted wash basin",
          "Kitchen Granite Top: Up to ₹220/sqft",
        ],
      },
      {
        title: "Door, Windows & Railing",
        items: [
          "Main Door: Flush door with veneer, Sal wood frame | 32mm | 5\"x3\" frame | 7' x 3.5'",
          "Room Doors: Membrane / Flush door | Sal wood frame | 7'x3'",
          "Bathroom Door: Membrane / Flush door | Sal wood frame | 7'x2.5'",
          "Windows: Aluminium sliding | 4'x4' each room | 5mm clear glass",
          "Staircase Railing: MS railing",
          "Balcony Railing: MS railing",
          "Window Grills: Standard MS grill with enamel paint",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty: 2 coats | JK Putty or equivalent",
          "Wall Painting: 1 coat primer | 2 coats premium emulsion",
          "Ceiling Painting: 1 coat primer | 2 coats tractor emulsion",
          "Exterior Paint: 1 coat primer | 2 coats Ace emulsion",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Orbit / Hi Fi (FRLS grade) fireproof",
          "Switches: Hi Fi",
          "Bedroom: 3 switch boxes (8-module)",
          "Bathroom: 1 inner (4-module) + 1 outer (3-module) | Heater & exhaust point",
          "Living Room: Up to 4 switch boxes (8-module)",
          "Dining: 1 switch (8-module)",
          "Pooja: 1 switch (3-module)",
          "Kitchen: 3 switch boxes (6-module) | HOB, chimney, RO points",
          "Utility: 1 switch box (4-module)",
          "AC Points: 1 for each bedroom",
          "Entrance: 1 switch box (6-module)",
          "Balconies: 1 switch box (3-module)",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer: Dedicated full-time site engineer",
          "Project Manager: Daily site visit",
          "Project Status Monitoring",
          "Architect: Dedicated architect | Frequent site visit | Material & brand selection support",
        ],
      },
      {
        title: "Additional Service (As per Requirement)",
        items: [
          "Compound Wall @ ₹375/sqft & gate",
          "Septic Tank @ ₹25/litre",
          "Lift, Lift Pit and Shaft",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
  {
    name: " Standard Package",
    price: "₹1,875",
    icon: Crown,
    popular: true,
    description:
      "Upgraded package with better structure, improved finishes, and premium bathroom and kitchen specifications.",
    features: [
      "3D Elevation & Interiors Design",
      "Vizag TMT / Jindal Steel",
      "Parryware Bath & CP Fittings",
      "Vitrified Tiles / Granite up to ₹100/sqft",
      "UPVC Sliding Windows (3 Track)",
      "250L Solar Heater Included",
    ],
    sections: [
      {
        title: "Design",
        items: ["3D Elevation Design", "3D Interiors Design"],
      },
      {
        title: "Drawing",
        items: [
          "Scheme Drawing: All Floors",
          "Electrical Drawings: All Floors",
          "Plumbing Drawing: All Floors",
        ],
      },
      {
        title: "Soil Test Report",
        items: ["Included"],
      },
      {
        title: "Structure",
        items: [
          "Steel: Vizag TMT / Jindal or equivalent",
          "Concrete Grade: M20 / M25 / RMC for roof as per structural designer recommendation",
          "Cement: ACC / Dalmia / Birla or equivalent grade",
          "Solid Blocks: 6-inch thick exterior walls | 4-inch thick inner walls",
          "M Sand: Blockwork & all masonry works",
          "P Sand: Plastering works",
          "Basement Height: Up to 3 feet",
          "Ceiling Height: 10 feet",
          'Parapet Wall: 3 feet height | 6" thick (only for floor with headroom)',
          "Sump: 8000 litres",
        ],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles: Up to 9' height, 2'x1' or 2'x2' vitrified tile, up to ₹70/sqft",
          "Bath & CP Fittings: Parryware or equivalent | Up to ₹18,000 per bathroom",
          "Floor mounted EWC, wall mounted wash basin, pillar tap, health faucet, shower set, 2-in-1 wall mixer",
          "CP fittings up to ₹45,000 per 1200 sqft",
          "Plumbing Pipes & Fittings: Inner CPVC, outer PVC | APL Apollo or equivalent",
          "Overhead Tank: 2000 litres Sintex | 3 layered | UV protected",
          "Solar Heater Plumbing Lines: Included",
          "Solar Heater: 250 litre included",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen: 2'x2' vitrified tiles up to ₹100/sqft or granite up to ₹100/sqft",
          "Balcony & Utility: 1'x1' tiles up to ₹50/sqft",
          "Staircase: 1'x1' up to ₹50/sqft or Sadarahalli Granite up to ₹60/sqft",
          "Car Parking: Anti-skid 1'x1' parking tile up to ₹45/sqft",
          "Terrace Flooring: Screed concreting with waterproofing",
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall / Dado Tile: Vitrified tile (2'x1') up to ₹80/sqft",
          "Sink Faucet: Up to ₹2,000",
          "Kitchen Sink: Stainless steel single bowl with drain board up to ₹5,000",
          "Dining: Wall mounted wash basin",
          "Kitchen Granite Top: Up to ₹260/sqft",
        ],
      },
      {
        title: "Door, Windows & Railing",
        items: [
          "Main Door: Teak door with teak frame | 35mm | 5\"x3\" frame | 7' x 3.5' — worth ₹30,000 incl. fixtures",
          "Room Doors: Membrane / Flush door | Sal wood frame | 7'x3'",
          "Bathroom Door: Membrane / Flush door | Sal wood frame | 7'x2.5'",
          "Windows: UPVC sliding with 3 track | 5'x4' each room | 5mm clear glass",
          "Staircase Railing: MS railing",
          "Balcony Railing: 304 SS railing",
          "Window Grills: Standard MS grill with enamel paint",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty: 2 coats | JK Putty or equivalent",
          "Wall Painting: 1 coat primer | 2 coats premium emulsion",
          "Ceiling Painting: 1 coat primer | 2 coats tractor emulsion",
          "Exterior Paint: 1 coat primer | 2 coats Ace emulsion",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Orbit / Hi Fi (FRLS grade) fireproof",
          "Switches: Anchor",
          "Bedroom: 3 switch boxes (8-module)",
          "Bathroom: 1 inner (4-module) + 1 outer (3-module) | Heater & exhaust point",
          "Living Room: Up to 4 switch boxes (8-module)",
          "Dining: 1 switch (8-module)",
          "Pooja: 1 switch (3-module)",
          "Kitchen: 3 switch boxes (6-module) | HOB, chimney, RO points",
          "Utility: 1 switch box (4-module)",
          "AC Points: 1 for each bedroom",
          "Entrance: 1 switch box (6-module)",
          "Balconies: 1 switch box (3-module)",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer: Dedicated full-time site engineer",
          "Project Manager: Daily site visit",
          "Project Status Monitoring",
          "Architect: Dedicated architect | Frequent site visit | Material & brand selection support",
        ],
      },
      {
        title: "Additional Service (As per Requirement)",
        items: [
          "Compound Wall @ ₹375/sqft & gate",
          "Septic Tank @ ₹25/litre",
          "Lift, Lift Pit and Shaft",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
  {
    name: " Premium Package",
    price: "₹2,200",
    icon: Sparkles,
    description:
      "Premium package with advanced design deliverables, detailed interiors, better materials, and no restriction on electrical points.",
    features: [
      "3D Elevation, Interiors & Walkthrough",
      "Interior Detailing & Furniture Layout",
      "Jaquar Bath & CP Fittings",
      "SS 304 Railing with Toughened Glass",
      "Finolex / Havells Wiring",
      "No Restriction on Electrical Points",
    ],
    sections: [
      {
        title: "Design",
        items: [
          "3D Elevation Design",
          "3D Interiors Design",
          "3D Interior Views: All Floors & Walk Through",
        ],
      },
      {
        title: "Drawing",
        items: [
          "Scheme Drawing: All Floors",
          "Electrical Drawings: All Floors",
          "Plumbing Drawing: All Floors",
          "Interior Detailing: All Rooms",
          "Structural Drawings",
          "Furniture Layout: All Floors",
          "Elevation Detail Drawing",
        ],
      },
      {
        title: "Soil Test Report",
        items: ["Included"],
      },
      {
        title: "Structure",
        items: [
          "Steel: Vizag TMT / Jindal / JSW or equivalent",
          "Concrete Grade: Ultratech M20 / M25 / RMC for roof as per structural designer recommendation",
          "Cement: ACC / Dalmia / Birla or equivalent grade",
          "Solid Blocks: 9-inch thick exterior walls | 4-inch thick inner walls",
          "M Sand: Blockwork & all masonry works",
          "P Sand: Plastering works",
          "Basement Height: Up to 4 feet",
          "Ceiling Height: 10 feet",
          'Parapet Wall: 4 feet height | 6" thick (only for floor with headroom)',
          "Sump: 10000 litres",
        ],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles: Up to 9' height, 2'x1' or 2'x2' vitrified tile, up to ₹90/sqft",
          "Bath & CP Fittings: Jaquar or equivalent | Up to ₹20,000 per bathroom",
          "Floor mounted EWC, wall mounted wash basin, pillar tap, health faucet, shower set, 2-in-1 wall mixer",
          "CP fittings up to ₹60,000 per 1200 sqft",
          "Plumbing Pipes & Fittings: Inner CPVC, outer PVC | Ashirwad / Finolex / APL Apollo or equivalent",
          "Overhead Tank: 3000 litres Sintex | 3 layered | UV protected",
          "Solar Heater Plumbing Lines: Included",
          "Solar Heater: 250 litre included",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen: Vitrified tiles / Granite up to ₹100/sqft",
          "Balcony & Utility: 1'x1' tiles up to ₹50/sqft",
          "Staircase: 1'x1' up to ₹50/sqft or Sadarahalli Granite up to ₹60/sqft",
          "Car Parking: Anti-skid 1'x1' parking tile up to ₹45/sqft",
          "Terrace Flooring: Screed concreting with waterproofing",
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall / Dado Tile: Vitrified tile (2'x1') up to ₹100/sqft",
          "Sink Faucet: Up to ₹3,000",
          "Kitchen Sink: SS / Quartz sink with drain up to ₹8,000 (Futura, Carysil)",
          "Dining: Wall mounted wash basin",
          "Kitchen Granite Top: Up to ₹260/sqft",
        ],
      },
      {
        title: "Door, Windows & Railing",
        items: [
          "Main Door: Teak door with teak frame | 35mm | 5\"x3\" frame | 7' x 3.5' — worth ₹40,000 incl. fixtures",
          "Room Doors: Flush door | Sal wood frame | 7'x3'",
          'Pooja Room Door: Burma Teak with teak frame (5" x 2.5") — worth ₹30,000',
          "Bathroom Door: WPC / Flush door | WPC frame | 7'x2.5'",
          "Windows: UPVC sliding with 3 track | No restriction on size, 2 each room | 5mm clear glass",
          "Staircase Railing: SS 304 railing",
          "Balcony Railing: SS 304 railing with 10mm toughened glass",
          "Window Grills: Standard MS grill with enamel paint",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty: 2 coats | Birla White Putty or equivalent",
          "Wall Painting: 1 coat primer | 2 coats Apcolite Premium emulsion",
          "Ceiling Painting: 1 coat primer | 2 coats tractor emulsion",
          "Exterior Paint: 1 coat primer | 2 coats Weatherbond PRO / Apex Exterior Emulsion",
          "Elevation Putty: 2 coats for two sides | Birla Wallseal waterproof",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Finolex / Havells (FRLS grade) fireproof",
          "Switches: GM / Anchor",
          "UPS Wiring Provision: Included",
          "No Restriction on Number of Points",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer: Dedicated full-time site engineer",
          "Project Manager: Daily site visit",
          "Project Status Monitoring",
          "Architect: Dedicated architect | Frequent site visit | Material & brand selection support",
        ],
      },
      {
        title: "Additional Service (As per Requirement)",
        items: [
          "Compound Wall @ ₹375/sqft & gate",
          "Septic Tank @ ₹25/litre",
          "Lift, Lift Pit and Shaft",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
  {
    name: " Luxury Package",
    price: "₹2,625",
    icon: Star,
    description:
      "Top-end package with luxury finishes, designer specifications, premium hardware, and the most spacious structural provisions.",
    features: [
      "3D Elevation, Interiors & Walkthrough",
      "TATA TMT / Jindal / JSW Steel",
      "Kohler / Jaquar Bath Fittings",
      "Marble / Granite up to ₹220/sqft",
      "Biometric Lock & Designer Main Door",
      "11 ft Ceiling Height | 20000L Sump",
    ],
    sections: [
      {
        title: "Design",
        items: [
          "3D Elevation Design",
          "3D Interiors Design",
          "3D Interior Views: All Floors & Walk Through",
        ],
      },
      {
        title: "Drawing",
        items: [
          "Scheme Drawing: All Floors",
          "Electrical Drawings: All Floors",
          "Plumbing Drawing: All Floors",
          "Interior Detailing: All Rooms",
          "Structural Drawings",
          "Furniture Layout: All Floors",
          "Elevation Detail Drawing",
        ],
      },
      {
        title: "Soil Test Report",
        items: ["Included"],
      },
      {
        title: "Structure",
        items: [
          "Steel: TATA TMT / Jindal / JSW or equivalent",
          "Concrete Grade: Ultratech M25 / RMC for roof as per structural designer recommendation",
          "Cement: Ultratech / ACC / Birla or equivalent grade",
          "Solid Blocks: 9-inch thick exterior walls | 4-inch thick inner walls",
          "M Sand: Blockwork & all masonry works",
          "P Sand: Plastering works",
          "Basement Height: Up to 5 feet",
          "Ceiling Height: 11 feet",
          'Parapet Wall: 4 feet height | 6" thick (only for floor with headroom)',
          "Lift Pit & Shaft: Included if required",
          "Sump: 20000 litres",
        ],
      },
      {
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles: Up to 9' height, 2'x1' or 2'x2' vitrified tile, up to ₹90/sqft",
          "Bath & CP Fittings: Kohler / Jaquar or equivalent | Up to ₹20,000 per bathroom",
          "Floor mounted EWC, wall mounted wash basin, pillar tap, health faucet, shower set, 2-in-1 wall mixer",
          "CP fittings up to ₹60,000 per 1200 sqft",
          "Plumbing Pipes & Fittings: Inner CPVC, outer PVC | Ashirwad / Finolex / APL Apollo or equivalent",
          "Overhead Tank: 3000 litres Sintex | 3 layered | UV protected",
          "Solar Heater Plumbing Lines: Included",
          "Solar Heater: 250 litre included",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen: Tiles, granite, or marble up to ₹220/sqft",
          "Balcony & Utility: 1'x1' tiles up to ₹75/sqft",
          "Staircase: Granite / Marble up to ₹220/sqft",
          "Car Parking: Anti-skid 1'x1' parking tile up to ₹75/sqft",
          "Terrace Flooring: 2'x2' exterior grade vitrified tile / screed concreting with waterproofing",
        ],
      },
      {
        title: "Kitchen & Dining",
        items: [
          "Wall / Dado Tile: Vitrified tile (2'x1') up to ₹125/sqft",
          "Sink Faucet: Up to ₹4,000",
          "Kitchen Sink: SS / Quartz sink with drain up to ₹8,000 (Futura, Carysil) & multifunction sink up to ₹12,000",
          "Dining: Wall mounted wash basin",
          "Kitchen Top: Granite / Quartz up to ₹350/sqft",
        ],
      },
      {
        title: "Door, Windows & Railing",
        items: [
          "Main Door: Teak designer door | 35mm | 5\"x3\" frame | 8' x 5' — worth ₹50,000 incl. fixtures (biometric lock)",
          "Room Doors: Flush door | Sal wood frame | 8' x 3.5'",
          "Pooja Room Door: Burma Teak with teak frame — worth ₹50,000",
          "Bathroom Door: WPC / Flush door | WPC frame | 8' x 3'",
          "Windows: Openable / collapsible / sliding | No restriction on size, 2 each room | 5mm clear glass",
          "Staircase Railing: SS 304 railing with 10mm toughened glass",
          "Balcony Railing: SS 304 railing with 10mm toughened glass",
          "Window Grills: Standard MS grill with enamel paint",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner Wall Putty: 2 coats | Birla White Putty or equivalent",
          "Wall Painting: 1 coat primer | 2 coats Asian Royal or equivalent",
          "Ceiling Painting: 1 coat primer | 2 coats Asian Royal",
          "Exterior Paint: 1 coat primer | 2 coats Apex Ultima Emulsion",
          "Elevation Putty: 2 coats for two sides | Birla Wallseal waterproof",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Finolex / Havells (FRLS grade) fireproof",
          "Switches: GM / Anchor / Touch switches with glass plates",
          "UPS Wiring Provision: Included",
          "No Restriction on Number of Points",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Site Engineer: Dedicated full-time site engineer",
          "Project Manager: Daily site visit",
          "Project Status Monitoring",
          "Architect: Dedicated architect | Frequent site visit | Material & brand selection support",
        ],
      },
      {
        title: "Additional Service (As per Requirement)",
        items: [
          "Compound Wall @ ₹375/sqft & gate",
          "Septic Tank @ ₹25/litre",
          "Lift, Lift Pit and Shaft",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
];

export function Packages() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(1);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const activePackage = useMemo(() => packages[activeIndex], [activeIndex]);

  const scrollToDetails = () => {
    if (typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  const handleSelectPackage = (index: number) => {
    setActiveIndex(index);
    scrollToDetails();
  };

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Construction Packages
          </h2>
          <p className="text-xl text-primary mb-12">
            Choose the perfect package for your dream home
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className={`relative w-full bg-card border rounded-3xl p-8 text-left transition-all duration-300 touch-manipulation
                  ${
                    isActive
                      ? "border-primary shadow-lg shadow-primary/20 md:scale-[1.03]"
                      : "border-white/10 md:hover:border-primary/50 md:hover:-translate-y-1"
                  }`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-lg font-semibold">
                    Popular
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => handleSelectPackage(index)}
                  className="w-full text-left"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>

                    <p className="text-3xl font-bold text-primary mb-2">
                      {pkg.price}{" "}
                      <span className="text-base text-white/60">/ sqft</span>
                    </p>

                    <p className="text-lg text-white/60">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-lg text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </button>

                <Button
                  type="button"
                  onClick={() => handleSelectPackage(index)}
                  className="w-full rounded-full"
                  variant={isActive ? "default" : "outline"}
                >
                  {isActive ? "Selected" : "View Details"}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Active Package Full Details */}
        <div ref={detailsRef} className="scroll-mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
              className="bg-card border border-primary/30 rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-3xl font-serif font-bold text-primary mb-2 text-center">
                {activePackage.name} Details
              </h3>

              <p className="text-center text-white/60 mb-8">
                {activePackage.price} per sqft — {activePackage.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activePackage.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-primary" />
                      {section.title}
                    </h4>

                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-lg text-white/70"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
