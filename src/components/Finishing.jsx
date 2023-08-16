import {
  Addon,
  ChangeBtn,
  ConfirmBtn,
  Cost,
  AddonCost,
  Header,
  Plan,
  TotalCost,
  Wrapper,
} from "../css/Confirm";
import {
  BackButton,
  BtnWrapper,
  MobileWrapper,
  StepWrapper,
  Subtitle,
  Title,
} from "../css/PersonalInfo";

const Finishing = ({ backStep, backToPlan, watch }) => {
  let plan = watch("plan");
  let yearly = watch("yearly");
  let online = watch("online");
  let storage = watch("storage");
  let profile = watch("profile");

  const total = () => {
    let subtotal = 0;

    if (yearly) {
      if (plan === "arcade") {
        subtotal = 90;
      }
      if (plan === "advanced") {
        subtotal = 120;
      }
      if (plan === "pro") {
        subtotal = 150;
      }
      if (online) {
        subtotal += 10;
      }
      if (storage) {
        subtotal += 20;
      }
      if (profile) {
        subtotal += 20;
      }
    } else {
      if (plan === "arcade") {
        subtotal = 9;
      }
      if (plan === "advanced") {
        subtotal = 12;
      }
      if (plan === "pro") {
        subtotal = 15;
      }
      if (online) {
        subtotal += 1;
      }
      if (storage) {
        subtotal += 2;
      }
      if (profile) {
        subtotal += 2;
      }
    }

    return subtotal;
  };

  return (
    <>
      <StepWrapper>
        <Title>Finishing up</Title>
        <Subtitle>Double-check everything looks OK before confirming.</Subtitle>
        <Wrapper>
          {!yearly ? (
            <Header>
              <div>
                <Plan>{plan} (Monthly)</Plan>
                <ChangeBtn onClick={backToPlan}>Change</ChangeBtn>
              </div>
              {plan === "arcade" && <Cost>$9/mo</Cost>}
              {plan === "advanced" && <Cost>$12/mo</Cost>}
              {plan === "pro" && <Cost>$15/mo</Cost>}
            </Header>
          ) : (
            <Header>
              <div>
                <Plan>{plan} (Yearly)</Plan>
                <ChangeBtn onClick={backToPlan}>Change</ChangeBtn>
              </div>
              {plan === "arcade" && <Cost>$90/yr</Cost>}
              {plan === "advanced" && <Cost>$120/yr</Cost>}
              {plan === "pro" && <Cost>$150/yr</Cost>}
            </Header>
          )}

          {online && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Addon>Online service</Addon>
              {yearly ? (
                <AddonCost>+$10/yr</AddonCost>
              ) : (
                <AddonCost>+$1/mo</AddonCost>
              )}
            </div>
          )}

          {storage && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Addon>Larger storage</Addon>
              {yearly ? (
                <AddonCost>+$20/yr</AddonCost>
              ) : (
                <AddonCost>+$2/mo</AddonCost>
              )}
            </div>
          )}

          {profile && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Addon>Customizable profile</Addon>
              {yearly ? (
                <AddonCost>+$20/yr</AddonCost>
              ) : (
                <AddonCost>+$2/mo</AddonCost>
              )}
            </div>
          )}
        </Wrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          {yearly ? (
            <Addon>Total (per year)</Addon>
          ) : (
            <Addon>Total (per month)</Addon>
          )}

          <TotalCost>
            ${total()}
            {yearly ? <span>/yr</span> : <span>/mo</span>}
          </TotalCost>
        </div>

        <BtnWrapper>
          <BackButton type="button" onClick={backStep}>
            Go Back
          </BackButton>
          <ConfirmBtn type="submit">Confirm</ConfirmBtn>
        </BtnWrapper>
      </StepWrapper>
      <MobileWrapper>
        <BackButton type="button" onClick={backStep}>
          Go Back
        </BackButton>
        <ConfirmBtn type="submit">Confirm</ConfirmBtn>
      </MobileWrapper>
    </>
  );
};

export default Finishing;
