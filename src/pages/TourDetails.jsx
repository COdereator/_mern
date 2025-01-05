import React from "react";
import '../style/tourdetails.css'
import { useParams } from "react-router-dom";
import tourData from '../data/tours'

const TourDetails = () => {

  const { id } = useParams();

  const tour = tourData.find(tour => tour.id === id)

  const {photo , title , desc , price , reviews , city , distance , maxgroupSize } = tour

  return <section>
    <div className="section">
      <img src={ photo } alt="" />
      <h2>{ title }</h2>
    </div>
  </section>;
};

export default TourDetails;
