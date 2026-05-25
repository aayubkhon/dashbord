import { create } from 'zustand';
import { Company, Post, AppState } from '@/types';
import { fetchCompanies, fetchPosts } from '@/lib/api';

type Store = AppState & {
  setSelectedCompanyId: (id: string | null) => void;
  loadCompanies: () => Promise<void>;
  loadPosts: () => Promise<void>;
  getSelectedCompany: () => Company | undefined;
};

export const useAppStore = create<Store>((set, get) => ({
  companies: [],
  posts: [],
  selectedCompanyId: null,
  loading: false,
  error: null,

  setSelectedCompanyId: (id) => set({ selectedCompanyId: id }),

  loadCompanies: async () => {
    set({ loading: true, error: null });
    try {
      const companies = await fetchCompanies();
      set({ companies, loading: false });
      if (companies.length > 0 && !get().selectedCompanyId) {
        set({ selectedCompanyId: companies[0].id });
      }
    } catch (error) {
      set({ error: 'Failed to load companies', loading: false });
    }
  },

  loadPosts: async () => {
    try {
      const posts = await fetchPosts();
      set({ posts });
    } catch (error) {
      set({ error: 'Failed to load posts' });
    }
  },

  getSelectedCompany: () => {
    const { companies, selectedCompanyId } = get();
    return companies.find(c => c.id === selectedCompanyId);
  },
}));