import styled from "styled-components";
import { NxtButton } from "../css/PersonalInfo";

export const wrapperColor = "#f8f9ff";
export const activeColor = "#483EFF";
export const textColor = "#022959";
export const borderColor = "#9699aa";
export const activeBtn = "#928CFF";

export const Wrapper = styled.div`
  width: 450px;
  padding: 16px 24px 8px;
  border-radius: 8px;
  background-color: ${wrapperColor};
  margin-bottom: 25px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${borderColor};
  margin-bottom: 16px;
`;

export const Plan = styled.p`
  text-transform: capitalize;
  color: ${textColor};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ChangeBtn = styled.p`
  text-decoration: underline;
  color: ${borderColor};
  font-size: 14px;
  cursor: pointer;
  &:active {
    color: ${activeColor};
  }
`;

export const Cost = styled.p`
  color: ${textColor};
  font-size: 16px;
  font-weight: 700;
`;

export const Addon = styled.p`
  color: ${borderColor};
  font-size: 14px;
`;

export const AddonCost = styled.p`
  color: ${textColor};
  font-size: 14px;
`;

export const TotalCost = styled.p`
  color: ${activeColor};
  font-size: 20px;
  font-weight: 700;
`;

export const ConfirmBtn = styled(NxtButton)`
  background-color: ${activeColor};
  &:active {
    background-color: ${activeBtn};
  }
`;
