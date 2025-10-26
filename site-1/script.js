function titleIsStuck(){
    const title = document.getElementById('main-title');
    return parseInt(window.getComputedStyle(title).top) >= title.getBoundingClientRect().top;
}

window.addEventListener('scroll', function() {
    const title = document.getElementById('main-title');
    if (titleIsStuck()) {
        title.classList.add('fixed-title');
    } else {
        title.classList.remove('fixed-title');
    }
});

document.getElementById('main-title-text').addEventListener("click", toTop);

function toTop(){
    if (titleIsStuck()){
        window.scrollTo(0, 0);
    }
    
}