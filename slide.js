const slides = document.querySelectorAll(".slide")

slides.forEach((slide) =>{
    slide.addEventListener('click', () => {
        back()
        slide.classList.add('active')
    })
})
 
function back(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}
