"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, checked, defaultChecked, onChange, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const [isChecked, setIsChecked] = React.useState(
      Boolean(checked ?? defaultChecked)
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked);
      }
      if (onChange) onChange(e);
    };

    const currentChecked = checked !== undefined ? checked : isChecked;

    return (
      <div className="flex items-start gap-3 select-none">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={currentChecked}
            disabled={disabled}
            onChange={handleChange}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "w-5 h-5 rounded-md border border-hairline-strong bg-midnight flex items-center justify-center transition-all duration-200 cursor-pointer",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ink",
              currentChecked && "bg-gold border-gold text-ink",
              disabled && "opacity-50 cursor-not-allowed",
              className
            )}
          >
            {currentChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </div>
        </div>
        {(label || description) && (
          <label htmlFor={checkboxId} className="cursor-pointer text-xs space-y-0.5">
            {label && <span className="block font-medium text-ivory">{label}</span>}
            {description && <span className="block text-mist/80">{description}</span>}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
