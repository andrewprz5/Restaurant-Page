//imageBox

const imageBox = document.createElement("div");
const h1 = document.createElement("h1");
const span = document.createElement("span");

span.textContent = "Nellie's Place";
span.style.cssText = `
    font-size: 50px;
    font-family: 'Uncial Antiqua', sans-serif;
    font-weight: 400;
    text-shadow: 2px 2px 2px #000000;
`;

h1.style.cssText = `
    color: #ffffff; 
    transform: rotate(-12deg);
`;

h1.append(span);

imageBox.style.cssText = `
    background-image: url('https://nelliesplacenj.com/wp-content/uploads/2020/06/bar-fb.jpg');
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center;
    margin: 0 auto 0 auto;
    min-width: 0;
`;

imageBox.append(h1, span);
document.body.appendChild(imageBox);

//descriptionBox

const descriptionBox = document.createElement("div");
const textBox1 = document.createElement("div");
const textBox2 = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const a = document.createElement("a");

p1.textContent = "Thin-Crust Pizzas, All American Cuisine, and a Selection of 13 Top Quality Beers on Tap!";

p2.textContent = "Place an order: ";
p2.style.margin = "0 0 10px";

a.textContent = "201.652.8626";
a.href = "tel:201.652.8626";
a.style.textDecoration = "none";

p2.append(a);

textBox1.append(p1);

textBox2.append(p2);

descriptionBox.style.cssText = `
    color: #000000;
    font-size: 23px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
`;
descriptionBox.append(textBox1, textBox2);
document.body.appendChild(descriptionBox);

//imageGallery1

const imageGallery1 = document.createElement("div");
const contactBox = document.createElement("div");

contactBox.style.cssText = `
    margin-top: 50px;
    margin-bottom: 0px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    text-align: center;
    color: #000000;
    font-size: 17px;
`;

for (let i = 0; i < 9; i++) {
    const contactInfo = document.createElement(p);
    contactInfo.style.margin = "0 0 10px";
    if (i === 0 || i === 3 || i === 6 || i === 8) {
        contactInfo.textContent = "&nbsp;";
    } else if (i === 1) {
        contactInfo.textContent = "9 Franklin Turnpike";
    } else if (i === 2) {
        contactInfo.textContent = "Waldwick, NJ&nbsp;07463";
    } else if (i === 4) {
        contactInfo.textContent = "Sunday - Wednesday from 11:00am to 10:00pm";
    } else if (i === 5) {
        contactInfo.textContent = "Thursday - Saturday from 11:00am to 11:00pm";
    } else {
        const contactRef = document.createElement("a");
        contactRef.textContent = "Contact Us.";
        contactRef.style.textDecoration = "underline";
        contactRef.href = "https://nelliesplacenj.com/find-us/";
        contactInfo.appendChild(contactRef);
    } contactBox.appendChild(contactInfo);
};

for (let i = 0; i < 3; i++) {
    const imageBox = document.createElement(div);
    if (i === 0) {
        imageBox.style.backgroundColor = "#ae9a64";
        imageBox.append(contactBox);
    } if (i === 1 || i === 2) {
        imageBox.style.cssText = `
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: scroll;
            background-size: cover;
        `;
        if (i === 1) {
            imageBox.style.backgroundImage = "url(https://nelliesplacenj.com/wp-content/uploads/2020/06/dough-rising-300x200.png)";
        } else {
            imageBox.style.backgroundImage = "url(https://nelliesplacenj.com/wp-content/uploads/2020/06/eating-pizza-300x200.png)";
        }
    } imageGallery1.appendChild(imageBox);
};

imageGallery1.className = "flex-layout";
document.body.appendChild(imageGallery1);


//imageGallery2

const imageGallery2 = document.createElement("div"); //

