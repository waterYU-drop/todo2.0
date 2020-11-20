import ajax from './ajax';
const BASE_URL = 'http://localhost:4002/api';

export const addtodo = (obj) => ajax(BASE_URL + '/addtodo', obj, 'POST');
export const donetodo = (obj) => ajax(BASE_URL + '/donetodo', obj, 'POST');
export const canceltodo = (obj) => ajax(BASE_URL + '/canceltodo', obj, 'POST');
export const withdrawtodo = (obj) =>
  ajax(BASE_URL + '/withdrawtodo', obj, 'POST');
export const deletetodo = (obj) => ajax(BASE_URL + '/deletetodo', obj, 'POST');
export const restoretodo = (obj) =>
  ajax(BASE_URL + '/restoretodo', obj, 'POST');
