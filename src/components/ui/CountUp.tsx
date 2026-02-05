"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
    value: string;
    duration?: number;
}

export default function CountUp({ value, duration = 1200 }: CountUpProps) {
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = numericValue / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
                setCount(numericValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [numericValue, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}
