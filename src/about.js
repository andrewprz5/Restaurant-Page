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
   staffImage.alt = "Pizza & Bar Staff";
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
   placeOrderText.textContent = `${bizDscrptn2}: ${phone}`;
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
           paImg.src = "https://media.istockphoto.com/id/1181424514/photo/stylish-martini.jpg?s=612x612&w=0&k=20&c=xHtkc5A1nnCC6lOYz2HFm1GQA1h9qyUM3bMoMfzl_Do=";
           paImg.alt = "Martini";
       } else if (i === 1) {
           paImg.src = "https://media.istockphoto.com/id/137737388/photo/chef-chopping-vegetables-in-kitchen.jpg?s=612x612&w=0&k=20&c=r8ewRqMWLhXuDT-CyfbEctzdK7Mam3xFD9AMPp76yx0=";
           paImg.alt = "Chopping peppers";
       } else if (i === 2) {
           paImg.src = "https://media.istockphoto.com/id/1430548737/photo/open-sign-hanging-on-the-door-of-a-restaurant.jpg?s=612x612&w=0&k=20&c=517UuBOJl2dTR5ksPYmn4vDimjCgTf3Gzzbkhp9hbYA=";
           paImg.alt = "Restaurant Door";
       } else if (i === 3) {
           paImg.src = "https://media.istockphoto.com/id/1368409525/photo/chef-hand-with-cutter-cutting-pizza-to-pieces-at-pizzeria.jpg?s=612x612&w=0&k=20&c=Et0RsNMlsezS9DWc59CoISpne2T_JgbAdtGfF4L-KeI=";
           paImg.alt = "Cutting pizza"
       } else {
           paImg.src = "https://media.istockphoto.com/id/949988530/photo/modern-restaurant-terrace-in-the-summer.jpg?s=612x612&w=0&k=20&c=ddRUiyKEsrhRpTc7TRd4Op4GbSWnK2W-GARXF8ioenI=";
           paImg.alt = "Outdoor seating";
       }
       paImg.setAttribute("loading", "async");
       photoDiv.appendChild(paImg);
       imgGllryRow1.appendChild(photoDiv);
   }


   container.appendChild(imgGllryRow1);


   const imgGllryRow2 = document.createElement("section");
   imgGllryRow2.id = "imgGllryRow2";


   for (let i = 0; i < 5; i++) {
       const photoDiv = document.createElement("div");
       photoDiv.className = "photo-about-gallery";
       if (i === 0) {
        photoDiv.alt = "Friends Drinking";
       } else if (i === 1) {
        photoDiv.alt = "Pizza & Beer";
       } else if (i === 2) {
        photoDiv.alt = "Appetizers";
       } else if (i === 3) {
        photoDiv.alt = "Making Pizza";
       } else {
        photoDiv.alt = "Pizza Boxes";
       }
       imgGllryRow2.appendChild(photoDiv);
   }


   container.appendChild(imgGllryRow2);
};
