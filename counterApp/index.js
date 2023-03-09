const controlvalue = document.getElementById('counter') 
const increment = () => {
    let value = parseInt(controlvalue.innerText);
    value = value + 1;
    controlvalue.innerText = value;
}
const decrement =() => {
    let value = parseInt(controlvalue.innerText);
    value = value - 1;
    controlvalue.innerText = value;
}
 