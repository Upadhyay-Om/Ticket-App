import React, { useState } from 'react';
import './ShowTicketCard.css';

function ShowTicketCard() {
  const [available, setAvailable] = useState(50);
  const [booked, setBooked] = useState(0);
    let buttonText = "Book Ticket";

    if (available === 0) {
    buttonText = "Sold Out";
    }

  const handleBookTicket = () => {
    setAvailable(available - 1);
    setBooked(booked + 1);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Live Concert Night</h2>
        <p>Time: 7:00 PM | Venue: City Auditorium</p>
      </div>
      
      <div className="card-body">
        <div className="stats">
          <div className="stat-item">
            <h3>{available}</h3>
            <span>Available</span>
          </div>
          <div className="stat-item">
            <h3>{booked}</h3>
            <span>Booked</span>
          </div>
        </div>


        <button className='book-btn' onClick={handleBookTicket} disabled={available === 0}>
        {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ShowTicketCard;
