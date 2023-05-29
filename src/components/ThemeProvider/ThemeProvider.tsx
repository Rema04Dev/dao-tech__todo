import { PropsWithChildren, useState, FC } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
