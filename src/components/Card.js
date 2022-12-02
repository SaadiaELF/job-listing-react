import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.imgSrc} alt={props.imgAlt} />
      <div className="card__body">
        <h3 className="card__title">
          {props.company}
          {props.featured ? <span className="status">Featured</span> : ""}
          {props.new ? <span className="status">New</span> : ""}
        </h3>
        <h2 className="card__subtitle">{props.position}</h2>
        <div className="card__text">
          <span className="info">{props.time}</span>
          <span className="info">{props.contract}</span>
          <span className="info">{props.location}</span>
        </div>
      </div>
      <div className="card__footer">
        <span className="tag">{props.role}</span>
        <span className="tag">{props.level}</span>
        {props.languages.map((lang) => {
          return <span className="tag">{lang}</span>;
        })}
        {props.tools.map((tool) => {
          return <span className="tag">{tool}</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
