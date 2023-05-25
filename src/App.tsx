import { FC } from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
const App: FC = () => {
  const todos = useSelector((state) => state);
  console.log(todos);
  return <AddTodo />;
};

export default App;
