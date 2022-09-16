import {fetchLuke, fetchStarshipsPage4, fetchHoth, fetchFilms, fetchPlanets, fetchSpecies, fetchStarships} from "./starWarsData.js"

// LUKE
const renderLukeToDOM = (data) => {
  let html = `
  <article>
  <section class="card">
  <p>Name: ${data.name}</p>
  <p>height: ${data.height}</p>
  </section>
  </article>
  `
  document.getElementById('app').innerHTML += html
}

const displayLuke = async () => {
  const data = await fetchLuke()
  renderLukeToDOM(data)
}

displayLuke()

// STARSHIPS PAGE 4
const renderStarshipsPage4CountToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <h2>Number of Starships on page 4:</h2>
        <p>${data.results.length}</p>
      </section>
    </article>
  `
  document.getElementById('app').innerHTML += html
}

const displayStarshipsPage4Count = async () => {
  const data = await fetchStarshipsPage4();
  renderStarshipsPage4CountToDOM(data);
}

displayStarshipsPage4Count()

// HOTH
const renderHothToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <h2>Hoth Data</h2>
  `
  for (const key in data) {
    html += `
          <p>${key}: ${data[key]}</p>
    `
  }
  html += `</section></article>`
  document.getElementById('app').innerHTML += html
}

const displayHoth = async () => {
  const data = await fetchHoth();
  renderHothToDOM(data);
}

displayHoth()

// FILMS
const renderFilmsToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <h2>Films</h2>
  `
  for (const film of data.results) {
    html += `
      <p>${film.title} was released on ${film.release_date}</p>
    `
  }
  html += `</section></article>`
  document.getElementById('app').innerHTML += html;
}

const displayFilms = async () => {
  const data = await fetchFilms();
  renderFilmsToDOM(data);
}

displayFilms()

// PLANETS
const getPlanets = async () => {
  const pages = await fetchPlanets();
  let planets = [];
  for (const page of pages) {
    for (const result of page.results) {
      planets.push(result)
    }
  }
  return planets;
}

const sortPlanetsByDiameter = async () => {
  const planets = await getPlanets();
  planets.sort((a, b) => parseInt(a.diameter) - parseInt(b.diameter));
  for (const planet of planets) {
    if (planet.diameter = "unknown") {
      planets.push(planets.splice(planets.indexOf(planet), 1)[0]);
    }
  }
  return planets;
}

const renderPlanetsByDiameterToDOM = async (planets) => {
  let html = `
    <article>
      <section class="card">
        <h2>Planets by diameter</h2>
  `
  for (const planet of planets) {
    html += `<p>${planet.name}'s diameter is <b>${planet.diameter}</b></p>`
  }
  html += '</section></article>';
  document.getElementById('app').innerHTML += html;
}

const displayPlanetsByDiameter = async () => {
  const data = await sortPlanetsByDiameter();
  renderPlanetsByDiameterToDOM(data);
}

displayPlanetsByDiameter()

//SPECIES
const getSpecies = async () => {
  const pages = await fetchSpecies();
  let species = [];
  for (const page of pages) {
    for (const result of page.results) {
      let type = {name: result.name, language: result.language};
      species.push(type);
    }
  }
  return species;
}

const renderSpeciesToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <h2>Species</h2>`
  for (const species of data) {
    html += `
      <p>Name: ${species.name}</p>
      <p>Language: ${species.language}</p>
    `
  }
  html += `</section></article>`
  document.getElementById('app').innerHTML += html
}

const displaySpecies = async () => {
  const data = await getSpecies()
  renderSpeciesToDOM(data)
}

displaySpecies()

// STARSHIPS AND PASSENGERS
const getStarships = async () => {
  const pages = await fetchStarships();
  let starships = [];
  for (const page of pages) {
    for (const result of page.results) {
      let starship = {name: result.name, passengers: result.passengers};
      starships.push(starship);
    }
  }
  return starships;
}

const renderStarshipsToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <h2>Starships</h2>`
  for (const starship of data) {
    html += `
      <p>Name: ${starship.name}</p>
      <p>Passengers: ${starship.passengers}</p>
    `
  }
  html += `</section></article>`
  document.getElementById('app').innerHTML += html
}

const displayStarships = async () => {
  const data = await getStarships()
  renderStarshipsToDOM(data)
}

displayStarships()