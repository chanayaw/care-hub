import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-md border-2 border-stone-300 px-3 py-2 text-sm transition outline-none",
        "focus:ring-2 focus:ring-stone-600/10",
        className,
      )}
      {...props}
    />
  );
}
