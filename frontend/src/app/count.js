import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
	count: 1,

	increment: () =>
		set((state) => ({
			count: state.count + 1,
		})),

	decrement: () =>
		set((state) => ({
			count: state.count - 1,
		})),

	reset: () => set({ count: 1 }),
});

store = persist(store, { name: 'store' });

export const useStore = create(store);
