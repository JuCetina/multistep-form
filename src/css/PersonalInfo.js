import styled from "styled-components";

export const textColor = "#022959";
export const subtitleColor = "#9699AA";
export const borderColor = "#d6d9e6";
export const inactiveBtn = "#928CFF";
export const errorColor = "#ee374a";

export const StepWrapper = styled.div`
  max-width: 650px;
  height: 568px;
  padding: 40px 0 16px 100px;
  position: relative;
`;

export const Title = styled.h2`
  color: ${textColor};
  font-size: 32px;
  margin: 0;
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
  color: ${subtitleColor};
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0 11px 16px;
  margin-bottom: 24px;  
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
  &:disabled{
    background-color: ${inactiveBtn};
    border: none;
  }
`;

export const Error = styled.p`
  color: ${errorColor};
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  text-align: right;
`;