import S from './TodoInput.styles';
import { useState } from 'react';
import { createTodo } from '../../../api/todos';

interface TodoInputProps {
  addTodoHandler: (inputValue: string) => void;
}

export const TodoInput = ({ addTodoHandler }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.Container>
      <S.Input
        placeholder="Add a todo"
        onChange={inputChangeHandler}
        value={inputValue}
      />
      <S.Button
        onClick={() => {
          addTodoHandler(inputValue);
          setInputValue('');
        }}
      >
        Add
      </S.Button>
    </S.Container>
  );
};
