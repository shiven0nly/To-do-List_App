import { useState, useEffect } from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);


  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
  };

  const handleDelete = (indexToDelete) => {
    const updated = todos.filter((_, i) => i !== indexToDelete);
    setTodos(updated);
  };

  const handleEdit = (index) => {
    setTodo(todos[index].todo);
    setIsEditing(true);
    setCurrentEditIndex(index);
  };

  const handleUpdate = () => {
    if (todo.trim() === "") return;

    const updated = todos.map((item, i) =>
      i === currentEditIndex ? { ...item, todo } : item
    );
    setTodos(updated);
    setTodo("");
    setIsEditing(false);
    setCurrentEditIndex(null);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const toggleCompleted = (index) => {
    const updated = todos.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updated);
  };

  return (
    <div className="main">
    <div
  className="bg-blue-200 flex flex-col items-start absolute top-[35%] left-[30%] min-w-[40vw] h-[60vh] p-5 rounded-lg shadow-lg shadow-indigo-300 overflow-y-auto crollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">

      <div className="addTodo my-5">
        <h2 className="text-lg font-bold mb-2">Add a Todo:</h2>
        <div className="flex items-center gap-5">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter your todo..."
            className="bg-white shadow-xl shadow-black-50 rounded-sm min-w-80 px-3 py-2 border border-gray-400"
          />
          {isEditing ? (
            <ButtonAdd onClick={handleUpdate} label="Update" />
          ) : (
            <ButtonAdd onClick={handleAdd} />
          )}
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">Your Todos:</h2>

      <div className="todos flex flex-col gap-2 w-full">
        {todos.map((item, index) => (
          <div
            key={index}
            className="todo flex justify-between items-center bg-white shadow-amber-50 px-4 py-2 rounded shadow-lg w-full"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => toggleCompleted(index)}
              />
              <span
                className={`${
                  item.isCompleted ? "line-through text-gray-400" : ""
                }`}
              >
                {item.todo}
              </span>
            </div>
            <div className="buttons flex gap-2">
              <ButtonEdit onClick={() => handleEdit(index)} />
              <ButtonDelete onClick={() => handleDelete(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Main;
