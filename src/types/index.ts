export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
}

export type FilterButtonType = 'all' | 'current' | 'completed';

export interface IFilterButton {
  id: string;
  name: string;
  type: FilterButtonType;
}

export interface ITodosState {
  todoItems: Array<ITodo>;
  filterButtons: Array<IFilterButton>;
  activeType: FilterButtonType;
}
