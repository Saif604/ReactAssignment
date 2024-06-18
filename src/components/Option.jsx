import styled from "styled-components";

const Container = styled.div`
    padding: 0.5rem 0;
`
const Label = styled.label`
  display: block;
  text-transform: capitalize;
  font-size: 1.25rem;
`;
const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
`
const Option = ({title,options}) => {
  return (
    <Container>
      <Label htmlFor="options">{title}</Label>
      <Select id="options">
        {
          options.map((item,index)=>(
            <option value={item} key={index} >{item}</option>
          ))
        }
      </Select>
    </Container>
  );
}
export default Option