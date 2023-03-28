import React from 'react'
import "./css/details.css"
import Tourpageimage from './Tourpageimage'

export default function Details() {
  return (
    <div className="container table tour shadow  bg-light">
        <div class="pb-3">
            <h2><u>Manali</u></h2>
        </div>
        <div>
            <h3>Cost</h3>
            <h6>Single Person :- 12000 /- per person</h6>
            <h6>Two Person :- 20000 /- total</h6>
      </div>
        <hr />
      <div>
            <h3>Date</h3>
            <h6>From :- 02/04/2023 </h6>
            <h6>To :- 06/04/2023 </h6>
      </div>

      <hr />
      <div>
            <h3>Stay & Meals</h3>
            
            <h6>Stay at a Luxury Hotel</h6>
            <h6>Complimentary snacks at the time of arrival</h6>
            <h6>100% Vegetarian Meals</h6>
            <h6>3 times Meals in a Day</h6>
            <h6>Breafast, Lunch and Dinner</h6>
            
      </div>

      <hr />
      <div>
            <h4>Map</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.521594303595!2d77.16961016069348!3d32.23950714205165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1679945403606!5m2!1sen!2sin" 
            class="map" width="1000" height="450" style={{border:0}} allowFullFcreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <hr />
      <div>
            <h4>Documents Required</h4>
            <h6>Adhaar Card/Pan Card/Driving Licence is Manadatory</h6>
            <h6>2 photo is Manadatory</h6>
            <h6>Passport & Visa is Manadatory for International tour.</h6>

      </div>

      <hr />
      <div>
            <h4>Photos</h4>
            <div >
            <Tourpageimage />
            </div>
      </div>

      <hr />
      <div>
            <h4>Terms & Conditions</h4>
            <h6>Booking amount should be paid before.</h6>
            <h6>Amount is non-refundable.</h6>
            <h6>Booking amount should be paid before.</h6>
      </div>

    </div>
  )
}

