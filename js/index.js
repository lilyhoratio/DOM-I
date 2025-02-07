const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br>Is <br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// NAV

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelector("nav");

// Before the for loop, these nav links get overridden/renamed
// const firstNavLink = document.createElement("a");
// firstNavLink.textContent = "Yooo";
// navBar.prepend(firstNavLink); 

// const lastNavLink = document.createElement("a");
// lastNavLink.textContent = "RaHHH!";
// navBar.appendChild(lastNavLink);

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach((element,index)=> {
  const navText = `nav-item-${index+1}`;
  element.textContent = siteContent["nav"][navText];
  element.style.color = "green";
})

const firstNavLink = document.createElement("a");
firstNavLink.textContent = "Yooo";
firstNavLink.href = "#";
navBar.prepend(firstNavLink); 

const lastNavLink = document.createElement("a");
lastNavLink.textContent = "RaHHH!";
lastNavLink.href = "#";
navBar.appendChild(lastNavLink);

navLinks = document.querySelectorAll("nav a");

navLinks.forEach((element) => {element.style.color = "green"});

// CTA

//Using getElement()
// const codeSnippet = document.getElementById("cta-img");
// codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);

//Using querySelector()
// const codeSnippet = document.querySelector("#cta-img");
// codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);

document.querySelector("#cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
document.querySelector(".cta-text h1").innerHTML = siteContent["cta"]["h1"]; // read into innerHTML vs. textContent
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];

// MAIN CONTENT
const mainContent = document.querySelectorAll(".main-content .text-content");
// console.log(`main content ${mainContent}`);
const mainContentSections = ['features', 'about', 'services', 'product', 'vision']

mainContent.forEach((element, index) => {
  const sectionTitle = mainContentSections[index]; //loop through array defined above
  element.querySelector("h4").textContent = siteContent["main-content"][`${sectionTitle}-h4`];
  element.querySelector("p").textContent = siteContent["main-content"][`${sectionTitle}-content`];
})

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// CONTACT
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

// const contactText = document.querySelector(".contact p"); //don't forget to use All, or indexing doesn't work
const contactText = document.querySelectorAll(".contact p");
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

// FOOTER
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// STRETCH
const body = document.querySelector("body").style.backgroundColor = 'lightblue';

document.querySelector('.cta-text button').onclick = function() {
  let image = document.querySelector("#cta-img");
  image.setAttribute('src', "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg");
};
