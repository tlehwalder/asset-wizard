import React, { useContext } from "react";

import Icon from "@material-ui/core/Icon";

import Step from "./Step";

import FormFieldText from "../../components/FormFieldText";
import FormFieldCheckbox from "../../components/FormFieldCheckbox";
import { UserContext } from "../../context";

const SecondStep = ({
  action,
  actionLabel,
  onClose,
  values,
  handleTextChange,
  handleCheckboxChange
}) => {
  const userContext = useContext(UserContext);

  return (
    <Step onClose={onClose} action={action} actionLabel={actionLabel}>
      <FormFieldCheckbox
        id="noAddtionalIssuance"
        label="I do not want to make additional issuance later"
        onChange={handleCheckboxChange("noAddtionalIssuance")}
        checked={values.noAddtionalIssuance}
      />
      <a
        style={{ width: "100%", textAlign: "left" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.de"
      >
        Learn more about pre-issuance&nbsp;
        <Icon style={{ fontSize: 12 }}>open_in_new</Icon>
      </a>

      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <FormFieldText
          id="preIssuanceAssetSignerId"
          label="Pre-Issuance asset signer ID"
          onChange={handleTextChange("preIssuanceAssetSignerId")}
          value={values.preIssuanceAssetSignerId}
        />
        <div
          style={{ whiteSpace: "nowrap", cursor: "pointer" }}
          onClick={() =>
            handleTextChange("preIssuanceAssetSignerId")({
              target: { value: userContext.assetSignerId }
            })
          }
        >
          Use mine
        </div>
      </div>

      <FormFieldText
        id="initialPreIssuedAmount"
        label="Initial pre-issued amount"
        onChange={handleTextChange("initialPreIssuedAmount")}
      />
    </Step>
  );
};

export default SecondStep;
