import styled from "styled-components";
const Container = styled.div`
  padding: 0.5rem 0;
`;
const Label = styled.label`
  display: block;
  text-transform: capitalize;
  font-size: 1.25rem;
`;
const InputComp = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`;

const Input = () => {
  return (
    <Container>
        <Label htmlFor="reqirement">requirement</Label>
        <InputComp placeholder="Eg:hussain"></InputComp>
    </Container>
  );
};
export default Input;
