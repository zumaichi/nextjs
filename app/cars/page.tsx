'use client';

import { useRouter } from 'next/navigation';

const carListPage = () => {
  const router = useRouter();
  const onNavigateBack = () => {
    router.push('/');
  };

  return (
    <>
      <h2>Car List Page</h2>
      <ul>
        <li>Car 1</li>
        <li>Car 2</li>
        <li>Car 3</li>
      </ul>
      <button onClick={onNavigateBack}>Volver al inicio</button>
    </>
  );
};

export default carListPage;
