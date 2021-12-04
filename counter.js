window.onload = function(){
    let counter = 0;

    let displayCount = document.getElementById("display");
    let increaseBtn = document.getElementById("increase");
    let decreaseBtn = document.getElementById("decrease");
    let resetBtn = document.getElementById("reset");

    displayCount.innerHTML = counter;

    increaseBtn.onclick = function(){
        counter++;
        displayCount.innerHTML = counter;
        console.log(counter);
    }

    decreaseBtn.onclick = function(){
        counter--;
        displayCount.innerHTML = counter;
        console.log(counter);
    }

    resetBtn.onclick = function(){
        counter = "0"
        displayCount.innerHTML = counter;
    }
}

