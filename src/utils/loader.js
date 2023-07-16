import { getAllLocation, getLocationWithId } from './api';

export async function loaderId({ params }) {
  const locationId = params.id;
  // console.log(locationId);
  return await getLocationWithId(locationId);
}

export async function loaderAllLocation() {
  return await getAllLocation();
}