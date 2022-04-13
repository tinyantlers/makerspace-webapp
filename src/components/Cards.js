import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the makerspace! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="machine example 1"
              label="machine name"
              path="/sign-up"
            />
            <CardItem
              src="images/img-2.jpg"
              text="machine example"
              label="machine name"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="machine example"
              label="machine name"
              path="/sign-up"
            />
            <CardItem
              src="images/img-5.jpg"
              text="machine example"
              label="machine name"
              path="/machines"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Rmachine example"
              label="machine name"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
