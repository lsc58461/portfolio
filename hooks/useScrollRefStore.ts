import { create } from 'zustand';

interface ScrollRefState {
  refs: (HTMLElement | null)[];
  setRef: ({ index, ref }: { index: number; ref: HTMLElement | null }) => void;
}

const useScrollRefStore = create<ScrollRefState>((set) => ({
  refs: [],
  setRef: ({ index, ref }) =>
    set((state) => ({
      refs: [
        ...state.refs.slice(0, index),
        ref,
        ...state.refs.slice(index + 1),
      ],
    })),
}));

export default useScrollRefStore;
