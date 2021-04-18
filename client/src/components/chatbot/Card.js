import React from "react";

const Card = (props) => {
  return (
    <div style={{ float: "left", paddingRight: 30, width: 270 }}>
      <div class="card">
        <div class="card-image" style={{ width: 240 }}>
          <img src={props.payload.fields.image.stringValue} />
          <span class="card-title">
            {props.payload.fields.header.stringValue}
          </span>
        </div>
        <div class="card-content">
          {props.payload.fields.description.stringValue}
          <p>
            <a>{props.payload.fields.price.stringValue}</a>
          </p>
        </div>
        <div class="card-action">
          <a
            target="_black"
            rel="noopener noreferrer"
            href={props.payload.fields.link.stringValue}
          >
            Get Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
