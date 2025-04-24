let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.caixa-lista .caixa-item')
let indicator = document.querySelector('.caixa-indicadores')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.caixa-lista')

let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1

function setSlider(){
    let itemOld = container.querySelector('.caixa-lista .caixa-item.active')
    itemOld.classList.remove('active')

    
    let dotsOLd = indicator.querySelector('ul li.active')
    dotsOLd.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1)
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    itens[active].classList.add('active')

}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)

    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    itens[active].classList.add('active')
}