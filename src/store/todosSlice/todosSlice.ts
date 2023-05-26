import { createSlice } from '@reduxjs/toolkit';

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

const initialState: ITodosState = {
  todoItems: [],
  filterButtons: [
    { id: 1, name: 'All', type: 'all' },
    { id: 2, name: 'Current', type: 'current' },
    { id: 3, name: 'Completed', type: 'completed' },
  ],
  activeButtonId: 1,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    },
    changeStatus: (state, action) => {
      const newTodos = state.todoItems.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      state.todoItems = newTodos;
    },
    setActiveFilterButton: (state, action) => {
      state.activeButtonId = action.payload;
    },
    removeTodoItem: (state, action) => {
      const newTodos = state.todoItems.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoItems = newTodos;
    },
  },
});

export const { addTodo, changeStatus, setActiveFilterButton, removeTodoItem } =
  todosSlice.actions;
export default todosSlice.reducer;
