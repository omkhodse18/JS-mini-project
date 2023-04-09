const num = document.querySelector('#value');

const increment = () => {
    let value = parseInt(num.innerText);
    value = value + 1;
    num.innerHTML = value;
}

const decrement = () => {
    let value = parseInt(num.innerText);
    value = value - 1;
    num.innerHTML = value;
}

 
