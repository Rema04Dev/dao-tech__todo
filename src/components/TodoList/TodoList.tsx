import { FC } from 'react';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { ITodo } from '../../store/todosSlice/todosSlice';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: FC = () => {
  const todos = useSelector((state: any) => state.todos.todoItems);
  return (
    <List>
      {todos.map((todoItem: ITodo) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </List>
  );
};

export default TodoList;
