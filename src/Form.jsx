import React from "react";
import FilterPage from "./components/FilterPage";


function Form({ selectedFilter, onFilterChange }) {
  return (
    <FilterPage
      selectedFilter={selectedFilter}
      onFilterChange={onFilterChange}
    />
  );
}

export default Form;
