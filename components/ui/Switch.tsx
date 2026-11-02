"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  className?: string;
}

export function Switch({
  id,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  description,
  className,
}: SwitchProps) {
  const generatedId = React.useId();
  const switchId = id || generatedId;
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);

  const isChecked = checked !== undefined ? checked : internalChecked;

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (checked === undefined) {
      setInternalChecked(next);
    }
    if (onCheckedChange) {
      onCheckedChange(next);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 select-none">
      {(label || description) && (
        <label htmlFor={switchId} className="cursor-pointer text-xs space-y-0.5">
          {label && <span className="block font-medium text-ivory">{label}</span>}
          {description && <span className="block text-mist/80">{description}</span>}
        </label>
      )}
      <button
        type="button"
        role="switch"
        id={switchId}
        aria-checked={isChecked}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          "w-11 h-6 rounded-full transition-colors relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
          isChecked ? "bg-gold" : "bg-plum-soft border border-hairline-strong",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <span
          className={cn(
            "block w-5 h-5 rounded-full transition-transform duration-200",
            isChecked
              ? "translate-x-5 bg-ink"
              : "translate-x-0.5 bg-ivory shadow-sm"
          )}
        />
      </button>
    </div>
  );
}
