import React from "react";

interface FormInputProps {
    type?: string;
    name: string;
    value?: string;
    placeholder?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
    className?: string;
    inputClassName?: string;
}

export default function FormInput({
    type = "text",
    name,
    value,
    placeholder,
    label,
    onChange,
    error,
    className = "",
    inputClassName = "",
}: FormInputProps) {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label className="text-xs font-medium text-slate-600">
                    {label}
                </label>
            )}

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
          w-full rounded-lg px-3 py-2.5 text-base outline-none transition
          border
          ${error
                        ? "border-red-400 focus:ring-red-400/30"
                        : "border-slate-300 focus:border-blueTheme focus:ring-2 focus:ring-blueTheme/30"
                    }
          ${inputClassName}
        `}
            />

            {error && (
                <p className="text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
