import { FC } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import { useSelector } from 'react-redux';
const App: FC = () => {
  const todos = useSelector((state: any) => state.todos.todoItems);
  return (
    <div
      style={{
        width: '50%',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <AddTodo />
      {todos.length ? <Filter /> : null}
      <TodoList />
    </div>
  );
};

export default App;
