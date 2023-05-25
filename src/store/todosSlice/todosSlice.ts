import { createSlice } from '@reduxjs/toolkit';

export interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

export interface ITodosState {
  todoItems: Array<ITodo>;
}

const initialState: ITodosState = {
  todoItems: [],
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
  },
});

export const { addTodo, changeStatus } = todosSlice.actions;
export default todosSlice.reducer;
