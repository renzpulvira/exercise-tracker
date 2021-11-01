import { Button, Box, TextField } from "@mui/material";

export default function CreateUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };
  return (
    <div>
      <h1>Create User Page</h1>
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
            label="Add User"
            defaultValue="Renz"
            sx={{ width: "100%", marginBottom: "15px" }}
          />
          <Button type="submit" variant="contained" size="large">
            Create New User
          </Button>
        </div>
      </Box>
    </div>
  );
}
