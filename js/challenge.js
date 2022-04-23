//counter
const counter = document.getElementById('counter');
let num = parseInt(counter.innerText);

//interval
setInterval(countUp, 1000);

function countUp() {
    num++;
    counter.innerText = num.toString();
}

//setting button functions
plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', function () {  
    num++;
    counter.innerText = num.toString();
})

minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function () {
    num--;
    counter.innerText = num.toString();
})

const likess = document.createElement('ul')

heartBtn = document.getElementById('heart');

heartBtn.addEventListener('click', function () {
    const newLike = document.createElement('li');
    newLike.textContent = `${num} has been liked!`
    //newLike.appendChild('likes');
    console.log(newLike)
})

    
