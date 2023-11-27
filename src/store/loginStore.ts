import { create } from 'zustand';

type LoginStore = {
  email: string;
  password: string;
  isAuthenticated: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  login: () => void;
};

const useLoginStore = create<LoginStore>((set) => ({
  email: '',
  password: '',
  isAuthenticated: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  login: () => {
    set((state) => ({
      ...state,
      isAuthenticated: state.email === 'test@example.com' && state.password === 'password',
    }));
  },
}));

export default useLoginStore;
