import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96] transition-[scale,background-color,color,box-shadow,opacity] duration-150 ease-out",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-cta hover:opacity-90",
        secondary:
          "bg-card text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        accent: "bg-accent text-accent-foreground hover:opacity-90",
      },
      size: {
        sm: "h-10 rounded-full px-3.5 text-sm",
        md: "h-11 rounded-full px-5 text-sm",
        lg: "h-12 rounded-full px-5 text-base",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
