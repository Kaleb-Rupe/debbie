import React from "react";
import '../App.css'
import weddingPicture from '../images/Wedding.png'
export default function Packages() {
  const bronzePackageDetails = {
    name: "Bronze",
    duration: "1 hour Session",
    editedImages: 15,
    includePrintRelease: true,
    price: 75,
  };

  const silverPackageDetails = {
    name: "Silver",
    duration: "2 hour Session",
    editedImages: 30,
    includePrintRelease: true,
    price: 125,
  };

  const goldPackageDetails = {
    name: "Gold",
    duration: "4 hour Session",
    editedImages: 150,
    includePrintRelease: true,
    price: 225,
  };

  const platinumPackageDetails = {
    name: "Platinum",
    duration: "6 hour Session",
    editedImages: 350,
    includePrintRelease: true,
    price: 400,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>{bronzePackageDetails.name} Package</h2>
          <p>Package includes:</p>
          <ul>
            <li>{bronzePackageDetails.duration}</li>
            <li>{bronzePackageDetails.editedImages} edited digital images</li>
            {bronzePackageDetails.includePrintRelease && <li>Print Release</li>}
          </ul>
          <p>Price: ${bronzePackageDetails.price}</p>
        </div>
        <div className="col-md-6">
          <h2>{silverPackageDetails.name} Package</h2>
          <p>Package includes:</p>
          <ul>
            <li>{silverPackageDetails.duration}</li>
            <li>{silverPackageDetails.editedImages} edited digital images</li>
            {silverPackageDetails.includePrintRelease && <li>Print Release</li>}
          </ul>
          <p>Price: ${silverPackageDetails.price}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>{goldPackageDetails.name} Package</h2>
          <p>Package includes:</p>
          <ul>
            <li>{goldPackageDetails.duration}</li>
            <li>{goldPackageDetails.editedImages} edited digital images</li>
            {goldPackageDetails.includePrintRelease && <li>Print Release</li>}
          </ul>
          <p>Price: ${goldPackageDetails.price}</p>
        </div>
        <div className="col-md-6">
        <img
        src={weddingPicture}
        className="img-fluid"
        alt="Wedding"
        style={{ height: "100px", width: "50px" }}
        />
          <h2>{platinumPackageDetails.name} Package</h2>
          <p>Package includes:</p>
          <ul>
            <li>{platinumPackageDetails.duration}</li>
            <li>{platinumPackageDetails.editedImages} edited digital images</li>
            {platinumPackageDetails.includePrintRelease && <li>Print Release</li>}
          </ul>
          <p>Price: ${platinumPackageDetails.price}</p>
        </div>
      </div>
    </div>
  );
}

