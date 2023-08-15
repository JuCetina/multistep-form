import styled from "styled-components";

const textColor = "#022959";
const subtitleColor = "#9699AA";
const borderColor = "#d6d9e6";
const inactiveBtn = "#928CFF";
const errorColor = "#ee374a";

const StepWrapper = styled.div`
  max-width: 650px;
  height: 568px;
  padding: 40px 0 16px 100px;
  position: relative;
`;

const Title = styled.h2`
  color: ${textColor};
  font-size: 32px;
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${subtitleColor};
  font-size: 16px;
  margin: 11px 0 35px;
`;

const LabelInput = styled.label`
  display: inline-block;
  color: ${textColor};
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${borderColor};
  border-radius: 8px;
  color: ${subtitleColor};
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0 11px 16px;
  margin-bottom: 24px;  
`;

const NxtButton = styled.button`
  width: 123px;
  height: 48px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-top: 68px;
  border-radius: 8px;
  background-color: ${textColor};
  position: absolute;
  bottom: 16px;
  right: 0;
  cursor: pointer;
  &:disabled{
    background-color: ${inactiveBtn};
    border: none;
  }
`;

const Error = styled.p`
  color: ${errorColor};
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  text-align: right;
`;

const PersonalInfo = ({ register, errors, isValid, completeStep }) => {
  return (
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
      <NxtButton type="button" disabled={!isValid} onClick={completeStep}>
        Next Step
      </NxtButton>
    </StepWrapper>
  );
};

export default PersonalInfo;
