import { Stack } from '@mui/material';
import { FC } from 'react';
import Filter from '../Filter/Filter';
import Badges from '../Badges/Badges';

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
      <div>
        <Badges />
      </div>
    </Stack>
  );
};

export default Info;
