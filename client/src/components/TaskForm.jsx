import { Card, Grid, Typography } from "@mui/material";

const TaskForm = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}>
          <Typography>Create Card</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
