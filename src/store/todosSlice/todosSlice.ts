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
  todoItems: [
    {
      id: 1,
      name: 'Fry meat',
      completed: false,
    },
    {
      id: 2,
      name: 'Call Lika',
      completed: true,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
