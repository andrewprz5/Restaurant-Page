const name = "Nellie's Place";


const bizDscrptn1 =  "Thin-Crust Pizzas, All American Cuisine, and a Selection of 13 Top Quality Beers on Tap!";
const bizDscrptn2 = "Place an order: ";


const phone = "201.652.8626";
const phoneRef = "tel:201.652.8626";


const space = "<br>";
const address1 = "9 Franklin Turnpike";
const address2 = "Waldwick, NJ 07463";
const hoursOp = "Sunday - Wednesday from 11:00am to 10:00pm";
const hoursOp2 = "Thursday - Saturday from 11:00am to 11:00pm";
const cta = "201.652.8626";
const contactLink = "https://nelliesplacenj.com/find-us/";


const pizzaImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/pizza-500x500-1";
const pizzaText = "Nellie's Place Pizza";


const dessertImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/dessert-500x500-1";
const dessertText = "Nellie's Place - Dessert";


const beerImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/beer-spouts-500x500-1";
const beerText = "Nellie's Place - beer spouts";


const pastaImage = "https://nelliesplacenj.com/wp-content/uploads/2020/09/cavatelli-brocolli-500x500-1";
const pastaText = "Nellie's Place Cavatelli & Broccoli";




const famousText1 = "Enjoy our famous";
const famousText2 = "Thin Crust Pizza";
const famousText3 = "and so much more!";


const sloganPizza = "https://nelliesplacenj.com/wp-content/uploads/2020/06/pizza_img_9237.jpg";


const aboutText = "Our Story";


const aboutPara1 = "Nellie’s Place in Waldwick, New Jersey is known for their thin crust pizza, all American-cuisine, and great family environment.";
const aboutPara2 = "Established in 1989, Nellie’s Place has become a household name. Located in the heart of Waldwick, New Jersey, we are a great place to dine and have a drink.";
const aboutPara3 = "We have pub-style appetizers, creative burgers, incredible salads, hearty sandwiches, juicy steaks, succulent seafood, classic Italian dishes, delectable salad bar.";
const aboutPara4 = "We also offer superb entrees and chef specials daily that are generously portioned, all at an affordable price.";
const aboutPara5 = "With indoor and outdoor seating, you won’t be disappointed! We look forward to seeing you soon at Nellie’s!";


const staffImgSrc = "https://nelliesplacenj.com/wp-content/uploads/2020/09/the-staff-cropped";


const viewMenuText = "View Menu";
const viewMenuText2 = "View Our Menu";


const containerFee = "There is a 25¢ per item container fee for takeout orders.";




export function goIntoHeader() {
   const nelliesPic = document.getElementById("imageBox");
   nelliesPic.style.cssText = `
       background-position: center 30%;
       background-attachment: scroll;
       background-size: cover;
       max-height: 100px;
       padding-top: 0px;
       padding-bottom: 0px;
   `;
   const span = document.querySelector("#imageBox span");
   span.textContent = '';
   const header = document.querySelector("header");
   header.appendChild(nelliesPic);
}




export {name, bizDscrptn1, bizDscrptn2, phone, phoneRef, space, address1, address2, hoursOp, hoursOp2, cta, contactLink, pizzaImage, pizzaText, dessertImage, dessertText,
   beerImage, beerText, pastaImage, pastaText, famousText1, famousText2, famousText3, sloganPizza
};


export {aboutText, aboutPara1, aboutPara2, aboutPara3, aboutPara4, aboutPara5, staffImgSrc, viewMenuText};


export {viewMenuText2, containerFee};