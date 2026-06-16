"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PLANS, PF_GOALS, PF_LEVELS, PF_BUDGETS, type Plan } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function PlanFinder() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [budget, setBudget] = useState(""); // stores the budget label
  const [result, setResult] = useState<Plan | null>(null);
  const [error, setError] = useState(false);

  function reveal() {
    if (!goal || !level || !budget) {
      setError(true);
      return;
    }
    setError(false);
    const budgetId =
      PF_BUDGETS.find((b) => b.label === budget)?.value ?? "transform";
    const plan = goal === "Contest prep" ? PLANS.elite : PLANS[budgetId];
    setResult(plan);
  }

  return (
    <section id="plans" className="section bg-surface">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Plan finder"
          title={
            <>
              Not sure where to start?{" "}
              <span className="serif-italic text-accent">Find your fit.</span>
            </>
          }
          subtitle="Three quick questions, zero commitment — get matched to the right coaching plan instantly."
        />

        <div className="mt-6 grid items-start gap-5 lg:grid-cols-2">
          {/* The form */}
          <div className="card p-6 sm:p-8">
            <Row
              label="Your main goal"
              options={PF_GOALS}
              value={goal}
              onChange={setGoal}
            />
            <Row
              label="Experience level"
              options={PF_LEVELS}
              value={level}
              onChange={setLevel}
              className="mt-7"
            />
            <Row
              label="Monthly budget"
              options={PF_BUDGETS.map((b) => b.label)}
              value={budget}
              onChange={setBudget}
              className="mt-7"
            />
            {error && (
              <p className="mt-5 text-sm text-red-500">
                Pick one from each to see your plan.
              </p>
            )}
            <button onClick={reveal} className="btn-accent mt-7 w-full">
              Reveal my plan
              <Icon name="arrow" className="arrow h-4 w-4" />
            </button>
          </div>

          {/* The result */}
          <div className="min-h-[18rem]">
            <AnimatePresence mode="wait">
              {result ? (
                <ResultCard key={result.id} plan={result} />
              ) : (
                <Placeholder key="placeholder" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  options,
  value,
  onChange,
  className,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mono-label mb-3 text-mute">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
                active
                  ? "border-accent bg-accent text-ink"
                  : "border-line-2 text-mute hover:border-accent hover:text-bone"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease }}
      className="card h-full border-accent/50 p-6 sm:p-8"
    >
      <span className="mono-label text-accent">Recommended for you</span>
      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="font-display text-3xl text-bone sm:text-4xl">
          {plan.name}
        </h3>
        <span className="pill">{plan.badge}</span>
      </div>
      <p className="mt-1 font-display text-2xl text-accent">{plan.priceLabel}</p>
      <p className="mt-3 text-sm leading-relaxed text-mute">{plan.bestFor}</p>
      <ul className="mt-5 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-bone">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
              <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Link href="/apply" className="btn-accent mt-7 w-full">
        Get started
        <Icon name="arrow" className="arrow h-4 w-4" />
      </Link>
    </motion.div>
  );
}

function Placeholder() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-full min-h-[18rem] flex-col items-center justify-center rounded-[14px] border border-dashed border-line-2 p-8 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
        <Icon name="trophy" className="h-6 w-6" />
      </span>
      <p className="mt-4 font-display text-xl text-bone">Your plan appears here</p>
      <p className="mt-1 text-sm text-mute">
        Answer the three questions to get matched.
      </p>
    </motion.div>
  );
}
