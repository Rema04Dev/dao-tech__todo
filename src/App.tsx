import { FC } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import Info from './components/Info/Info';
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
      {todos.length ? <Info /> : null}
      <TodoList />
    </div>
  );
};

export default App;
