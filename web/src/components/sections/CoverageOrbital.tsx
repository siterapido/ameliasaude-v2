"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const PURPLE = "#7b6bb2";
const ON_PURPLE_STROKE = "#ffffff";

function archimedeanSpiralD(opts: {
  turns: number;
  maxR: number;
  steps?: number;
}): string {
  const { turns, maxR, steps = 96 } = opts;
  const maxAngle = turns * 2 * Math.PI;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * maxAngle;
    const r = Math.max(0.15, (i / steps) * maxR);
    const x = r * Math.cos(t - Math.PI / 2);
    const y = r * Math.sin(t - Math.PI / 2);
    d += (i === 0 ? "M" : "L") + `${x.toFixed(3)},${y.toFixed(3)}`;
  }
  return d;
}

const cities: { name: string; src: string }[] = [
  {
    name: "Rio de Janeiro",
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Belford Roxo",
    src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=160&h=160&fit=crop&q=80",
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
    name: "Niterói",
    src: "/niteroi.webp",
  },
  {
    name: "São João de Meriti",
    src: "/sao-joao-de-meriti.jpg",
  },
  {
    name: "Nilópolis",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Magé",
    src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=160&h=160&fit=crop&q=80",
  },
  {
    name: "Mesquita",
    src: "/mesquita.jpg",
  },
];

const ORBIT_LAYERS: { radiusPct: number; anglesDeg: number[]; periodSec: number }[] = [
  { radiusPct: 18, anglesDeg: [0, 120, 240], periodSec: 22 },
  { radiusPct: 31, anglesDeg: [60, 180, 300], periodSec: 36 },
  { radiusPct: 43, anglesDeg: [15, 105, 195, 285], periodSec: 50 },
];

const ORBIT_LAYERS_COMPACT: { radiusPct: number; anglesDeg: number[]; periodSec: number }[] = [
  { radiusPct: 24, anglesDeg: [0, 120, 240], periodSec: 22 },
  { radiusPct: 34, anglesDeg: [60, 180, 300], periodSec: 36 },
  { radiusPct: 44, anglesDeg: [15, 105, 195, 285], periodSec: 50 },
];

type CityPlacement = {
  city: (typeof cities)[number];
  angleDeg: number;
  radiusPct: number;
  layerIndex: number;
  periodSec: number;
};

function buildPlacements(
  layers: (typeof ORBIT_LAYERS)[number][]
): CityPlacement[] {
  const out: CityPlacement[] = [];
  let idx = 0;
  for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
    const { radiusPct, anglesDeg, periodSec } = layers[layerIndex];
    for (const angleDeg of anglesDeg) {
      if (idx >= cities.length) break;
      out.push({ city: cities[idx], angleDeg, radiusPct, layerIndex, periodSec });
      idx++;
    }
  }
  return out;
}

const SONAR_WAVES = 3;
const SONAR_DURATION = 3.2;
const SPIRAL_TURNS = 2.35;
const SPIRAL_MAX_R = 40;

/* ─── Nó orbital — planeta girando ao redor do centro ─── */

