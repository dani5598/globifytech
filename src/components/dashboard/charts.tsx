"use client";

import { motion } from "framer-motion";
import { useId } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Bar chart — Weekly learning hours                                          */
/* -------------------------------------------------------------------------- */

export function BarChart({
  data,
  unit = "h",
}: {
  data: { label: string; value: number }[];
  unit?: string;
}) {
  const max = Math.max(...data.map((d) => d.value)) * 1.15;
  const gid = useId();

  return (
    <div className="flex h-44 items-end gap-2.5">
      {data.map((d, i) => {
        const h = (d.value / max) * 100;
        return (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex w-full flex-1 items-end">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.06 }}
                className="group relative w-full rounded-t-lg"
                style={{
                  background: `linear-gradient(180deg, #7FD3FF, #009DFF 60%, rgba(0,157,255,0.25))`,
                  boxShadow: "0 0 18px -4px rgba(0,157,255,0.7)",
                }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[color:var(--surface)] px-1.5 py-0.5 text-[10px] font-medium text-[#7FD3FF] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {d.value}
                  {unit}
                </span>
              </motion.div>
            </div>
            <span className="text-[11px] text-[color:var(--muted)]">{d.label}</span>
          </div>
        );
      })}
      <span className="sr-only">{gid}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Area chart — Monthly progress                                              */
/* -------------------------------------------------------------------------- */

export function AreaChart({
  data,
}: {
  data: { label: string; value: number }[];
}) {
  const gid = useId();
  const W = 320;
  const H = 150;
  const pad = 8;
  const max = 100;
  const step = (W - pad * 2) / (data.length - 1);

  const pts = data.map((d, i) => ({
    x: pad + i * step,
    y: H - pad - (d.value / max) * (H - pad * 2),
  }));

  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = `${line} L${pts[pts.length - 1].x},${H - pad} L${pts[0].x},${H - pad} Z`;

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img">
        <defs>
          <linearGradient id={`area-${gid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#009DFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#009DFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`line-${gid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7FD3FF" />
            <stop offset="100%" stopColor="#FF0AE0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={pad}
            x2={W - pad}
            y1={pad + g * (H - pad * 2)}
            y2={pad + g * (H - pad * 2)}
            stroke="rgba(255,255,255,0.06)"
            strokeDasharray="3 4"
          />
        ))}

        <motion.path
          d={area}
          fill={`url(#area-${gid})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke={`url(#line-${gid})`}
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: EASE }}
        />
        {pts.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={3.5}
            fill="#0d1117"
            stroke="#7FD3FF"
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between px-2 text-[11px] text-[color:var(--muted)]">
        {data.map((d) => (
          <span key={d.label}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Radar chart — Skill growth                                                 */
/* -------------------------------------------------------------------------- */

export function RadarChart({
  data,
}: {
  data: { axis: string; value: number }[];
}) {
  const gid = useId();
  const size = 220;
  const c = size / 2;
  const r = c - 34;
  const n = data.length;

  const point = (i: number, radius: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return { x: c + Math.cos(angle) * radius, y: c + Math.sin(angle) * radius };
  };

  const dataPoly = data
    .map((d, i) => {
      const p = point(i, (d.value / 100) * r);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto w-full max-w-[240px]" role="img">
      <defs>
        <linearGradient id={`radar-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#009DFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FF0AE0" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((g) => (
        <polygon
          key={g}
          points={data.map((_, i) => {
            const p = point(i, r * g);
            return `${p.x},${p.y}`;
          }).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
        />
      ))}

      {data.map((_, i) => {
        const p = point(i, r);
        return (
          <line key={i} x1={c} y1={c} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.08)" />
        );
      })}

      <motion.polygon
        points={dataPoly}
        fill={`url(#radar-${gid})`}
        stroke="#7FD3FF"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ transformOrigin: "center" }}
      />

      {data.map((d, i) => {
        const p = point(i, r + 16);
        return (
          <text
            key={d.axis}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-[color:var(--muted)]"
            style={{ fontSize: 10 }}
          >
            {d.axis}
          </text>
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Radial gauge — Attendance %                                                */
/* -------------------------------------------------------------------------- */

export function RadialGauge({
  value,
  label,
  accent = "0,157,255",
}: {
  value: number;
  label: string;
  accent?: string;
}) {
  const gid = useId();
  const size = 160;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;

  return (
    <div className="relative mx-auto w-full max-w-[170px]">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full -rotate-90" role="img">
        <defs>
          <linearGradient id={`gauge-${gid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7FD3FF" />
            <stop offset="100%" stopColor="#FF0AE0" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#gauge-${gid})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - (value / 100) * circ }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: EASE }}
          style={{ filter: `drop-shadow(0 0 6px rgba(${accent},0.6))` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-3xl font-bold text-[color:var(--fg)]">
          {value}%
        </span>
        <span className="text-xs text-[color:var(--muted)]">{label}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Donut chart — Course completion                                            */
/* -------------------------------------------------------------------------- */

export function DonutChart({
  data,
}: {
  data: { label: string; value: number; color: string }[];
}) {
  const size = 160;
  const stroke = 18;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const total = data.reduce((s, d) => s + d.value, 0);

  let offset = 0;
  const segments = data.map((d) => {
    const len = (d.value / total) * circ;
    const seg = { ...d, dash: len, gap: circ - len, rot: (offset / circ) * 360 };
    offset += len;
    return seg;
  });

  return (
    <div className="flex items-center gap-5">
      <div className="relative w-[130px] shrink-0">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full -rotate-90" role="img">
          {segments.map((s, i) => (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={stroke}
              strokeDasharray={`${s.dash} ${s.gap}`}
              transform={`rotate(${s.rot} ${size / 2} ${size / 2})`}
              initial={{ opacity: 0, strokeDasharray: `0 ${circ}` }}
              whileInView={{ opacity: 1, strokeDasharray: `${s.dash} ${s.gap}` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.15 }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading text-2xl font-bold text-[color:var(--fg)]">
            {total}
          </span>
          <span className="text-[10px] text-[color:var(--muted)]">courses</span>
        </div>
      </div>
      <ul className="flex flex-col gap-2.5">
        {data.map((d) => (
          <li key={d.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
            <span className="text-[color:var(--muted)]">{d.label}</span>
            <span className="ml-auto font-medium text-[color:var(--fg)]">{d.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
