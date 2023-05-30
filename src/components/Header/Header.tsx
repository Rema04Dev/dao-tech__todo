import { FC } from 'react';
import { Typography, AppBar, Stack, Box } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

interface HeaderProps {
  toggleTheme: () => void;
}
const Header: FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        padding: '20px',
      }}
    >
      <Box
        sx={{
          width: '80%',
          m: '0 auto',
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" component="h1">
            TODO Application
          </Typography>
          <ThemeToggle onClick={toggleTheme} />
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Header;
