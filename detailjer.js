const root = document.querySelector('.root');

const urlParems = new URLSearchParams(window.location.search);

fetch('./data/' + urlParems.get('id') + '.json')
// then do this
.then(function (response) {
  if (response.status !== 200) {
    throw new Error("Serveren Svare Ikke");
  }
  return response.json();
})
  .then(data => {
root.innerHTML = `
<section class="detination">
<div>
<img src="img/${data.image}" alt="Picture of the place">
</div>
<div class="destination__favorit">
    <i class="fa-solid fa-heart"></i>
   Favorit
</div>


</section>
<section class="destination__info">
<p class="destination__city">
    ${data.destination}
</p>
<h1 class="destination__headline">
    ${data.title}
</h1>
<p class="destination__desctibtion>
    ${data.subtitle}
</p>
<p class="destinations__text">
    ${data.text}
</p>
<div class"facility">
<p class="destinations__facility-headline">
  Faciliteter
</p>
<ul class="destinations__facilities"></ul>
</div>
</section>
`;
data.facilities.forEach(facility => {
  // console.log(facility);
  const ul = document.querySelector('.destinations__facilities');
  const list = document.createElement("li");
  list.append(facility);
  ul.append(list);
});
})
;