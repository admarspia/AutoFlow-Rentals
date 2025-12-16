import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"; 
import "../App.css";

function CarList() {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carsPerPage = 3; 

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // Store cars in localStorage properly
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  const handleNext = () => {
    if (currentIndex < cars.length - carsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedCars = cars.slice(currentIndex, currentIndex + carsPerPage);

  return (
    <div
      style={{
        fontFamily: "fantasy",
        margin: "50px 0 30px 30px",
        textAlign: "center",
      }}
      className="car-list-wrapper"
    >
      <h2 style={{marginBottom:"30px"}} className="section-title">Featured Cars</h2>

      <div
        className="car-carousel"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="carousel-btn prev-btn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{ marginRight: "20px" }} 
        >
          <ChevronLeftCircle size={40} />
        </button>

        <div className="car-list" style={{ display: "flex"}}>
          {displayedCars.map((car) => (
            <CarCard key={car._id} car={car} className="car-card" />
          ))}
        </div>

        <button
          className="carousel-btn next-btn"
          onClick={handleNext}
          disabled={currentIndex >= cars.length - carsPerPage}
          style={{ marginLeft: "20px" }} 
        >
          <ChevronRightCircle size={40} />
        </button>
      </div>
    </div>
  );
}

export default CarList;
