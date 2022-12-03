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
          return <Card jobInfo={job} key={i} />;
        })}
      </Container>
    </div>
  );
}

export default App;
