import { useThree } from '@react-three/fiber';

export const useResponsiveScale = () => {
    const { viewport } = useThree();
    const BASE_WIDTH = 16; // The 3D width of your desktop scene, tune this value

    // If viewport is smaller than base, shrink. If larger, cap at 1 (or allow grow if desired).
    // Using simple ratio:
    return Math.min(1, viewport.width / BASE_WIDTH);
};
