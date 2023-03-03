const clickButton = document.querySelector('#button');
const value = document.querySelector('.value');
const clearValue = document.querySelector('#butt2');



function addedValue(){

    let h = 0;
    clickButton.addEventListener('click', function(){
        value.innerText = 1+h++;
    })

    clearValue.addEventListener('click', function(){
        h = 0;
        value.innerText = h;
    })
}
addedValue();