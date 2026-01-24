import * as apiModel from './api/house-list.api-model';
import * as viewModel from './house-list.vm';

export const mapHouseListFromApiToVm = (
  houseList: apiModel.House[]
): viewModel.House[] => {
  return houseList.map((house) => ({
    id: house.id,
    name: house.name,
    description: house.description,
    city: house.city,
    price: house.price,
    image: house.image,
  }));
};
