window.addEventListener('scroll', function() {
    const header = document.getElementById('title-page');
    const placeholder = document.getElementById('placeholder');
    const title = document.getElementById('main-title')
    /*
    if (window.scrollY > 80) {
        title.style.transform = "scale("+Math.max(0.2, (1-window.scrollY))+")";
    }*/
    const start = 2000;
    const end = 200;
    const isStuck = header.offsetTop !== header.getBoundingClientRect().top;
    
    title.style.transform = "scale("+Math.min(1, Math.max(0.5, (start-window.scrollY)/end))+")";

    /*
    if (window.scrollY > 80) {
        header.classList.add('fixed-title');
        placeholder.style.display = 'block';
    } else {
        header.classList.remove('fixed-title');
        placeholder.style.display = 'none';
    }*/
});