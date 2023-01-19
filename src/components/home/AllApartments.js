import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Card from "./Card";
import "./home.css";

function AllApartments() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/properties")
      .then((res) => res.json())
      .then((resp) => {
        setApartments(resp);
      });
  }, []);

  return (
    <>
      <div>
        <div className="rentals">
          <h2 className="view-title">Apartments Listings</h2>
          <div className="rental-card">
            {apartments
              .filter((property) => property.category == "apartment")
              .map((card) => {
                return <Card key={card.id} card={card} />;
              })}
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export default AllApartments;
