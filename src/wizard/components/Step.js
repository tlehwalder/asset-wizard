import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    width: 400,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));

const Step = ({ action, actionLabel, children, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <form
        className={classes.container}
        onSubmit={formData => console.log(formData)}
      >
        {children}
      </form>
      <Button
        onClick={action}
        variant="contaicurrentStepned"
        color="primary"
        className={classes.button}
      >
        {actionLabel}
      </Button>
    </div>
  );
};

export default Step;
