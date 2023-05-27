import { FC } from 'react';
import { setActiveFilterButton } from '../../store/todosSlice/todosSlice';
import { Button } from '@mui/material';
import { IFilterButton } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface IFilterButtonItemProps {
  item: IFilterButton;
}

const FilterButtonItem: FC<IFilterButtonItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { activeButtonId } = useAppSelector((state: any) => state.todos);
  const variant = item.id === activeButtonId ? 'contained' : 'text';
  return (
    <Button
      variant={variant}
      onClick={() => dispatch(setActiveFilterButton(item.id))}
    >
      {item.name}
    </Button>
  );
};

export default FilterButtonItem;
