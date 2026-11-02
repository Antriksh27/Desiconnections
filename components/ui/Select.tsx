import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    return (
      <div className="w-full space-y-1.5">
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full h-14 bg-midnight border border-hairline-strong rounded-2xl px-4 pt-5 pb-1 text-sm text-ivory appearance-none transition-all duration-200 cursor-pointer",
              "focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold",
              error && "border-danger focus:border-danger focus:ring-danger",
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-midnight text-ivory py-2">
                {opt.label}
              </option>
            ))}
          </select>
          {label && (
            <label
              htmlFor={selectId}
              className="absolute left-4 top-2 text-[10px] font-bold uppercase tracking-wider text-muted pointer-events-none select-none"
            >
              {label}
            </label>
          )}
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mist pointer-events-none" />
        </div>
        {error && <p className="text-[11px] text-danger pl-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
