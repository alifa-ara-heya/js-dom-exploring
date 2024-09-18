console.log("counter");
const count = document.getElementById('count');
console.log(count); //<span id="count">0</span>
console.log(typeof(count.innerText)); //0 is string heer

function increaseCount(){
    // console.log("increase");
    let currentCount = Number(count.innerText);
    // console.log(currentCount); // 0
    // console.log(typeof(currentCount)); //number
    currentCount = currentCount + 1;
    // or, currentCount++
    count.innerText = currentCount;
}

function decreaseCount(){
    // console.log("decrease");
    let currentCount = Number(count.innerText);
    currentCount--;
    count.innerText = currentCount;
}

