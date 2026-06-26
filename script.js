const botaoMenu = document.getElementById('menu');
const slidebar = document.getElementById('slidebar');
const linksMenu = document.querySelectorAll('.navbar a');

if (localStorage.getItem('sidebarStatus') === 'aberto') {
    slidebar.classList.add('active');
}

botaoMenu.addEventListener('click', () => {
    slidebar.classList.toggle('active');
    if (slidebar.classList.contains('active')) {
        localStorage.setItem('sidebarStatus', 'aberto');
    } else {
        localStorage.setItem('sidebarStatus', 'fechado');
    }
});

linksMenu.forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
        link.classList.add('ativo');
    }
});

function RelogioHora() {
    const Relogio = document.getElementById('hora');
    const agora = new Date(); 
    Relogio.innerText = agora.toLocaleTimeString('pt-BR');
}

RelogioHora();
setInterval(RelogioHora, 1000);