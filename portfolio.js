const photoEl = document.getElementById('photo-element')
const photoCard = document.getElementById('photo-box')



photoEl.addEventListener('click', () => {

    console.log('photo card clicked')
    photoCard.classList.toggle('flex')
    photoCard.classList.toggle('scale')
    photoCard.classList.toggle('visibility')
    





})

const illEl = document.getElementById('ill-element')

const illBox = document.getElementById('ill-box')
const illustrationImgCardEl = document.getElementsByClassName('.illustration-img-card')


illEl.addEventListener('click', () => {

    illBox.classList.toggle('flex')
    illBox.classList.toggle('scale')



})

