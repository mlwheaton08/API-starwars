const API = "https://swapi.dev/api"

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/people/1`)
  const jsonData = await dataFetch.json()
  return jsonData
};

// Display the number of starships returned from page 4
export const fetchStarshipsPage4 = async () => {
  const dataFetch = await fetch(`${API}/starships/?page=4`);
  const data = await dataFetch.json();
  return data;
}

// Display data about Hoth. Note: Hoth's id=4
export const fetchHoth = async () => {
  const dataFetch = await fetch(`${API}/planets/4`);
  const data = await dataFetch.json();
  return data;
}

// Display all the films and their release date
export const fetchFilms = async () => {
  const dataFetch = await fetch(`${API}/films`);
  const data = await dataFetch.json();
  return data;
}

// List the planets in order of size (diameter) from smallest to largest
export const fetchPlanets = async () => {
  let pages = [];
  for (let i = 1; i <= 6; i++) {
    let dataFetch = await fetch(`${API}/planets/?page=${i}`);
    let data = await dataFetch.json();
    pages.push(data);
  }
  return pages;
}

// Display a list of species and their language
export const fetchSpecies = async () => {
  let pages = [];
  for (let i = 1; i <= 4; i++) {
    let dataFetch = await fetch(`${API}/species/?page=${i}`);
    let data = await dataFetch.json();
    pages.push(data);
  }
  return pages;
}

// List the name and passenger capacity of each Starship
export const fetchStarships = async () => {
  let pages = [];
  for (let i = 1; i <= 4; i++) {
    let dataFetch = await fetch(`${API}/starships/?page=${i}`);
    let data = await dataFetch.json();
    pages.push(data);
  }
  return pages;
}