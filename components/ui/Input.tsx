"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, id, onChange, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
    };

    return (
      <div className="w-full space-y-1.5">
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={type}
            onChange={handleInputChange}
            placeholder=" "
            className={cn(
              "peer w-full h-14 bg-midnight border border-hairline-strong rounded-2xl px-4 pt-5 pb-1 text-sm text-ivory placeholder-transparent transition-all duration-200",
              "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
              error && "border-danger focus:border-danger focus:ring-danger",
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={inputId}
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

Input.displayName = "Input";
