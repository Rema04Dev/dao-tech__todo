import { FC } from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { ITodo } from '../../store/todosSlice/todosSlice';
import { changeStatus } from '../../store/todosSlice/todosSlice';
import { useDispatch } from 'react-redux';
const TodoList: FC = () => {
  const todos = useSelector((state: any) => state.todos.todoItems);
  const dispatch = useDispatch();
  return (
    <List>
      {todos.map(({ id, name, completed }: ITodo) => (
        <ListItem
          key={id}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Checkbox
                onChange={() => dispatch(changeStatus(id))}
                edge="start"
                checked={completed}
                tabIndex={-1}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                textDecoration: completed ? 'line-through' : '',
              }}
            >
              {name}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
