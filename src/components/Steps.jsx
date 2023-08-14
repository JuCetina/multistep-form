import { Step } from "../css/Step";
import { StepContainer } from "../css/StepContainer";
import { StepText } from "../css/StepText";
import { StepDescription } from "../css/StepDescription";

const Steps = ({ step }) => {
  let ok = step;
  return (
    <>
      <StepContainer>
        <Step className={`${step === 1 ? "isActive" : ""}`}>1</Step>
        <div>
          <StepText>Step 1</StepText>
          <StepDescription>Your info</StepDescription>
        </div>
      </StepContainer>

      <StepContainer>
        <Step className={`${step === 2 ? "isActive" : ""}`}>2</Step>
        <div>
          <StepText>Step 2</StepText>
          <StepDescription>Select plan</StepDescription>
        </div>
      </StepContainer>

      <StepContainer>
        <Step className={`${step === 3 ? "isActive" : ""}`}>3</Step>
        <div>
          <StepText>Step 3</StepText>
          <StepDescription>Add-ons</StepDescription>
        </div>
      </StepContainer>

      <StepContainer>
        <Step className={`${step >= 4 ? "isActive" : ""}`}>4</Step>
        <div>
          <StepText>Step 4</StepText>
          <StepDescription>Summary</StepDescription>
        </div>
      </StepContainer>
    </>
  );
};

export default Steps;
