let slider = document.querySelector('.slider')
let slides = document.querySelectorAll('.slide_item')
let btn_control = document.querySelector('.button_remove_control')
let left = document.querySelector('.arrow_left')
let right = document.querySelector('.arrow_right')
let current_slide = 0 

left.addEventListener('click', () => {
    console.log('click l');
    if(current_slide == 0){
        console.log('no slides');
    }else{
        current_slide--
        change_slide(current_slide )
         
    }
     
})
right.addEventListener('click', () => {
    console.log('click r');
     
     
    if(current_slide == slides.length-1){
         console.log('no slides');
         
         
    }else{
        current_slide++
        change_slide(current_slide )
         
    }
     



})
//create btn_control

for(let i = 0; i< slides.length; i++) {
    let t =  slides[i].getAttribute('data-num')
     
    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.setAttribute('data-num',  slides[i].getAttribute('data-num'))
    btn.innerText = `button ${i}`
    i == 0 ? btn.classList.add('bg') : null

    btn_control.insertAdjacentElement('beforeend', btn)
    
}

 let btn = document.getElementsByClassName('btn')
  
 btn_control.addEventListener('click', (e)=>{
    let current_slide =  Number(e.target.getAttribute('data-num'))
     
    change_slide(current_slide)

})
 
function change_slide(num){
    console.log(current_slide);
    for(let i = 0; i < slides.length; i++){
        if(i<num){
            slides[i].classList.remove('next')
            slides[i].classList.remove('show')
            slides[i].classList.add('prew')
        }
        if( i== num){
            slides[i].classList.remove('next')
            slides[i].classList.remove('prew')
            slides[i].classList.add('show')
        }
        if( i> num){
            slides[i].classList.remove('prew')
            slides[i].classList.remove('show')
            slides[i].classList.add('next')
        }
        select_btn()
    } 
     
 
}
 
function select_btn(){

    for(let i = 0; i < btn.length; i++){
        btn[i].classList.remove('bg')
        i == current_slide?  btn[i].classList.add('bg') : null
    }
    
     
}
 