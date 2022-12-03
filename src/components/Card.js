import React from "react";

const Card = ({ jobInfo }) => {
  return (
    <div className="card">
      <img className="card__img" src={jobInfo.logo} alt={jobInfo.company} />
      <div className="card__body">
        <h3 className="card__title">
          <span className="span-title">{jobInfo.company}</span>
          {jobInfo.new ? <span className="status status--new">New!</span> : ""}
          {jobInfo.featured ? (
            <span className="status status--featured">Featured</span>
          ) : (
            ""
          )}
        </h3>
        <h2 className="card__subtitle">{jobInfo.position}</h2>
        <div className="card__text">
          <span className="info">{jobInfo.time}</span>
          <span className="info">.</span>
          <span className="info">{jobInfo.contract}</span>
          <span className="info">.</span>
          <span className="info">{jobInfo.location}</span>
        </div>
      </div>
      <div className="card__footer">
        <span className="tag">{jobInfo.role}</span>
        <span className="tag">{jobInfo.level}</span>
        {jobInfo.languages.map((lang, i) => {
          return (
            <span key={i} className="tag">
              {lang}
            </span>
          );
        })}
        {jobInfo.tools.map((tool, i) => {
          return (
            <span key={i} className="tag">
              {tool}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
