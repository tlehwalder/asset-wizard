import { useState } from "react";

export default function useWizard(values, setValues) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(currentStep + 1);

  const handleTextChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheckboxChange = name => event => {
    setValues({ ...values, [name]: event.target.checked });
  };

  return { handleCheckboxChange, handleTextChange, currentStep, nextStep };
}
