export const taskApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/krevan88/todos',
  timeout: 5000,
});

export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 5000,
});

export const quoteApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 5000,
});

export const imgApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 5000,
});
