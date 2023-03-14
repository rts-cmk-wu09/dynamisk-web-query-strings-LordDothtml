const destinationContainer = document.querySelector(".destinations")
const destinationswrapper = document.createElement("div")

// return a promise
fetch("./data/destinations.json")
  // then do this
  .then(function (response) {
    if (response.status !== 200) {
      throw new Error("Serveren Svare Ikke");
    }
    return response.json();
  })

  // and then this
  .then(function (data) {
    data.destinations.forEach(function (destination) {
      const article = `
        <article id="${destination.id}">
        <a href="detailjer.html?id=${destination.id}">
        <div>
        <img src="./img/${destination.image}" alt="picture">
        </div>
        </a>
        <div class="bg-blue">
        <i class="fa-solid fa-heart heart"></i>
        <a href="detailjer.html?id=${destination.id}">
        more
        </a>
        </div>
        </article>`

      destinationswrapper.innerHTML += article
    })
  })
  // if a error occured during the Then response play this
  .catch()
  // Then finally do this
  .finally(() => destinationContainer.append(destinationswrapper));