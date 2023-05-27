import { FC } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  changeStatus,
  removeTodoItem,
} from '../../store/todosSlice/todosSlice';
import { ITodo } from '../../types';
import { useAppDispatch } from '../../hooks';

interface ITodoItemProps {
  todoItem: ITodo;
}

const TodoItem: FC<ITodoItemProps> = ({ todoItem }) => {
  const dispatch = useAppDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          onClick={() => dispatch(removeTodoItem(todoItem.id))}
          edge="end"
          aria-label="comments"
        >
          <CloseOutlinedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox
            onChange={() => dispatch(changeStatus(todoItem.id))}
            edge="start"
            checked={todoItem.completed}
            tabIndex={-1}
          />
        </ListItemIcon>
        <ListItemText
          sx={{
            textDecoration: todoItem.completed ? 'line-through' : '',
          }}
        >
          {todoItem.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