for (let i = 0; i < 4; i++) {
    const imageBox = document.createElement("div");
    imageBox.style.cssText = `
        width: 25%;
        float: left;
        min-height: 1px;
        margin: 0;
    `;
    imageBox.setAttribute("itemscope", "");
    imageBox.setAttribute("itemtype", "https://schema.org/ImageObject");

    const img = document.createElement("img");
    if (i === 0) {
        img.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-500x500-1.jpg";
        img.alt = "Nellie's Place Pizza"
        img.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-500x500-1.jpg 500w, https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-500x500-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-500x500-1-150x150.jpg 150w";
        img.setAttribute("fetchpriority", "high");
    } else {
        img.setAttribute("loading", "lazy");
        if (i === 1) {
            img.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/dessert-500x500-1.jpg";
            img.alt = "Nellie's Place - Dessert";
            img.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/dessert-500x500-1.jpg 500w, https://nelliesplacenj.com/wp-content/uploads/2020/09/dessert-500x500-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/dessert-500x500-1-150x150.jpg 150w";
        } else if (i === 2) {
            img.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/beer-spouts-500x500-1.jpg";
            img.alt = "Nellie's Place - beer spouts";
            img.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/beer-spouts-500x500-1.jpg 500w, https://nelliesplacenj.com/wp-content/uploads/2020/09/beer-spouts-500x500-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/beer-spouts-500x500-1-150x150.jpg 150w";
        } else {
            img.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/cavatelli-brocolli-500x500-1.jpg";
            img.alt = "Nellie's Place Cavatelli & Broccoli";
            img.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/cavatelli-brocolli-500x500-1.jpg 500w, https://nelliesplacenj.com/wp-content/uploads/2020/09/cavatelli-brocolli-500x500-1-300x300.jpg 300w, https://nelliesplacenj.com/wp-content/uploads/2020/09/cavatelli-brocolli-500x500-1-150x150.jpg 150w";
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
document.body.appendChild(imageGallery2); 

const flexContainers = document.querySelectorAll('.flex-layout');
flexContainers.forEach(el => {
    el.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    `;
});

// parallax + sloganBox

const parallaxEl = document.createElement("div");
parallaxEl.className = 'parallax-outer';
parallaxEl.setAttribute('data-parallax-image', 'https://nelliesplacenj.com/wp-content/uploads/2020/06/pizza_img_9237.jpg');
parallaxEl.setAttribute('data-parallax-speed', '2');

const sloganBox = document.createElement("div");
sloganBox.className = 'parallax-bg';
sloganBox.style.backgroundPosition = 'center 0;';
sloganBox.style.backgroundImage = `url(${parallaxEl.getAttribute('data-parallax-image')}`;

const textContainer = document.createElement("div");
textContainer.className = 'text-container';
textContainer.style.cssText = `
    color: #ffffff;
    width: 100%;
    margin-top: 200px;
    margin-bottom: 200px;
    font-family: "Uncial Antiqua", sans-serif;
    font-weight: 400;
    font-size: 67px;
    text-align: center;
    text-shadow: 2px 2px 2px #000000;
`;

for (let i = 0; i < 2; i++) {
    const h2 = document.createElement("h2");
    if (i === 0) {
        h2.textContent = "Enjoy our famous";
    } else if (i === 1) {
        h2.textContent = "Thin Crust Pizza";
    } else {
        h2.textContent = "and so much more!";
    }
    textContainer.appendChild(h2);
};

sloganBox.appendChild(textContainer);
parallaxEl.appendChild(sloganBox);
document.body.appendChild(parallaxEl);

window.addEventListener('scroll',() => {
    const speed = parseFloat(parallaxEl.getAttribute('data-parallax-speed')) || 1;
    const scrollY = window.scrollY;
    const offset = scrollY * speed;
    sloganBox.style.backgroundPosition = `center ${-offset}px`; // needs to start at 845px then deduct?
});

// all divs with class-name .fl-module-content have margin properties 

//footer

const footer = document.createElement("footer");
footer.setAttribute("itemscope", "itemscope");
footer.setAttribute("itemtype", "http://schema.org/WPFooter");

const ftrInfoBox = document.createElement("div");
ftrInfoBox.style.color = "ffffff";

for (let i = 0; i < 2; i++) {
    const infoDiv = document.createElement("div");
    infoDiv.style.cssText = `
        width: 33.33%;
        float: left;
        min-height: 1px;
        margin-top: 0px;
        margin-bottom: 0px;
        color: #000000;
        font-size: 20px;
        text-align: center;
    `;
    const p = document.createElement("p");
    if (p === 0) {
        const a = document.createElement("a");
        a.href = "tel:201.652.8626";
        a.textContent = "201.652.8626";
        a.style.textDecoration = "none";
        p.appendChild(a);
    } else if (p === 1) {
        p.textContent = "©2020 Nellie’s Place";
    } else {
        p.textContent = "9 Franklin Turnpike, <br> Waldwick 07463";
    };

    infoDiv.appendChild(p);
    ftrInfoBox.appendChild(infoDiv);
};

footer.appendChild(ftrInfoBox);
document.body.appendChild(footer);

//


const name = "Nellie's Place";

const bizDscrptn1 =  "Thin-Crust Pizzas, All American Cuisine, and a Selection of 13 Top Quality Beers on Tap!";
const bizDscrptn2 = "Place an order: ";

const phone = "201.652.8626";
const phoneRef = "tel:201.652.8626";

const space = "&nbsp;"
const address1 = "9 Franklin Turnpike";
const address2 = "Waldwick, NJ&nbsp;07463";
const hoursOp = "Sunday - Wednesday from 11:00am to 10:00pm";
const hoursOp2 = "Thursday - Saturday from 11:00am to 11:00pm";
const cta = "Contact Us.";
const contactRef = "https://nelliesplacenj.com/find-us/";

const pizzaImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-500x500-1.jpg";
const pizzaText = "Nellie's Place Pizza";

const dessertImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/dessert-500x500-1.jpg";
const dessertText = "Nellie's Place - Dessert";

const beerImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/beer-spouts-500x500-1.jpg";
const beerText = "Nellie's Place - beer spouts";

const pastaImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/cavatelli-brocolli-500x500-1.jpg";
const pastaText = "Nellie's Place Cavatelli & Broccoli";


const famousText1 = "Enjoy our famous";
const famousText2 = "Thin Crust Pizza";
const famousText3 = "and so much more!";

const copyright = "©2020 Nellie’s Place";
const fullAddress = "9 Franklin Turnpike, <br> Waldwick 07463";


export {name, bizDscrptn1, bizDscrptn2, phone, phoneRef, space, address1, address2, hoursOp, hoursOp2, cta, contactRef, pizzaImage, pizzaText, dessertImage, dessertText,
    beerImage, beerText, pastaImage, pastaText, famousText1, famousText2, famousText3, copyright, fullAddress
}