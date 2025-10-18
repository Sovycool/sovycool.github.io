
export default function BurgerMenu() {
    const btn   = document.getElementById('burgerBtn');
    const menu  = document.getElementById('mobileMenu');
    const openI = document.getElementById('burgerIcon');
    const closeI= document.getElementById('closeIcon');

    function openMenu() {
    menu.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
    menu.classList.add('opacity-100', 'scale-100');
    btn.setAttribute('aria-expanded', 'true');
    openI.classList.add('hidden');
    closeI.classList.remove('hidden');
    }
    function closeMenu() {
    menu.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
    menu.classList.remove('opacity-100', 'scale-100');
    btn.setAttribute('aria-expanded', 'false');
    openI.classList.remove('hidden');
    closeI.classList.add('hidden');
    }
    function toggleMenu() {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
    }

    btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
    });

    // Ferme en cliquant à l’extérieur
    document.addEventListener('click', (e) => {
    const inside = menu.contains(e.target) || btn.contains(e.target);
    if (!inside) closeMenu();
    });

    // Ferme après un clic sur un lien + gère le smooth scroll si activé
    menu.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => {
        closeMenu();
    });
    });

    // Accessibilité: fermer avec Échap
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
    });
}