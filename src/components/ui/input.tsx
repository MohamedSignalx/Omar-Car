import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md bg-muted px-3 text-base text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-muted-foreground focus-visible:shadow-[0_0_0_2px_var(--color-ring)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
