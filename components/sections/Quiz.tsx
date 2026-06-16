"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GOALS,
  EXPERIENCE_LEVELS,
  CHALLENGES,
  TIMELINES,
  BRAND,
} from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type FormData = {
  name: string;
  age: string;
  gender: string;
  weight: string;
  height: string;
  goal: string;
  experience: string;
  challenge: string;
  timeline: string;
  whatsapp: string;
  email: string;
};

const EMPTY: FormData = {
  name: "",
  age: "",
  gender: "",
  weight: "",
  height: "",
  goal: "",
  experience: "",
  challenge: "",
  timeline: "",
  whatsapp: "",
  email: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const TOTAL_STEPS = 8;

export function Quiz() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [recommendation, setRecommendation] = useState<string>("");

  const progress = useMemo(
    () => Math.round((step / TOTAL_STEPS) * 100),
    [step],
  );

  const set = (k: keyof FormData, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  function validateStep(): string | null {
    switch (step) {
      case 0:
        if (data.name.trim().length < 2) return "Please enter your name.";
        if (!data.age || +data.age < 14 || +data.age > 99)
          return "Please enter a valid age (14–99).";
        return null;
      case 1:
        if (!data.gender) return "Please select an option.";
        return null;
      case 2:
        if (!data.weight.trim()) return "Please enter your current weight.";
        if (!data.height.trim()) return "Please enter your height.";
        return null;
      case 3:
        if (!data.goal) return "Please select your goal.";
        return null;
      case 4:
        if (!data.experience) return "Please select your level.";
        return null;
      case 5:
        if (!data.challenge) return "Please select your biggest challenge.";
        return null;
      case 6:
        if (!data.timeline) return "Please select a timeline.";
        return null;
      case 7:
        if (!/^[+\d][\d\s-]{6,}$/.test(data.whatsapp.trim()))
          return "Please enter a valid WhatsApp number.";
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email.trim()))
          return "Please enter a valid email address.";
        return null;
      default:
        return null;
    }
  }

  function next() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (step === TOTAL_STEPS - 1) {
      void submit();
      return;
    }
    setDir(1);
    setStep((s) => s + 1);
  }

  function back() {
    setError(null);
    setDir(-1);
    setStep((s) => Math.max(0, s - 1));
  }

  function pick(k: keyof FormData, v: string) {
    set(k, v);
    setError(null);
    setDir(1);
    setTimeout(() => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1)), 220);
  }

  async function submit() {
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json?.error?.message ?? "Something went wrong. Try again.");
        return;
      }
      setRecommendation(json?.data?.recommendation ?? "1-on-1 Premium Coaching");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="quiz" className="section bg-base">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Coaching quiz"
          title={
            <>
              Find your perfect{" "}
              <span className="serif-italic text-accent">coaching plan</span>
            </>
          }
          subtitle="Answer a few quick questions and we'll match you with the right plan. Takes under 60 seconds."
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
          {status === "success" ? (
            <SuccessState recommendation={recommendation} />
          ) : (
            <>
              {/* Progress */}
              <div className="border-b border-line px-7 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="mono-label text-mute">
                    Step {step + 1} / {TOTAL_STEPS}
                  </span>
                  <span className="mono-label text-accent">
                    {progress}% complete
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    animate={{ width: `${Math.max(progress, 6)}%` }}
                    transition={{ duration: 0.5, ease }}
                  />
                </div>
              </div>

              {/* Steps */}
              <div className="relative min-h-[16rem] px-6 py-7">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={step}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -40 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {step === 0 && (
                      <StepWrap title="Let's start with the basics">
                        <Field label="Your name">
                          <input
                            autoFocus
                            value={data.name}
                            onChange={(e) => set("name", e.target.value)}
                            placeholder="e.g. Arjun Sharma"
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Your age">
                          <input
                            type="number"
                            value={data.age}
                            onChange={(e) => set("age", e.target.value)}
                            placeholder="e.g. 27"
                            className={inputCls}
                          />
                        </Field>
                      </StepWrap>
                    )}

                    {step === 1 && (
                      <StepWrap title="What is your gender?">
                        <Choices
                          options={["Male", "Female", "Other"]}
                          value={data.gender}
                          onPick={(v) => pick("gender", v)}
                        />
                      </StepWrap>
                    )}

                    {step === 2 && (
                      <StepWrap title="Your current stats">
                        <Field label="Current weight">
                          <input
                            autoFocus
                            value={data.weight}
                            onChange={(e) => set("weight", e.target.value)}
                            placeholder="e.g. 78 kg"
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Height">
                          <input
                            value={data.height}
                            onChange={(e) => set("height", e.target.value)}
                            placeholder="e.g. 5'10 / 178 cm"
                            className={inputCls}
                          />
                        </Field>
                      </StepWrap>
                    )}

                    {step === 3 && (
                      <StepWrap title="What is your primary fitness goal?">
                        <Choices
                          options={GOALS}
                          value={data.goal}
                          onPick={(v) => pick("goal", v)}
                          grid
                        />
                      </StepWrap>
                    )}

                    {step === 4 && (
                      <StepWrap title="What's your experience level?">
                        <Choices
                          options={EXPERIENCE_LEVELS}
                          value={data.experience}
                          onPick={(v) => pick("experience", v)}
                        />
                      </StepWrap>
                    )}

                    {step === 5 && (
                      <StepWrap title="What's your biggest challenge?">
                        <Choices
                          options={CHALLENGES}
                          value={data.challenge}
                          onPick={(v) => pick("challenge", v)}
                          grid
                        />
                      </StepWrap>
                    )}

                    {step === 6 && (
                      <StepWrap title="Your desired timeline?">
                        <Choices
                          options={TIMELINES}
                          value={data.timeline}
                          onPick={(v) => pick("timeline", v)}
                        />
                      </StepWrap>
                    )}

                    {step === 7 && (
                      <StepWrap title="Where should we send your plan?">
                        <Field label="WhatsApp number">
                          <input
                            autoFocus
                            value={data.whatsapp}
                            onChange={(e) => set("whatsapp", e.target.value)}
                            placeholder="e.g. +91 98765 43210"
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Email address">
                          <input
                            type="email"
                            value={data.email}
                            onChange={(e) => set("email", e.target.value)}
                            placeholder="you@email.com"
                            className={inputCls}
                          />
                        </Field>
                      </StepWrap>
                    )}
                  </motion.div>
                </AnimatePresence>

                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between gap-4 border-t border-line px-7 py-5">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="text-sm font-medium text-mute transition-colors hover:text-bone disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  disabled={status === "submitting"}
                  className="btn-accent !py-3 disabled:opacity-70"
                >
                  {status === "submitting"
                    ? "Submitting…"
                    : step === TOTAL_STEPS - 1
                      ? "Submit application"
                      : "Continue"}
                  {status !== "submitting" && (
                    <Icon name="arrow" className="arrow h-4 w-4" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- sub-components ----------------------------- */

const inputCls =
  "w-full rounded-xl border border-line bg-base px-4 py-3.5 text-bone placeholder:text-faint outline-none transition-colors focus:border-accent focus:bg-surface";

function StepWrap({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-7 font-display text-2xl text-bone sm:text-3xl">
        {title}
      </h3>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-mute">
        {label}
      </span>
      {children}
    </label>
  );
}

function Choices({
  options,
  value,
  onPick,
  grid = false,
}: {
  options: readonly string[];
  value: string;
  onPick: (v: string) => void;
  grid?: boolean;
}) {
  return (
    <div className={grid ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "space-y-3"}>
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onPick(opt)}
            className={`flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
              active
                ? "border-accent bg-accent-soft text-bone"
                : "border-line bg-surface text-mute hover:border-line-2 hover:text-bone"
            }`}
          >
            <span className="text-base">{opt}</span>
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                active ? "border-accent bg-accent text-ink" : "border-line-2"
              }`}
            >
              {active && (
                <Icon name="check" className="h-3 w-3" strokeWidth={3} />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SuccessState({ recommendation }: { recommendation: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease }}
      className="px-7 py-14 text-center sm:px-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
        className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink"
      >
        <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
      </motion.div>
      <h3 className="font-display text-3xl text-bone sm:text-4xl">
        Application received
      </h3>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-mute">
        Based on your answers, we&apos;ll recommend the most suitable coaching
        plan and contact you within 24 hours.
      </p>
      <div className="mx-auto mt-7 inline-flex flex-col items-center gap-1 rounded-2xl border border-line bg-accent-soft px-8 py-5">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-mute">
          Suggested for you
        </span>
        <span className="font-display text-2xl text-accent">
          {recommendation}
        </span>
      </div>
      <div className="mt-8">
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Fast-track on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
