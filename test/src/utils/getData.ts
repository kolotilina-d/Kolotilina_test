// function checkResponse(res) {
//   return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
// }

// export function getMovies() {
//   return fetch(moviesUrl).then(checkResponse);
// }

import axios from 'axios';
const BASE_URL = "https://rickandmortyapi.com/api/location";
// const SECOND_URL = 'https://rickandmortyapi.com/api/character';
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//   });
export const getData = axios({ url: `${BASE_URL}`, method: 'GET', params: {offset:0, limit: 1}})
// export const getData = axios({ url: `${SECOND_URL}`, method: 'GET', params: {offset:0, limit: 1}})