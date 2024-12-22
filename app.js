let on = document.querySelector('.on')
let img = document.querySelector('.img')
on.addEventListener('click',function(){
    img.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
})
let off = document.querySelector('.off')
off.addEventListener('click',function(){
    img.src="https://www.w3schools.com/js/pic_bulboff.gif"
})





let inc = document.querySelector('.inc');
let dec  = document.querySelector('.dec');
let input = document.querySelector('.input');

inc.addEventListener('click', function(){
    console.log(Number(input.value));

    if(Number(input.value)+1 < 6){
        input.value = Number(input.value)+1
        dec.style.cursor = 'pointer'
    }else{
        inc.style.cursor = 'not-allowed'
    }
    
})

dec.addEventListener('click', function(){
    if(Number(input.value) > 1){
        input.value = Number(input.value) - 1
        inc.style.cursor = 'pointer'
    }else{
        dec.style.cursor = 'not-allowed'
    }
})



let inputt = document.querySelector('.inputt');
let eye = document.querySelector('.eye')

eye.addEventListener('click', () =>{
    if(inputt.type == 'password'){
        inputt.type = 'text'
        eye.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }else{
        inputt.type = 'password'
        eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
})