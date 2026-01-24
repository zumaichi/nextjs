import React from 'react';
import { House } from './house-list.vm';
import { HouseItem } from './components';
import classes from './house-list.module.css';

interface Props {
  houseList: House[];
}

export const HouseList: React.FC<Props> = (props) => {
  const { houseList } = props;

  return (
    <ul className={classes.root}>
      {houseList.map((house) => (
        <li key={house.id}>
          <HouseItem house={house} />
        </li>
      ))}
    </ul>
  );
};
