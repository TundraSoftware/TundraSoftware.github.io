const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%, #fff 100%)';
        body.style.color = 'var(--bs-nero1)';
        body.style.transition = '0.5s';
    }else{
        body.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%, #000 100%)';
        body.style.color = 'var(--bs-bianco1)';
        body.style.transition = '0.5s';
    }
});