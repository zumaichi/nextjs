import React from 'react';
import { Metadata } from 'next';
import { HouseList, api, mapHouseListFromApiToVm } from '#pods/house-list';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Casas Rurales - Lista de casas',
};

const HouseListPage = async () => {
  const houseList = await api.getHouseList({
    cache: 'force-cache',
  });

  return <HouseList houseList={mapHouseListFromApiToVm(houseList)} />;
};

export default HouseListPage;
