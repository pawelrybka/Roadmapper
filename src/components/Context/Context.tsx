import { createContext } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type TodosContextType = {
  todos: Todo[];
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo | null) => void;
  toggleCompleted: (id: number | undefined) => void;
}

const Context = createContext<TodosContextType>({
  todos: [],
  selectedTodo: null,
  setSelectedTodo: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleCompleted: () => {},
});

export default Context;



