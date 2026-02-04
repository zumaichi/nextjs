import React from 'react';
import classes from './button.module.css';

interface House {
  isBooked: boolean;
}

interface ButtonProps {
  house: House;
  onClick: () => void;
}

export const BookButton: React.FC<ButtonProps> = ({ house, onClick }) => {
  return (
    <button
      className={`${classes.book} ${house.isBooked ? classes.secondary : classes.primary}`}
      onClick={onClick}
    >
      {house.isBooked ? 'Cancelar Reserva' : 'Reservar'}
    </button>
  );
};
