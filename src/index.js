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
        
        const existing = document.querySelector(".mobile-menu");
        if (existing) {
            existing.remove();
        } else {
            const newFlexItem = document.createElement("div");
            newFlexItem.classList.add('flex-item', 'mobile-menu');
            newFlexItem.innerHTML = `
            <div id="mobile-menu">    
                <ul>
                    <li>
                        <a href="https://nelliesplacenj.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://nelliesplacenj.com/about-nellies-place/">About</a>
                    </li>
                    <li id="mobile-menu-list">
                        <div class="mobile-submenu-container">
                            <a href="https://nelliesplacenj.com/menu/" id="mobile-menu-link"aria-haspopup="true">Menu</a>
                            <span></span>
                        </div>
                        <ul class="submenu mobile">
                            <li class="subcategory">
                                <a href="/menu#appetizers">Appetizers</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#soup_and_salad">Soup and Salad</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#burgers">Burgers</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#sandwiches">Sandwiches</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#specialty_sandwiches">Specialty Sandwiches</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#meats">Meats</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#fish">Fish</a>   
                            </li>
                            <li class="subcategory">
                                <a href="/menu#italian">Italian</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#sides">Sides</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#pizza">Pizza</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#specialty_pie">Specialty Pie</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#gluten_free">Gluten Free</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#kids">Kids</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://nelliesplacenj.com/find-us/">Find Us</a>
                    </li>
                </ul>
            </div>
            `;

            const flexItems = document.querySelectorAll('.flex-item');

            if (flexItems.length >= 2) {
                flexItems[2].parentNode.insertBefore(newFlexItem, flexItems[2]);
            } else {
                const nav = document.querySelector('nav');
                nav.appendChild(newFlexItem);
            }
        }
        
        });
    }
        
        } else {
        navMenu.innerHTML = `
                <ul>
                    <li class="list active" id="home-list">
                        <button class="tab-button active" id="home">Home</button>
                    </li>
                     <li class="list active"  id="about-list">
                        <button class="tab-button active" id="about">About</button>
                    </li>
                     <li class="list active" id="menu-list">
                        <div>
                            <button class ="tab-button active" id="menu">Menu</button>
                            <span></span>
                        </div>
                        <ul class="submenu">
                            <li class="subcategory">
                                <a href="/menu#appetizers">Appetizers</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#soup_and_salad">Soup and Salad</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#burgers">Burgers</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#sandwiches">Sandwiches</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#specialty_sandwiches">Specialty Sandwiches</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#meats">Meats</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#fish">Fish</a>   
                            </li>
                            <li class="subcategory">
                                <a href="/menu#italian">Italian</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#sides">Sides</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#pizza">Pizza</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#specialty_pie">Specialty Pie</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#gluten_free">Gluten Free</a>
                            </li>
                            <li class="subcategory">
                                <a href="/menu#kids">Kids</a>
                            </li>
                        </ul>
                    </li>
                     <li class="list active" id="find-us-list">
                        <button class="tab-button active" id="find-us">Find Us</button>
                    </li>
                </ul>
        `
        const existing = document.querySelector(".mobile-menu");
        if (existing) {
            existing.remove();
        }
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
    activeTab("home", "home-list");
});

window.addEventListener('resize', updateNavMenu);