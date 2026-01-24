import React from 'react';
import { Metadata } from 'next';
import { CarList, api, mapCarListFromApiToVm } from '#pods/car-list';

export const metadata: Metadata = {
  title: 'Rent a car - Car list',
};

const CarListPage = async () => {
  const carlist = await api.getCarList();

  return <CarList carList={mapCarListFromApiToVm(carlist)} />;
};

export default CarListPage;
