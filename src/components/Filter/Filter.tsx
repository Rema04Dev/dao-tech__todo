import { FC } from 'react';
import { Stack } from '@mui/material';
import FilterButtonItem from '../FilterButtonItem/FilterButtonItem';
import { IFilterButton } from '../../types';
import { useAppSelector } from '../../hooks';

const Filter: FC = () => {
  const { filterButtons, todoItems } = useAppSelector((state) => state.todos);
  const currentTodos = todoItems.filter(({ completed }) => !completed);
  const completedTodos = todoItems.filter(({ completed }) => completed);
  const todosCountMapping = {
    all: todoItems.length,
    current: currentTodos.length,
    completed: completedTodos.length,
  };

  return (
    <Stack direction="row">
      {filterButtons.map((filterButton: IFilterButton) => (
        <FilterButtonItem
          badgeContent={todosCountMapping[filterButton.type]}
          key={filterButton.id}
          btn={filterButton}
        />
      ))}
    </Stack>
  );
};

export default Filter;
