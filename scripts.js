 /* ************************************* Menu *************************************** */ 
(()=>{
    const $btnMenu = document.querySelector('.btn-menu');
    const $panelMenu = document.querySelector('.panel-menu');

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
    });
})();

/* ************************************** Modal - About ******************************************* */
(()=>{
    const $techIcons = document.querySelectorAll('.tech-icons i');
    const $modalContainer = document.querySelector('#about .modal-container');
    const $modal = document.querySelector('#about .modal');
    const $modalContent = document.querySelector('#about .modal .content');
    
    $techIcons.forEach((el)=>{
        el.addEventListener('click',()=>{
            // console.log(el);
            $modalContainer.style.visibility = 'visible';
            $modal.classList.remove('modal-close');

            /* Añadira "dinamicamente" el contenido al modal dependiendo
                de la tecnologia a la cual se haga click */

            /* Quizas manejar con un switch case sea mejor?
                hacer la prueba y ver cual agrada mas */
            if(el.classList.contains('html')){
                $modalContent.innerHTML = `
                    <p>A nivel intermedio; me hace falta leer más y aplicar mucho más los conceptos sobre SEO pero no soy ajeno a ellos.</p>
                    <p>Principalmente me hacen falta más proyectos donde aplicarlos.</p>
                    <i class='fab fa-html5 fa-2x'></i>
                `;
            }
            else if(el.classList.contains('css')){
                $modalContent.innerHTML = `
                    <p>Entre un intermedio y avanzado. Manejo aceptable de la <i>grid</i> y <i>flexbox</i>; igualmente de pseudo clases, no mucho trasteo con los pseudo elementos <code>::after</code> ni <code>::before</code>.</p>
                    <p>Y en cuanto animaciones, puedo realizar sencillas pero realmente no suelo utilizarlas y en caso de hacerlo de forma muy especifica, suelo guiarme de otros ejemplos en la web o usar alguna librería.</p>
                    <i class='fab fa-css3-alt fa-2x'></i>
                `;
            }
            else if(el.classList.contains('javascript')){
                $modalContent.innerHTML = `
                    <p>Intermedio a varios pasos de avanzado con mucho por aprender y practicar aún. Conozco sobre el manejo de API's y uso de AJAX; de igual manera del trabajo con módulos, aunque en este proyecto tan pequeño solo trabajé con funciones anónimas auto ejecutables.</p>
                    <p>En cuanto a <i>frameworks</i>, crudo. Me he leído la documentación de React por lo que conozco la manera de crear y manejar componentes pero aún me falta práctica para poder añadirlo como conocimiento adquirido y manejado.</p>
                    <i class='fab fa-js fa-2x'></i>
                `;
            }
            else if(el.classList.contains('github')){
                $modalContent.innerHTML = `
                    <p>Conocimiento sumamente básico realmente. El uso de GIT lo suelo limitar al <i>backup</i> del código y nombrar cada modificación de forma descriptiva para llevar el seguimiento de lo que se hizo en cada caso.</p>
                    <i class='fab fa-github fa-2x'></i>
                `;
            }
            else if(el.classList.contains('php')){
                $modalContent.innerHTML = `
                    <p>Básico. El mini proyecto de "promoeventos" fue trabajado con PHP. Puedo realizar todas las operaciones de un CRUD con PHP, evitar inyecciones de datos y demás operaciones enfocadas al <i>Front</i>.</p>
                    <p>Un poco falto de práctica pero conozco lo suficiente de la base del lenguaje para entender el codigo y trabajarlo.</p>
                    <i class='fab fa-php fa-2x'></i>
                `;
            }
            else if(el.classList.contains('bbdd')){
                $modalContent.innerHTML = `
                    <p>SQL Básico. Junto a PHP lo utilicé en el ejemplo de "promoeventos". La base de datos usada en él fue la de MySQL por lo cúal he leído y de igual manera manejo lo básico del lenguaje SQL.</p>
                    <p>Por tanto, conocimientos para realizar consultas, modificaciones e inserción de datos. No muy experto ni de cerca en cuanto a trabajar con conjunciones de tablas por lo que me suele tomar un poco más de tiempo. De igual manera, al momento, un poco falto de práctica.</p>
                    <i class='fas fa-database fa-2x'></i>
                `;
            }
            else if(el.classList.contains('bootstrap')){
                $modalContent.innerHTML = `
                    <p>Entre básico e intermedio. Debido a que suelo trabajar con <i>vanilla</i> CSS a manera de práctica.</p>
                    <p>Aún así, y debido a esto, no soy ajeno al uso de la librería. En el ejemplo de "promoeventos" me serví bastante de esta y debido a eso conozco bastante bien su funcionamiento y cómo utilizarlo y modificar de forma sencilla según requiera.</p>
                    <i class='fab fa-bootstrap fa-2x'></i>
                `;
            }
        
        /* Evento añadido a la tecla Escape para cerrar la ventana modal una vez abierta,
            en caso que la tecla no sea Escape ignora el comportamiento por defecto de esta
            para evitar interacciones no deseadas  */
        document.addEventListener('keydown',(e)=>{
            // console.log(e)
            if(!(e.key == 'Escape')){
                e.preventDefault();
            } else if(e.key == 'Escape'){
                $modalContainer.style.visibility = 'hidden';
                $modal.classList.add('modal-close');
                $modalContent.innerHTML = "";
            }
        })
        });
    });

    document.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.matches('.close-btn') || e.target.matches('.modal-container')){
            // console.log('matches')
            $modalContainer.style.visibility = 'hidden';
            $modal.classList.add('modal-close');
            $modalContent.innerHTML = "";
        }
    });
    
})();

