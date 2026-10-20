/*
  EASY CUSTOMIZATION:
  1. Place screenshot files inside the images/ folder.
  2. Update image: 'images/your-file.png' for each project.
  3. Update url: 'https://example.com/' to show the Visit Live Website link.
  4. Leave url: '' to hide website links for not-yet-live projects.
  Full-height screenshots are fitted without cropping (object-fit: contain).
*/
const SETTINGS = {
  email: 'gvermarajput4@gmail.com',
  instagram: 'https://instagram.com/'
};

const PROJECTS = [
  { name: 'MOTOBLOX ', category: 'COLLECTIBLE CARS / SHOPIFY',
    description: 'A Shopify storefront for LEGO-style buildable cars, featuring detailed car models, interactive product discovery, and a seamless shopping experience for car enthusiasts and collectors.',
    services: 'Store Design · Theme Customization',
    image: 'motoblox.png', url: 'https://motoblox.com/',
    fallback: 'linear-gradient(135deg,#391615,#ab705d)' },


  { name: 'SHUKRA', category: 'DINNERWARE / SHOPIFY',
    description: 'A wellness storefront with product storytelling and simplified collection navigation.',
    services: 'UI/UX · Shopify Development',
    image: 'shukra.png', url: 'https://shukrahome.in/',
    fallback: 'linear-gradient(135deg,#12312a,#557954)' },


  { name: 'LADY TISARA', category: 'JEWELLERY & ACCESSORIES / SHOPIFY',
    description: 'A refined homeware storefront designed around visual storytelling and an elegant product catalog.',
    services: 'Store Design · Product Pages',
    image: 'Screenshot 2026-10-12 092753.png', url: 'https://ladytisara.com/',
    fallback: 'linear-gradient(135deg,#473126,#94705d)'
   },


  { name: 'BLOCK & BLOOM', category: 'PRINTED TOTE BAGS / SHOPIFY',
    description: 'A minimal technology storefront with clear product hierarchy and a modern shopping flow.',
    services: 'Shopify Theme · Mobile UX',
    image: 'blockbloom.png', url: 'https://www.theblockandbloom.com/',
    fallback: 'linear-gradient(135deg,#4b535e,#1e242b)' },


  { name: 'TOY COLLECTORS INDIA', category: 'HOT WHEELS & COLLECTIBLE CARS / SHOPIFY',
    description: 'A beauty and fragrance ecommerce experience focused on premium photography.',
    services: 'Art Direction · Store Development',
    image: 'tci.png', url: 'https://www.toycollectorsindia.com/',
    fallback: 'linear-gradient(135deg,#341c19,#955d46)' },


  { name: 'JIVITHA CREATIONS', category: 'LIFESTYLE / SHOPIFY',
    description: 'A stylish Shopify storefront showcasing women\'s clothing collections, featuring elegant designs, modern product displays, effortless collection browsing, and a seamless shopping experience for everyday fashion and statement looks.An approachable lifestyle ecommerce site with an easy-to-browse catalog.',
    services: 'UI/UX · Custom Sections',
    image: 'jivitha.png', url: 'https://jivithacreations.com/',
    fallback: 'linear-gradient(135deg,#7c4663,#cc9caf)' }
];

/*
  BRANDS (logo slider):
  - Put logo files in the logos/ folder (transparent PNG or SVG works best).
  - Logos show in white by default to match the dark site.
    Add keepColor: true to any brand to show its original colours.
  - If a logo file is missing, the brand name is shown as text instead.
  - Add or remove as many brands as you like.
*/
const BRANDS = [
  { name: 'Motoblox', logo: 'logos/motoblox.png' },
  { name: 'Shukra', logo: 'logos/shukra.png' },
  { name: 'Lady Tisara', logo: 'logos/ladytisara.png' },
  { name: 'Block & Bloom', logo: 'logos/blockbloom.png' },
  { name: 'Toy Collectors India', logo: 'logos/tci.png' },
  { name: 'Jivitha Creations', logo: 'logos/jivitha.png' },
  { name: 'Brand Seven', logo: 'logos/brand-7.png' },
  { name: 'Brand Eight', logo: 'logos/brand-8.png' }
];

