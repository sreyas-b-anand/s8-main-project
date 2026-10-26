import { cn } from "@/lib/utils";

export default function FeaturePlaceholder({ icon: Icon, title, description, children }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Page header */}
      <div className="flex items-start gap-4 pb-5 border-b border-border">
        <span className="flex items-center justify-center size-10 rounded-lg bg-muted text-foreground shrink-0 mt-0.5">
          <Icon className="size-5" />
        </span>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Workspace area */}
      {children ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/30 px-6 py-20 text-center">
          <Icon className="size-8 text-muted-foreground/40" />
          <p className="text-sm font-medium text-muted-foreground">
            Workspace coming soon
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-xs">
            The {title} interface will be built here. Backend integration is pending.
          </p>
        </div>
      )}
    </div>
  );
}
