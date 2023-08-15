import {
  AddonCost,
  AddonDesc,
  AddonLabel,
  AddonText,
  Checkmark,
} from "../css/Addons";
import {
  BackButton,
  NxtButton,
  StepWrapper,
  Subtitle,
  Title,
} from "../css/PersonalInfo";

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
