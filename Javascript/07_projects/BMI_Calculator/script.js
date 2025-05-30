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