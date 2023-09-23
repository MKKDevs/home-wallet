import { Typography } from 'antd';
import { TodoInput } from './components/TodoInput/TodoInput';
import './styles.css';
import { TodoList } from './components/TodoList/TodoList';
import { createTodo, fetchAllTodos, removeTodo, editTodo } from '../api/todos';
import { useEffect, useState } from 'react';

export interface Todo {
  id: number;
  name: string;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = async (inputValue: string) => {
    if (inputValue) {
      await createTodo(inputValue);
      await fetchTodos();
    }
  };

  const deleteTodoHandler = async (id: number) => {
    await removeTodo(id);
    await fetchTodos();
  };

  const editTodoHandler = async (id: number, name: string) => {
    await editTodo(id, name);
    await fetchTodos();
  };

  const fetchTodos = async () => {
    const todos = await fetchAllTodos();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const { Title } = Typography;
  return (
    <>
      <Title>Home Wallet</Title>
      <TodoInput addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        removeTodoHandler={deleteTodoHandler}
        editTodoHandler={editTodoHandler}
      />
    </>
  );
}

export default App;
