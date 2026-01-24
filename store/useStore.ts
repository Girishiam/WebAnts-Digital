import { create } from 'zustand';

interface State {
    isLoaded: boolean;
    setIsLoaded: (loaded: boolean) => void;
    scrollProgress: number;
    setScrollProgress: (progress: number) => void;
}

export const useStore = create<State>((set) => ({
    isLoaded: false,
    setIsLoaded: (loaded) => set({ isLoaded: loaded }),
    scrollProgress: 0,
    setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
