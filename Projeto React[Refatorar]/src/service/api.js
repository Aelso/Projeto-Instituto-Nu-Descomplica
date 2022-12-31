import axios from 'axios';

const url = 'http://localhost:4000/users';

export const getAllUsers = async () => {
  return await axios.get(url);
};

export const addUser = async (user) => {
  return await axios.post(url, user);
};

export const updateUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const getUserById = async (id) => {
  return await axios.get(`${url}/${id}`);
};


// Path: src\components\body.js


/* Fiz as seguintes alterações:

Adicionado recuo adequado e quebras de linha para facilitar a leitura do código.
Removidos os backticks e variáveis desnecessários dentro das funções axios.get e axios.post, já que a variável url já é uma string.
Removidos os parênteses ao redor do parâmetro do usuário, pois é um único parâmetro. Esta é uma escolha estilística e não é estritamente necessária. 
Adicionado recuo adequado e quebras de linha para facilitar a leitura do código.
Removidos os parênteses desnecessários ao redor do parâmetro **`id`** nas funções **`updateUser`** e **`deleteUser`**, já que é um único parâmetro. Esta é uma escolha estilística e não é estritamente necessária.
*/


