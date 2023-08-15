import styled from "styled-components";
import {
    textColor,
  } from "./PersonalInfo";

export const selectedBorder = "#483EFF";
export const planBorder = "#D6D9E6";
export const planText = "#022959";
export const planValue = "#9699AA";

export const PlanLabel = styled.label`
  display: flex;
  width: 138px;
  height: 160px;
  border-radius: 8px;
  border: 1px solid ${planBorder};
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 16px;
  cursor: pointer;
`;

export const YearlyPlanLabel = styled(PlanLabel)`
  height: 183px;
`;

export const PlanImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const PlanInput = styled.input`
  display: none;
  &:checked + label {
    border-color: ${selectedBorder};
    background-color: #f8f9ff;
  }
`;

export const PlanText = styled.p`
  color: ${planText};
  font-size: 16px;
  font-weight: 700;
`;

export const PlanValue = styled.p`
  color: ${planValue};
  font-size: 14px;
  font-weight: 400;
  margin-top: 9px;
`;

export const PlanDiscount = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${planText};
  margin-top: 5px;
`;

export const SwitchBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
  margin: 0 24px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const SliderBtn = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${planText};
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  input:checked + &:before {
    transform: translateX(18px);
  }
  &.round {
    border-radius: 34px;
  }
  &.round:before {
    border-radius: 50%;
  }
`;

export const TimeText = styled.p`
  color: ${planValue};
  font-size: 14px;
  font-weight: 700;
  transition: 0.4s;
  &.isActive {
    color: ${textColor};
  }
`;