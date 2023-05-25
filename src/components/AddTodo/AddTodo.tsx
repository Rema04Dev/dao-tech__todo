import { FC } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
const AddTodo: FC = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%' }}
    >
      <Grid container sx={{ width: '100%' }}>
        <Grid item sx={{ width: '80%' }}>
          <Controller
            name="todo"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                fullWidth
                {...register('todo')}
                autoComplete="off"
                label="Enter a new task"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item sx={{ width: '20%' }}>
          <Button
            type="submit"
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
    </Box>
  );
};

export default AddTodo;
