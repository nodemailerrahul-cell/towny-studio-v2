"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Ruler,
  Maximize,
  CheckCircle2,
  Briefcase,
  HardHat,
  Sparkles,
} from "lucide-react";

type Props = {
  shouldReduceMotion: boolean;
};

type FeaturedProject = {
  name: string;
  image: string;
  plotSize: string;
  builtUpArea: string;
  year: string;
  location: string;
  accent: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "Mr. Illangovan Darani",
    image: encodeURI("/feat-projects/Mr. Illangovan.png"),
    plotSize: "30*40 – 1200 Sft",
    builtUpArea: "3400 Sft",
    year: "March 2025",
    location: "JP Nagar 9th Phase, Bengaluru",
    accent: "Featured Residence",
  },
  {
    name: "Mr. Raghavan",
    image: encodeURI("/feat-projects/Mr. Raghavan.png"),
    plotSize: "30*40 – 1200 Sft",
    builtUpArea: "2800 Sft",
    year: "January 2026",
    location: "HSR Layout, Bengaluru",
    accent: "Featured Residence",
  },
];

const residentialProjects = [
  "SNN Clermont",
  "Purva Skydale",
  "Nikoo Homes",
  "Adarsh Palm Retreat",
];

const commercialProjects = [
  "St. John's Medical College",
  "Buffalo Wild Wings",
  "Phoenix Mall",
];

const ongoingProjects = ["Maylsandra Begur", "Basapura"];

export function ArchitectureProjects({ shouldReduceMotion }: Props) {
  // ✅ Stable animation config
  const animation = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" }, // reduces retrigger sensitivity
        transition: { duration: 0.45, ease: "easeOut" as const },
      };

  return (
    <section className="relative overflow-hidden bg-[#070707] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div {...animation} className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/55">
            <Sparkles className="h-4 w-4" />
            Portfolio
          </div>

          <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Architecture Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 md:text-lg">
            A curated selection of residential and commercial work.
          </p>
        </motion.div>

        {/* Featured Cards */}
        <div className="mb-24 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.name}
              {...animation}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { delay: i * 0.06, duration: 0.45 }
              }
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-sm
              will-change-transform transform-gpu"
            >
              {/* Image */}
              <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className={`
                    object-cover
                    transition-transform duration-500
                    will-change-transform transform-gpu
                    md:group-hover:scale-[1.04]   /* ✅ disable hover on mobile */
                  `}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.08))]" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                  {project.accent}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold">{project.name}</h3>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Info icon={<Maximize className="h-4 w-4" />} label="Plot Size" value={project.plotSize} />
                  <Info icon={<Ruler className="h-4 w-4" />} label="Built Area" value={project.builtUpArea} />
                  <Info icon={<Calendar className="h-4 w-4" />} label="Completed" value={project.year} />
                  <Info icon={<MapPin className="h-4 w-4" />} label="Location" value={project.location} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Lists */}
        <div className="grid gap-10 md:grid-cols-3">
          <Column title="Residential" icon={<CheckCircle2 className="h-5 w-5" />} items={residentialProjects} />
          <Column title="Commercial" icon={<Briefcase className="h-5 w-5" />} items={commercialProjects} />
          <Column title="Ongoing" icon={<HardHat className="h-5 w-5" />} items={ongoingProjects} highlight />
        </div>
      </div>
    </section>
  );
}

/* Info */
function Info({ icon, label, value }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex gap-3">
        <div className="text-white/45">{icon}</div>
        <div>
          <p className="text-[11px] uppercase text-white/40">{label}</p>
          <p className="text-sm text-white/80">{value}</p>
        </div>
      </div>
    </div>
  );
}

/* Column */
function Column({ title, icon, items, highlight = false }: any) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
      <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold">
        <span className={highlight ? "bg-white/10 p-2 rounded-xl" : "bg-white/5 p-2 rounded-xl"}>
          {icon}
        </span>
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item: string, i: number) => (
          <span key={i} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}