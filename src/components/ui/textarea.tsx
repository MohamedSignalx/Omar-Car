import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-24 w-full rounded-md bg-muted px-3 py-2.5 text-base text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-muted-foreground focus-visible:shadow-[0_0_0_2px_var(--color-ring)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
