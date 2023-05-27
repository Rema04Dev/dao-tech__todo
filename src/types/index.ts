export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
}

export interface IFilterButton {
  id: string;
  name: string;
  type: 'all' | 'current' | 'completed';
}

export interface ITodosState {
  todoItems: Array<ITodo>;
  filterButtons: Array<IFilterButton>;
  activeButtonId: string;
}
