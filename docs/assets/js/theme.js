// ========================================
// THEME TOGGLE
// ========================================
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Transition fluide
  html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  
  // Changer l'icône avec animation
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.style.transform = 'rotate(360deg) scale(0)';
    setTimeout(() => {
      themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      themeIcon.style.transform = 'rotate(0deg) scale(1)';
    }, 150);
  }
  
  // Animation du bouton
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.style.background = newTheme === 'dark' ? 
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
  }
}

// Charger le thème sauvegardé
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;
  
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    themeIcon.style.transition = 'transform 0.3s ease';
  }
  
  // Style du bouton selon le thème
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.style.background = savedTheme === 'dark' ? 
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
  }
}

// Charger le thème au chargement de la page
document.addEventListener('DOMContentLoaded', loadTheme);

// ========================================
// TERMINAL ANIMATION
// ========================================
function typeTerminal() {
  const terminal = document.getElementById('terminal');
  if (!terminal) return;
  
  const text = "oumar@cyberlab:~$ initializing portfolio... access granted.";
  let i = 0;
  
  terminal.innerHTML = '';
  
  function typeChar() {
    if (i < text.length) {
      terminal.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, 30);
    } else {
      terminal.innerHTML += '<span class="cursor"></span>';
    }
  }
  
  // Délai avant de commencer
  setTimeout(typeChar, 500);
}

// Lancer l'animation au chargement
document.addEventListener('DOMContentLoaded', typeTerminal);

// ========================================
// SMOOTH SCROLL
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ========================================
// ACTIVE LINK HIGHLIGHTING
// ========================================
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Retirer le style précédent
    link.style.color = '';
    link.style.background = '';
    link.style.borderBottom = '';
    
    // Ajouter le style si actif
    if (currentPath === linkPath || 
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.style.color = 'var(--accent-primary)';
      link.style.background = 'var(--bg-card)';
      link.style.borderBottom = '2px solid var(--accent-primary)';
      link.style.fontWeight = '600';
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);

// ========================================
// SCROLL TO TOP BUTTON (BONUS)
// ========================================
function initScrollToTop() {
  // Créer le bouton s'il n'existe pas
  let scrollBtn = document.querySelector('.scroll-to-top');
  if (!scrollBtn) {
    scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollBtn);
  }
  
  // Afficher/cacher selon le scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.pointerEvents = 'auto';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.pointerEvents = 'none';
    }
  });
  
  // Action au clic
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

document.addEventListener('DOMContentLoaded', initScrollToTop);