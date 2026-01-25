export default function HoneycombPattern({
    color = "#1A7CD8",
    opacity = 0.03,
    scale = 30, // Size of the hex
    className = ""
}: {
    color?: string;
    opacity?: number;
    scale?: number;
    className?: string;
}) {
    // Generate a simple repeating hex pattern SVG
    // This is extremely lightweight (< 1KB)
    return (
        <div className={`absolute inset-0 pointer-events-none overflowing-hidden ${className}`} style={{ zIndex: 0 }}>
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <pattern
                        id="honeycomb"
                        width={scale * 2}
                        height={scale * 1.732} // sqrt(3) approx
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Hexagon Path */}
                        <path
                            d={`M${scale} 0 L${scale * 2} ${scale * 0.433} L${scale * 2} ${scale * 1.299} L${scale} ${scale * 1.732} L0 ${scale * 1.299} L0 ${scale * 0.433} Z`}
                            fill="none"
                            stroke={color}
                            strokeWidth="1"
                            opacity={0.4}
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#honeycomb)" />
            </svg>
        </div>
    );
}
