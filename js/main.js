(() => {
  const navMenu = document.querySelector('.menu');
  const mainContent = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  const toggleMenuButton = document.querySelector('.toggle-menu');
  const closeMenuButton = document.querySelector('.close-menu');
  const scrollToTopButton = document.querySelector('.btn-stt');
  const menuItems = document.querySelectorAll('.menu-item');

  const toggleMenu = () => {
    navMenu.classList.toggle('show');
    mainContent.classList.toggle('blur');
    footer.classList.toggle('blur');
  };

  const disposeMenu = () => {
    navMenu.classList.remove('show');
    mainContent.classList.remove('blur');
    footer.classList.remove('blur');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  toggleMenuButton.addEventListener('click', toggleMenu);
  closeMenuButton.addEventListener('click', toggleMenu);
  scrollToTopButton.addEventListener('click', scrollToTop);
  menuItems.forEach((item) => {
    item.addEventListener('click', disposeMenu);
  });
})();
