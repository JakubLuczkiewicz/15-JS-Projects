let count = 0;

let value = document.getElementById('value');

function resetView() {
    value.textContent = count;
    if (count > 0) value.style.color = "blue";
    else if (count < 0) value.style.color = 'red';
    else value.style.color = 'black';
}

let decreaseBtn = document.querySelector('.decrease');
decreaseBtn.addEventListener('click', function () {
    count--;
    resetView();
})
let increaseBtn = document.querySelector('.increase');
increaseBtn.addEventListener('click', function () {
    count++;
    resetView();
})

let resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', function () {
    count = 0;
    resetView();
});
