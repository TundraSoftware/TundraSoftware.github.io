//DARKMODE TOGGLE

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%, #fff 100%)';
        body.style.color = 'var(--bs-nero1)';
        body.style.transition = '0.5s';
    }else{
        body.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%, #000 100%)';
        body.style.color = 'var(--bs-bianco1)';
        body.style.transition = '0.5s';
    }
});

//ACTIVE TOGGLE
const activeLink=document.querySelectorAll('.navbar-item-color');
for(let clickTab of activeLink){  
  clickTab.onclick=function(){
    let activeClass=document.querySelectorAll('.active');
      activeClass[0].classList.remove('active')
      clickTab.classList.add('active'); 
  }  
}
