import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stack, Button } from '@mui/material';
import { IFilterButton } from '../../store/todosSlice/todosSlice';
import FilterButtonItem from '../FilterButtonItem/FilterButtonItem';
const Filter: FC = () => {
  const { filterButtons, activeButtonId } = useSelector(
    (state: any) => state.todos
  );

  return (
    <Stack direction="row">
      {filterButtons.map((filterButton: IFilterButton) => (
        <FilterButtonItem item={filterButton} />
      ))}
    </Stack>
  );
};

export default Filter;
