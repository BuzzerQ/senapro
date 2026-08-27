const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = 'assets/images/iconsena.png'; // arahkan ke path logo kamu
document.head.appendChild(favicon);


// --- LOGIKA TEMA (DARK / LIGHT MODE) ---
function updateThemeIcons(isDark) {
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    if (isDark) {
      icon.className = 'fas fa-moon text-amber-400 text-sm theme-icon transition-transform duration-300';
    } else {
      icon.className = 'fas fa-sun text-amber-500 text-sm theme-icon transition-transform duration-300';
    }
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Animasi putar ikon
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    icon.style.transform = 'rotate(360deg)';
    setTimeout(() => { icon.style.transform = 'rotate(0deg)'; }, 300);
  });

  updateThemeIcons(isDark);
}

// Inisialisasi ikon tema saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  const isDark = document.documentElement.classList.contains('dark');
  updateThemeIcons(isDark);
});

// Toggle Hamburger Menu (Mobile)
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}