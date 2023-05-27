import { FC } from 'react';
import { Badge } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import { ITodo } from '../../types';
import { useAppSelector } from '../../hooks';
const Badges: FC = () => {
  const { todoItems } = useAppSelector((state) => state.todos);
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
