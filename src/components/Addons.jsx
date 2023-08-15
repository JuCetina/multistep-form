import {
  BackButton,
  NxtButton,
  StepWrapper,
  Subtitle,
  Title,
} from "../css/PersonalInfo";
import styled from "styled-components";

const AddonLabel = styled.label`
  width: 450px;
  heigth: 81px;
  padding: 18px 24px;
  border: 1px solid #d6d9e6;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  position: relative;
  & input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  &:active {
    border: 1px solid #483EFF;
  }
  &.isActive{
    border: 1px solid #483EFF;
    background-color: #F8F9FF;
  }
`;

const AddonText = styled.p`
  color: #022959;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const AddonDesc = styled.p`
  color: #9699aa;
  font-size: 14px;
`;

const AddonCost = styled.p`
  color: #483eff;
  font-size: 14px;
  font-weight: 700;
`;

const Checkmark = styled.span`
  position: relative;
  top:10px;
  height: 22px;
  width: 22px;
  border-radius: 5px;
  border: 1px solid #D6D9E6;
  input:checked ~ & {
    background-color: #483EFF;
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ &:after {
    display: block;
  }
  &:after {
    left: 7px;
    top: 4px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Addons = ({ register, completeStep, backStep, watch }) => {
  let yearly = watch("yearly");
  let online = watch("online");
  let storage = watch("storage");
  let profile = watch("profile");

  return (
    <StepWrapper>
      <Title>Pick add-ons</Title>
      <Subtitle>Add-ons help enhance your gaming experience.</Subtitle>
      {!yearly && (
        <>
          <AddonLabel className={online ? "isActive" : ""} htmlFor="online">
            <div style={{ display: "flex" }}>
              <input type="checkbox" id="online" {...register("online")} />
              <Checkmark></Checkmark>
              <div style={{ marginLeft: "24px" }}>
                <AddonText>Online service</AddonText>
                <AddonDesc>Access to multiplayer games</AddonDesc>
              </div>
            </div>
            <AddonCost>+$1/mo</AddonCost>
          </AddonLabel>

          <AddonLabel className={storage ? "isActive" : ""} htmlFor="storage">
            <div style={{ display: "flex" }}>
              <input type="checkbox" id="storage" {...register("storage")} />
              <Checkmark></Checkmark>
              <div style={{ marginLeft: "24px" }}>
                <AddonText>Larger storage</AddonText>
                <AddonDesc>Extra 1TB of cloud save</AddonDesc>
              </div>
            </div>
            <AddonCost>+$2/mo</AddonCost>
          </AddonLabel>

          <AddonLabel className={profile ? "isActive" : ""} htmlFor="profile">
            <div style={{ display: "flex" }}>
              <input type="checkbox" id="profile" {...register("profile")} />
              <Checkmark></Checkmark>
              <div style={{ marginLeft: "24px" }}>
                <AddonText>Customizable profile</AddonText>
                <AddonDesc>Custom theme on your profile</AddonDesc>
              </div>
            </div>
            <AddonCost>+$2/mo</AddonCost>
          </AddonLabel>
        </>
      )}

      {yearly && (
        <>
          <AddonLabel className={online ? "isActive" : ""} htmlFor="online">
            <div style={{ display: "flex" }}>
              <input type="checkbox" id="online" {...register("online")} />
              <Checkmark></Checkmark>
              <div style={{ marginLeft: "24px" }}>
                <AddonText>Online service</AddonText>
                <AddonDesc>Access to multiplayer games</AddonDesc>
              </div>
            </div>
            <AddonCost>+$10/yr</AddonCost>
          </AddonLabel>

          <AddonLabel className={storage ? "isActive" : ""} htmlFor="storage">
            <div style={{ display: "flex" }}>
              <input type="checkbox" id="storage" {...register("storage")} />
              <Checkmark></Checkmark>
              <div style={{ marginLeft: "24px" }}>
                <AddonText>Larger storage</AddonText>
                <AddonDesc>Extra 1TB of cloud save</AddonDesc>
              </div>
            </div>
            <AddonCost>+$20/yr</AddonCost>
          </AddonLabel>

          <AddonLabel className={profile ? "isActive" : ""} htmlFor="profile">
            <div style={{ display: "flex" }}>
              <input type="checkbox" id="profile" {...register("profile")} />
              <Checkmark></Checkmark>
              <div style={{ marginLeft: "24px" }}>
                <AddonText>Customizable profile</AddonText>
                <AddonDesc>Custom theme on your profile</AddonDesc>
              </div>
            </div>
            <AddonCost>+$20/yr</AddonCost>
          </AddonLabel>
        </>
      )}

      <BackButton type="button" onClick={backStep}>
        Go Back
      </BackButton>
      <NxtButton type="button" onClick={completeStep}>
        Next Step
      </NxtButton>
    </StepWrapper>
  );
};

export default Addons;
