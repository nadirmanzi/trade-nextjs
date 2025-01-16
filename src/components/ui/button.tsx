import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center space-x-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          // primary
          primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
          primary_light:
              "bg-primary-light text-primary-light-foreground border border-primary-light-border hover:bg-primary-light-hover",

          // accent
          accent: "bg-accent text-accent-foreground hover:bg-accent-hover",
          accent_light:
              "bg-accent-light text-accent-light-foreground border border-accent-light-border hover:bg-accent-light-hover",

          // success
          success: "bg-success text-success-foreground hover:bg-success-hover",
          success_light:
              "bg-success-light text-success-light-foreground border border-success-light-border hover:bg-success-light-hover",

          // warning
          warning: "bg-warning text-warning-foreground hover:bg-warning-hover",
          warning_light:
              "bg-warning-light text-warning-light-foreground border border-warning-light-border hover:bg-warning-light-hover",

          // destructive
          destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
          destructive_light:
              "bg-destructive-light text-destructive-light-foreground border border-destructive-light-border hover:bg-destructive-light-hover",

          // secondary
          secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary-hover",

          // outline
          outline:
              "border border-border bg-transparent text-inactive hover:text-foreground hover:bg-secondary-light",

          // muted
          muted: "bg-muted text-muted-foreground hover:cursor-not-allowed",

          // ghost
          ghost: "bg-transparent hover:bg-secondary-light",

          // link
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 px-3 text-sm",
          lg: "h-10 px-8",
          icon: "h-9 w-9",
          icon_sm: "h-8 w-8",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "default",
      },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
          <Comp
              className={cn(buttonVariants({ variant, size, className }))}
              ref={ref}
              {...props}
          />
      );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
