import React from 'react';
import Link from 'next/link';
import { routeConstants } from '#core/constants';
import { House } from '../house-list.vm';
import classes from './house-item.module.css';
import { prefetchDNS } from 'react-dom';

interface Props {
  house: House;
}

export const HouseItem: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <Link href={routeConstants.house(house.id)} prefetch={false} className={classes.root}>
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
      </div>
    </Link>
  );
};
