const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//maquina de escrever
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
        console.log
    }, 200))
}

// função que cria a animação

function typeWriter(elemento) {

    const textoArray = elemento.innerHTML.split('');


    //limpar
    elemento.innerHTML = '';


    //forEach -> para cada

    // i -> index, onde cada letra se encontra
    textoArray.forEach((letra, i) => { // seria a mesma coisa que criar: textoArray.forEach(function(letra,i))
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}


// variável constante, pois ela não irá mudar.
const titulo = document.querySelector('h1');

//ativar a função
typeWriter(titulo);