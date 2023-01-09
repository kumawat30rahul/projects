let clouds = document.getElementById('clouds')
let mountain = document.getElementById('mountain')
let rock = document.getElementById('rock')
let mud = document.getElementById('mud')
let tent1 = document.getElementById('tent1')
let tent2 = document.getElementById('tent2')
let fire = document.getElementById('fire')
let fronttree = document.getElementById('front-tree')

window.addEventListener('scroll',
    function(){
        let value = window.scrollY

        clouds.style.left = -value * 1 + 'px';
        mountain.style.top = value * 0.1 + 'px';
        rock.style.top = value * 0.3 +'px'
        mud.style.transform = `scale(${1 - value * 0.0001})`;
        mud.style.top = value * 0.1 + 'px';
        tent1.style.left = value * 0.5 +'px';
        tent2.style.left = -value * 0.5 +'px';
        fire.style.opacity = 1 - value * 0.003;
        fire.style.top = value * 0.1 + 'px';

        window.requestAnimationFrame(updatePositions);

        window.scrollTo({
            top: 100,
            left: 0,
            behavior: 'smooth'
          });
    }
)
window.requestAnimationFrame(updatePositions);
