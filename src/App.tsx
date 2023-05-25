import { FC } from 'react';
import { useSelector } from 'react-redux';
const App: FC = () => {
  const todos = useSelector((state) => state);
  console.log(todos);
  return <h1>TODO</h1>;
};

export default App;
