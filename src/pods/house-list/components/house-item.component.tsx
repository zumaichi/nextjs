'use client';
import React from 'react';
import Link from 'next/link';
import { routeConstants } from '#core/constants';
import { House } from '../house-list.vm';
import classes from './house-item.module.css';
import { useBooking } from '#common/hooks/useBooking';

interface Props {
  house: House;
}

export const HouseItem: React.FC<Props> = (props) => {
  const { house } = props;
  const { isBooked, toggleBooking } = useBooking(house.id, house.isBooked);

  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBooking();
    alert(!isBooked ? 'Casa reservada exitosamente' : 'Reserva cancelada');
  };

  return (
    <Link
      href={routeConstants.house(house.id)}
      prefetch={false}
      className={classes.root}
    >
      <div className={classes.imageContainer}>
        <img
          src={`http://localhost:3001${house.image}`}
          alt={house.name}
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{house.name}</h2>
        <p className={classes.city}>{house.city}</p>
        <p className={classes.description}>{house.description}</p>
        <p className={classes.price}>{house.price}€ / noche</p>
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
            marginTop: '8px',
          }}
        >
          {isBooked ? 'Cancelar Reserva' : 'Reservar'}
        </button>
      </div>
    </Link>
  );
};
