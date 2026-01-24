import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casas Rurales - Home',
};

const RootPage = () => {
  return (
    <>
      <h2>Bienvenido a Casas Rurales</h2>
      <Link href="/houses">Ver casas disponibles</Link>
    </>
  );
};

export default RootPage;
