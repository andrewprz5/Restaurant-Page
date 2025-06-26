import "./styles.css";

import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";
import findUs from "./findUs.js";


const content = document.querySelector("#content");

function switchTab(container) {
  const tabButtons = document.querySelectorAll('.tab-button');
  const listItems = document.querySelectorAll('.list');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const tabConfig = [
    {
      render: home,
      listId: 'home-list',
      mobileId: 'mobile-home-link',
      afterRender: goIntoContent
    },
    {
      render: about,
      listId: 'about-list',
      mobileId: 'mobile-about-link'
    },
    {
      render: menu,
      listId: 'menu-list',
      mobileId: 'mobile-menu-link'
    },
    {
      render: findUs,
      listId: 'find-us-list',
      mobileId: 'mobile-find-link'
    }
  ];

  function handleTabClick(index) {
    // Remove all active states
    tabButtons.forEach(btn => btn.classList.remove('active'));
    listItems.forEach(list => list.classList.remove('active'));
    mobileNavLinks.forEach(link => link.classList.remove('active'));

    // Clear content
    container.innerHTML = '';
    container.classList.remove("loaded");
    setTimeout(() => container.classList.add("loaded"), 50);

    const { render, listId, mobileId, afterRender } = tabConfig[index];

    // Add active states
    tabButtons[index]?.classList.add('active');
    document.getElementById(listId)?.classList.add('active');
    document.getElementById(mobileId)?.classList.add('active');

    // Render page
    render(container);
    if (afterRender) afterRender();

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            container.classList.add("loaded");
        });
    });
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => handleTabClick(index));
  });

  mobileNavLinks.forEach((button, index) => {
    button.addEventListener('click', () => handleTabClick(index));
  });
}

home(content);
setTimeout(() => content.classList.add("loaded"), 0);
switchTab(content);




function goIntoContent() {
     const nelliesPic = document.getElementById("imageBox");
     const header = document.querySelector("header");
    if (header.contains(nelliesPic)) {
        nelliesPic.style.cssText = `
            background-image: url('https://nelliesplacenj.com/wp-content/uploads/2020/06/bar-fb.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 700px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        const span = document.querySelector("#imageBox span");
        span.textContent = `Nellie's Place`;
        header.removeChild(nelliesPic);
        header.after(nelliesPic);
    }
};


function updateNavMenu() {
    const normalLayout = document.getElementById("nav-menu");
    const menuToggleContainer = document.querySelector('.menu-toggle-container');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    
    if(window.innerWidth <= 768) {
        if (menuToggleContainer) menuToggleContainer.style.display = "block";
        if (normalLayout) normalLayout.style.display = "none";
        menuToggle();
    } else {
        if (menuToggleContainer) menuToggleContainer.style.display = "none";
        if (normalLayout) normalLayout.style.display = "flex";
        if (mobileMenu) mobileMenu.classList.remove("open");
        if (menuToggleBtn) menuToggleBtn.classList.remove("active");
    }
};

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateNavMenu();
        changeLayout();
    }, 200);
});


function changeLayout() {
    const findUsContainer = document.getElementById("findUsContainer");
    const contactForm = document.getElementById("contactFormContainer");        
    const googleMaps = document.getElementById("googleMaps");
    if (findUsContainer) {
        const firstChild = findUsContainer.firstElementChild;
        if (window.innerWidth <= 768) {

        findUsContainer.insertBefore(contactForm, firstChild.nextSibling);

        contactForm.style.padding = "0";
        findUsContainer.style.cssText = `
        flex-direction: column;
        width: 100%;
        `;
        googleMaps.style.cssText = `
        height: 400px;
        width: auto;
        `;
        
    } else {
        content.insertBefore(contactForm, content.lastElementChild);

        contactForm.style.cssText = `
            margin: 4rem auto 2rem;
            padding: 4rem 2rem;
            max-width: 700px;
            background-color: #000;
            border-radius: 8px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            color: #f8f4ef;
            font-family: 'Lato', sans-serif;
        `;
        findUsContainer.style.cssText = `
            display: flex;
            margin: auto;
            width: 80%;
        `;
        googleMaps.style.cssText = `
            float: left;
            min-height: 1px;
            margin: 20px;
            width: 100%;
        `;
        }
    };
};
    

function focusElement() {
    const submenu = document.querySelector('.submenu');
    const menuList = document.getElementById("menu-list");

    menuList.addEventListener('mouseenter', () => {
        submenu.classList.add('focus');
    });

    menuList.addEventListener('mouseleave', () => {
        submenu.classList.remove('focus');
    });
};

let isListenerAttached = false;

function menuToggle() {

    if (window.innerWidth <= 768 && !isListenerAttached) {
        const menuToggleBtn = document.querySelector('.menu-toggle-btn');
        const submenuOpener = document.getElementById("submenu-opener");

        menuToggleBtn.addEventListener("click", () => {

            menuToggleBtn.classList.toggle("active");

            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('open');
                document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
            }
        });

        submenuOpener.addEventListener("click", () => {
            const submenuMobile = document.querySelector(".submenu-mobile");
            if (submenuMobile) {
                submenuMobile.classList.toggle("focus");
            }
            
        } );

        isListenerAttached = true; 
    }
};

function setupSubmenuScroll(content) {
    const submenuLinks = document.querySelectorAll('a[data-scroll]');

    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('data-scroll');

            if(!document.querySelector(targetId)) {
                content.innerHTML = '';
                menu(content);
            }

            setTimeout(() => {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({behavior: 'smooth', block:'start'});
                } else {
                    console.warn('Target not found:', targetId);
                }
            }, 50);
        })
    })
};

const businessName = document.getElementById("business-name");

businessName.addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
    home(content);
    goIntoContent();
})

document.addEventListener("DOMContentLoaded", () => {
    menuToggle();
    updateNavMenu();
    setupSubmenuScroll(content);
    focusElement();
});

// css redesign
// js tweaks
// smaller mobile designs
// maybe there is a gmaps issue during resizing