// Cuando el usuario visita por primera vez
document.addEventListener('DOMContentLoaded', function() {
    const chooseThemeScreen = document.getElementById('chooseTheme');
    const portfolio = document.getElementById('portfolio');
  
    // Si es la primera vez que se visita, mostrar la pantalla de elección
    if (!localStorage.getItem('themeChosen')) {
      chooseThemeScreen.style.display = 'flex';
    } else {
      // Si ya se eligió el tema, aplicar el fondo correspondiente
      const theme = localStorage.getItem('themeChosen');
      applyTheme(theme);
    }
  
    // Función para cambiar a la pastilla roja (Matrix)
    function chooseRed() {
      localStorage.setItem('themeChosen', 'matrix');
      applyTheme('matrix');
      chooseThemeScreen.style.display = 'none';
    }
  
    // Función para cambiar a la pastilla azul (Normal)
    function chooseBlue() {
      localStorage.setItem('themeChosen', 'normal');
      applyTheme('normal');
      chooseThemeScreen.style.display = 'none';
    }
  
    // Función para aplicar el tema seleccionado
    function applyTheme(theme) {
      if (theme === 'matrix') {
        portfolio.classList.add('matrix-theme');
        portfolio.classList.remove('normal-theme');
      } else {
        portfolio.classList.add('normal-theme');
        portfolio.classList.remove('matrix-theme');
      }
    }
  
    // Función para alternar el tema con el botón
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
      const currentTheme = portfolio.classList.contains('normal-theme') ? 'normal' : 'matrix';
      if (currentTheme === 'normal') {
        applyTheme('matrix');
      } else {
        applyTheme('normal');
      }
    });
  });
  