import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type PhoneFieldProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
};

export function PhoneField({
    label,
    value,
    onChange,
    error,
}: PhoneFieldProps) {
    return (
        <div className="space-y-1">
            {label &&
                <label className="text-xs font-medium text-slate-600">
                    {label}
                </label>}

            <PhoneInput
                country={"in"}
                value={value}
                onChange={onChange}
                disableCountryCode={false}
                countryCodeEditable={false}
                enableSearch
                autoFormat
                containerClass="!w-full"
                inputClass={`
                    !w-full
                    !rounded-lg
                    !border
                    !pr-3 !pl-12 !h-[45px]
                    !py-3
                    !text-base
                    !outline-none
                    ${error
                        ? "!border-red-400 focus:!ring-2 focus:!ring-red-400/30"
                        : "!border-slate-300 focus:!border-blueTheme focus:!ring-2 focus:!ring-blueTheme/30"
                    }
                `}
                buttonClass="!border-slate-300 !rounded-l-lg"
                dropdownClass="!text-sm"
            />

            {error && (
                <p className="text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
