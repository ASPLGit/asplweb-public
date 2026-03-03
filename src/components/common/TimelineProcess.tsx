"use client";

import { motion, MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface ProcessStep {
    title: string;
    description: string;
}

interface TimelineProcessProps {
    steps: ProcessStep[];
    scaleY: MotionValue<number>;
    refProp: RefObject<HTMLDivElement | null>;
}

export default function TimelineProcess({           
    steps,
    scaleY,
    refProp,
}: TimelineProcessProps) {
    const totalSteps = steps.length;

    return (
        <section
            ref={refProp}
            className="relative bg-black overflow-hidden pb-10"
        >
            <div className="relative mx-auto max-w-6xl px-6">

                {/* DESKTOP */}
                <div className="sm:grid grid-cols-3 sm:gap-12 gap-2 hidden">

                    {/* LEFT TITLES */}
                    <div
                        className="col-span-1 text-white"
                        style={{ gap: `${100 / totalSteps}%` }}
                    >
                        <div className="flex flex-col justify-between h-full py-4">
                            {steps.map((step, index) => (
                                <h3
                                    key={index}
                                    className="text-2xl font-semibold"
                                >
                                    {index + 1}. {step.title}
                                </h3>
                            ))}
                        </div>
                    </div>

                    {/* CENTER LINE */}
                    <div className="relative flex justify-center">

                        <div className="absolute w-[2px] h-full bg-white/20" />

                        <motion.div
                            style={{ scaleY }}
                            className="origin-top absolute w-[2px] h-full bg-blue-500"
                        />

                        {steps.map((_, index) => {
                            const position =
                                totalSteps === 1
                                    ? 0
                                    : (index / (totalSteps - 1)) * 100;

                            return (
                                <div
                                    key={index}
                                    className={`absolute w-4 h-4 rounded-full ${index === 0
                                            ? "bg-blue-500"
                                            : "bg-white"
                                        }`}
                                    style={{ top: `${position}%`, transform: "translateY(-50%)" }}
                                />
                            );
                        })}
                    </div>

                    {/* RIGHT DESCRIPTIONS */}
                    <div className="col-span-1 text-slate-300 text-sm leading-relaxed">
                        <div className="flex flex-col justify-between h-full py-4">
                            {steps.map((step, index) => (
                                <p key={index}>{step.description}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div className="grid grid-cols-4 gap-2 sm:hidden">

                    {/* CENTER LINE */}
                    <div className="relative col-span-1 flex justify-center">

                        <div className="absolute w-[2px] h-full bg-white/20" />

                        <motion.div
                            style={{ scaleY }}
                            className="origin-top absolute w-[2px] h-full bg-blue-500"
                        />

                        {steps.map((_, index) => {
                            const position =
                                totalSteps === 1
                                    ? 0
                                    : (index / (totalSteps - 1)) * 100;

                            return (
                                <div
                                    key={index}
                                    className={`absolute w-4 h-4 rounded-full ${index === 0
                                            ? "bg-blue-500"
                                            : "bg-white"
                                        }`}
                                    style={{ top: `${position}%`, transform: "translateY(-50%)" }}
                                />
                            );
                        })}
                    </div>

                    {/* TEXT */}
                    <div className="col-span-3 space-y-28 text-white">
                        {steps.map((step, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-2xl font-semibold">
                                    {index + 1}. {step.title}
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}