/* ************************************** Contact Form Validation ******************************************* */
(() =>{
    const $form = document.getElementById('contact-form');
    const $inputs = document.querySelectorAll('#contact-form .form-group [required]');
    const $submitBtn = document.querySelector(".submit-btn");

    $inputs.forEach((el) => {
        const $span = document.createElement('span');

        $span.id = el.name;
        $span.textContent = el.title;
        $span.classList.add('contact-form-error','no-display');
        el.insertAdjacentElement('afterend',$span);
        // console.log(el.validationMessage)
    });
    
    document.addEventListener('DOMContentLoaded',(e) => {
        /* Validacion de entrada en inputs */
        document.addEventListener('keyup', (e) => {
            if (e.target.matches('#contact-form .form-group [required]')) {
                let $input = e.target;
                    // pattern = $input.pattern || $input.dataset.pattern,
                    // regexp = new RegExp(pattern);
                
                if ($input.validity.patternMismatch || $input.value == "") {
                    document.getElementById($input.name).classList.add('active');
                    $input.classList.add('error');
                } else {
                    document.getElementById($input.name).classList.remove('active');
                    $input.classList.remove('error');
                    /* CON ESTO SE ARREGLA EN FIREFOX QUE SIEMPRE SE VALIDA FALSO
                        SI YA HABIAS ASIGNADO OTRO VALOR A setCustomValidity() */
                    // $input.setCustomValidity('');
                }
            }
        });
        /* Validacion de campos frente a eventos de focus */
        document.addEventListener('focusin', (e) =>{
            if (e.target.matches('#contact-form .form-group [required]')){
                let $input = e.target;
                document.getElementById($input.name).classList.remove('active');
                $input.classList.remove('error');
            }
        });
        document.addEventListener('focusout', (e) => {
            if (e.target.matches('#contact-form .form-group [required]')) {
                let $input = e.target;
                if ($input.validity.patternMismatch || $input.value == "") {
                    document.getElementById($input.name).classList.add('active');
                    $input.classList.add('error');
                } else {
                    document.getElementById($input.name).classList.remove('active');
                    $input.classList.remove('error');
                }
            }
        });
    }); 

    document.addEventListener('submit', (e) => {
        e.preventDefault();
        const $loader = document.querySelector('.contact-form-loader'),
            $response = document.querySelector('.contact-form-response');

        $loader.classList.remove('no-display');

        if(!$form.checkValidity()){
            $inputs.forEach((el)=>{
                if(!el.validity.valid){
                    el.classList.add('error');
                    document.getElementById(el.name).classList.add('active');
                }
            })

            $response.innerHTML = `
            <h3>Revisa que todos los datos ingresados sean validos</h3>`;
            $submitBtn.setAttribute('disabled','true');

            setTimeout(() => {
                $loader.classList.add('no-display');
                $response.classList.remove('no-display');
            }, 1000);

            setTimeout(() => {
                $response.classList.add('no-display');
                $submitBtn.removeAttribute('disabled');
                $response.innerHTML = "";
            }, 5000);

        }else{
            console.log('enviando');
            fetch("https://formsubmit.co/ajax/reynersoto10@gmail.com", {
                method: "POST",
                body: new FormData($form)
            })
                .then((res) =>
                    res.ok
                        ? res.json()
                        : Promise.reject(res)
                )
                .then((json) => {
                    console.log(json);
                    $loader.classList.add('no-display');
                    $response.classList.remove('no-display');
                    $response.innerHTML = `
            <p>Mensaje enviado, gracias</p>`;
                    $form.reset();
                })
                .catch((err) => {
                    console.log(err);
                    let message = err.statusText || 'Ocurrio un error, intenta enviar nuevamente. Gracias';
                    $response.innerHTML = `
            <p>Error ${err.status}: ${message}</p>`
                })
                .finally(() => {
                    setTimeout(() => {
                        $response.classList.add('no-display');
                        $response.innerHTML = "";
                    }, 3000);
                });
        }
    })

})();

