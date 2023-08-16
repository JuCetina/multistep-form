import {
  BtnWrapper,
  Error,
  Input,
  LabelInput,
  MobileWrapper,
  NxtButton,
  StepWrapper,
  Subtitle,
  Title,
} from "../css/PersonalInfo";

const PersonalInfo = ({ register, errors, isValid, completeStep }) => {
  return (
    <>
      <StepWrapper>
        <Title>Personal Info</Title>
        <Subtitle>
          Please provide your name, email address, and phone number.
        </Subtitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LabelInput htmlFor="fullname">Name</LabelInput>
          {errors.fullname?.type === "required" && (
            <Error>This field is required</Error>
          )}
        </div>
        <Input
          style={errors.fullname && { border: "2px solid #ee374a" }}
          type="text"
          id="fullname"
          placeholder="e.g. Stephen King"
          {...register("fullname", {
            required: true,
          })}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LabelInput htmlFor="email">Email Address</LabelInput>
          {errors.email?.type === "required" && (
            <Error>This field is required</Error>
          )}
          {errors.email?.type === "pattern" && <Error>Invalid Email</Error>}
        </div>

        <Input
          style={errors.email && { border: "2px solid #ee374a" }}
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LabelInput htmlFor="phone">Phone Number</LabelInput>
          {errors.phone?.type === "required" && (
            <Error>This field is required</Error>
          )}
        </div>
        <Input
          style={errors.phone && { border: "2px solid #ee374a" }}
          type="text"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          {...register("phone", {
            required: true,
          })}
        />

        <BtnWrapper>
          <NxtButton type="button" disabled={!isValid} onClick={completeStep}>
            Next Step
          </NxtButton>
        </BtnWrapper>
      </StepWrapper>
      <MobileWrapper>
        <NxtButton type="button" disabled={!isValid} onClick={completeStep}>
          Next Step
        </NxtButton>
      </MobileWrapper>
    </>
  );
};

export default PersonalInfo;
