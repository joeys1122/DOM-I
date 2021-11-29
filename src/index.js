const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const links = document.querySelectorAll('nav a');
const linksArray = Array.from(links);
linksArray[0].textContent = siteContent['nav']['nav-item-1'];
linksArray[1].textContent = siteContent['nav']['nav-item-2'];
linksArray[2].textContent = siteContent['nav']['nav-item-3'];
linksArray[3].textContent = siteContent['nav']['nav-item-4'];
linksArray[4].textContent = siteContent['nav']['nav-item-5'];
linksArray[5].textContent = siteContent['nav']['nav-item-6'];
linksArray.forEach(link => link.className = 'italic');

const headerImg = document.querySelector('#logo-img');
headerImg.src = 'mocks/img/logo.png';

const cta = document.querySelector('.cta-text')
const ctaHead = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
ctaHead.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'mocks/img/cta.png';

const topContent = document.querySelector('.top-content');

const features = topContent.querySelector('.text-content:nth-of-type(1)');
const featuresHead = features.querySelector('h4');
const featuresContent = features.querySelector('p');
featuresHead.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];

const about = topContent.querySelector('.text-content:nth-of-type(2)');
const aboutHead = about.querySelector('h4');
const aboutContent = about.querySelector('p');
aboutHead.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

const midImg = document.querySelector('#middle-img');
midImg.src = 'mocks/img/accent.png';

const bottomContent = document.querySelector('.bottom-content');

const services = bottomContent.querySelector('.text-content:nth-of-type(1)');
const servicesHead = services.querySelector('h4');
const servicesContent = services.querySelector('p');
servicesHead.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = bottomContent.querySelector('.text-content:nth-of-type(2)');
const productHead = product.querySelector('h4');
const productContent = product.querySelector('p');
productHead.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];

const vision = bottomContent.querySelector('.text-content:nth-of-type(3)');
const visionHead = vision.querySelector('h4');
const visionContent = vision.querySelector('p');
visionHead.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact');
const contactHead = contact.querySelector('h4');
const address = contact.querySelector('p:nth-of-type(1)');
const phone = contact.querySelector('p:nth-of-type(2)');
const email = contact.querySelector('p:nth-of-type(3)');
contactHead.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer a');
footer.className = 'bold';
footer.textContent = siteContent['footer']['copyright'];