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

document.getElementById('projectCount').textContent = `[ SELECTED WORK / ${String(PROJECTS.length).padStart(2,'0')} ]`;
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
  marker.textContent = `${String(index + 1).padStart(2,'0')} / ${String(PROJECTS.length).padStart(2,'0')}`;
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
