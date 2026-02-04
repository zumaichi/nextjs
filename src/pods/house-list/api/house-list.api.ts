import { envConstants } from '#core/constants';
import { House } from './house-list.api-model';

const url = `${envConstants.BASE_API_URL}/houses`;

export const getHouseList = async (options?: RequestInit): Promise<House[]> => {
  return await fetch(url, options).then((response) => response.json());
};

export const getHouse = async (
  houseId: string,
  options?: RequestInit
): Promise<House> => {
  return await fetch(`${url}/${houseId}`, options).then((response) =>
    response.json()
  );
};

export const bookHouse = async (houseId: House): Promise<boolean> => {
  await fetch(`${url}/${houseId.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(houseId),
  });
  return true;
};
