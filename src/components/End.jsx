import check from "../assets/check.svg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 650px;
  height: 568px;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 32px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 14px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #9699aa;
  text-align: center;
  line-height: 25px;
`;

const End = () => {
  return (
    <Container>
      <Icon src={check} alt="" />
      <Title>Thank you!</Title>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Text>
    </Container>
  );
};

export default End;
