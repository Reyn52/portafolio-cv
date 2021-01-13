// Menu 
(()=>{
    const $btnMenu = document.querySelector('.btn-menu');
    const $panelMenu = document.querySelector('.panel-menu');
    // const $dropdownLink = document.querySelector('.dropdown-link');
    // const $dropdownItems = document.querySelectorAll('.dropdown-item');
   
    $btnMenu.addEventListener('click',(e)=>{
        $panelMenu.classList.toggle('none');
        setTimeout(() => {
            $btnMenu.firstElementChild.classList.toggle('fa-bars');
            $btnMenu.firstElementChild.classList.toggle('fa-times');
        }, 200);
        
    })

    /* Caso de que se haga click fuera del menu o en los enlaces
        para que el menu no quede abierto  */
    window.addEventListener('click', (e)=> {
        if(window.innerWidth < 992){
            if(!e.target.matches('.btn-menu i')){
                if (!$panelMenu.classList.contains('none')) {
                    $panelMenu.classList.add('none');
                    setTimeout(() => {
                        $btnMenu.firstElementChild.classList.add('fa-bars');
                        $btnMenu.firstElementChild.classList.remove('fa-times');
                    }, 200);
                }
            }
        }
    })
    
    /* Caso de que el tamaño de pantalla al cargar sea igual o superior a 992px
        se elimina la clase que hace invisible los enlaces del menu
        y caso contrario que vuelva a pantallas inferiores, se oculte nuevamente */
    document.addEventListener('DOMContentLoaded', (e)=>{
        if(window.innerWidth >= 992){
            $panelMenu.classList.remove('none');
            /* arreglo para caso de que el menu quede abierto al cambiar tamaño de pantalla con
            icono de la X y sea cambiado de nuevo por las barras  */
            if ($btnMenu.firstElementChild.classList.contains('fa-times')) {
                $btnMenu.firstElementChild.classList.remove('fa-times');
                $btnMenu.firstElementChild.classList.add('fa-bars');
            }
        } else{
            /* caso de que el tamaño de la pantalla sea inferior a 992px, se oculte el menu
            y se cambie el icono del boton */
            $panelMenu.classList.add('none');
            if ($btnMenu.firstElementChild.classList.contains('fa-times')) {
                $btnMenu.firstElementChild.classList.remove('fa-times');
                $btnMenu.firstElementChild.classList.add('fa-bars');
            }
        }
    })
    
    /* Caso de que se redimencione la pantalla y esta sea de tamaño superior o igual a los 992px
        se elimine la clase que hace invisible los enlaces del menu y en caso contrario
        se oculten nuevamente */
    window.addEventListener('resize', (e)=>{
        if(window.innerWidth >= 992) {
            $panelMenu.classList.remove('none');
            /* arreglo para caso de que el menu quede abierto al cambiar tamaño de pantalla con 
            icono de la X y sea cambiado de nuevo por las barras  */
            if ($btnMenu.firstElementChild.classList.contains('fa-times')) {
                setTimeout(() => {
                    $btnMenu.firstElementChild.classList.remove('fa-times');
                    $btnMenu.firstElementChild.classList.add('fa-bars');
                }, 200);
            }
        }else{
            /* caso de que el tamaño de la pantalla sea inferior a 992px, se oculte el menu
            y se cambie el icono del boton */
            $panelMenu.classList.add('none');
            if ($btnMenu.firstElementChild.classList.contains('fa-times')) {
                setTimeout(() => {
                    $btnMenu.firstElementChild.classList.remove('fa-times');
                    $btnMenu.firstElementChild.classList.add('fa-bars');
                }, 200);
            }
        }
    })

/* EN CASO DE TENER DROPDOWN, IDEA DE FUNCIONAMIENTO DE ESTO. PERO ESTE MENU NO TENDRA
    QUEDA DE EJEMPLO DE USO PARA OTRO MENU QUE LO TENGA
    ******************************* BORRAR CUANDO TERMINE ********************************************

    $dropdownLink.addEventListener('mouseenter', (e)=> {
        $dropdownItems.forEach((el)=> {
            console.log(el);
            if(el.classList.contains('none')){
                el.classList.remove('none');
            }
        })
    })
    $dropdownLink.addEventListener('mouseleave', (e)=> {        
        $dropdownItems.forEach((el)=> {
            console.log(el);
            if(!el.classList.contains('none')){
                el.classList.add('none');
            }
        })
    }) */

})();

/* Presentation */

(()=>{
    const $techIcons = document.querySelectorAll('.tech-icons i');
    const $modalContainer = document.querySelector('.modal-container');
    const $modal = document.querySelector('.modal');
    const $modalContent = document.querySelector('.modal .content')

    $techIcons.forEach((el)=>{
        el.addEventListener('click',(e)=>{
            // console.log(el);
            $modalContainer.style.visibility = 'visible';
            $modal.classList.remove('modal-close');

            /* Añadira "dinamicamente" el contenido al modal dependiendo
                de la tecnologia a la cual se haga click */
            if(el.classList.contains('html')){
                console.log('html');
                $modalContent.innerHTML = `
                    <p>Contenido con informacion descriptiva y corta sobre el conocimiento que posea sobre HTML</p>
                    <i class='fab fa-html5 fa-2x'></i>
                `;
            }
            if(el.classList.contains('css')){
                console.log('css');
                $modalContent.innerHTML = `
                    <p>Contenido con informacion descriptiva y corta sobre el conocimiento que posea sobre CSS</p>
                    <i class='fab fa-css3 fa-2x'></i>
                `;
            }
            if(el.classList.contains('javascript')){
                console.log('js'); $modalContent.innerHTML = `
                    <p>Contenido con informacion descriptiva y corta sobre el conocimiento que posea sobre JavaScript</p>
                    <i class='fab fa-js fa-2x'></i>
                `;
            }
            if(el.classList.contains('git')){
                console.log('git');
                $modalContent.innerHTML = `
                    <p>Contenido con informacion descriptiva y corta sobre el conocimiento que posea sobre GIT</p>
                    <i class='fab fa-git fa-2x'></i>
                `;
            }
            if(el.classList.contains('php')){
                console.log('php');
                $modalContent.innerHTML = `
                    <p>Contenido con informacion descriptiva y corta sobre el conocimiento que posea sobre PHP</p>
                    <i class='fab fa-php fa-2x'></i>
                `;
            }
        });
    });

    document.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.matches('.close-btn') || e.target.matches('.modal-container')){
            // console.log('matches')
            $modalContainer.style.visibility = 'hidden';
            $modal.classList.add('modal-close');
        }
    });


})();