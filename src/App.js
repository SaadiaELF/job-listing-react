import React from "react";
import data from "./data.json";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
