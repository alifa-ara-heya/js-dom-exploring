const count = document.getElementById('count');
const counter = document.getElementById('counter');

const increaseBtn = document.getElementsByClassName("increase-button")[0];

const decreaseBtn = document.getElementsByClassName("decrease-button")[0];

counter.addEventListener('click', function () {
    console.log("counter");
    console.log(increaseBtn.getAttribute('disabled')); //null

    // if we want to pause the counter when "count" is clicked, we can disable the buttons;
    if (increaseBtn.getAttribute('disabled') == null) {
        increaseBtn.setAttribute('disabled', true);
        decreaseBtn.setAttribute('disabled', true);
        counter.classList.add('bg-blue-100', 'text-black');

        // Optionally, change the styles of disabled buttons to give feedback
        increaseBtn.classList.add('opacity-50', 'cursor-not-allowed');
        decreaseBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        increaseBtn.removeAttribute('disabled')
        decreaseBtn.removeAttribute('disabled')
        counter.classList.remove('bg-blue-100', 'text-black');
        increaseBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        decreaseBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
})

increaseBtn.addEventListener('click', function (event) {
    let currentCount = Number(count.innerText);
    currentCount = currentCount + 1;
    // or, currentCount++
    count.innerText = currentCount;
    event.stopPropagation();
})


decreaseBtn.addEventListener('click', function (event) {
    let currentCount = Number(count.innerText);
    currentCount = currentCount - 1;
    // or, currentCount--
    count.innerText = currentCount;
    event.stopPropagation();
})
