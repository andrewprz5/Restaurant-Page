import "./styles.css";

import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";
import findUs from "./findus.js";


const content = document.querySelector("#content");

function switchTab(container) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (container.firstChild){
                container.innerHTML = '';
                if (index === 0) {
                    goIntoContent();
                    home(content);
                } else if (index === 1) {
                    about(content);
                } else if (index === 2) {
                    menu(content);
                } else {
                    findUs(content);
                   
                }
            }
        })
    })
};

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
    const navMenu = document.getElementById("nav-menu");
        if(window.innerWidth <= 768) {
            navMenu.innerHTML = `
            <div class="menu-toggle-container">
                <button class="menu-toggle-btn" id="menu-toggle">
                    <span class="svg-container">
                        <svg class="svg-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
                            <rect class="svg-piece" width="512" height="102"></rect>
                            <rect class="svg-piece" y="205" width="512" height="102"></rect>
                            <rect class="svg-piece" y="410" width="512" height="102"></rect>
                        </svg>
                    </span>
                </button>
            </div>
            `;

            const menuToggleBtn = document.getElementById("menu-toggle");

            if (menuToggleBtn) {
                menuToggleBtn.addEventListener("click", () => {
                menuToggleBtn.classList.toggle("active");
                
                const menu = document.querySelector(".mobile-menu");
                if (menu) {
                    menu.classList.toggle('open');
                }
                
            
            });
        }
        
     } else {
        const existingToggle = document.querySelector('.menu-toggle-container');
        if (existingToggle) {
            existingToggle.remove();
        } else {
            return;
        }

        if (navMenu.dataset.originalHtml) {
            navMenu.innerHTML = navMenu.dataset.originalHtml;
        }
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.remove();
        }
     }
};

function changeLayout() {
    if (window.innerWidth <= 768) {
        const contactForm = document.getElementById("contactFormContainer");

        const findUsContainer = document.getElementById("findUsContainer");
        const googleMaps = document.getElementById("googleMaps");
        const firstChild = findUsContainer.firstElementChild;
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
        console.log('change back');
    }
};

home(content);
switchTab(content);

window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-button');
    const listItems = document.querySelectorAll('.list');
    const submenu = document.querySelector('.submenu');
    const menuList = document.getElementById("menu-list");

    function activeTab(tabId, listId) {
        tabs.forEach(btn => btn.classList.remove('active'));
        listItems.forEach(item => item.classList.remove('active'));

        document.getElementById(tabId).classList.add('active');
        document.getElementById(listId).classList.add('active');
    }
   
    tabs.forEach(btn => {
        btn.addEventListener('click', () => activeTab(btn.id, listItems[Array.from(tabs).indexOf(btn)].id));
    });

    menuList.addEventListener('mouseenter', () => {
        submenu.classList.add('focus');
    });

    menuList.addEventListener('mouseleave', () => {
        submenu.classList.remove('focus');
    });
    

    updateNavMenu();
    changeLayout();
    activeTab("home", "home-list");
});

window.addEventListener('resize', updateNavMenu);
window.addEventListener('resize', changeLayout);