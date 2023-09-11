import { createStore } from 'floppy-disk';

type MyStore = {
  count: number;
  shape: string;
  increment: () => void;
  changeShape: () => void;
};
export const useMyStore = createStore<MyStore>(({ set, get }) => ({
  count: 3,
  shape: 'square',
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  changeShape: () => {
    const { shape } = get();
    let nextShape;
    if (shape === 'square') nextShape = 'circle';
    else if (shape === 'circle') nextShape = 'triangle';
    else nextShape = 'square';
    set({ shape: nextShape });
  },
}));