/* ************************************** Modal - Card ******************************************* */
(()=>{
    const $modalContainer = document.querySelector('#projects .modal-container');
    const $modal = document.querySelector('#projects .modal-image');

    document.addEventListener('click',(e)=>{
        if(e.target.matches('.card .card-image img')){   
            $modalContainer.style.visibility = 'visible';
            $modal.classList.remove('modal-close');

            /* CERRAR EL MODAL CON LA TECLA ESCAPE */
            document.addEventListener('keydown', (e) => {
                // console.log(e)
                if (!(e.key == 'Escape')) {
                    e.preventDefault();
                } else if (e.key == 'Escape') {
                    $modalContainer.style.visibility = 'hidden';
                    $modal.classList.add('modal-close');
                }
            });
        }
    })

    /* CERRAR EL MODAL CON EL CLICK AL ICONO DE CERRAR O AL HACER CLICK FUERA DEL CONTENIDO */
    document.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.matches('.close-btn') || e.target.matches('.modal-container')) {
            // console.log('matches')
            $modalContainer.style.visibility = 'hidden';
            $modal.classList.add('modal-close');
        }
    });
})();

/* ************************************** Carousel ******************************************* */
(()=>{
    const $images = document.querySelectorAll('#projects .content-image img');
    const $prevBtn = document.querySelector('.prev-btn');
    const $nextBtn = document.querySelector('.next-btn');
    const $imageInfo = document.querySelector('#projects .content-image .image-info p');

    let i = 0;
    
    $imageInfo.textContent = `${$images[i].title}`;

    // IMAGEN ANTEROR AL HACER CLICK AL BOTON DE ANTERIOR
    $prevBtn.addEventListener('click',(e)=>{
        $images[i].classList.remove('active-image');
        $images[i].classList.add('inactive-image');
        $imageInfo.textContent = "";
        i--;

        if(i < 0){
            i = $images.length - 1;
        };
    
        $images[i].classList.remove('inactive-image');
        $images[i].classList.add('active-image');
        $imageInfo.textContent = `${$images[i].title}`;
    });
    // IMAGEN ANTERIOR CON TECLA DE LA FLECHA IZQUIERDA 
    document.addEventListener('keydown',(e)=>{
        if(e.key == 'ArrowLeft'){
            $images[i].classList.remove('active-image');
            $images[i].classList.add('inactive-image');
            $imageInfo.textContent = "";
            i--;
            
            if (i < 0) {
                i = $images.length - 1;
            };
            
            $images[i].classList.remove('inactive-image');
            $images[i].classList.add('active-image');
            $imageInfo.textContent = `${$images[i].title}`;
        }
    });
    // IMAGEN SIGUIENTE AL HACER CLICK AL BOTON DE SIGUIENTE
    $nextBtn.addEventListener('click',(e)=>{
    $images[i].classList.remove('active-image');
        $images[i].classList.add('inactive-image');
        $imageInfo.textContent = "";
        i++;

        if(i >= $images.length){
            i = 0;
        };
    
        $images[i].classList.remove('inactive-image');
        $images[i].classList.add('active-image');
        $imageInfo.textContent = `${$images[i].title}`;
    });
    // IMAGEN SIGUIENTE AL PRESIONAR LA TECLA DE LA FLECHA DERECHA
    document.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowRight') {
            $images[i].classList.remove('active-image');
            $images[i].classList.add('inactive-image');
            $imageInfo.textContent = "";
            i++;

            if (i >= $images.length) {
                i = 0;
            };

            $images[i].classList.remove('inactive-image');
            $images[i].classList.add('active-image');
            $imageInfo.textContent = `${$images[i].title}`;
        }
    });
})();