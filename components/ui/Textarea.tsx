"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, onChange, rows = 4, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) onChange(e);
    };

    return (
      <div className="w-full space-y-1.5">
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            onChange={handleChange}
            placeholder=" "
            className={cn(
              "peer w-full bg-midnight border border-hairline-strong rounded-2xl px-4 pt-6 pb-2 text-sm text-ivory placeholder-transparent transition-all duration-200 resize-none",
              "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
              error && "border-danger focus:border-danger focus:ring-danger",
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={textareaId}
              className={cn(
                "absolute left-4 top-2 text-[10px] font-bold uppercase tracking-wider text-muted transition-all duration-200 pointer-events-none select-none",
                "peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-mist",
                "peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold-light",
                error && "text-danger peer-focus:text-danger"
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="text-[11px] text-danger pl-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
