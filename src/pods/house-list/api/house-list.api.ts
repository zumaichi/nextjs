import { envConstants } from '#core/constants';
import { House } from './house-list.api-model';

const url = `${envConstants.BASE_API_URL}/houses`;

export const getHouseList = async (): Promise<House[]> => {
  const response = await fetch(url, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch houses');
  }

  return await response.json();
};
