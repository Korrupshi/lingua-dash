import { create } from "zustand";

type SideBarStore = {
  selectedId: number;
  onSelected: (id: number) => void;
};

export const useSideBarStore = create<SideBarStore>((set) => ({
  selectedId: 0,
  onSelected: (id) => set(() => ({ selectedId: id })),
}));
