import type { SVGProps } from "react";

type IconName =
  | "dumbbell"
  | "nutrition"
  | "calendar"
  | "chat"
  | "chart"
  | "brain"
  | "trophy"
  | "fire"
  | "check"
  | "arrow"
  | "instagram"
  | "youtube"
  | "mail"
  | "whatsapp"
  | "star";

const paths: Record<IconName, React.ReactNode> = {
  dumbbell: (
    <>
      <path d="M6.5 6.5 17.5 17.5M3 6l3-3m12 18 3-3" />
      <rect x="1.5" y="7" width="4" height="10" rx="1" />
      <rect x="18.5" y="7" width="4" height="10" rx="1" />
    </>
  ),
  nutrition: (
    <>
      <path d="M12 9c-2-4-7-4-8 0-1 5 4 11 8 12 4-1 9-7 8-12-1-4-6-4-8 0Z" />
      <path d="M12 3c1 1 1.5 2.5 1 4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4M8 14h3" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16v-3M12 16V8M16 16v-6M20 16v-9" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 2.5 2.5 0 0 0 5 .2V4.5A2.5 2.5 0 0 0 9 4Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5 2.5 2.5 0 0 1-5 .2" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 19h6M10 16v3M14 16v3" />
    </>
  ),
  fire: (
    <>
      <path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C9 11 8 12 8 14a4 4 0 0 0 8 0c0-4-3-6-4-11Z" />
    </>
  ),
  check: <path d="M4 12.5 9 17.5 20 6.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5l1.3-4.2A8 8 0 1 1 8 19.4l-4.5 1.1Z" />
      <path d="M9 8.5c.3 2.5 2 4.2 4.5 4.5.6.1 1-.2 1.2-.7.1-.4-.1-.6-.5-.9l-.9-.5c-.3-.2-.6-.1-.8.2-.3.4-.6.4-1 .1-.7-.5-1.2-1-1.6-1.7-.2-.4-.2-.7.2-1 .3-.2.4-.5.2-.8l-.5-.9c-.2-.4-.5-.6-.9-.5-.5.2-.8.6-.7 1.2Z" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
