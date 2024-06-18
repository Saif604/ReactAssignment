import React, { useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Progress from "./Progress";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
`;

const Sidebar = styled.div`
  padding: 1.5rem;
  border-right: 1px solid #ddd;
`;

const Content = styled.div`
  padding: 1.5rem 0;
  max-width: 50rem;
  min-height: 100vh;
`;

function App() {
  const [selectedFilter, setSelectedFilter] = useState("add requirement");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <Container className="section-center">
      <Sidebar>
        <Filter
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </Sidebar>
      <Content>
        <Progress/>
        <Form
          selectedFilter={selectedFilter}
        />
      </Content>
    </Container>
  );
}

export default App;
