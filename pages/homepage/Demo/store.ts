import { createStore } from 'floppy-disk';

type MyStore = {
  count: number;
  shape: string;
  increment: () => void;
  changeShape: () => void;
};
export const useMyStore = createStore<MyStore>(({ set }) => ({
  count: 3,
  shape: 'square',
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  changeShape: () => {
    set(({ shape }) => {
      if (shape === 'square') return { shape: 'circle' };
      if (shape === 'circle') return { shape: 'triangle' };
      return { shape: 'square' };
    });
  },
}));
