import { BASE_URL, Route } from './constants';

const getData = () => fetch (
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json());

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  },
).then((response) => {
  if (!response.ok) {
    throw new Error();
  }
})
  .catch(() => {
    throw new Error();
  });

export {getData, sendData};

