const clock = document.getElementById('clock')


// let date = new Date()

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleDateString());
    
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000);