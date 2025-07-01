import "./about.css";
import menu from "./menu.js";
import {aboutText, aboutPara1, aboutPara2, aboutPara3, aboutPara4, aboutPara5, viewMenuText, staffImgSrc, goIntoHeader, bizDscrptn2, phone} from "./content.js";
import { handleParallaxScroll } from "./index.js";


export default function aboutPage(container) {
   goIntoHeader();


   const storyHeader = document.createElement("div");
   storyHeader.id = "storyHeader";
  
   const storyText = document.createElement("h2");
   storyText.textContent = aboutText;


   storyHeader.appendChild(storyText);
   container.appendChild(storyHeader);


   const containerDiv = document.createElement("div");
   containerDiv.id = "containerDiv";


   const flexDiv = document.createElement("div");
   flexDiv.id = "flexDiv";


   const historyDiv = document.createElement("div");
   const staffDiv = document.createElement("div");
   historyDiv.className = "a-flex-item";
   staffDiv.className = "a-flex-item";


   for (let i = 0; i < 5; i++) {
       const historyText = document.createElement("p");
       historyText.className = "history-para";
       if (i === 0) {
           historyText.textContent = aboutPara1;
       } else if (i === 1) {
           historyText.textContent = aboutPara2;
       } else if (i === 2) {
           historyText.textContent = aboutPara3;
       } else if (i === 3) {
           historyText.textContent = aboutPara4;
       } else {
           historyText.textContent = aboutPara5;
       }
       historyDiv.appendChild(historyText);
   };


   const staffImage = document.createElement("img");
   staffImage.id = "staffImage";
   staffImage.setAttribute("fetchpriority", "high");
   staffImage.setAttribute("decoding", "async");
   staffImage.src = staffImgSrc;
   staffImage.alt = "Nellie's Place Staff";
   staffImage.setAttribute("itemprop", "image");
   staffImage.setAttribute("height", "1721");
   staffImage.setAttribute("width", "1536");
   staffImage.srcset = `${staffImgSrc}.jpg 1536w, ${staffImgSrc}-268x300.jpg 268w, ${staffImgSrc}-914x1024.jpg 914w, ${staffImgSrc}-768x861.jpg 768w, ${staffImgSrc}-1371x1536.jpg 1371w`;
   staffImage.setAttribute("sizes", "(max-width: 1536px) 100vw, 1536px");
   staffDiv.appendChild(staffImage);


   flexDiv.append(historyDiv, staffDiv);
   containerDiv.appendChild(flexDiv);
   container.appendChild(containerDiv);


   const orderMenuDiv = document.createElement("div");
   orderMenuDiv.id = "orderMenuDiv";


   const placeOrderDiv = document.createElement("div");
   const viewMenuDiv = document.createElement("div");


   placeOrderDiv.className = "b-flex-item";
   viewMenuDiv.className = "b-flex-item";


   const placeOrderText = document.createElement("p");
   placeOrderText.textContent = `${bizDscrptn2}${phone}`;
   placeOrderText.id = "placeOrderPara";
   placeOrderDiv.appendChild(placeOrderText);


   const viewMenuAnchor = document.createElement("button");
   viewMenuAnchor.id = "menuLink";
   viewMenuAnchor.addEventListener("click", () => {
       container.innerHTML = "";
       menu(container);
       document.getElementById("about").classList.remove("active");
       document.getElementById("about-list").classList.remove("active");
       document.getElementById("menu").classList.add("active");
       document.getElementById("menu-list").classList.add("active");


       handleParallaxScroll();
   });


   const viewMenuSpan = document.createElement("span");
   viewMenuSpan.textContent = viewMenuText;
   viewMenuAnchor.appendChild(viewMenuSpan);
   viewMenuDiv.appendChild(viewMenuAnchor);


   orderMenuDiv.append(placeOrderDiv, viewMenuDiv);
   container.appendChild(orderMenuDiv);


   const imgGllryRow1 = document.createElement("section");
   imgGllryRow1.id = "imgGllryRow1";


   for (let i = 0; i < 5; i++) {
       const photoDiv = document.createElement("div");
       photoDiv.className = "photo-about-gallery";
       const paImg = document.createElement("img");
       if (i === 0) {
           paImg.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/martini-400x400-1.jpg";
           paImg.alt = "About Nellie's Place - Martini";
           paImg.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/martini-400x400-1.jpg 400w, https://nelliesplacenj.com/wp-content/uploads/2020/09/martini-400x400-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/martini-400x400-1-150x150.jpg 150w";
       } else if (i === 1) {
           paImg.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/chopping-pepper-400x400-1.jpg";
           paImg.alt = "Chopping peppers - Nellie's Place";
           paImg.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/chopping-pepper-400x400-1.jpg 400w, https://nelliesplacenj.com/wp-content/uploads/2020/09/chopping-pepper-400x400-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/chopping-pepper-400x400-1-150x150.jpg 150w";
       } else if (i === 2) {
           paImg.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/nellies-sign-400x400-1.jpg";
           paImg.alt = "Nellie's Place";
           paImg.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/nellies-sign-400x400-1.jpg 400w, https://nelliesplacenj.com/wp-content/uploads/2020/09/nellies-sign-400x400-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/nellies-sign-400x400-1-150x150.jpg 150w";
       } else if (i === 3) {
           paImg.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-takeout-400x400-1.jpg";
           paImg.alt = "Take out pizza - Nellie's Place"
           paImg.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-takeout-400x400-1.jpg 400w, https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-takeout-400x400-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-takeout-400x400-1-150x150.jpg 150w";
       } else {
           paImg.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/outside-bar-400x400-1.jpg";
           paImg.alt = "Outdoor seating - Nellie's Place";
           paImg.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/outside-bar-400x400-1.jpg 400w, https://nelliesplacenj.com/wp-content/uploads/2020/09/outside-bar-400x400-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/outside-bar-400x400-1-150x150.jpg 150w";
       }
       paImg.setAttribute("loading", "async");
       paImg.setAttribute("itemprop", "image");
       paImg.setAttribute("height", "400");
       paImg.setAttribute("width", "400");
       paImg.setAttribute("sizes", "auto, (max-width: 400px) 100vw, 400px");
       photoDiv.appendChild(paImg);
       imgGllryRow1.appendChild(photoDiv);
   }


   container.appendChild(imgGllryRow1);


   const imgGllryRow2 = document.createElement("section");
   imgGllryRow2.id = "imgGllryRow2";


   for (let i = 0; i < 5; i++) {
       const photoDiv = document.createElement("div");
       photoDiv.className = "photo-about-gallery";
       imgGllryRow2.appendChild(photoDiv);
   }


   container.appendChild(imgGllryRow2);
};
