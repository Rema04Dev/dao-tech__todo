import { FC } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
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
      <Filter />
      <TodoList />
    </div>
  );
};

export default App;
