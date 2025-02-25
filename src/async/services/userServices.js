/* import { get, post } from '../api';

export const getUsers = (endpoint, payload) => get(endpoint, payload);

export const createUser = (endpoint, payload) => post(endpoint, payload);
 */

import mockData from '../../data/mockData.json';

export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);  // Simula una respuesta de la API con los datos mockeados
    }, 1000); // Simula un retraso en la respuesta de 1 segundo
  });
};
