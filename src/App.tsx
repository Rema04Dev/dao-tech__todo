import { FC, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Info from './components/Info/Info';
import { useAppSelector } from './hooks';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material';
import Header from './components/Header/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App: FC = () => {
  const todos = useAppSelector((state) => state.todos.todoItems);
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleTheme={toggleTheme} />
      <Container sx={{ mt: '20px' }}>
        <AddTodo />
        {todos.length ? <Info /> : null}
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
