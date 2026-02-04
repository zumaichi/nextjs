import React from 'react';
import { House } from './house-list.vm';
import { HouseItem } from './components';
import classes from './house-list.module.css';
import { houses } from 'api-server/src/mock-data';

interface Props {
  houseList: House[];
}

export const HouseList: React.FC<Props> = (props) => {
  const { houseList } = props;

  return (
    <div>
    <ul className={classes.root}>
      {houseList.map((house) => (
        <li key={house.id}>
          <HouseItem house={house} />
        </li>
       
      ))}
    </ul>
   
   </div>
  );
};
