import { FC } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
const App: FC = () => {
  return (
    <div
      style={{
        width: '50%',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
