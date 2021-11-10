//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

var MiPerfil = {}

var datos = JSON.parse(localStorage.getItem("MiPerfil"));

  if (datos) {
    document.getElementById("perfil_nombre").value = datos.nombre;
    document.getElementById("perfil_apellido").value = datos.apellido;
    document.getElementById("edad").value = datos.edad;
    document.getElementById("correo").value = datos.correo;
    document.getElementById("telefono_contacto").value = datos.telefono;
  }

  function SalvarPerfil(){

    MiPerfil.nombre = document.getElementById("perfil_nombre").value;
    MiPerfil.apellido= document.getElementById("perfil_apellido").value;
    MiPerfil.edad = document.getElementById("edad").value;
    MiPerfil.correo = document.getElementById ("correo").value;
    MiPerfil.telefono = document.getElementById("telefono_contacto").value;
  
    localStorage.setItem("MiPerfil", JSON.stringify(MiPerfil));
  }

  document.getElementById("guardar").addEventListener("click",function(e){
    SalvarPerfil()
  })
//En este apartado del codigo adjuntamos la siguiente funcionalidad de codigos para poder cargar la foto de perfil.
  const Imagenactual = localStorage.getItem("fotoperfil");


document.getElementById("pic").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("fotoperfil", reader.result);
    });

    reader.readAsDataURL(this.files[0]);

    location.reload()
});


document.addEventListener("DOMContentLoaded", function (e) {
    if (Imagenactual) {
        document.getElementById("fotomuestra").setAttribute("src", Imagenactual);
        document.getElementById("fotomuestra").style.display = "block";
    }
});