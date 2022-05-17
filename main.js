window,addEventListener('scroll', onScroll) // função que ta ouvindo o envento , ao iniciar a pagina eu preciso executar o evento uma vez para evitar erros no scroll.. sendo assim tirado do HTML body a função onscroll="onScroll()"

onScroll()


function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section){
  const targetLine= scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados eu vou precisar?

  // usar Console.log(home.offsetTop) para descubrir onde começa cada secção. 

  // o topo da seção
  const sectionTop = section.offsetTop

  //a altura da seção
  const sectionHeight= section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  // verificar se a base esta abaixo da linha alvo
  // quais dados vou precisar?

  //a seção termina onde

  const sectionEndsAt = sectionTop + sectionHeight
  
  // O Final da seção passou da linha alvo?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  
// Informações
// console.log('o topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  // Limites da seção

  const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine // ! na frente da constante nega a expressão

  // pegar os menus
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
}

 








function showNavOnScroll() {
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){

  if(scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: top,
  ditance: '35px',
  duration: 900,
}).reveal(
`#home, 
#home img,
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);

