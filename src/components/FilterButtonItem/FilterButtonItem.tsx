import { FC } from 'react';
import { setActiveFilterButton } from '../../store/todosSlice/todosSlice';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IFilterButton } from '../../types';

interface IFilterButtonItemProps {
  item: IFilterButton;
}

const FilterButtonItem: FC<IFilterButtonItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { activeButtonId } = useSelector((state: any) => state.todos);
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
