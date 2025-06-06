import "./styles.css";

import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";

const content = document.querySelector("#content");

function switchTab(container) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index) {
                container.innerHTML = '';
                if (index === 0) {
                    home(content);
                } else if (index === 1) {
                    about(content);
                } else if (index === 2) {
                    menu(content);
                }
            }
        })
    })
};

home(content);
switchTab(content);