/*
  REELS:
  - Put .mp4 files in the reels/ folder (vertical 9:16, ideally under 10 MB each).
  - poster: optional cover image (.jpg) shown before the video loads.
  - link: optional Instagram reel URL — shows a "View on Instagram" link in the player.
*/
const REELS = [
  { title: 'Product Launch Reel', client: 'Motoblox', category: 'Product Film',
    src: 'reels/reel-1.mp4', poster: 'reels/reel-1.jpg', link: '' },
  { title: 'Festive Collection Drop', client: 'Lady Tisara', category: 'Jewellery',
    src: 'reels/reel-2.mp4', poster: 'reels/reel-2.jpg', link: '' },
  { title: 'Unboxing Edit', client: 'Toy Collectors India', category: 'Collectibles',
    src: 'reels/reel-3.mp4', poster: 'reels/reel-3.jpg', link: '' },
  { title: 'Table Styling Story', client: 'Shukra', category: 'Home & Dining',
    src: 'reels/reel-4.mp4', poster: 'reels/reel-4.jpg', link: '' },
  { title: 'New Arrivals Lookbook', client: 'Jivitha Creations', category: 'Fashion',
    src: 'reels/reel-5.mp4', poster: 'reels/reel-5.jpg', link: '' },
  { title: 'AI Motion Ad', client: 'Block & Bloom', category: 'AI Video',
    src: 'reels/reel-6.mp4', poster: 'reels/reel-6.jpg', link: '' }
];

const pad = n => String(n).padStart(2, '0');

const grid = document.getElementById('projectGrid');
const dialog = document.getElementById('projectDialog');
const dialogClose = document.getElementById('dialogClose');

