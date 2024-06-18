// import React from "react";
import styled from "styled-components";
import { features } from "./utils/features";

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  &:last-child::after {
    content: "";
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 130%;
    left: 9px;
    width: 3px;
    height: 30px;
    background-color: hsl(209, 23%, 60%);
    transform: translateY(-50%);
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid hsl(209, 23%, 60%);
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
`;

function Filter({ selectedFilter, onFilterChange }) {
  const filters = features.map(item=>{
    const {feature} = item;
    return feature;
  })
  return (
    <RadioGroup>
      {filters.map((filter, index) => (
        <RadioWrapper key={filter}>
          <RadioLabel>
            <RadioInput
              type="radio"
              value={filter}
              checked={selectedFilter === filter}
              onChange={(e) => onFilterChange(e.target.value)}
            />
            {filter}
          </RadioLabel>
        </RadioWrapper>
      ))}
    </RadioGroup>
  );
}

export default Filter;
