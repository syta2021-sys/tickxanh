import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useStore = create(
    persist(
        (set) => ({
            geoInfo: null,
            setGeoInfo: (info) => set({ geoInfo: info })
        }),
        {
            name: 'storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                geoInfo: state.geoInfo
            })
        }
    )
);
