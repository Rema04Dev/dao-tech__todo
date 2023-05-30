import { FC } from 'react';
import { setActiveFilterButton } from '../../store/todosSlice/todosSlice';
import { Button } from '@mui/material';
import { IFilterButton } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface IFilterButtonItemProps {
  btn: IFilterButton;
}

const FilterButtonItem: FC<IFilterButtonItemProps> = ({ btn }) => {
  const dispatch = useAppDispatch();
  const { activeType, todoItems } = useAppSelector((state) => state.todos);
  const currentTodos = todoItems.filter(({ completed }) => !completed);
  const completedTodos = todoItems.filter(({ completed }) => completed);
  const variant = btn.type === activeType ? 'contained' : 'text';
  const isDisabled = () => {
    const map = {
      all: todoItems.length > 0,
      current: currentTodos.length > 0,
      completed: completedTodos.length > 0,
    };
    return map[btn.type];
  };

  return (
    <Button
      disabled={!isDisabled()}
      variant={variant}
      onClick={() => dispatch(setActiveFilterButton(btn.type))}
    >
      {btn.name}
    </Button>
  );
};

export default FilterButtonItem;
