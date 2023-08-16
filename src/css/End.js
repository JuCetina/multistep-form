import styled from "styled-components";

export const textColor = "#9699aa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 47px 0;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 32px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${textColor};
  text-align: center;
  line-height: 25px;
  margin: 0 24px;
`;