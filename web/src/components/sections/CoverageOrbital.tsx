"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const PURPLE = "#7b6bb2";

const cities: { name: string; src: string }[] = [
  {
    name: "Rio de Janeiro",
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Niterói",
    src: "/niteroi.webp",
  },
  {
    name: "Duque de Caxias",
    src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Nova Iguaçu",
    src: "/nova-iguacu.webp",
  },
  {
    name: "São Gonçalo",
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Belford Roxo",
    src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Petrópolis",
    src: "/petropolis.jpg",
  },
  {
    name: "Magé",
    src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=160&h=160&fit=crop&q=80",
  },
];

const ORBIT_LAYERS: { radiusPct: number; anglesDeg: number[] }[] = [
  { radiusPct: 24, anglesDeg: [-90, 30, 150] },
  { radiusPct: 33, anglesDeg: [-30, 90, 210] },
  { radiusPct: 42, anglesDeg: [0, 180] },
];

type CityPlacement = {
  city: (typeof cities)[number];
  angleDeg: number;
  radiusPct: number;
  layerIndex: number;
};

/** Entre o anel médio (33%) e o externo (42%). */
const PETROPOLIS_RADIUS_PCT = 36;

function buildPlacements(): CityPlacement[] {
  const out: CityPlacement[] = [];
  let idx = 0;
  for (let layerIndex = 0; layerIndex < ORBIT_LAYERS.length; layerIndex++) {
    const { radiusPct, anglesDeg } = ORBIT_LAYERS[layerIndex];
    for (const angleDeg of anglesDeg) {
      if (idx >= cities.length) break;
      out.push({ city: cities[idx], angleDeg, radiusPct, layerIndex });
      idx++;
    }
  }
  return out.map((p) =>
    p.city.name === "Petrópolis"
      ? { ...p, radiusPct: PETROPOLIS_RADIUS_PCT }
      : p
  );
}

function polarToPercent(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: 50 + radiusPct * Math.cos(rad),
    top: 50 + radiusPct * Math.sin(rad),
  };
}

export function CoverageOrbital() {
  const reduceMotion = useReducedMotion();
  const placements = buildPlacements();

  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,520px)] aspect-square select-none overflow-hidden"
      aria-hidden
    >
      {/* Anéis — rotação lenta */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: reduceMotion ? 0 : 360 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 100, repeat: Infinity, ease: "linear" }
        }
      >
        {[0.52, 0.68, 0.84, 0.98].map((scale, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              border: `1px solid rgba(123,107,178,${i === 0 ? 0.18 : 0.08})`,
            }}
          />
        ))}
      </motion.div>

      {/* Hub — logo Amélia */}
      <div
        className="absolute left-1/2 top-1/2 z-20 flex min-h-[min(30%,140px)] min-w-[min(30%,140px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_6px_28px_rgba(123,107,178,0.18),0_2px_8px_rgba(0,0,0,0.05)]"
        style={{ border: `1.5px solid ${PURPLE}2a` }}
      >
        <div className="relative h-16 w-24">
          <Image
            src="/logo-amelia-site.png"
            alt="Amélia Saúde"
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
      </div>

      {placements.map(({ city, angleDeg, radiusPct, layerIndex }, i) => {
        const { left, top } = polarToPercent(angleDeg, radiusPct);
        const z = 5 + layerIndex;
        return (
          <motion.div
            key={city.name}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
              zIndex: z,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.08 + i * 0.09,
              type: "spring",
              stiffness: 200,
              damping: 22,
            }}
          >
            <motion.div
              animate={
                reduceMotion ? { y: 0 } : { y: [0, i % 2 === 0 ? -4 : 4, 0] }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 4 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }
              }
              className="flex flex-col items-center gap-[5px]"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-[0_4px_14px_rgba(94,73,133,0.16)]">
                <Image
                  src={city.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="whitespace-nowrap font-sans text-[10px] font-medium leading-none tracking-wide text-[#4a4560] opacity-80">
                {city.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
