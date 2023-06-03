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
  breakpoints: {
    values: {
      xs: 0,
      sm: 200, // 600
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 240, // 640
      laptop: 1024,
      desktop: 1200,
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 200, // 600
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 240, // 640
      laptop: 1024,
      desktop: 1200,
    },
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
      <Container
        sx={{
          mt: '20px',
          width: {
            mobile: '100%',
            tablet: '75%',
            laptop: '50%',
            desktop: '50%',
          },
        }}
      >
        <AddTodo />
        {todos.length ? <Info /> : null}
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
