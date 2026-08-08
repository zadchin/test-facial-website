const WA_NUMBER = '60136839993';
const defaultMessage = "Hi Celebrity Beauté! I'd like to book a facial. Could you share your availability, please?";

function whatsappUrl(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  link.href = whatsappUrl(defaultMessage);
});

document.querySelectorAll('.ritual-book').forEach((link) => {
  const treatment = link.dataset.treatment;
  const duration = link.dataset.duration;
  link.href = whatsappUrl(`Hi Celebrity Beauté! I'd like to book the ${treatment} (${duration}). Could you share your availability, please?`);
  link.target = '_blank';
  link.rel = 'noopener';
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const filmPlayer = document.querySelector('.film-player');
const filmButton = filmPlayer?.querySelector('.film-play');

filmButton?.addEventListener('click', () => {
  if (filmPlayer.querySelector('iframe')) return;

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${filmPlayer.dataset.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  iframe.title = 'Celebrity Beauté new salon film';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  filmPlayer.appendChild(iframe);
});
