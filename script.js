const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const result = document.querySelector('.result')
const category = document.querySelector('.category')
const kgValue = document.querySelector('.kg-value')
const cmValue = document.querySelector('.cm-value')

weight.addEventListener('input',myResult);
height.addEventListener('input',myResult);

function myResult () {
    let calResult = (weight.value/((height.value/100)*(height.value/100))).toFixed(1);
    result.innerHTML=calResult;
    kgValue.innerHTML=weight.value+' KG';
    cmValue.innerHTML=height.value+' CM';

    if (calResult<18.5) {
        category.innerHTML='UnderWeight'
        result.style.color='#FF8C00'

    } else if (18.5<calResult<24.9) {
        category.innerHTML='Normal Weight'
        result.style.color='green'

    } else if (25<calResult<29.9) {
        category.innerHTML='OverWeight'
        result.style.color='#FF8C00'
        
    } else if (calResult>29.9) {
        category.innerHTML='Obese'
        result.style.color='red'
    } 

}

