# Project realated to Dom

## Github Link
[Click] (https://github.com/mehedi-hridoy)

# Solution Code 

## Project 1

```Javascript
console.log('Mehedi Hasan Hridoy')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)

        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'mint') {
            body.style.backgroundColor = '#3EB489';
        }
        else if(e.target.id === 'rose') {
            body.style.backgroundColor = '#FF007F';
        }

    })
})

```

## Project 2

```Javascript
const form = document.querySelector('form')

    // const height = parseInt(document.querySelector('#height').value)
    // this will extract empty value 
    // we need value when we submit 


form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    const prediction = document.querySelector('#prediction')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please Enter valid Height'
    }
    if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please Enter valid weight'
    } else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)
       results.innerHTML = `<div>${bmi}</div>`

       if(bmi < 18.6) {
        prediction.innerHTML = '<div>Under Weight</div>'
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        prediction.innerHTML = '<div>Normal Weight</div>'
    } else {
        prediction.innerHTML = '<div>Over Weight</div>'
    }
    }

    

})

```

## Project 3 

```Javascript
const clock = document.getElementById('clock')


// let date = new Date()

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleDateString());
    
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000);

```