const name = "Pizza & Bar";


const bizDscrptn1 =  "See what a modern site can do for your business!";
const bizDscrptn2 = "Request a Custom Demo";


const phone = "347.857.9661";
const phoneRef = "tel:347.857.9661";


const space = "<br>";
const address1 = "123 Main Street";
const address2 = "Hawthorne, NJ 07506";
const hoursOp = "Sunday - Wednesday from 11:00am to 10:00pm";
const hoursOp2 = "Thursday - Saturday from 11:00am to 11:00pm";
const cta = "347.857.9661";
const contactLink = "https://pizza-bar-redesign.netlify.app";


const pizzaImage = "https://static.vecteezy.com/system/resources/thumbnails/048/776/002/small_2x/restaurant-table-with-pizzas-and-fries-photo";
const pizzaText = "Pizza Dishes";


const dessertImage = "https://thumbs.dreamstime.com/b/tasty-pub-grub-refreshing-drinks-modern-sports-bar-menu-juicy-burgers-crispy-wings-ice-cold-beer-set-against-rustic-366820468";
const dessertText = "Burgers";


const beerImage = "https://www.shutterstock.com/image-photo/cold-glasses-beer-bar-600nw-2173861113";
const beerText = "Beer Glasses";


const pastaImage = "https://boscospizzakitchen.com/wp-content/uploads/2022/05/pasta-wooster";
const pastaText = "Pasta Plate";




const famousText1 = "Enjoy our famous";
const famousText2 = "Chicago-Styled Pizza";
const famousText3 = "and so much more!";


const sloganPizza = "https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D";


const aboutText = "Our Story";


const aboutPara1 = "At Pizza & Bar, we believe great food brings people together. Founded in 2023, our mission is simple — serve delicious, handcrafted pizzas made with the freshest ingredients in a warm and welcoming atmosphere.";
const aboutPara2 = "Inspired by classic Italian traditions and modern flavors, every pizza we make is a labor of love. From our signature sauces to our perfectly baked crusts, we craft each pie to deliver that perfect balance of taste and comfort.";
const aboutPara3 = "But we’re more than just pizza. Our bar features a curated selection of local craft beers, fine wines, and creative cocktails — perfect for relaxing after a long day or celebrating with friends.";
const aboutPara4 = "We take pride in being a neighborhood spot where families, friends, and pizza lovers can gather and create lasting memories. Your satisfaction and experience are at the heart of everything we do.";
const aboutPara5 = "Thank you for stopping by Pizza & Bar. Whether it’s your first visit or your hundredth, we’re excited to share our passion for great food and good times with you.";


const staffImgSrc = "https://thumbs.dreamstime.com/b/portrait-young-wait-staff-wine-glass-pizza-29669725.jpg";


const viewMenuText = "View Menu";
const viewMenuText2 = "View Our Menu";


const containerFee = "There is a 20¢ per item container fee for takeout orders.";


export function goIntoHeader() {
   const pizzaBarPic = document.getElementById("imageBox");
   pizzaBarPic.style.cssText = `
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
   header.appendChild(pizzaBarPic);
}




export {name, bizDscrptn1, bizDscrptn2, phone, phoneRef, space, address1, address2, hoursOp, hoursOp2, cta, contactLink, pizzaImage, pizzaText, dessertImage, dessertText,
   beerImage, beerText, pastaImage, pastaText, famousText1, famousText2, famousText3, sloganPizza
};


export {aboutText, aboutPara1, aboutPara2, aboutPara3, aboutPara4, aboutPara5, staffImgSrc, viewMenuText};


export {viewMenuText2, containerFee};