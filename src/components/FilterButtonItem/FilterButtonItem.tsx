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
  const { activeType } = useAppSelector((state) => state.todos);
  const variant = item.type === activeType ? 'contained' : 'text';
  return (
    <Button
      variant={variant}
      onClick={() => dispatch(setActiveFilterButton(item.type))}
    >
      {item.name}
    </Button>
  );
};

export default FilterButtonItem;
