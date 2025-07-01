import "./styles.css";


import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";
import findUs from "./findus.js";




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
     afterRender: goIntoContent,
     scrollEvent: handleParallaxScroll
   },
   {
     render: about,
     listId: 'about-list',
     mobileId: 'mobile-about-link'
   },
   {
     render: menu,
     listId: 'menu-list',
     mobileId: 'mobile-menu-link',
     scrollEvent: handleParallaxScroll
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


   const { render, listId, mobileId, afterRender, scrollEvent } = tabConfig[index];


   // Add active states
   tabButtons[index]?.classList.add('active');
   document.getElementById(listId)?.classList.add('active');
   document.getElementById(mobileId)?.classList.add('active');


   // Render page
   render(content);
   updateNavMenu();
   if (afterRender) afterRender();


   if (scrollEvent) window.addEventListener("scroll", scrollEvent);
 }


 tabButtons.forEach((button, index) => {
   button.addEventListener('click', () => handleTabClick(index));
 });


 mobileNavLinks.forEach((button, index) => {
   button.addEventListener('click', () => handleTabClick(index));
 });
}


home(content);
switchTab(content);
focusElement();






function goIntoContent() {
    const nelliesPic = document.getElementById("imageBox");
    const header = document.querySelector("header");
   if (header.contains(nelliesPic)) {
        if (window.innerWidth > 768) {
            nelliesPic.style.cssText = `
            background-image: url('https://www.franciscosegarra.com/wp-content/uploads/2021/06/interior-design-of-pizzerias.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 700px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        } else {
        nelliesPic.style.cssText = `
            background-image: url('https://www.franciscosegarra.com/wp-content/uploads/2021/06/interior-design-of-pizzerias.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 300px; 
            display: flex;
            align-items: center;
            justify-content: center;
         `;
        }
       
       const span = document.querySelector("#imageBox span");
       span.textContent = `Pizza & Bar`;
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


       // Reset toggle button and menu state each time we go small
       if (menuToggleBtn) menuToggleBtn.classList.remove("active");
       if (mobileMenu) mobileMenu.classList.remove("open");
      
       menuToggle(); // Attach listeners if not already attached
   } else {
       if (menuToggleContainer) menuToggleContainer.style.display = "none";
       if (normalLayout) normalLayout.style.display = "flex";


       if (mobileMenu) mobileMenu.classList.remove("open");
       if (menuToggleBtn) menuToggleBtn.classList.remove("active");


       // Reset listener flag so listeners can be attached fresh if needed
       isListenerAttached = false;
   }
};


let resizeTimer;
window.addEventListener('resize', () => {
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(() => {
       updateNavMenu();
     //  changeLayout();
       focusElement();
       menuToggle();
   }, 200);
});


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
   const menuToggleContainer = document.querySelector('.menu-toggle-container');


   if (menuToggleContainer && menuToggleContainer.style.display === "block" && !isListenerAttached) {
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
                   target.scrollIntoView({behavior: 'smooth'});
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
});


document.addEventListener("DOMContentLoaded", () => {
   const businessName = document.getElementById("business-name");
   const content = document.querySelector("#content");


   function clearActiveTabs() {
       document.querySelectorAll(".tab-button, .list, .mobile-nav-link").forEach(el => {
           el.classList.remove("active");
       });
   }


   if (businessName && content) {
       businessName.addEventListener("click", (e) => {
           e.preventDefault();
           clearActiveTabs();
           content.innerHTML = "";
           home(content);
           goIntoContent();
       });
   }


   menuToggle();
   updateNavMenu();
   menuToggle();
   setupSubmenuScroll(content);
});


export function handleParallaxScroll() {
       const parallaxEls = document.querySelectorAll("[data-parallax-speed]");


       parallaxEls.forEach((el) => {
           if (window.innerWidth > 768) {
               const speed = parseFloat(el.dataset.parallaxSpeed) || 1;
               const rect = el.getBoundingClientRect();


               if (rect.bottom < 0 || rect.top > window.innerHeight) return;


               const move = rect.top * speed * -0.2;
               el.style.transform = `translateY(${move}px)`;
           } else {
               el.style.transform = 'translateY(0px)';
           }
       });


       window.addEventListener("scroll", handleParallaxScroll);
}




