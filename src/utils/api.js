const URL = process.env.PUBLIC_URL + '/logements.json';

export async function getAllLocation() {
  const response = await fetch(URL);

  if(response.status === 200) {
    return await response.json();
  }

  throw new Error('Bad response from server');
}


export async function getLocationWithId(id) {
  const response = await getAllLocation();
  const location = response.find(location => location.id === id);
  if(!location) {
    throw new Error(`Not found location with this id: ${id}`);
  }
  return location;
}