function projectImage(project) {
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.name} store screenshot`;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.addEventListener('error', () => {
    const message = document.createElement('span');
    message.className = 'image-missing';
    message.textContent = `Add screenshot: ${project.image}`;
    image.replaceWith(message);
  });
  return image;
}
function validWebsite(url) {
  try { const parsed = new URL(url); return parsed.protocol === 'https:' || parsed.protocol === 'http:'; }
  catch { return false; }
}

document.getElementById('projectCount').textContent = `[ SELECTED WORK / ${pad(PROJECTS.length)} ]`;
PROJECTS.forEach((project, index) => {
  const article = document.createElement('article');
  article.className = `project-card${index === 0 ? ' project-featured' : ''}`;
  const button = document.createElement('button');
  button.className = 'project-button';
  button.type = 'button';
  button.setAttribute('aria-label', `View ${project.name} screenshot and project details`);
  const art = document.createElement('div');
  art.className = 'project-art';
  art.style.background = project.fallback || '#191919';
  art.append(projectImage(project));
  const marker = document.createElement('span');
  marker.className = 'project-marker';
  marker.textContent = `${pad(index + 1)} / ${pad(PROJECTS.length)}`;
  const openIcon = document.createElement('span');
  openIcon.className = 'project-open';
  openIcon.setAttribute('aria-hidden', 'true');
  openIcon.textContent = '↗';
  const overlay = document.createElement('span');
  overlay.className = 'project-overlay';
  overlay.textContent = 'VIEW PROJECT   ↗';
  button.append(art, marker, openIcon, overlay);
  button.addEventListener('click', () => openProject(index));
  const info = document.createElement('div');
  info.className = 'project-info';
  const meta = document.createElement('div');
  meta.className = 'project-meta';
  meta.textContent = project.category;
  const titleRow = document.createElement('div');
  titleRow.className = 'project-title-row';
  const title = document.createElement('h3');
  title.textContent = project.name;
  const indicator = document.createElement('span');
  indicator.textContent = '↗';
  indicator.setAttribute('aria-hidden', 'true');
  titleRow.append(title, indicator);
  info.append(meta, titleRow);
  if (index === 0) {
    const desc = document.createElement('p');
    desc.className = 'project-feature-text';
    desc.textContent = project.description;
    info.append(desc);
  }
  if (validWebsite(project.url)) {
    const external = document.createElement('a');
    external.className = 'project-external';
    external.href = project.url;
    external.target = '_blank';
    external.rel = 'noopener noreferrer';
    external.textContent = 'VISIT LIVE WEBSITE ↗';
    external.setAttribute('aria-label', `Visit ${project.name} live website`);
    info.append(external);
  }
  article.append(button, info);
  grid.append(article);
});

function openProject(index) {
  const p = PROJECTS[index];
  const art = document.getElementById('dialogArt');
  art.replaceChildren();
  art.style.background = p.fallback || '#191919';
  art.append(projectImage(p));
  document.getElementById('dialogCategory').textContent = p.category;
  document.getElementById('dialogTitle').textContent = p.name;
  document.getElementById('dialogDescription').textContent = p.description;
  document.getElementById('dialogServices').textContent = p.services;
  const visit = document.getElementById('dialogVisit');
  visit.hidden = !validWebsite(p.url);
  if (!visit.hidden) visit.href = p.url;
  dialog.showModal();
  document.body.classList.add('modal-open');
}
function closeProject() { if (dialog.open) dialog.close(); document.body.classList.remove('modal-open'); }
dialogClose.addEventListener('click', closeProject);
dialog.addEventListener('click', e => { if (e.target === dialog) closeProject(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));

const menuButton = document.getElementById('menuToggle');
const siteMenu = document.getElementById('siteMenu');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  siteMenu.classList.toggle('visible', open);
  siteMenu.inert = !open;
  document.body.classList.toggle('menu-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
siteMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', e => { if (!siteMenu.contains(e.target) && !menuButton.contains(e.target)) setMenu(false); });

document.getElementById('emailLink').href = `mailto:${SETTINGS.email}?subject=${encodeURIComponent('Shopify Project Enquiry')}`;
document.getElementById('footerEmail').href = `mailto:${SETTINGS.email}`;
document.getElementById('instagramLink').href = SETTINGS.instagram;
document.getElementById('year').textContent = new Date().getFullYear();


/* ---------------- BRANDS — infinite logo slider ---------------- */
const brandTrack = document.getElementById('brandTrack');
const brandMarquee = document.getElementById('brandMarquee');

function brandItem(brand, hidden) {
  const item = document.createElement('li');
  item.className = `pc-brand${brand.keepColor ? ' keep-color' : ''}`;
  if (hidden) item.setAttribute('aria-hidden', 'true');
  const showName = () => {
    const name = document.createElement('span');
    name.className = 'pc-brand-name';
    name.textContent = brand.name;
    item.replaceChildren(name);
  };
  if (brand.logo) {
    const img = document.createElement('img');
    img.src = brand.logo;
    img.alt = hidden ? '' : brand.name;
    img.decoding = 'async';
    img.addEventListener('error', showName);
    item.append(img);
  } else {
    showName();
  }
  return item;
}

if (brandTrack && BRANDS.length) {
  // Repeat the list so one half of the track is always wider than the screen
  let row = [...BRANDS];
  while (row.length < 10) row = row.concat(BRANDS);
  row.forEach((brand, i) => brandTrack.append(brandItem(brand, i >= BRANDS.length)));
  row.forEach(brand => brandTrack.append(brandItem(brand, true))); // duplicate for seamless loop
  brandMarquee.style.setProperty('--pc-duration', `${row.length * 3}s`);
  document.getElementById('brandCount').textContent = `[ BRANDS / ${pad(BRANDS.length)} ]`;
}


/* ---------------- REELS — rail + full-screen player ---------------- */
const reelRail = document.getElementById('reelRail');
const reelDialog = document.getElementById('reelDialog');
const reelPlayer = document.getElementById('reelPlayer');
const reelCaption = document.getElementById('reelCaption');
const reelLink = document.getElementById('reelLink');
const reelPrev = document.getElementById('reelPrev');
const reelNext = document.getElementById('reelNext');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function reelCard(reel, index) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'pc-reel';
  card.setAttribute('aria-label', `Play reel: ${reel.title}`);

  const video = document.createElement('video');
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.preload = 'metadata';
  if (reel.poster) video.poster = reel.poster;
  video.src = reel.src;
  video.addEventListener('error', () => {
    const missing = document.createElement('span');
    missing.className = 'pc-reel-missing';
    missing.textContent = `Add video: ${reel.src}`;
    video.replaceWith(missing);
  });

  const num = document.createElement('span');
  num.className = 'pc-reel-index';
  num.textContent = `${pad(index + 1)} / ${pad(REELS.length)}`;

  const play = document.createElement('span');
  play.className = 'pc-reel-play';
  play.setAttribute('aria-hidden', 'true');
  play.textContent = '▶';

  const info = document.createElement('span');
  info.className = 'pc-reel-info';
  const meta = document.createElement('small');
  meta.textContent = [reel.client, reel.category].filter(Boolean).join(' · ');
  const title = document.createElement('strong');
  title.textContent = reel.title;
  info.append(meta, title);

  card.append(video, num, play, info);

  if (canHover) {
    card.addEventListener('mouseenter', () => video.play().catch(() => {}));
    card.addEventListener('mouseleave', () => video.pause());
  }
  card.addEventListener('click', () => openReel(reel));
  return card;
}

function openReel(reel) {
  reelRail.querySelectorAll('video').forEach(v => v.pause());
  reelPlayer.src = reel.src;
  if (reel.poster) reelPlayer.poster = reel.poster; else reelPlayer.removeAttribute('poster');
  reelCaption.textContent = [reel.client, reel.title].filter(Boolean).join(' — ');
  reelLink.hidden = !validWebsite(reel.link || '');
  if (!reelLink.hidden) reelLink.href = reel.link;
  reelDialog.showModal();
  document.body.classList.add('modal-open');
  reelPlayer.play().catch(() => {});
}
function closeReel() { if (reelDialog.open) reelDialog.close(); }

if (reelRail && REELS.length) {
  REELS.forEach((reel, i) => reelRail.append(reelCard(reel, i)));
  document.getElementById('reelCount').textContent = `[ REELS / ${pad(REELS.length)} ]`;

  // On touch screens, preview plays when the card is mostly in view
  if (!canHover && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const v = entry.target.querySelector('video');
        if (!v || reelDialog.open) return;
        if (entry.isIntersecting) v.play().catch(() => {}); else v.pause();
      });
    }, { threshold: 0.75 });
    reelRail.querySelectorAll('.pc-reel').forEach(card => observer.observe(card));
  }

  const step = () => {
    const card = reelRail.querySelector('.pc-reel');
    return card ? (card.getBoundingClientRect().width + 16) * 2 : reelRail.clientWidth * 0.8;
  };
  const updateNav = () => {
    reelPrev.disabled = reelRail.scrollLeft <= 4;
    reelNext.disabled = reelRail.scrollLeft + reelRail.clientWidth >= reelRail.scrollWidth - 4;
  };
  reelPrev.addEventListener('click', () => reelRail.scrollBy({ left: -step(), behavior: 'smooth' }));
  reelNext.addEventListener('click', () => reelRail.scrollBy({ left: step(), behavior: 'smooth' }));
  reelRail.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();
}

document.getElementById('reelClose').addEventListener('click', closeReel);
reelDialog.addEventListener('click', e => { if (e.target === reelDialog) closeReel(); });
reelDialog.addEventListener('close', () => {
  reelPlayer.pause();
  reelPlayer.removeAttribute('src');
  reelPlayer.load();
  document.body.classList.remove('modal-open');
});
