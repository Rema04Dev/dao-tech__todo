import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { IFilterButton } from '../../store/todosSlice/todosSlice';
import FilterButtonItem from '../FilterButtonItem/FilterButtonItem';
const Filter: FC = () => {
  const { filterButtons } = useSelector((state: any) => state.todos);

  return (
    <Stack direction="row">
      {filterButtons.map((filterButton: IFilterButton) => (
        <FilterButtonItem key={filterButton.id} item={filterButton} />
      ))}
    </Stack>
  );
};

export default Filter;
