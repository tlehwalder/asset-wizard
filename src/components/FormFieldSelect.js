import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  select: {
    marginTop: theme.spacing(2)
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  }
}));

const FormFieldSelect = ({
  id,
  name,
  label,
  value,
  onChange,
  helperText,
  options
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.form}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        className={classes.empty}
        inputProps={{
          name,
          id
        }}
      >
        <option value="" />
        {options.map((option, _i) => (
          <option key={_i} value={option.value}>
            {option.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default FormFieldSelect;
