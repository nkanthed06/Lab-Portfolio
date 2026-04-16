console.log("IT'S ALIVE!");

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Step 3.1 — Define your pages
let pages = [
  { url: 'index.html', title: 'Home' },
  { url: "projects/index.html", title: 'Projects' },
  { url: 'contact/index.html', title: 'Contact' },
  { url: 'https://github.com/nkanthed06', title: 'GitHub' },
  { url: 'CV/index.html', title: 'Resume' },
];

// Detect if local or on GitHub Pages
const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "/"
  : "/Lab-Portfolio/"; 
  
// Create and prepend the nav
let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  // Prefix relative URLs with BASE_PATH
  url = !url.startsWith('http') ? BASE_PATH + url : url;

  // Step 3.2 — Create link element
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;

  // Highlight current page
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current');
  }

  // Open external links in new tab
  if (a.host !== location.host) {
    a.target = '_blank';
  }

  nav.append(a);
}