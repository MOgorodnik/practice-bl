import API from '../services/api';

function getAllUsers(query) {
  return API.dummyjson.get(query, { params: { limit: 10 } });
}

async function getAllUsersByName(query) {
  const res = await API.dummyjson.get(`/users/search?q=${query}`);
  // console.log(res.data.users);
  const normalize = await doNormalize(res.data.users);
  return normalize;
}

function doNormalize(data) {
  return data.map((el) => ({
    firstName: el.firstName,
    lastName: el.lastName,
    maidenName: el.maidenName,
    age: el.age,
    image: el.image,
    city: el.address.city,
    postalCode: el.address.postalCode,
    companyName: el.company.name,
  }));
}

export default {
  allUsers: getAllUsers,
  usersByNameAll: getAllUsersByName,
};
