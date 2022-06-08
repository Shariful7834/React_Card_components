import React from "react";

function Card(pros) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{pros.name}</h2>
          <img className="circle-img" src={pros.img} alt="contact_image" />
        </div>
        <div className="bottom">
          <p className="info">{pros.phone}</p>
          <p className="info">{pros.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
