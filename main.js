//adicione o evento "scroll" adicionando listener "onScroll" na janela (ao em vez de colocar no body) quando EU rolar o scroll
window.addEventListener('scroll', onScroll)

//quando carregar a página, acione onScroll
onScroll()

//gerencia scrolls da página
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(curiosidades)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}



//const = cada posição do scroll é modificada. Com VAR seria um valor fixo pra scrollY (substituir var por LET)
function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    //quais dados vou precisar? TOPO 

    //o topo da seção
    const sectionTop = section.offsetTop

    //a altura da seção
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // console.log('O topo da seção chegou ou ultrapassou a linha?', sectionTopReachOrPassedTargetLine)

    //verificar se a base está abaixo na linha alvo
    //quais dados? 
    
    //onde a seção termina 
    const sectionEndAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    // console.log('O final da seção chegou ou ultrapassou a linha?', sectionEndPassedTargetLine)


    //limites da seção
    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


//mostrar navigation ao fazer scroll
function showNavOnScroll() {
    var navigation = document.getElementById("navigation");
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

//mostrar botão de voltar para cima ao fazer scroll
function showBackToTopButtonOnScroll() {
    var backToTopButton = document.getElementById("backToTopButton");
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#curiosidades,
#curiosidades header,
#curiosidades cards,
#curiosidades card,
#about,
#about .content,
#contact,
#contact ul li,
#contact .content,
#personagens,
#personagens cards,
#personagens card`);

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}