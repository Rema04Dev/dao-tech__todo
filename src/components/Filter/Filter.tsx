import { FC } from 'react';
import { Stack } from '@mui/material';
import FilterButtonItem from '../FilterButtonItem/FilterButtonItem';
import { IFilterButton } from '../../types';
import { useAppSelector } from '../../hooks';

const Filter: FC = () => {
  const { filterButtons } = useAppSelector((state) => state.todos);

  return (
    <Stack direction="row">
      {filterButtons.map((filterButton: IFilterButton) => (
        <FilterButtonItem key={filterButton.id} item={filterButton} />
      ))}
    </Stack>
  );
};

export default Filter;
