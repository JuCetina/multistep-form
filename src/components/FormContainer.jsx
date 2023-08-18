import PersonalInfo from "./PersonalInfo";
import StepsAside from "./StepsAside";
import { Container } from "../css/FormContainer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Finishing from "./Finishing";
import End from "./End";
import { MainWrapper } from "../css/MainWrapper";

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const {
    watch,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "all" });

  const saveForm = (data) => {
    console.log(data);
    completeStep();
  };

  const completeStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const backToPlan = () => {
    setStep(step - 2);
  };

  return (
    <Container>
      
      <MainWrapper>
        <StepsAside step={step} />
        <form onSubmit={handleSubmit(saveForm)}>
          {step === 1 && (
            <PersonalInfo
              register={register}
              errors={errors}
              isValid={isValid}
              completeStep={completeStep}
            />
          )}
          {step === 2 && (
            <SelectPlan
              register={register}
              isValid={isValid}
              completeStep={completeStep}
              backStep={backStep}
              watch={watch}
            />
          )}
          {step === 3 && (
            <Addons
              register={register}
              completeStep={completeStep}
              backStep={backStep}
              watch={watch}
            />
          )}
          {step === 4 && (
            <Finishing
              completeStep={completeStep}
              backStep={backStep}
              backToPlan={backToPlan}
              watch={watch}
            />
          )}
          {step === 5 && <End />}
        </form>
      </MainWrapper>
    </Container>
  );
};

export default FormContainer;
