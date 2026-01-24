import React from 'react';
import { Metadata } from 'next';
import { HouseList, api, mapHouseListFromApiToVm } from '#pods/house-list';

export const metadata: Metadata = {
  title: 'Casas Rurales - Lista de casas',
};

const HouseListPage = async () => {
  const houseList = await api.getHouseList();

  return <HouseList houseList={mapHouseListFromApiToVm(houseList)} />;
};

export default HouseListPage;