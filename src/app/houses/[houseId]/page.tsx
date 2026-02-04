import React from 'react';
import { Metadata } from 'next';
import { api } from '#pods/house-list';
import { BookingButton } from './booking-button';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ houseId: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const houses = await api.getHouseList();
  const house = houses.find((h) => h.id === params.houseId);

  return {
    title: `Casa ${house?.name || params.houseId} detalles`,
  };
};
export async function generateStaticParams() {
  return [{ houseId: '1' }, { houseId: '2' }, { houseId: '3' }];
}

const HousePage = async (props: Props) => {
  const params = await props.params;
  const houses = await api.getHouseList();
  const house = houses.find((h) => h.id === params.houseId);
  return (
    <div>
      <h1>{house?.name}</h1>

      <p>{house?.description}</p>
      <p>City: {house?.city}</p>
      <p>Price: {house?.price}€ / noche</p>
      <img
        src={`http://localhost:3001${house?.image}`}
        alt={house?.name}
        style={{ maxWidth: '400px' }}
      />
      <BookingButton houseId={params.houseId} initialBooked={house?.isBooked || false} />
    </div>
  );
};

export default HousePage;
