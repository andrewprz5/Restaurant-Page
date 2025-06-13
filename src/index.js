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

home(content);
switchTab(content);

window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-button');
    const listItems = document.querySelectorAll('.list');

    function activeTab(tabId, listId) {
        tabs.forEach(btn => btn.classList.remove('active'));
        listItems.forEach(item => item.classList.remove('active'));

        document.getElementById(tabId).classList.add('active');
        document.getElementById(listId).classList.add('active');
    }
   

    tabs.forEach(btn => {
        btn.addEventListener('click', () => activeTab(btn.id, listItems[Array.from(tabs).indexOf(btn)].id));
    });
    
    activeTab("home", "home-list");
});
