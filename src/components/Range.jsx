import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem 0;
`;
const Label = styled.label`
  display: block;
  text-transform: capitalize;
  font-size: 1.25rem;
`;
const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 20%;
    gap: 1rem;
`
const InputComp = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`;

const Range = () => {
  return (
    <Container>
      <Label htmlfor="Price">Price Range</Label>
      <InputContainer>
        <InputComp type="number" name="min-price" placeholder="min" />
        <InputComp type="number" name="max-price" placeholder="max" />
      </InputContainer>
    </Container>
  );
};
export default Range;
