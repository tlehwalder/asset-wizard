import React, { useState, useCallback } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

import useWizard from "../hooks/useWizard";

import "./index.css";
import Header from "./components/Header";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

export default ({ onClose }) => {
  const [assetData, setAssetData] = useState({
    assetName: "",
    assetCode: "",
    maxIssuanceAmount: "",
    type: "",
    transferable: false,
    withdrawable: false,
    preIssuanceAssetSignerId: "",
    initialPreIssuedAmount: "",
    noAddtionalIssuance: false
  });

  const {
    handleCheckboxChange,
    handleTextChange,
    currentStep,
    nextStep
  } = useWizard(assetData, setAssetData);

  const createRequest = useCallback(() => {
    console.log(
      `%c## CREATE REQUEST`,
      "background-color: black; color: pink; font-weight: bold; font-size: 18px"
    );
    console.log(assetData);
  }, [assetData]);

  const steps = [
    {
      label: "Asset information",
      content: (
        <FirstStep
          onClose={onClose}
          actionLabel="Next"
          action={nextStep}
          values={assetData}
          handleTextChange={handleTextChange}
          handleCheckboxChange={handleCheckboxChange}
        />
      )
    },
    {
      label: "Advanced",
      content: (
        <SecondStep
          onClose={onClose}
          actionLabel="Create Request"
          action={createRequest}
          values={assetData}
          handleTextChange={handleTextChange}
          handleCheckboxChange={handleCheckboxChange}
        />
      )
    }
  ];

  return (
    <div className="Wizard-container">
      <Header onClose={onClose} />
      <Stepper activeStep={currentStep}>
        {steps.map(step => {
          const stepProps = {};
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {steps[currentStep].content}
    </div>
  );
};
