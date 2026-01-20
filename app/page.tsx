import React from 'react';
import Link from 'next/link';

const RootPage = () => {
  return (
    <>
      <h2>Hello from Nextjs</h2>
      <Link href="/cars">navegar a cars</Link>
    </>
  );
};

export default RootPage;
