import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Wizard from "./wizard";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function App() {
  const classes = useStyles();

  const [showWizard, setShowWizard] = useState(false);

  const openWizardButton = (
    <Button
      onClick={() => setShowWizard(true)}
      variant="contained"
      color="primary"
      className={classes.button}
    >
      Create Asset
    </Button>
  );

  const wizardElement = showWizard ? (
    <Wizard onClose={() => setShowWizard(false)} />
  ) : (
    openWizardButton
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Asset Wizard</h1>
      </header>
      <main className="App-main">{wizardElement}</main>
    </div>
  );
}

export default App;
