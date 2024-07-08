// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Message sent!');
//   });


 // set the speed of the animation
 const speed = 1000; // change this value as per your requirement

 // animate the left property of each child div
 const childDivs = document.querySelectorAll('.child');
 childDivs.forEach(div => {
   div.style.left = `${Math.random() * 100}px`; // randomize the x-position of 
   div.animate({ 'left': `-${speed}px` }, speed); // animate the left property 
 });


 const projects = document.querySelectorAll('.project');

//  projects.forEach(div => {
//    div.onclick = navigate;
//  });
 
//  function navigate() {
//    window.location.href = 'pages/product1.html';
//  }
 

 function goTo(file) {
  window.location.href = 'pages/'+file;
 }


//  Hamburger

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
  document.querySelectorAll('.bar').forEach(bar => bar.classList.toggle('change'));
});


function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
}

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

