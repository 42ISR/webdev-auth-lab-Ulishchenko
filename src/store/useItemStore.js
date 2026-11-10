import { create } from "zustand"
import { api } from "../api/api"

export const useItemStore = create((set) => ({
    items: [],
    getItems: async (own = false

    ) => {
        try {
            const res = await api.getItems()
            set({ items })
        } catch (error) {
            console.error(error)
        }
    },
}))