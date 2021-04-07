const navSlide = () => {
    const navButton = document.querySelector('nav-Bar__nav-button');
    const nav = document.querySelector('nav-Bar__nav-linksContainer');
    const navLinks = document.querySelectorAll('nav-Bar__link')

    
    navButton.addEventListener('click',()=>{
        //Activador de la barra de navegacion
        nav.classList.toggle('nav-active')

        //Animacion de los Links de la barra
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation= `navShowIn 0.5s ease forwards ${index/7+0.35}s`;    
            }
        });

        //Animacion del navButton
        navButton.classList.toggle('navButtonAnim');
    });

    

}


navSlide();