/* eslint-disable no-unused-vars */

//const genUrl = (url) => `http://localhost:8888/api${url}`



const genUrl = (url) => `https://jsonplaceholder.typicode.com/${url}`

function get(url) {
  return fetch(genUrl(url), { credentials: 'same-origin', method: 'GET', headers: { 'Content-Type': 'application/json' } });
}

function post(url, data) {
  return fetch(genUrl(url), { credentials: 'same-origin', method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
}

async function loadTodos() {
  return get('todos').then((res) => res.json());
}

export default {
  loadTodos,
  post
}
