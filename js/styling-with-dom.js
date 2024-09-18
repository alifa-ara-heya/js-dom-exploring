const sections = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections){
    section.style.border = '2px solid steelblue';
}

const places = document.getElementById('places-container');
places.style.backgroundColor = 'yellow';

const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('yellow-bg');