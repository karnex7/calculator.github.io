function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
   return a * b;
};

function divide(a, b){
    let result;
    if(b === 0){
        return "Stupid";
    }
    result =  a / b;
    result = result.toFixed(2);
    return result;
};

function operate(op, a, b){
    if(op === "+"){
        return add(a, b);
    }else if(op === "-"){
        return subtract(a, b);
    }else if(op === "×"){
        return multiply(a, b);
    }else if(op === "÷"){
        return divide(a, b);
    }
};

const display = document.querySelector(".display");
let firstNumb;
let operator;
let secoundNumb;

const clear = document.querySelector("#clearBtn");
clear.addEventListener("click", (e) => {
    fPressedNumb.innerHTML = "";
    sPressedNumb.innerHTML = "";
    pressedOp.innerHTML = "";
    firstNumb = undefined;
    secoundNumb = undefined;
    operator = undefined;
    a = 0;
    b = 0;
    c = 0;
});

const numb = document.querySelector(".numb");
let fPressedNumb = document.createElement("p");
fPressedNumb.classList.add("font");
numb.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() === "div" || e.target.textContent === "." || operator !== undefined || a === 1){
        return;
    }
    fPressedNumb.innerHTML += e.target.innerHTML;
    firstNumb = fPressedNumb.innerHTML;
    display.appendChild(fPressedNumb);
});

const op = document.querySelector(".operators")
let pressedOp = document.createElement("p");
pressedOp.classList.add("font");
op.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() === "div" || firstNumb === undefined || e.target.value === "equel" || secoundNumb !== undefined){
        return;
    }
    pressedOp.innerHTML = e.target.innerHTML;
    operator = pressedOp.innerHTML;
    display.appendChild(pressedOp);
});

let sPressedNumb = document.createElement("p");
sPressedNumb.classList.add("font");
numb.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() === "div" || e.target.textContent === "." || operator === undefined || firstNumb === undefined){
        return;
    };
    sPressedNumb.innerHTML += e.target.innerHTML;
    secoundNumb = sPressedNumb.innerHTML;
    display.appendChild(sPressedNumb);
});

let b = 0;
let c = 0;
const point = document.querySelector("#point");
point.addEventListener("click", (e) => {
    if(firstNumb !== undefined && operator === undefined && secoundNumb === undefined){
        if(b === 1){
            return;
        }
        fPressedNumb.innerHTML += e.target.innerHTML;
        firstNumb = fPressedNumb.innerHTML;
        display.appendChild(fPressedNumb);
        b = 1;
    }else if(firstNumb !== undefined && operator !== undefined && secoundNumb !== undefined){
        if(c === 1){
            return;
        };
        sPressedNumb.innerHTML += e.target.innerHTML;
        secoundNumb = sPressedNumb.innerHTML;
        display.appendChild(sPressedNumb);
        c = 1;
    }else{
        return;
    }
});

const del = document.querySelector("#delete");
del.addEventListener("click", (e) => {
    if(firstNumb !== undefined && operator === undefined && secoundNumb === undefined){
        if(a === 1){
            return;
        };
        if(fPressedNumb.innerHTML.slice(-1) === "."){
            b = 0;
        }
        fPressedNumb.innerHTML = fPressedNumb.innerHTML.slice(0, -1);
        firstNumb = fPressedNumb.innerHTML;
        display.appendChild(fPressedNumb);
    }else if(firstNumb !== undefined && operator !== undefined && secoundNumb !== undefined){
        if(sPressedNumb.innerHTML.slice(-1) === "."){
            c = 0;
        }
        sPressedNumb.innerHTML = sPressedNumb.innerHTML.slice(0, -1);
        secoundNumb = sPressedNumb.innerHTML;
        display.appendChild(sPressedNumb);
    }
});

let a = 0;
let result = document.createElement("p");
op.addEventListener("click", (e) => {
    if(e.target.tagName.toLowerCase() === "div" || firstNumb === undefined || operator === undefined || secoundNumb === undefined){
        return;
    };
    firstNumb = Number(firstNumb);
    secoundNumb = Number(secoundNumb);
    sPressedNumb.innerHTML = "";
    fPressedNumb.innerHTML = operate(operator, firstNumb, secoundNumb);
    if(e.target.textContent !== "="){
        operator = e.target.textContent;
        pressedOp.innerHTML = e.target.textContent;
    }else{
        operator = undefined;
        pressedOp.innerHTML = "";
    }
    b = 1;
    a = 1;
    c = 0;
    firstNumb = fPressedNumb.innerHTML;
    secoundNumb = undefined;
});






