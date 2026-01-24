import React from 'react';
import { Metadata } from 'next';

interface Props {
  params: { houseId: string };
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  return {
    title: `Rent a car - Car ${params.houseId} details`,
  };
};

const CarPage = (props: Props) => {
  const { params } = props;
  return (
    <>
      <h2>House detail page</h2>
      <p>{params.houseId}</p>
    </>
  );
};

export default CarPage;
