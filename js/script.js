document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.enlace_mobile'); // Todos los enlaces del navbar
    const sections = []; // Array para almacenar las secciones

    // Obtener todas las secciones por sus identificadores
    navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href')); // Obtener la sección por el href
        if (section) {
            sections.push({
                link: link,
                section: section,
                offsetTop: section.offsetTop, // Ubicación de la sección en la página
            });
        }
    });

    // Función para actualizar el enlace activo según la posición de desplazamiento
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 10; // Compensar ligeramente el desplazamiento

        sections.forEach((sectionObj) => {
            if (
                scrollPosition >= sectionObj.offsetTop &&
                scrollPosition <
                    sectionObj.offsetTop + sectionObj.section.offsetHeight
            ) {
                // Si el usuario está en esta sección, activa el enlace correspondiente
                sectionObj.link.classList.add('activado');
            } else {
                // Si no, elimina la clase 'active'
                sectionObj.link.classList.remove('activado');
            }
        });
    }

    // Escuchar el evento de desplazamiento
    window.addEventListener('scroll', updateActiveLink);

    // Inicializa para establecer el enlace activo cuando se carga la página
    updateActiveLink();
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(
        '#mainHeader .block.md\\:hidden button'
    );
    const header = document.querySelector('#mainHeader');

    button.addEventListener('click', function () {
        header.classList.toggle('open');
    });
});

// Obtén el encabezado
const mainHeader = document.getElementById('mainHeader');

// Escucha el evento de desplazamiento
window.addEventListener('scroll', function () {
    // Determina la posición de desplazamiento
    if (window.scrollY > 0) {
        // Cuando se desplaza hacia abajo, aplica la clase de encabezado desplazado
        mainHeader.classList.add('header-scrolled');
        mainHeader.classList.remove('header-top');
    } else {
        // Cuando está en la parte superior, aplica la clase de encabezado superior
        mainHeader.classList.remove('header-scrolled');
        mainHeader.classList.add('header-top');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const bars = document.querySelectorAll('.bar');

    function toggleMenu() {
        // Alternar la clase 'open' para cambiar entre el ícono de hamburguesa y la "X"
        menuBtn.classList.toggle('open');

        // Alternar las clases 'open' en los spans para formar la "X"
        bars.forEach((bar, index) => {
            bar.classList.toggle(`open-${index + 1}`);
            bar.classList.toggle('x-color');
        });

        // Alternar la clase 'active' para mostrar u ocultar el menú
        menu.classList.toggle('active');
    }

    function closeMenu() {
        menuBtn.classList.remove('open');
        bars.forEach((bar, index) => {
            bar.classList.remove(`open-${index + 1}`);
            bar.classList.remove('x-color');
        });
        menu.classList.remove('active');
    }

    menuBtn.addEventListener('click', function () {
        toggleMenu();
    });

    // Evento para cerrar el menú cuando el usuario hace scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const headerHeight =
            document.querySelector('header')?.offsetHeight || 0;

        if (scrollPosition > headerHeight) {
            bars.forEach((bar) => bar.classList.add('scrolled'));
        } else {
            bars.forEach((bar) => bar.classList.remove('scrolled'));
        }

        if (scrollPosition > 0) {
            closeMenu();
        }
    });

    // Manejar el cambio de tamaño de la pantalla
    window.addEventListener('resize', function () {
        const screenWidth =
            window.innerWidth || document.documentElement.clientWidth;
        const isMobile = screenWidth <= 768;

        if (!isMobile) {
            closeMenu();
        }
    });
});
