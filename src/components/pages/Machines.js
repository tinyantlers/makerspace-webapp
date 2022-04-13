import "../../App.css";
// import Cards from "../Cards";
// import React from "react";
import CardItem from "../CardItem";
// import HeroSection from "../HeroSection";

import image1 from "../../images/img-1.jpeg";
import image2 from "../../images/img-2.jpeg";
import image3 from "../../images/img-3.jpg";
import image4 from "../../images/img-4.jpeg";
import image5 from "../../images/img-5.jpeg";
import image6 from "../../images/img-6.jpeg";
import image7 from "../../images/img-7.jpeg";
import image8 from "../../images/img-8.jpeg";
import image9 from "../../images/img-9.jpeg";
import image10 from "../../images/img-10.jpeg";
import image11 from "../../images/img-11.png";
import image12 from "../../images/img-12.jpg";
import image13 from "../../images/img-13.jpeg";
import image14 from "../../images/img-14.jpeg";
import image15 from "../../images/img-15.jpeg";
import image16 from "../../images/img-16.jpeg";
import image17 from "../../images/img-17.jpeg";
import image18 from "../../images/img-18.png";
import image19 from "../../images/img-19.jpeg";
import image20 from "../../images/img-20.jpeg";

function Machines() {
  return (
    <div className="cards">
      <h1>Machines </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image1}
              text="3D Printer - Creality CR-10 max"
              path="/sign-up"
            />
            <CardItem
              src={image2}
              text="Large Format 3D Printer - Raise 3D Pro 2 Plus"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem src={image3} text="Arduino - Leonardo" path="/sign-up" />
            <CardItem
              src={image4}
              text="Raspberry Pi 4 Model B 4GB"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image5}
              text="Handheld 3D Scanner - EinScan Pro 2X"
              path="/sign-up"
            />
            <CardItem
              src={image6}
              text="Belt & Disc Sander - Jet Combination"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image7}
              text="10' Drill press - Dayton"
              path="/sign-up"
            />
            <CardItem
              src={image8}
              text="CNC 3D Carving Machine - X-Carve"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image9}
              text="Smart Desktop Cutter - Silhouette Cameo 4"
              path="/sign-up"
            />
            <CardItem
              src={image10}
              text="Large Format Printer & Cutter - Roland SG2-540 TrueVis"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image11}
              text="Laser Cutter - Dremel DIGILAB LC40"
              path="/sign-up"
            />
            <CardItem
              src={image12}
              text="Digital Embroidery Machine - Janome memory Craft Model 550e"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image13}
              text="Dual Port Soldering System & Heavy Duty Handpiece - `Hakko fm203-dp & fm-2030`"
              path="/sign-up"
            />
            <CardItem
              src={image14}
              text="Programmable Digital Soldering Station - Aoyue 9378 pro series"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image15}
              text="Power Supply - Key Sight e36312a"
              path="/sign-up"
            />
            <CardItem
              src={image16}
              text="Digital Oscilloscope - RIGOL DS1054Z"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image17}
              text="Textile heat press - Seeutek 5 in 1"
              path="/sign-up"
            />
            <CardItem
              src={image18}
              text="Overlock Machine - Singer Heavy Duty Serger"
              path="/sign-up"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={image19}
              text="Laminator - Fujipla LPE6510"
              path="/sign-up"
            />
            <CardItem
              src={image20}
              text="Power Tools - DeWalt"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Machines;
