import { AlertTriangle, Info, Lightbulb, StickyNote } from "lucide-react";
import type { ReactNode } from "react";

type CalloutType = "info" | "tip" | "warning" | "note";

const styles: Record<
  CalloutType,
  { icon: typeof Info; label: string; box: string; title: string }
> = {
  info: {
    icon: Info,
    label: "Info",
    box: "border-sky-300 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/40",
    title: "text-sky-800 dark:text-sky-300",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    box: "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
    title: "text-emerald-800 dark:text-emerald-300",
  },
  warning: {
    icon: AlertTriangle,
    label: "Heads up",
    box: "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
    title: "text-amber-800 dark:text-amber-300",
  },
  note: {
    icon: StickyNote,
    label: "My note",
    box: "border-orange-300 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/40",
    title: "text-orange-800 dark:text-orange-300",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  const Icon = s.icon;
  return (
    <aside className={`my-6 rounded-xl border p-4 ${s.box}`} role="note">
      <div className={`mb-1 flex items-center gap-2 text-sm font-semibold ${s.title}`}>
        <Icon size={16} aria-hidden />
        {title ?? s.label}
      </div>
      <div className="text-[0.95rem] leading-relaxed [&>p]:m-0 [&>p+p]:mt-2">
        {children}
      </div>
    </aside>
  );
}
