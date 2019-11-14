import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
    marginTop: theme.spacing(1)
  }
}));

const FormFieldText = ({ label, id, onChange, value }) => {
  const classes = useStyles();

  return (
    <TextField
      id={id}
      label={label}
      onChange={onChange}
      className={classes.textField}
      margin="normal"
      value={value}
    />
  );
};
export default FormFieldText;
