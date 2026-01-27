import { useId } from "react";

export default function HoneycombPattern({
    color = "#1A7CD8",
    opacity = 0.03,
    scale = 30, // Size of the hex
    className = "",
    style,
    ...props
}: {
    color?: string;
    opacity?: number;
    scale?: number;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
}) {
    const id = useId();
    return (
        <div className={`absolute inset-0 pointer-events-none overflowing-hidden ${className}`} style={{ zIndex: 0, ...style }} {...props}>
            <style>{`
                @keyframes dash-flow {
                    to { stroke-dashoffset: -40; }
                }
                @keyframes pulse-node {
                    0%, 100% { opacity: 0.3; r: 2px; }
                    50% { opacity: 1; r: 4px; }
                }
            `}</style>
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.1" />
                        <stop offset="50%" stopColor={color} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                    </linearGradient>
                    <pattern
                        id={id}
                        width={scale * 2}
                        height={scale * 1.732} // sqrt(3) approx
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Hexagon Path */}
                        <path
                            d={`M${scale} 0 L${scale * 2} ${scale * 0.433} L${scale * 2} ${scale * 1.299} L${scale} ${scale * 1.732} L0 ${scale * 1.299} L0 ${scale * 0.433} Z`}
                            fill="none"
                            stroke={`url(#grad-${id})`}
                            strokeWidth="2"
                            strokeDasharray="10 5"
                            style={{ animation: "dash-flow 2s linear infinite" }}
                            opacity={0.9}
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* Vertices Nodes (Circles) - Animated */}
                        <g fill={color} opacity={0.8}>
                            <circle cx={scale} cy={0} r="2" style={{ animation: 'pulse-node 3s ease-in-out infinite', animationDelay: '0s' }} />
                            <circle cx={scale * 2} cy={scale * 0.433} r="2" style={{ animation: 'pulse-node 3s ease-in-out infinite', animationDelay: '0.5s' }} />
                            <circle cx={scale * 2} cy={scale * 1.299} r="2" style={{ animation: 'pulse-node 3s ease-in-out infinite', animationDelay: '1s' }} />
                            <circle cx={scale} cy={scale * 1.732} r="2" />
                            <circle cx={0} cy={scale * 1.299} r="2" style={{ animation: 'pulse-node 3s ease-in-out infinite', animationDelay: '1.5s' }} />
                            <circle cx={0} cy={scale * 0.433} r="2" />
                        </g>

                        {/* Center Tech Marker (+) */}
                        <g stroke={color} strokeWidth="1" opacity={0.5}>
                            <line x1={scale - 4} y1={scale * 0.866} x2={scale + 4} y2={scale * 0.866} />
                            <line x1={scale} y1={scale * 0.866 - 4} x2={scale} y2={scale * 0.866 + 4} />
                        </g>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id})`} />
            </svg>
        </div>
    );
}
