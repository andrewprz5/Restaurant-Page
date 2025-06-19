import "./styles.css";

import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";
import findUs from "./findus.js";


const content = document.querySelector("#content");

function switchTab(container) {
    const tabButtons = document.querySelectorAll('.tab-button'); 
    const listItems = document.querySelectorAll('.list');
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (container.firstChild){

                tabButtons.forEach(btn => btn.classList.remove('active'));
                listItems.forEach(list => list.classList.remove('active'));

                container.innerHTML = '';

                button.classList.add('active');

                if (index === 0) {
                    home(content);
                    goIntoContent();
                    document.getElementById("home-list").classList.add('active');
                } else if (index === 1) {
                    about(content);
                    document.getElementById('about-list').classList.add('active');
                } else if (index === 2) {
                    menu(content);
                    document.getElementById('menu-list').classList.add('active');
                } else {
                    findUs(content);
                    document.getElementById('find-us-list').classList.add('active');
                }
            }
        })
    })
};

home(content);
switchTab(content);
focusElement();



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
    const normalLayout = document.querySelector('.normal-layout');
    const menuToggleContainer = document.querySelector('.menu-toggle-container');
    if (menuToggleContainer) {
         if(window.innerWidth <= 768) {
            menuToggleContainer.style.display = "block";
            normalLayout.style.display = "none";
        } else {
            menuToggleContainer.style.display = "none";
            normalLayout.style.display = "flex";
        }
    }
};

window.addEventListener('resize', () => {
    updateNavMenu();
    changeLayout();
    focusElement();
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
            padding-right: 30%;
            padding-left: 30%;
            padding-top: 20px;
            padding-bottom: 20px;
            width: 100%;
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


