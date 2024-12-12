import fetch from 'node-fetch'; // Instalamos `npm install node-fetch`

const API_KEY = 'cd23c98ad2msh26390503921f178p1a1f75jsnfaab017coca9'; 
const API_HOST = 'open-weather13.p.rapidapi.com';
const CITY_NAME = 'london'; // 

const url = `https://${API_HOST}/city/${CITY_NAME}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
  },
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log('Datos del clima:', data);
  })
  .catch(error => {
    console.error('Error al obtener el clima:', error);
  });
