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