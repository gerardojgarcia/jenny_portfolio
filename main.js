const visualEl = document.getElementById('visual')
const chicanoEl = document.getElementById('chicano')
const lacmaEl = document.getElementById('lacma')
const vpamEl = document.getElementById('vpam')
const selfEl = document.getElementById('self')
const uniEl = document.getElementById('uni')
const pccEl = document.getElementById('pcc')
const organicEl = document.getElementById('301')
const puroEl = document.getElementById('puro')
const hundEl = document.getElementById('hundley')





const expChicanoEl = document.getElementById('exp-chicano')
const expLacmaEl = document.getElementById('exp-lacma')
const expVpamEl = document.getElementById('exp-vpam')
const expSelfEl = document.getElementById('exp-self')
const expVisualEl = document.getElementById('exp-visual')
const eduUclaEl = document.getElementById('edu-ucla')
const eduPccEl = document.getElementById('edu-pcc')
const expOrganicEl = document.getElementById('exp-301')
const expPuroEl = document.getElementById('exp-puro')
const expHundEl = document.getElementById('exp-hundley')





chicanoEl.addEventListener('click', () => {
    console.log('chicano')
    expChicanoEl.classList.toggle('exp-display')
    expChicanoEl.style.transitionDuration = "500ms"
    chicanoEl.classList.toggle('selected')

})


visualEl.addEventListener('click', () => {
    console.log('chicano')
    expVisualEl.classList.toggle('exp-display')
    expVisualEl.style.transitionDuration = "500ms"
    visualEl.classList.toggle('selected')
})



lacmaEl.addEventListener('click', () => {
    console.log('chicano')
    expLacmaEl.classList.toggle('exp-display')
    expLacmaEl.style.transitionDuration = "500ms "
    lacmaEl.classList.toggle('selected')
})


vpamEl.addEventListener('click', () => {

    expVpamEl.classList.toggle('exp-display')
    expVpamEl.style.transitionDuration = "500ms "
    vpamEl.classList.toggle('selected')
})


selfEl.addEventListener('click', () => {

    expSelfEl.classList.toggle('exp-display')
    expSelfEl.style.transitionDuration = "500ms "
    selfEl.classList.toggle('selected')
})


uniEl.addEventListener('click', () => {

    eduUclaEl.classList.toggle('exp-display')
    eduUclaEl.style.transitionDuration = "500ms "
    uniEl.classList.toggle('selected')
})


pccEl.addEventListener('click', () => {
    console.log('pcc')
    eduPccEl.classList.toggle('exp-display')
    eduPccEl.style.transitionDuration = "500ms "
    pccEl.classList.toggle('selected')
})


organicEl.addEventListener('click', () => {
    expOrganicEl.classList.toggle('exp-display')
    expOrganicEl.style.transitionDuration = "500ms"
    organicEl.classList.toggle('selected')
})

puroEl.addEventListener('click', () => {

    expPuroEl.classList.toggle('exp-display')
    puroEl.classList.toggle('selected')

})

hundEl.addEventListener('click', () => {

    expHundEl.classList.toggle('exp-display')
    hundEl.classList.toggle('selected')

})



/// Link Color Change on Selection //////////////////////////////////



