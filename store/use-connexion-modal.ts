import { create } from "zustand";

type ConnexionModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useConnexionModal = create<ConnexionModalState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
