import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        muted: "bg-muted text-muted-foreground shadow-[var(--shadow-border)]",
        accent: "bg-accent/15 text-accent",
        primary: "bg-primary/15 text-primary-foreground",
      },
    },
    defaultVariants: { variant: "muted" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
