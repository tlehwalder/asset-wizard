import React from "react";

import Step from "./Step";

import FormFieldText from "../../components/FormFieldText";
import FormFieldSelect from "../../components/FormFieldSelect";
import FormFieldCheckbox from "../../components/FormFieldCheckbox";

const FirstStep = ({
  action,
  actionLabel,
  onClose,
  values,
  handleTextChange,
  handleCheckboxChange
}) => {
  const typeOptions = [
    { value: "type1", label: "Type 1" },
    { value: "type2", label: "Type 2" },
    { value: "type3", label: "Type 3" }
  ];

  return (
    <Step action={action} actionLabel={actionLabel} onClose={onClose}>
      <FormFieldText
        onChange={handleTextChange("assetName")}
        id="assetName"
        label="Asset Name"
      />

      <FormFieldText
        onChange={handleTextChange("assetCode")}
        id="assetCode"
        label="Asset Code"
      />

      <FormFieldText
        onChange={handleTextChange("maxIssuanceAmount")}
        id="maxIssuanceAmount"
        label="Max issuance amount"
      />

      <FormFieldSelect
        id="type"
        label="Type"
        value={values.type}
        options={typeOptions}
        onChange={handleTextChange("type")}
      />

      <FormFieldCheckbox
        id="transferable"
        checked={values.transferable}
        onChange={handleCheckboxChange("transferable")}
        label="Transferable"
      />

      <FormFieldCheckbox
        id="withdrawable"
        checked={values.withdrawable}
        onChange={handleCheckboxChange("withdrawable")}
        label="Withdrawable"
      />
    </Step>
  );
};

export default FirstStep;
