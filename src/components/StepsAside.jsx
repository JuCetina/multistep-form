import { StepsContainer } from "../css/StepsAside";
import violetFigure from "../assets/violetoval.svg";
import { VioletOval } from "../css/VioletOval";
import pinkOval from "../assets/pinkoval.svg";
import { PinkOval } from "../css/PinkOval";
import circle from "../assets/circle.svg";
import { Circle } from "../css/Circle";
import lines from "../assets/lines.svg";
import { Lines } from "../css/Lines";
import Steps from "./Steps";

const StepsAside = ({ step }) => {
  return (
    <StepsContainer>

      <VioletOval src={violetFigure} alt="" />
      <PinkOval src={pinkOval} alt="" />
      <Circle src={circle} alt="" />
      <Lines src={lines} alt="" />

      <Steps step={step} />

    </StepsContainer>
  );
};

export default StepsAside;
