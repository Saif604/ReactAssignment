import styled from "styled-components";
import { features } from "../utils/features";
import Option from "./Option";
import Range from "./Range";
import Input from "./Input";
import Textarea from "./Textarea";

const Container = styled.div`
  background: hsl(210, 36%, 96%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 4px solid hsl(186, 78%, 60%);
  border-radius: 8px;
`;
const ContainerCenter = styled.div`
  width: 80%;
  margin: 1.5rem auto;
`;
const Heading = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: black;
`;
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  gap: 1rem;
`;

const FilterPage = ({ selectedFilter}) => {
  const result = features.filter((item) => {
    const { feature } = item;
    if (feature === selectedFilter) return item;
  });

  return (
    <Container>
      {result.map((item) => (
        <ContainerCenter key={item.key}>
          <Heading>{item.feature}</Heading>
          {item.compo.map((components) => {
            const { id, head, options, type } = components;
            if (type === "Option") {
              return <Option key={id} title={head} options={options} />;
            } else if (type === "Input") {
              return <Input key={id} title={head} />;
            } else if (type === "Textarea") {
              return <Textarea key={id} title={head} />;
            } else if (type === "Range") {
              return <Range key={id} title={head} />;
            } else {
              return null;
            }
          })}
          <ButtonContainer>
            <button type="submit" className="btn inactive">
              Previous
            </button>
            <button type="submit" className="btn">
              Next
            </button>
          </ButtonContainer>
        </ContainerCenter>
      ))}
    </Container>
  );
};
export default FilterPage;
