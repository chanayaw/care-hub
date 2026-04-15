import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn("max-w-150 rounded-lg bg-stone-200 p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
