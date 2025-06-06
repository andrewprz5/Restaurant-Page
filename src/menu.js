import "./menu.css";
import {viewMenuText2, containerFee, goIntoHeader} from "./content.js";

export default function menuPage(container) {
    goIntoHeader();

    const menuHeader = document.createElement("div");
    menuHeader.id = "menuHeader";

    const menuTopHeader = document.createElement("div");

    const nelliesName = document.createElement("div");
    nelliesName.id = "nelliesName";
    nelliesName.className = "menu-header-item";
    const viewMenuContainer = document.createElement("div");
    const menuImg = document.createElement("div");

    const nelliesHeadline = document.createElement("h1");
    const nelliesText = document.createElement("span");
    nelliesText.textContent = "Nellie's Place";

    const viewMenu = document.createElement("div");
    const viewMenuPara = document.createElement("p");
    viewMenuPara.textContent = "View Our Menu";

    const menuLink = document.createElement("a");
    menuLink.href = "https://nelliesplacenj.com/wp-content/uploads/2025/03/Nellies-Main-Menu-03-25-2.pdf";
    menuLink.setAttribute("itemprop", "url");

    const menuSource = document.createElement("img");
    menuSource.setAttribute("decoding", "async");
    menuSource.src = "https://nelliesplacenj.com/wp-content/uploads/2020/06/menu-top.jpg";
    menuSource.alt = "menu - top";
    menuSource.setAttribute("itemprop", "image");
    menuSource.setAttribute("height", "150");
    menuSource.setAttribute("width", "150");

    const menuBottomHeader = document.createElement("div");

    const sectionLine = document.createElement("div");
    const seperator = document.createElement("div");

    const menuTitle = document.createElement("div");
    const menuTextHeader = document.createElement("h2");
    const menuText = document.createElement("span");
    menuText.textContent = viewMenuText2;

    const subtitle = document.createElement("div");
    const containerPara = document.createElement("p");
    containerPara.textContent = containerFee;
    
    menuLink.appendChild(menuSource);
    menuImg.appendChild(menuLink);
    viewMenu.appendChild(viewMenuPara);
    viewMenuContainer.appendChild(viewMenu);
    nelliesHeadline.appendChild(nelliesText);
    nelliesName.appendChild(nelliesHeadline);
    subtitle.appendChild(containerPara);
    menuTextHeader.appendChild(menuText);
    menuTitle.appendChild(menuTextHeader);
    sectionLine.appendChild(seperator);
    menuTopHeader.append(nelliesName, viewMenuContainer, menuImg);
    menuBottomHeader.append(sectionLine, menuTitle, subtitle);
    menuHeader.append(menuTopHeader, menuBottomHeader);
    container.appendChild(menuHeader);

};

function retrieveFood() {};

class Food {
    constructor(name, type, description, price) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }

    printName() {
        console.log(this.name)
    }

    putIntoCategory() {
        //
    }

    printDescription(text) {
        if (!text) {
            return;
        } else {
            // code
        }
    }
}

const friedCalamari = new Food("Fried Calamari", "appetizer", "hot, medium or sweet", 14.99);
const soupDay = new Food("Soup of the Day", "soup and salad", "cup", 12.99);