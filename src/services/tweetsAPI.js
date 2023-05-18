import axios from 'axios';

const BASE_URL = 'https://646504a6228bd07b353fdbd9.mockapi.io/users';

export async function fetchUsers(page = 1) {
  const response = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return response.data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}
