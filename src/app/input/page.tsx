'use client'
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "./todoItem/page";

const Todos: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const newTodo = useTodoStore((state) => state.newTodo);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const setNewTodo = useTodoStore((state) => state.setNewTodo);

  return (
    <div className="container mx-auto mt-4 h-screen w-screen p-4 flex flex-col items-center">
      <h1 className="text-5xl mb-4 italic max-w-[500px] text-rgba(175, 47, 47, 0.15) opacity-[2px]">Todos</h1>
      <div className="max-w-[500px] mb-4 w-full max-h-[50px] h-full">
        <input
          type="text"
          placeholder="what needs to be done ?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addTodo()}
          className="border p-2 italic w-full h-full"
        />
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo}
          onDelete={() => deleteTodo(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Todos;




