import styled from "styled-components";

export const textColor = "#022959";
export const subtitleColor = "#9699AA";
export const borderColor = "#d6d9e6";
export const inactiveBtn = "#928CFF";
export const errorColor = "#ee374a";
export const activeColor = "#483EFF";

export const StepWrapper = styled.div`
  background-color: white;
  max-width: 650px;
  height: 568px;
  padding: 40px 0 16px 100px;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    top: -45px;
    padding: 32px 24px;
    margin: 0 16px;
    border-radius: 10px;
    height: initial;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);
  }
`;

export const Title = styled.h2`
  color: ${textColor};
  font-size: 32px;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  color: ${subtitleColor};
  font-size: 16px;
  margin: 11px 0 35px;
`;

export const LabelInput = styled.label`
  display: inline-block;
  color: ${textColor};
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${borderColor};
  border-radius: 8px;
  color: ${textColor};
  font-size: 16px;
  font-weight: 600;
  padding: 12px 0 11px 16px;
  margin-bottom: 24px;
  cursor: pointer;
  &::placeholder{
    color: ${borderColor};
    font-weight: 500;
  }
  &:focus{
    outline-color: ${activeColor};
  }
`;

export const NxtButton = styled.button`
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
  border: none;
  &:disabled {
    background-color: ${inactiveBtn};
  }
  @media screen and (max-width: 768px) {
    bottom: 12px;
    right: 16px;
  }
`;

export const Error = styled.p`
  color: ${errorColor};
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  text-align: right;
`;

export const BackButton = styled.button`
  width: 123px;
  height: 48px;
  color: ${subtitleColor};
  font-size: 16px;
  font-weight: 500;
  margin-top: 68px;
  background-color: white;
  position: absolute;
  bottom: 16px;
  left: 100px;
  cursor: pointer;
  border: none;
  text-align: left;
  @media screen and (max-width: 768px){
    left: 16px;
    bottom: 12px;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 72px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const BtnWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
