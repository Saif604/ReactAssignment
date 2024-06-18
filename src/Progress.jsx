import { SiTicktick } from "react-icons/si";
import styled from "styled-components";
import { features } from "./utils/features";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem 0;
`;
const Step = styled.div``;
const TickContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Line = styled.div`
  width: calc(100% - 1.25rem);
  height: 2px;
  background: hsl(209, 23%, 60%);
  position: absolute;
  top: 50%;
  left: 20px;
`;

function Progress() {
  return (
    <Container>
      {features.map((item, index) => {
        if (index != features.length - 1) {
          return (
            <Step key={index}>
              <TickContainer>
                <SiTicktick className="active"/>
                <Line />
              </TickContainer>
              <p>Step1</p>
            </Step>
          );
        }
        else {
          return (
            <Step key={index}>
              <TickContainer>
                <SiTicktick />
              </TickContainer>
              <p>Step1</p>
            </Step>
          );
        }
      })}
    </Container>
  );
}
export default Progress;
