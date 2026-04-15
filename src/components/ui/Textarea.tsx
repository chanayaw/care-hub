import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "px-e max-w-200 rounded-md border-2 border-stone-300 py-2 text-sm transition outline-none",
        "min-h-28 resize-y focus:ring-2 focus:ring-stone-300/10",
        className,
      )}
      {...props}
    />
  );
}
