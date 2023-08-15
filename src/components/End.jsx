import check from "../assets/check.svg";
import { Container, Icon, Text, Title } from "../css/End";


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
