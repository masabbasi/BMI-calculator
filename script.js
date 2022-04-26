const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const result = document.querySelector('.result')
const category = document.querySelector('.category')
const kgValue = document.querySelector('.kg-value')
const cmValue = document.querySelector('.cm-value')

weight.addEventListener('input',myResult);
height.addEventListener('input',myResult);

function myResult () {
    let calResult = (weight.value/(Math.pow((height.value/100),2))).toFixed(1);
    result.innerHTML=calResult;
    kgValue.innerHTML=weight.value+' KG';
    cmValue.innerHTML=height.value+' CM';

    if (calResult<18.5) {
        category.innerHTML='UnderWeight'
        result.style.color='#ffc44d'

    } else if (calResult>=18.5 && calResult<=24.9) {
        category.innerHTML='Normal'
        result.style.color='#0be881'

    } else if (calResult>=25 && calResult<=29.9) {
        category.innerHTML='OverWeight'
        result.style.color='#ff884d'

    } else if (calResult>=30 && calResult<=34.9) {
        category.innerHTML='Obese'
        result.style.color='#ff5e4d'

    } else {
        category.innerHTML='ExtremelyObese'
        result.style.color='#FF0000'
    } 

}