function OrbitNode({
  city,
  radiusPct,
  startAngleDeg,
  periodSec,
  index,
  layerIndex,
  reduced,
}: {
  city: (typeof cities)[number];
  radiusPct: number;
  startAngleDeg: number;
  periodSec: number;
  index: number;
  layerIndex: number;
  reduced: boolean | null;
}) {
  const angle = useMotionValue(startAngleDeg);
  const didStart = useRef(false);

  useEffect(() => {
    if (reduced || didStart.current) return;
    didStart.current = true;
    const controls = animate(angle, startAngleDeg + 360, {
      duration: periodSec,
      repeat: Infinity,
      ease: "linear",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const baseLeft = useMotionValue(50);
  const baseTop = useMotionValue(50);

  const left = useTransform([baseLeft, angle] as const, ([, a]) => {
    const rad = ((a as number) * Math.PI) / 180;
    return `calc(50% + ${(radiusPct * Math.cos(rad)).toFixed(2)}%)`;
  });
  const top = useTransform([baseTop, angle] as const, ([, a]) => {
    const rad = ((a as number) * Math.PI) / 180;
    return `calc(50% + ${(radiusPct * Math.sin(rad)).toFixed(2)}%)`;
  });
  const negAngle = useTransform(angle, (a) => -a);

  return (
    <motion.div
      className="absolute"
      style={{
        left,
        top,
        zIndex: 5 + layerIndex,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.08 + index * 0.09,
        type: "spring",
        stiffness: 200,
        damping: 22,
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-1.5"
        style={{ rotate: negAngle }}
      >
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-[0_4px_14px_rgba(94,73,133,0.16)] sm:h-[3.75rem] sm:w-[3.75rem] md:h-[4.25rem] md:w-[4.25rem]">
          <Image
            src={city.src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 40px, 68px"
          />
        </div>
        <span className="max-w-[4.25rem] text-center font-sans text-[9px] font-normal leading-tight tracking-wide text-white/90 sm:max-w-none sm:text-[11px] sm:leading-none md:text-xs whitespace-normal sm:whitespace-nowrap">
          {city.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─── Componente principal ─── */

export function CoverageOrbital() {
  const reduceMotion = useReducedMotion();
  const [compactOrbit, setCompactOrbit] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setCompactOrbit(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const layers = compactOrbit ? ORBIT_LAYERS_COMPACT : ORBIT_LAYERS;
  const placements = useMemo(() => buildPlacements(layers), [layers]);
  const spiralD = useMemo(
    () => archimedeanSpiralD({ turns: SPIRAL_TURNS, maxR: SPIRAL_MAX_R }),
    []
  );

  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,min(96vw,920px))] aspect-square select-none overflow-visible"
      aria-hidden
    >
      {/* Anéis de fundo — rotação lenta */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={reduceMotion ? { rotate: 0 } : { rotate: 360, scale: [1, 1.015, 1] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "52%",
            height: "52%",
            boxShadow:
              "0 0 60px 20px rgba(255,255,255,0.04), 0 0 120px 40px rgba(255,255,255,0.02)",
          }}
          animate={reduceMotion ? {} : { opacity: [0.3, 0.7, 0.3] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
        />
        {[0.41, 0.61, 0.82].map((scale, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              border: `1px solid rgba(255,255,255,${i === 0 ? 0.22 : 0.1})`,
            }}
          />
        ))}
      </motion.div>

      {/* Ondas sonar */}
      <div className="pointer-events-none absolute inset-0 z-[12] flex items-center justify-center">
        <svg
          className="h-[92%] w-[92%] max-h-[min(92vw,820px)] max-w-[min(92vw,820px)] overflow-visible"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <g transform="translate(50,50)">
            {Array.from({ length: SONAR_WAVES }, (_, i) => (
              <motion.g
                key={i}
                initial={false}
                animate={
                  reduceMotion
                    ? { scale: 0.72, opacity: 0.08 }
                    : {
                        scale: [0.28, 1.06],
                        opacity: [0.32, 0],
                      }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: SONAR_DURATION,
                        repeat: Infinity,
                        ease: [0.22, 1, 0.36, 1],
                        delay: (i * SONAR_DURATION) / SONAR_WAVES,
                      }
                }
                style={{ transformOrigin: "0px 0px" }}
              >
                <path
                  d={spiralD}
                  fill="none"
                  stroke={ON_PURPLE_STROKE}
                  strokeOpacity={0.45}
                  strokeWidth={0.45}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </motion.g>
            ))}
          </g>
        </svg>
      </div>

      {/* Hub — logo Amélia */}
      <div
        className="absolute left-1/2 top-1/2 z-20 flex min-h-[min(20%,96px)] min-w-[min(20%,96px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_6px_28px_rgba(123,107,178,0.18),0_2px_8px_rgba(0,0,0,0.05)] sm:min-h-[min(22%,110px)] sm:min-w-[min(22%,110px)]"
        style={{ border: `1.5px solid ${PURPLE}2a` }}
      >
        <div className="relative h-10 w-[4.5rem] sm:h-12 sm:w-20">
          <Image
            src="/logo-amelia-site.png"
            alt="Amélia Saúde"
            fill
            className="object-contain"
            sizes="80px"
          />
        </div>
      </div>

      {/* Planetas orbitais */}
      {placements.map(({ city, angleDeg, radiusPct, layerIndex, periodSec }, i) => (
        <OrbitNode
          key={city.name}
          city={city}
          radiusPct={radiusPct}
          startAngleDeg={angleDeg}
          periodSec={periodSec}
          index={i}
          layerIndex={layerIndex}
          reduced={reduceMotion}
        />
      ))}
    </div>
  );
}
