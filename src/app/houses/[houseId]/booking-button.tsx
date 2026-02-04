'use client';
import React, { useState } from 'react';

interface Props {
  initialBooked?: boolean;
}

export const BookingButton: React.FC<Props> = ({ initialBooked = false }) => {
  const [isBooked, setIsBooked] = useState(initialBooked);

  const handleBooking = () => {
    setIsBooked(!isBooked);
    alert(isBooked ? 'Reserva cancelada' : 'Casa reservada exitosamente');
  };

  return (
    <button
      onClick={handleBooking}
      style={{
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: isBooked ? '#dc3545' : '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '16px',
      }}
    >
      {isBooked ? 'Cancelar Reserva' : 'Reservar'}
    </button>
  );
};
