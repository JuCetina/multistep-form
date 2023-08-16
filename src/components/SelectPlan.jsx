import arcade from "../assets/arcade.svg";
import advanced from "../assets/advanced.svg";
import pro from "../assets/pro.svg";
import {
  BackButton,
  BtnWrapper,
  MobileWrapper,
  NxtButton,
  StepWrapper,
  Subtitle,
  Title,
} from "../css/PersonalInfo";
import {
  Container,
  PlanDiscount,
  PlanImg,
  PlanInput,
  PlanLabel,
  PlanText,
  PlanValue,
  SliderBtn,
  SwitchBtn,
  TimeText,
  YearlyPlanLabel,
} from "../css/SelectPlan";

const SelectPlan = ({ register, isValid, completeStep, backStep, watch }) => {
  let yearly = watch("yearly");

  return (
    <>
      <StepWrapper>
        <Title>Select your plan</Title>
        <Subtitle>You have the option of monthly or yearly billing.</Subtitle>

        <Container>
          {!yearly && (
            <>
              <PlanInput
                type="radio"
                id="arcade"
                value="arcade"
                {...register("plan", {
                  required: true,
                })}
              />
              <PlanLabel htmlFor="arcade">
                <PlanImg src={arcade} alt="" />
                <div>
                  <PlanText>Arcade</PlanText>
                  <PlanValue>$9/mo</PlanValue>
                </div>
              </PlanLabel>

              <PlanInput
                type="radio"
                id="advanced"
                value="advanced"
                {...register("plan", {
                  required: true,
                })}
              />
              <PlanLabel htmlFor="advanced">
                <PlanImg src={advanced} alt="" />
                <div>
                  <PlanText>Advanced</PlanText>
                  <PlanValue>$12/mo</PlanValue>
                </div>
              </PlanLabel>

              <PlanInput
                type="radio"
                id="pro"
                value="pro"
                {...register("plan", {
                  required: true,
                })}
              />
              <PlanLabel htmlFor="pro">
                <PlanImg src={pro} alt="" />
                <div>
                  <PlanText>Pro</PlanText>
                  <PlanValue>$15/mo</PlanValue>
                </div>
              </PlanLabel>
            </>
          )}

          {yearly && (
            <>
              <PlanInput
                type="radio"
                id="arcade"
                value="arcade"
                {...register("plan", {
                  required: true,
                })}
              />
              <YearlyPlanLabel htmlFor="arcade">
                <PlanImg src={arcade} alt="" />
                <div>
                  <PlanText>Arcade</PlanText>
                  <PlanValue>$90/yr</PlanValue>
                  <PlanDiscount>2 months free</PlanDiscount>
                </div>
              </YearlyPlanLabel>

              <PlanInput
                type="radio"
                id="advanced"
                value="advanced"
                {...register("plan", {
                  required: true,
                })}
              />
              <YearlyPlanLabel htmlFor="advanced">
                <PlanImg src={advanced} alt="" />
                <div>
                  <PlanText>Advanced</PlanText>
                  <PlanValue>$120/yr</PlanValue>
                  <PlanDiscount>2 months free</PlanDiscount>
                </div>
              </YearlyPlanLabel>

              <PlanInput
                type="radio"
                id="pro"
                value="pro"
                {...register("plan", {
                  required: true,
                })}
              />
              <YearlyPlanLabel htmlFor="pro">
                <PlanImg src={pro} alt="" />
                <div>
                  <PlanText>Pro</PlanText>
                  <PlanValue>$150/yr</PlanValue>
                  <PlanDiscount>2 months free</PlanDiscount>
                </div>
              </YearlyPlanLabel>
            </>
          )}
        </Container>

        <div
          style={{
            width: "100%",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: "#F8F9FF",
            marginTop: "32px",
          }}
        >
          <TimeText className={!yearly ? "isActive" : ""}>Monthly</TimeText>
          <SwitchBtn htmlFor="billing">
            <input type="checkbox" id="billing" {...register("yearly")} />
            <SliderBtn className="round"></SliderBtn>
          </SwitchBtn>
          <TimeText className={yearly ? "isActive" : ""}>Yearly</TimeText>
        </div>

        <BtnWrapper>
          <BackButton type="button" onClick={backStep}>
            Go Back
          </BackButton>
          <NxtButton type="button" disabled={!isValid} onClick={completeStep}>
            Next Step
          </NxtButton>
        </BtnWrapper>
      </StepWrapper>
      <MobileWrapper>
        <BackButton type="button" onClick={backStep}>
          Go Back
        </BackButton>
        <NxtButton type="button" disabled={!isValid} onClick={completeStep}>
          Next Step
        </NxtButton>
      </MobileWrapper>
    </>
  );
};

export default SelectPlan;
