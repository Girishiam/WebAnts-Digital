import Navbar from './Navbar';
import HoneycombPattern from './HoneycombPattern';

export default function Overlay() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between">
            {/* Navigation (Fixed z-50) */}
            <div className="pointer-events-auto">
                <Navbar />
            </div>

            {/* Main Hero Content - Split Grid */}
            {/* Added pt-24 to clear the fixed navbar */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 relative">
                <HoneycombPattern className="opacity-60 left-0 top-0 scale-[100%]" scale={50} />

                {/* LEFT: Typography */}
                <div className="flex flex-col gap-6 items-start text-left pointer-events-auto">
                    {/* SYSTEM ONLINE Badge moved to Navbar */}
                    <h1 className="font-monument text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] text-deep-void">
                        The Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ants-blue to-electric-cyan">Hive</span>
                    </h1>
                    <p className="max-w-md font-inter text-gray-600 text-sm md:text-base leading-relaxed">
                        We carry the heavy payload of complex technology, making it effortless for you.
                        A biomechanical agency built for the future.
                    </p>
                    <button className="group relative mt-4 px-8 py-3 bg-deep-void text-white font-monument text-sm uppercase tracking-wider hover:bg-ants-blue hover:text-white transition-all overflow-hidden clip-path-polygon shadow-lg hover:shadow-electric-cyan/20">
                        <span className="relative z-10">Enter the Hive</span>
                        <div className="absolute inset-0 bg-honeycomb-pattern opacity-10" />
                    </button>
                </div>

                {/* RIGHT: Empty (3D Scene Visible) */}
                <div className="hidden md:block">
                    {/* 3D Model is positioned here in the canvas */}
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
