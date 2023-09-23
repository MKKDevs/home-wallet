import S from './TodoList.styles';
import { useState } from 'react';

export const TodoList = ({
  todos,
  removeTodoHandler,
  editTodoHandler,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editInputValue, setEditInputValue] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (id: number, name: string) => {
    setIsModalOpen(false);
    editTodoHandler(id, name);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <S.List
      header="Todos"
      bordered
      dataSource={todos}
      renderItem={(item: any) => (
        <S.List.Item>
          {item.name}
          <S.ButtonContainer>
            <S.EditButton onClick={showModal}>Edit</S.EditButton>
            <S.DeleteButton onClick={() => removeTodoHandler(item.id)}>
              Remove
            </S.DeleteButton>
          </S.ButtonContainer>
          <S.Modal
            open={isModalOpen}
            title="Enter new todo name"
            onCancel={handleCancel}
            onOk={() => handleOk(item.id, editInputValue)}
            centered
          >
            <S.Input onChange={(e) => setEditInputValue(e.target.value)} />
          </S.Modal>
        </S.List.Item>
      )}
    />
  );
};
