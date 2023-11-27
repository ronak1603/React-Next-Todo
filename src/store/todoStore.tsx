import { create } from 'zustand';

interface TodoStore {
  todos: string[];
  newTodo: string;
  edit:boolean;
  addTodo: () => void;
  deleteTodo: (index: number) => void;
  setNewTodo: (value: string) => void;
  editTodo: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  newTodo: '',
  edit: false,
  addTodo: () =>
    set((state) => ({
      todos: [...state.todos, state.newTodo],
      newTodo: '',
      edit: true
    })),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
  setNewTodo: (value) => set({ newTodo: value }),
  editTodo: () =>
  set((state) => ({
    edit: true,
  }))
}));



