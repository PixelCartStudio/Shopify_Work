# Pixel.cartstudio — Updated Shopify Portfolio

1. Open `script.js`.
2. Under `PROJECTS`, change `image: 'images/motoblox.png'` to your screenshot path. The `images/` folder is included. Image files themselves were not supplied in this request.
3. Set `url: 'https://yourstore.com/'` for each project. Empty URL (`url: ''`) hides the link.
4. Replace demo project names and descriptions with your real projects.
5. Under `SETTINGS`, update email and Instagram.
6. Open `index.html` to preview the website.

### Screenshot appearance
Project cards and modal use `object-fit: contain` so whole image is shown without cropping. Very tall full-page screenshots will appear smaller in landscape cards. Use a separate curated landscape portfolio image as the project cover if you want maximum visual impact; the modal can show the tall full-page screenshot instead with a small JS change.

### How to add a link
```js
{ name: 'Lady Tisara', image: 'images/lady-tisara.png', url: 'https://ladytisara.com/', ... }
```

Keep all three files (`index.html`, `styles.css`, `script.js`) together and put screenshots into `images/`.
