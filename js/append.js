// 1. where to add
const placesUL = document.getElementById('places-list');
// console.log(placesUL);

// 2. what to be added
const li = document.createElement('li');
li.innerText = 'paharbon';

// 3. add the child, and make a connection between the above two
placesUL.appendChild(li);


// Let's create something more inside our main container

// 1. where to add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Favourite Food List";
// adding this to our section
section.appendChild(h1);
// adding more content
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Biryani";
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = "Borhani";
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = "Mutton";
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = "Beef";
ul.appendChild(li4);


section.appendChild(ul);

// 3. add this new section to our main container;
mainContainer.appendChild(section)



// set innerHTML directly

const dress = document.createElement('section');
dress.innerHTML = `
<h1> My new dresses </h1>
<ul>
<li>1. Borka </li>
<li>2. New Abaya </li>
<li>3. Coat </li>
</ul>
`

mainContainer.appendChild(dress);