import { Stack } from '@mui/material';
import { FC } from 'react';
import Filter from '../Filter/Filter';

const Info: FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        mt: 3,
      }}
    >
      <Filter />
    </Stack>
  );
};

export default Info;
