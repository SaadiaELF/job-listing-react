import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.imgSrc} alt={props.imgAlt} />
      <div className="card__body">
        <h3 className="card__title">
          <span className="span-title">{props.company}</span>
          {props.new ? <span className="status status--new">New!</span> : ""}
          {props.featured ? (
            <span className="status status--featured">Featured</span>
          ) : (
            ""
          )}
        </h3>
        <h2 className="card__subtitle">{props.position}</h2>
        <div className="card__text">
          <span className="info">{props.time}</span>
          <span className="info">.</span>
          <span className="info">{props.contract}</span>
          <span className="info">.</span>
          <span className="info">{props.location}</span>
        </div>
      </div>
      <div className="card__footer">
        <span className="tag">{props.role}</span>
        <span className="tag">{props.level}</span>
        {props.languages.map((lang, i) => {
          return (
            <span key={i} className="tag">
              {lang}
            </span>
          );
        })}
        {props.tools.map((tool, i) => {
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
