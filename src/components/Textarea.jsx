
import styled from "styled-components";
const Container = styled.div`
  padding: 0.5rem 0;
`;
const Label = styled.label`
  display: block;
  text-transform: capitalize;
  font-size: 1.25rem;
`;
const AreaComp = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`;
const Textarea = () => {
  return (
    <Container>
        <Label htmlFor="other" id="other">Other Reqirements</Label>
        <AreaComp rows={5}></AreaComp>
    </Container>
  )
}
export default Textarea