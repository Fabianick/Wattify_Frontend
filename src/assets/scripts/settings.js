$(document).ready(function() {
  $('.profile-tab-nav .nav-link').on('click', function (e) {
    e.preventDefault();
    $('.profile-tab-nav .nav-link').removeClass('active');
    $(this).addClass('active');
    
    var target = $(this).attr('href');
    
    $('.tab-pane').removeClass('show active');
    $(target).addClass('show active');
  });
});

var boton = document.getElementById("guardargeneral"); 
guardargeneral.addEventListener("click", function(event) {
Swal.fire({
    icon: "success",
    title: "Your information was updated successfully",
    timerProgressBar: true,
    confirmButtonColor: "#ffb703",
    timer: 2000 
  })
});

var boton = document.getElementById("guardarseguridad"); 
guardarseguridad.addEventListener("click", function(event) {
Swal.fire({
    icon: "success",
    title: "Your information was updated successfully",
    timerProgressBar: true,
    confirmButtonColor: "#ffb703",
    timer: 2000 
  })
});

var boton = document.getElementById("guardarpago"); 
guardarpago.addEventListener("click", function(event) {
Swal.fire({
    icon: "success",
    title: "Your information was updated successfully",
    timerProgressBar: true,
    confirmButtonColor: "#ffb703",
    timer: 2000 
  })
});

var boton = document.getElementById("guardardispositivo"); 
guardardispositivo.addEventListener("click", function(event) {
Swal.fire({
    icon: "success",
    title: "Your information was updated successfully",
    timerProgressBar: true,
    confirmButtonColor: "#ffb703",
    timer: 2000 
  })
});

var boton = document.getElementById("guardarnotificacion"); 
guardarnotificacion.addEventListener("click", function(event) {
Swal.fire({
    icon: "success",
    title: "Your information was updated successfully",
    timerProgressBar: true,
    confirmButtonColor: "#ffb703",
    timer: 2000 
  })
});

