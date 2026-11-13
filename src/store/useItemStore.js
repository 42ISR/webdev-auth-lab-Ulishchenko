import { create } from "zustand"
import { api } from "../api/api"

export const useItemStore = create((set) => ({
    items: [],
    getItems: async (own = false) => {

        try {
            const res = await own
                ? await api.getItems()
                : await api.getItems()

            set({ items: res })
        } catch (error) {
            console.error(error)
        }
    },
}))