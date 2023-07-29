import { create } from 'zustand'
interface Category {
  idCategory: number;
  name: string;
  description: string;
  state: boolean;
}

interface CategoryState {
  categories: Category[];
  setCategories: (data: Array<Category>) => void;
}

export const useCategoriesStore = create<CategoryState>((set) => ({
  categories: [],
  setCategories: (data: Array<Category>) => {
    set({ categories: [...data] }, false)
  },

}))

fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/categories`)
  .then(res => res.json())
  .then(data => useCategoriesStore.getState().setCategories(data))
