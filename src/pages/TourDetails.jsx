import React from "react";
import '../style/tourdetails.css'
import { useParams } from "react-router-dom";
import tourData from '../data/tours'

const TourDetails = () => {

  const { id } = useParams();

  const tour = tourData.find(tour => tour.id === id)

  const {photo , title , desc , price , reviews , city , distance , maxGroupSize } = tour

  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ""
      : totalRating === 1
      ? totalRating
      : totalRating / reviews?.length;

  return <section>
    <div className="section">
      <div className="details_left">
        <img src={ photo } width={"100%"} height={450} style={{borderRadius:'10px'}} alt="" />
        <div className="details_desc">
          <h2 style={{fontWeight:'600'}}>{ title }</h2>
          <p>
              <span style={{color:'#f87a20'}}>
                <i class="ri-star-fill"></i>
              </span>
              {avgRating === 0 ? "" : avgRating}
              {totalRating === 0 ? "Not Rated" : `  ( ${reviews.length} )`}
              <span style={{marginLeft:'20px'}}><i class="ri-map-pin-line"></i> Somewhere</span>
          </p>
          <div className="details_cont">
            <p><i class="ri-map-pin-2-line"></i>{city}</p>
            <p><i class="ri-money-cny-circle-line"></i> {price}/per person</p>
            <p><i class="ri-map-pin-time-line"></i>{distance} k/m</p>
            <p><i class="ri-group-line"></i> {maxGroupSize} people</p>
          </div>
          <h2 style={{fontWeight:'600'}}>Description</h2>
          <p>{desc}</p>
        </div>
        <div className="details_desc">
          <h2>Reviews (2 reviews)</h2>
          <div className="details_ratings">
            <span>1<i class="ri-star-fill" style={{color:'#f87a20'}}></i></span>
            <span>2<i class="ri-star-fill" style={{color:'#f87a20'}}></i></span>
            <span>3<i class="ri-star-fill" style={{color:'#f87a20'}}></i></span>
            <span>4<i class="ri-star-fill" style={{color:'#f87a20'}}></i></span>
            <span>5<i class="ri-star-fill" style={{color:'#f87a20'}}></i></span>
          </div>
          <div className="newsearch">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="details_right">

      </div>
    </div>
  </section>;
};

export default TourDetails;
