import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, ITodosState } from '../../types';

const initialState: ITodosState = {
  todoItems: [],
  filterButtons: [
    { id: '1', name: 'All', type: 'all' },
    { id: '2', name: 'Current', type: 'current' },
    { id: '3', name: 'Completed', type: 'completed' },
  ],
  activeButtonId: '1',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todoItems.push(action.payload);
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      const newTodos = state.todoItems.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      state.todoItems = newTodos;
    },
    setActiveFilterButton: (state, action: PayloadAction<string>) => {
      state.activeButtonId = action.payload;
    },
    removeTodoItem: (state, action: PayloadAction<string>) => {
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
