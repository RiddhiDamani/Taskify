import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    // <div className="container">
    //   <div className="todos">
    //     <span className="todos__heading">Active Tasks</span>
    //     {todos.map((todo) => (
    //       <SingleTodo
    //         todo={todo}
    //         key={todo.id}
    //         todos={todos}
    //         setTodos={setTodos}
    //       />
    //     ))}
    //   </div>
    //   <div className="todos remove">
    //     <span className="todos__heading">Completed Tasks</span>
    //     {todos.map((todo) => (
    //       <SingleTodo
    //         todo={todo}
    //         key={todo.id}
    //         todos={todos}
    //         setTodos={setTodos}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="todos">
      {todos.map((todo) => (
        // <li>{todo.todo}</li>
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
