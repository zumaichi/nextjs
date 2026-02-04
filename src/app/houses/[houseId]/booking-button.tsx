'use client';
import React from 'react';
import { useBooking } from '#common/hooks/useBooking';

interface Props {
  houseId: string;
  initialBooked?: boolean;
}

export const BookingButton: React.FC<Props> = ({
  houseId,
  initialBooked = false,
}) => {
  const { isBooked, toggleBooking } = useBooking(houseId, initialBooked);

  const handleBooking = () => {
    toggleBooking();
    alert(!isBooked ? 'Casa reservada exitosamente' : 'Reserva cancelada');
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
