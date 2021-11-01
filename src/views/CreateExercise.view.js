import { Button, Box, TextField } from "@mui/material";

export default function CreateExercise() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };

  return (
    <div>
      <h1>Create Exercise Page</h1>
      <Box
        component="form"
        noValidate
        autoComplete="on"
        sx={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="outlined"
            label="User"
            sx={{ width: "100%", marginBottom: "15px" }}
          />
          <TextField
            id="outlined-textarea"
            label="Description"
            rows={4}
            placeholder="Placeholder"
            sx={{ width: "100%", marginBottom: "15px" }}
            multiline
          />
          <Button type="submit" variant="contained" size="large">
            Create New Exercise Log
          </Button>
        </div>
      </Box>
    </div>
  );
}
