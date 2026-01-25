import { ReactNode } from "react";

export default function OrigamiCard({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`relative group ${className}`}>
            {/* Main Content Card with "Folded" visual via clip-path */}
            {/* The corner fold is achieved by clipping the top-right corner */}
            <div
                className="relative z-10 bg-white border border-gray-200 p-8 transition-all duration-300 group-hover:-translate-y-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_-5px_rgba(26,124,216,0.15)]"
                style={{
                    clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
                }}
            >
                {children}
            </div>

            {/* The "Fold" Effect (Pseudo-element substitute) */}
            {/* This triangle sits in the empty space created by the clip-path */}
            <div
                className="absolute top-0 right-0 w-[30px] h-[30px] bg-gray-50 border-l border-b border-gray-200 transition-colors group-hover:bg-electric-cyan/10"
                style={{
                    zIndex: 20,
                }}
            />

            {/* Decorative "Tech" Accent Line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-ants-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
}
