import { createSlice } from '@reduxjs/toolkit';

interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

interface ITodosState {
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
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
