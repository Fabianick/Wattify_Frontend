var boton = document.getElementById("suscribirse");
boton.addEventListener("click", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  if (regex.test(email)) {
    Swal.fire({
      icon: "success",
      title: "You have subscribed to our newsletter!",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
      timer: 2000
    }).then(function() {
      document.getElementById("email").value = "";
    });
  } else {
    Swal.fire({
        icon: "error",
        title: "Please enter a valid email address",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
        timer: 2000
      }).then(function() {
      document.getElementById("email").value = "";
    });
  }
});



var mensaje = document.getElementById("mensaje");
mensaje.addEventListener("click", function(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("asunto").value;
  var texto = document.getElementById("texto").value;
  var valido = true;
  var regexNombre = /^[a-záéíóúñ ]+$/i;
  if (!regexNombre.test(nombre) || nombre.length < 3 || nombre.length > 50) {
    valido = false;
  }
  var regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  if (!regexEmail.test(email)) {
    valido = false;
  }
  if (asunto.length < 3){
    valido = false;
  }
  if (texto.length < 3) {
    valido = false;
  }

  if (valido) {
    Swal.fire({
      icon: "success",
      title: "Your message was sent successfully! We will contact you soon",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
      timer: 3000
    }).then(function() {
      var formulario = document.getElementById("formulario");
      formulario.reset();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Please complete all fields correctly",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
      timer: 3000
    });
  }
});


(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });



    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

})(jQuery);
