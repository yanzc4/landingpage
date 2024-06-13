const banner = new Swiper('#empresas', {
    slidesPerView: 5,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

//enviar formulario a api
let formulario = document.getElementById('formulario');
let btnFormulario = document.getElementById('btnFormulario');

formulario.addEventListener('submit', async function (e) {
    e.preventDefault();
    btnFormulario.disabled = true;
    btnFormulario.textContent = 'Enviando...';
    let datos = new FormData(formulario);
    //validar que los campos no esten vacios
    if (datos.get('firstName') === '' || datos.get('lastName') === '' || datos.get('email') === '' || datos.get('phone') === '' || datos.get('message') === '') {
        Swal.fire("Advertencia", "Todos los campos son obligatorios", "warning");
        btnFormulario.disabled = false;
        btnFormulario.textContent = 'Enviar';
        return;
    }

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzBSpdhxZVbXPtpQaW5RhKAtd1IgQ4hznMR2PtnYiZphvNhF96i4aA81QeaftMjOCOg7g/exec', {
            method: 'POST',
            body: datos
        });

        const data = await response.json();
        formulario.reset();
        btnFormulario.textContent = 'Enviar';
        Swal.fire({
            title: "Mensaje enviado!",
            text: "Gracias por contactarme, te responderé lo más pronto posible!",
            icon: "success"
        });
    } catch (error) {
        console.log(error);
        Swal.fire("Error", "Ocurrió un error al enviar el mensaje, intentelo nuevamente", "error");
    } finally {
        btnFormulario.disabled = false;
    }
});

document.getElementById('formulario').addEventListener('submit', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'formSubmission',
        'formId': 'formulario'
    });
});