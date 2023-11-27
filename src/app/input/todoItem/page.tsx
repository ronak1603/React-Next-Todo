"use client";
import clsx from "clsx";
import { MouseEventHandler, useState } from "react";
import { Trash2 } from "react-feather";

interface TodoItemProps {
  text: string;
  onDelete: () => void;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete, index }) => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(text);
  const [completed, setCompleted] = useState(false);

  const toggleEdit: MouseEventHandler<HTMLDivElement> = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleInputBlur = () => {
    setEdit(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div
      key={index}
      onChange={handleCheckboxChange}
      className={`border p-3 mb-1 max-w-[500px] min-h-[50px] overflow-clip w-full break-words flex flex-row`}
    >
      <input type="checkbox" onChange={handleCheckboxChange} checked={completed} className="mr-2 rounded-full outline-none border" />
      <div
        className={`flex-grow ${completed ? 'completed' : ''}`} // Apply styles based on completion state
        onDoubleClick={toggleEdit}
      >
        {edit ? (
          <input
            type="text"
            value={data}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            className={`flex-grow`}
          />
        ) : (
          <div className={clsx(
            'flex-grow',
            completed ? 'text-opacity-[25%] line-through text-gray-800 decoration-2' : '',
          )}>
            {data}
          </div>
        )}
      </div>
      {
        completed ? <span></span> : <button onClick={onDelete} className="ml-2 text-red-600">
        <Trash2 size={18} />
      </button>
      }
    </div>
  );
};

export default TodoItem;
