
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 500,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2.9,
              "opacity_min": 1,
              "sync": false
            }
          },
          "size": {
            "value": 12,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 0,
            "color": "#ffffff",
            "opacity": 0.8,
            "width": 1.3
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 0,
              "rotateY": 0
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 6
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "",
          "background_image url": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );

});

document.addEventListener("DOMContentLoaded", function(e){

});


function almacenarUsuario () {
  let usuario = document.getElementById("user").value;
  let contraseña = document.getElementById("pass").value;
if (usuario ==="") {
  alert ("Completar Usuario")
  return false;
}
else if (contraseña==="") {
  alert ("Completar Contraseña")
  return false;
}
else {
  localStorage.setItem("GuardarUsuario", usuario);
  return true;
}
};