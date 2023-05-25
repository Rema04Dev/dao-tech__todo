import { FC } from 'react';
import { TextField, Button, Grid } from '@mui/material';
const AddTodo: FC = () => {
  return (
    <Grid container>
      <Grid item>
        <TextField
          autoComplete="off"
          label="Enter a new task"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button
          fullWidth
          variant="contained"
          sx={{
            height: '100%',
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
