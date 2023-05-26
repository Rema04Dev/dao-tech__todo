import { FC } from 'react';
import { Badge } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import { useSelector } from 'react-redux';
import { ITodo } from '../../store/todosSlice/todosSlice';
const Badges: FC = () => {
  const { todoItems } = useSelector((state: any) => state.todos);
  const completedTodos = todoItems.filter((todo: ITodo) => todo.completed);
  const currentTodos = todoItems.filter((todo: ITodo) => !todo.completed);
  return (
    <>
      <Badge color="secondary" badgeContent={currentTodos.length} showZero>
        <AssignmentLateIcon />
      </Badge>
      <Badge color="secondary" badgeContent={completedTodos.length} showZero>
        <TaskAltIcon />
      </Badge>
    </>
  );
};

export default Badges;
