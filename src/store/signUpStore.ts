import { create } from 'zustand';

type SignupStore = {
  name: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

const useSignupStore = create<SignupStore>((set) => ({
  name: '',
  email: '',
  password: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default useSignupStore;
