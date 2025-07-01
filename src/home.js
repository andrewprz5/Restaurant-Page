import "./home.css";
import { bizDscrptn1, bizDscrptn2, phone, phoneRef, space, address1, address2, hoursOp, hoursOp2, cta, contactLink, pizzaImage, pizzaText, dessertImage, dessertText,
   beerImage, beerText, pastaImage, pastaText, famousText1, famousText2, famousText3, sloganPizza
} from "./content.js";




export default function homePage(container) {


   const descriptionBox = document.createElement("section");
   descriptionBox.id = "descriptionBox";
   const textBox1 = document.createElement("div");
   const textBox2 = document.createElement("div");
   const p1 = document.createElement("h1");
   const p2 = document.createElement("h2");
   const a = document.createElement("a");


   p1.textContent = bizDscrptn1;
   p2.textContent = bizDscrptn2;
   p2.id = "para2";
   a.textContent = phone;
   a.href = phoneRef;
   a.setAttribute("aria-label", "Call us at " + phone);


   p2.appendChild(a);
   textBox1.appendChild(p1);
   textBox2.appendChild(p2);
   descriptionBox.append(textBox1, textBox2);
   container.appendChild(descriptionBox);


   const imageGallery1 = document.createElement("div");
   const contactBox = document.createElement("div");
   contactBox.id = "contactBox";


   for (let i = 0; i < 9; i++) {
   const contactInfo = document.createElement("p");
   contactInfo.id = "contactInfo";
       if (i === 0 || i === 3 || i === 6 || i === 8) {
           contactInfo.innerHTML = space;
       } else if (i === 1) {
           contactInfo.textContent = address1;
       } else if (i === 2) {
           contactInfo.textContent = address2;
       } else if (i === 4) {
           contactInfo.textContent = hoursOp
       } else if (i === 5) {
           contactInfo.textContent = hoursOp2;
       } else {
           const contactRef = document.createElement("a");
           contactRef.textContent = cta;
           contactRef.id = "contactRef";
           contactRef.href = contactLink;
           contactInfo.appendChild(contactRef);
       } contactBox.appendChild(contactInfo);
   };


   for (let i = 0; i< 3; i++) {
       const imageBox = document.createElement("div");
       imageBox.className = "imageGallery";
       imageGallery1.appendChild(imageBox);
   };


   imageGallery1.className = "flex-layout";
   imageGallery1.id = "first-row";
   container.appendChild(imageGallery1);


   const imageGallery2 = document.createElement("div");


   const imageData = [
       { src: pizzaImage, alt: pizzaText },
       { src: dessertImage, alt: dessertText },
       { src: beerImage, alt: beerText },
       { src: pastaImage, alt: pastaText },
   ];


   imageData.forEach(({ src, alt }) => {
       const imageBox = document.createElement("div");
       imageBox.className = "imageGallery";
       imageBox.setAttribute("itemscope", "");
       imageBox.setAttribute("itemtype", "https://schema.org/ImageObject");


       const img = document.createElement("img");
       img.src = `${src}.jpg`;
       img.alt = alt;
       img.srcset = `${src}.jpg 500w, ${src}-300x300.jpg 300w, ${src}-150x150.jpg 150w`;
       img.sizes = "(max-width: 500px) 100vw, 500px";
       img.decoding = "async";
       img.loading = "lazy";
       img.setAttribute("itemprop", "image");
       img.width = 500;
       img.height = 500;


       imageBox.appendChild(img);
       imageGallery2.appendChild(imageBox);
   });


   imageGallery2.className = "flex-layout";
   imageGallery2.id = "second-row";
   container.appendChild(imageGallery2);


   const contactInfo = document.createElement("div");
   contactInfo.className = "contact-info";
  
   for (let i = 0; i < 5; i++) {
       const p = document.createElement("p");
       if (i === 0) {
           p.textContent = "9 Franklin Turnpike";
       } else if (i === 1) {
           p.innerHTML = "Waldwick, NJ 07463";
       } else if (i === 2) {
           p.textContent = "Sunday - Wednesday from 11:00am to 10:00pm";
       } else if (i === 3) {
           p.innerHTML = "Thursday - Saturday from 11:00am to 11:00pm";
       } else {
           const a = document.createElement("a");
           a.href="tel:201.652.8626";
           a.textContent = cta;
           p.style.marginTop = "50px";
           p.style.fontWeight = "600";
           p.textContent = "Contact Us: ";
           p.appendChild(a);
       }
       contactInfo.appendChild(p);
   }


   container.appendChild(contactInfo);


   //end
   const parallaxEl = document.createElement("div");
   parallaxEl.className = 'parallax-outer';
   parallaxEl.setAttribute('data-parallax-speed', '0.5');
   parallaxEl.setAttribute('data-parallax-image', `${sloganPizza}`);


   const parallaxBg = document.createElement("div");
   parallaxBg.className = 'parallax-bg';


   const textContainer = document.createElement("div");
   textContainer.className = 'text-container';


   for (let i = 0; i < 3; i++) {
       const h2 = document.createElement("h2");
       if (i === 0) {
           h2.textContent = famousText1;
       } else if (i === 1) {
           h2.textContent = famousText2;
       } else {
           h2.textContent = famousText3;
       }
       textContainer.appendChild(h2);
   };


   parallaxEl.append(parallaxBg, textContainer);
   container.appendChild(parallaxEl);
  
   window.removeEventListener('scroll', handleParallaxScroll);
   window.addEventListener('scroll', handleParallaxScroll);
  
};


function handleParallaxScroll() {
   const section = document.querySelector('.parallax-outer');
   const bg = document.querySelector('.parallax-bg');


   if (!section || !bg) return;


   if (window.innerWidth > 768) {
       const speed = parseFloat(section.getAttribute('data-parallax-speed')) || 0.3;
       const sectionTop = section.offsetTop;
       const sectionHeight = section.offsetHeight;
       const scrollY = window.scrollY;
       const windowHeight = window.innerHeight;


       if (scrollY + windowHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
           const scrollProgress = scrollY - sectionTop;
           bg.style.transform = `translateY(${scrollProgress * speed}px)`;
       }
   } else {
       bg.style.transform = "translateY(0px)";
   }
}
