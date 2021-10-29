import React from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

// Views
import CreateUser from "./views/CreateUser.view";
import ExerciseLog from "./views/ExerciseLog.view";
import CreateExercise from "./views/CreateExercise.view";

function LinkTab(props) {
  const history = useHistory();

  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        history.push(props.href);
      }}
      {...props}
    />
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Router>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Exercises" href="/" />
            <LinkTab label="Create Exercise" href="/new-exercise" />
            <LinkTab label="Create User" href="/new-user" />
          </Tabs>
          <Switch>
            <Route exact path="/" component={ExerciseLog} />
            <Route path="/new-user" component={CreateUser} />
            <Route path="/new-exercise" component={CreateExercise} />
          </Switch>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
