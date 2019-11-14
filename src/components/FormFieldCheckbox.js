import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  }
}));

const FormFieldCheckbox = ({ checked, onChange, label, id }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      className={classes.form}
      control={
        <Checkbox checked={checked} onChange={onChange} color="primary" />
      }
      label={label}
    />
  );
};

export default FormFieldCheckbox;
