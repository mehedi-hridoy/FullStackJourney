// generate a random color

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0; i < 6; i++) {
        color += hex[Math.floor(Math.random()  * 16)]
    }
    return color
};

// console.log(randomColor())

const body =  document.querySelector('body')

let colorInterval = null;

const doc =  document.querySelector('#start').addEventListener('click',function() {
    

    // body.style.backgroundColor = randomColor()
    colorInterval = setInterval(() => {
        body.style.backgroundColor = randomColor();
    }, 1000);
    
    
})
  
document.querySelector('#stop').addEventListener('click',function() {
    // console.log('Stop Clicked!!!')
    clearInterval(colorInterval);
    colorInterval = null;
});


