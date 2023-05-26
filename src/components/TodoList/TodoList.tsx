import { FC } from 'react';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { IFilterButton, ITodo } from '../../store/todosSlice/todosSlice';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: FC = () => {
  const { todoItems, activeButtonId, filterButtons } = useSelector(
    (state: any) => state.todos
  );
  const activeButton = filterButtons.find(
    (btn: IFilterButton) => btn.id === activeButtonId
  );

  const getTodos = () => {
    let todos: Array<ITodo> = [];
    switch (activeButton.type) {
      case 'all':
        todos = todoItems;
        break;
      case 'current':
        todos = todoItems.filter((todo: ITodo) => !todo.completed);
        break;
      case 'completed':
        todos = todoItems.filter((todo: ITodo) => todo.completed);
        break;
      default:
        return todoItems;
    }
    return todos;
  };
  return (
    <List>
      {getTodos().map((todoItem: ITodo) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </List>
  );
};

export default TodoList;
