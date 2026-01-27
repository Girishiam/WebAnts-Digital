import Navbar from './Navbar';
import ArchitecturalBackground from './ArchitecturalBackground';

export default function Overlay() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between">
            {/* Background Layer - Removed ArchitecturalBackground for clean look */}

            {/* Navigation (Fixed z-50) */}
            <div className="pointer-events-auto z-50 relative">
                <Navbar />
            </div>

            {/* Main Hero Content - Standard Responsive Grid */}
            <div className="flex-1 w-full xl:max-w-[1700px] mx-auto px-6 md:px-12 pt-32 md:pt-24 relative z-20 grid grid-cols-1 md:grid-cols-2 items-center">

                {/* LEFT: Typography (Always visible, natural flow) */}
                <div className="flex flex-col gap-6 items-start text-left pointer-events-auto relative">
                    {/* Text Backdrop Filter - kept subtle for readability */}
                    <div className="absolute -inset-8 bg-white/5 backdrop-blur-3xl rounded-3xl -z-10 bg-blend-soft-light border border-white/10 shadow-sm" />

                    <h1 className="font-monument text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] text-deep-void drop-shadow-sm">
                        The Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ants-blue to-electric-cyan">Hive</span>
                    </h1>
                    <p className="max-w-md font-inter text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                        We carry the heavy payload of complex technology, making it effortless for you.
                        A biomechanical agency built for the future.
                    </p>
                    <button className="group relative mt-4 px-8 py-3 bg-deep-void text-white font-monument text-sm uppercase tracking-wider hover:bg-ants-blue hover:text-white transition-all overflow-hidden clip-path-polygon shadow-lg hover:shadow-electric-cyan/20">
                        <span className="relative z-10">Enter the Hive</span>
                        <div className="absolute inset-0 bg-honeycomb-pattern opacity-10" />
                    </button>
                </div>

                {/* RIGHT: Spacer for Desktop 3D Model */}
                <div className="hidden md:block">
                    {/* 3D Model floats here on desktop */}
                </div>
            </div>

            {/* Footer / Status */}
            <footer className="flex justify-between items-end font-inter text-xs text-gray-500 border-t border-deep-void/10 mx-6 md:mx-12 pb-6 pt-6">
                <div>
                    <p>SCROLL TO EXPLORE</p>
                </div>
                <div className="text-right">
                    <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
                        OPERATIONAL
                    </p>
                </div>
            </footer>
        </div>
    );
}
