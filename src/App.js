import React from "react";
import data from "./data.json";
import Card from "./components/Card";
import Container from "./components/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        {data.map((job, i) => {
          return (
            <Card
              key={i}
              imgSrc={job.logo}
              imgAlt={job.company}
              company={job.company}
              position={job.position}
              featured={job.featured}
              new={job.new}
              time={job.postedAt}
              contract={job.contract}
              location={job.location}
              role={job.role}
              level={job.level}
              languages={job.languages}
              tools={job.tools}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
