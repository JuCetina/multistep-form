import styled from "styled-components";

export const borderColor = "#d6d9e6";
export const activeColor = "#483EFF";
export const subtitleColor = "#9699AA";
export const textColor = "#022959";

export const AddonLabel = styled.label`
  width: 450px;
  height: 81px;
  padding: 18px 24px;
  border: 1px solid ${borderColor};
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
    border: 1px solid ${activeColor};
  }
  &.isActive{
    border: 1px solid ${activeColor};
    background-color: #F8F9FF;
  }
`;

export const AddonText = styled.p`
  color: ${textColor};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const AddonDesc = styled.p`
  color: ${subtitleColor};
  font-size: 14px;
`;

export const AddonCost = styled.p`
  color: ${activeColor};
  font-size: 14px;
  font-weight: 700;
`;

export const Checkmark = styled.span`
  position: relative;
  top:10px;
  height: 22px;
  width: 22px;
  border-radius: 6px;
  border: 1px solid ${borderColor};
  input:checked ~ & {
    background-color: ${activeColor};
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