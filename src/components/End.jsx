import check from "../assets/check.svg";
import { Container, Icon, Text, Title } from "../css/End";
import { StepWrapper } from "../css/PersonalInfo";

const End = () => {
  return (
    <StepWrapper>
      <Container>
        <Icon src={check} alt="" />
        <Title>Thank you!</Title>
        <Text>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Text>
      </Container>
    </StepWrapper>
  );
};

export default End;
