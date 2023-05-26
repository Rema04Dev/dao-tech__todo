export interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

export interface IFilterButton {
  id: number;
  name: string;
  type: 'all' | 'current' | 'completed';
}

export interface ITodosState {
  todoItems: Array<ITodo>;
  filterButtons: Array<IFilterButton>;
  activeButtonId: number;
}
