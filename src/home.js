import "./home.css";
import {name, bizDscrptn1, bizDscrptn2, phone, phoneRef, space, address1, address2, hoursOp, hoursOp2, cta, contactLink, pizzaImage, pizzaText, dessertImage, dessertText,
    beerImage, beerText, pastaImage, pastaText, famousText1, famousText2, famousText3, sloganPizza
} from "./content.js";

export default function homePage(container) {

    const descriptionBox = document.createElement("div");
    descriptionBox.id = "descriptionBox";
    const textBox1 = document.createElement("div");
    const textBox2 = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const a = document.createElement("a");

    p1.textContent = bizDscrptn1;
    p2.textContent = bizDscrptn2;
    p2.id = "para2";
    a.textContent = phone;
    a.href = phoneRef;

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

    for (let i = 0; i < 3; i++) {
        const imageBox = document.createElement("div");
        imageBox.className = "imageGallery";
        if (i === 0) {
            imageBox.appendChild(contactBox);
        } imageGallery1.appendChild(imageBox);
    };

    imageGallery1.className = "flex-layout";
    imageGallery1.id = "first-row";
    container.appendChild(imageGallery1);

    const imageGallery2 = document.createElement("div"); 

    for (let i = 0; i < 4; i++) {
        const imageBox = document.createElement("div");
        imageBox.className = "imageGallery";
        imageBox.setAttribute("itemscope", "");
        imageBox.setAttribute("itemtype", "https://schema.org/ImageObject");

        const img = document.createElement("img");
        if (i === 0) {
            img.src = `${pizzaImage}.jpg`;
            img.alt = pizzaText;
            img.srcset = `${pizzaImage}.jpg 500w, ${pizzaImage}-300x300.jpg 300w, ${pizzaImage}-150x150.jpg 150w`;
            img.setAttribute("fetchpriority", "high");
        } else {
            img.setAttribute("loading", "lazy");
            if (i === 1) {
                img.src = `${dessertImage}.jpg`;
                img.alt = dessertText;
                img.srcset = `${dessertImage}.jpg 500w, ${dessertImage}-300x300.jpg 300w, ${dessertImage}-150x150.jpg 150w`;
            } else if (i === 2) {
                img.src = `${beerImage}.jpg`;
                img.alt = beerText;
                img.srcset = `${beerImage}.jpg 500w, ${beerImage}-300x300.jpg 300w, ${beerImage}-150x150.jpg 150w`;
            } else {
                img.src = `${pastaImage}.jpg`;
                img.alt = pastaText;
                img.srcset = `${pastaImage}.jpg 500w, ${pastaImage}-300x300.jpg 300w, ${pastaImage}-150x150.jpg 150w`;
            }
        }
        img.setAttribute("decoding", "async");
        img.setAttribute("itemprop", "image");
        img.setAttribute("width", "500");
        img.setAttribute("height", "500");
        img.setAttribute("sizes", "(max-width: 500px) 100vw, 500px");

        imageBox.appendChild(img);
        imageGallery2.appendChild(imageBox);
    }; 

    imageGallery2.className = "flex-layout"; 
    imageGallery2.id = "second-row";
    container.appendChild(imageGallery2); 

    const parallaxEl = document.createElement("div");
    parallaxEl.className = 'parallax-outer';
    parallaxEl.setAttribute('data-parallax-speed', '0.3');
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

    window.addEventListener('scroll', () => {
        const section = document.querySelector('.parallax-outer');
        const bg = section.querySelector('.parallax-bg');
        const speed = parseFloat(section.getAttribute('data-parallax-speed')) || 0.3;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY + windowHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            const scrollProgress = scrollY - sectionTop;
            bg.style.transform = `translateY(${scrollProgress * speed}px)`;
            }
        }
    );


};

