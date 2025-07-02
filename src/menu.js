import "./menu.css";
import { containerFee, goIntoHeader} from "./content.js";


export default function menuPage(container) {
   goIntoHeader();


   const menuHeader = document.createElement("div");
   menuHeader.id = "menuHeader";


   const menuTopHeader = document.createElement("div");
   menuTopHeader.id = "menuTopHeader";


   const pizzaBarName = document.createElement("div");
   pizzaBarName.id = "pizzaBarMenuName";
   pizzaBarName.className = "menu-header-item";
   const viewMenuContainer = document.createElement("div");
   viewMenuContainer.className = "menu-header-item";
   viewMenuContainer.id = "viewMenuContainer";
   const menuImg = document.createElement("div");
   menuImg.className = "menu-header-item";
   menuImg.id = "menuImg";


   const pizzaBarHeadline = document.createElement("h1");
   pizzaBarHeadline.id = "pizzaBarHeadline";
   const pizzaBarText = document.createElement("span");
   pizzaBarText.textContent = "Pizza & Bar";


   const viewMenu = document.createElement("div");
   viewMenu.id = "viewMenu";
   const viewMenuPara = document.createElement("p");
   viewMenuPara.textContent = "View Our Menu";


   const menuLink = document.createElement("a");
   menuLink.href = "https://www.shutterstock.com/image-vector/pizza-menu-landscape-template-design-260nw-2408440781.jpg";
   menuLink.setAttribute("itemprop", "url");


   const menuSource = document.createElement("img");
   menuSource.setAttribute("decoding", "async");
   menuSource.src = "https://www.shutterstock.com/image-vector/pizza-menu-landscape-template-design-260nw-2408440781.jpg";
   menuSource.alt = "menu - top";
   menuSource.setAttribute("itemprop", "image");
   menuSource.setAttribute("height", "150");
   menuSource.setAttribute("width", "150");


   const menuBottomHeader = document.createElement("div");
   menuBottomHeader.id = "menuBottomHeader";


   const sectionLine = document.createElement("div");
   sectionLine.className = "menu-header-item";
   sectionLine.id = "sectionLine";
   const separator = document.createElement("div");
   separator.id = "separator";


   const menuTitle = document.createElement("div");
   menuTitle.className = "menu-header-item";
   menuTitle.id = "menuTitle";
   const menuTextHeader = document.createElement("h2");
   const menuText = document.createElement("span");
   menuText.textContent = "Menu";


   const subtitle = document.createElement("div");
   subtitle.className = "menu-header-item";
   subtitle.id = "subtitle";
   const containerPara = document.createElement("p");
   containerPara.textContent = containerFee;
  
   menuLink.appendChild(menuSource);
   menuImg.appendChild(menuLink);
   viewMenu.appendChild(viewMenuPara);
   viewMenuContainer.appendChild(viewMenu);
   pizzaBarHeadline.appendChild(pizzaBarText);
   pizzaBarName.appendChild(pizzaBarHeadline);
   subtitle.appendChild(containerPara);
   menuTextHeader.appendChild(menuText);
   menuTitle.appendChild(menuTextHeader);
   sectionLine.appendChild(separator);
   menuTopHeader.append(pizzaBarName, viewMenuContainer, menuImg);
   menuBottomHeader.append(sectionLine, menuTitle, subtitle);
   menuHeader.append(menuTopHeader, menuBottomHeader);
   container.appendChild(menuHeader);


   const appetizers = new menuSection(
       "Appetizers",
       "https://media.istockphoto.com/id/923784110/photo/canapes-for-party.jpg?s=612x612&w=0&k=20&c=Afdkr9ehEsFjK2108kYUMVYHIwDvdXfNozle3t0IkRI="
   )


   appetizers.addSection();


   retrieveFood("Appetizers");

   const appsItemsContainer = document.createElement("div");
   const appsItemsPara = document.createElement("p");
   appsItemsPara.textContent = "Side of Marinara - $0.75";
   const appsItemsPara2 = document.createElement("p");
   appsItemsPara2.textContent = "Extra Dipping Sauce";
   appsItemsContainer.append(appsItemsPara, appsItemsPara2);
   appsItemsContainer.className = "additional-items-container";

   container.appendChild(appsItemsContainer)


   const soupAndSalad = new menuSection(
       "Soup and Salad",
       "https://media.istockphoto.com/id/147249044/photo/pumpkin-soup-with-garnish-bread-and-salad-in-the-background.jpg?s=612x612&w=0&k=20&c=JNNAqrEDqw-u7jSX5yFWAuPeAJ9sPdfubyDJcoCEAXs="
   )


   soupAndSalad.addSection();


   retrieveFood("Soup and Salad");


   const additionalItemsContainer = document.createElement("div");
   const additionalItemsPara = document.createElement("p");
   additionalItemsPara.textContent = "Add Grilled Chicken — $2.00 ~ Add Avocado — $1.50";
   const additionalItemsPara2 = document.createElement("p");
   additionalItemsPara2.textContent = "Extra Dressing - $0.75";
   additionalItemsContainer.append(additionalItemsPara, additionalItemsPara2);
   additionalItemsContainer.className = "additional-items-container";


   container.appendChild(additionalItemsContainer);


   const burgers = new menuSection(
       "Burgers",
       "https://media.istockphoto.com/id/1302436326/photo/junk-food-homemade-beef-burgers-on-vintage-wooden-background.jpg?s=612x612&w=0&k=20&c=NsyDE31unoNd80wGfrkMOqvsnjeNOpHER-yL_8KwcRw="
   )


   burgers.addSection();


   retrieveFood("Burgers");


   const lettuceTomatoContainer = document.createElement("div");
   const lettuceTomatoPara = document.createElement("p");
   lettuceTomatoPara.textContent = "Add Bacon - $1.50 ~ Extra Cheese - $1.00";
   const lettuceTomatoPara2 = document.createElement("p");
   lettuceTomatoPara2.textContent = "Double Patty - $3.00"
   lettuceTomatoContainer.append(lettuceTomatoPara, lettuceTomatoPara2);
   lettuceTomatoContainer.className = "additional-items-container";


   container.appendChild(lettuceTomatoContainer);


   const sandwiches = new menuSection(
       "Sandwiches",
       "https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss="
   )


   sandwiches.addSection();


   retrieveFood("Sandwiches");


   const swOptions = document.createElement("div");
   const swOptionsPara = document.createElement("p");
   swOptionsPara.textContent = "Add Cheese - $1.00 ~ Extra Bacon - $1.50";
   const swPara2 = document.createElement("p");
   swPara2.textContent = "Avocado - $1.50";
   swOptions.appendChild(swOptionsPara, swPara2);
   swOptions.className = "additional-items-container";


   container.appendChild(swOptions);


   const specialtySandwiches = new menuSection(
       "Specialty Sandwiches",
       "https://img.freepik.com/free-photo/side-view-club-sandwich-with-ham-pickled-cucumber-lettuce-tomato-cheese-sauce-board_141793-4867.jpg?semt=ais_hybrid&w=740"
   )


   specialtySandwiches.addSection();


   retrieveFood("Specialty Sandwiches");


   const xtraOptions = document.createElement("div");
   const xtraOptionsPara = document.createElement("p");
   xtraOptionsPara.textContent = "Add Peppers & Onions - $1.00";
   const xtraOptionsPara2 = document.createElement("p");
   xtraOptionsPara2.textContent = "Extra Cheese - $1.00";
   xtraOptions.append(xtraOptionsPara, xtraOptionsPara2);
   xtraOptions.className = "additional-items-container";


   container.appendChild(xtraOptions);


   const meats = new menuSection(
       "Meats",
       "https://media.istockphoto.com/id/587207508/photo/sliced-grilled-steak-ribeye-with-herb-butter.jpg?s=612x612&w=0&k=20&c=gm6Kg6rHYH0xWTF5oszm6NZ-hp9aPRbk9V1kvCr8MQI="
   )


   meats.addSection();


   retrieveFood("Meats");


   const meatOptions = document.createElement("div");
   const meatOptionsPara = document.createElement("p");
   meatOptionsPara.textContent = "Add Sautéed Onions — $1.00 ~ Add Mushrooms - $1.25";
   const meatOptionsPara2 = document.createElement("p");
   meatOptionsPara2.textContent = "Side of Gravy or Sauce - $0.75";
   meatOptions.append(meatOptionsPara, meatOptionsPara2);
   meatOptions.className = "additional-items-container";


   container.appendChild(meatOptions);


   const fish = new menuSection(
       "Fish",
       "https://media.istockphoto.com/id/1297899281/photo/fried-salmon-steaks-fried-cauliflower-and-fried-edible-mushrooms-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DtscQEXOXQ048CWFJWW86SgRlFzmISnTGkwfBXG7mms="
   )


   fish.addSection();


   retrieveFood("Fish");


   const fishOptions = document.createElement("div");
   const fishOptionsPara = document.createElement("p");
   fishOptionsPara.textContent = "Tartar Sauce - $0.75 ~ Lemon Wedge - Free";
   const fishOptionsPara2 = document.createElement("p");
   fishOptionsPara2.textContent = "Side Salad - $3.00";
   fishOptions.append(fishOptionsPara, fishOptionsPara2);
   fishOptions.className = "additional-items-container";


   container.appendChild(fishOptions);


   const italian = new menuSection(
       "Italian",
       "https://media.istockphoto.com/id/1227415751/photo/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-caprese-salad-and-tomato.jpg?s=612x612&w=0&k=20&c=0qCRhYGQw0w6ahhVX-4ezayA9r81A81cwbPDbgRlC5s="
   )


   italian.addSection();


   retrieveFood("Italian");


   const italianOptions = document.createElement("div");
   const italianOptionsPara = document.createElement("p");
   italianOptionsPara.textContent = "Add Extra Meatballs - $2.50 ~ Side Garlic Bread - $2.00";
   const italianPara2 = document.createElement("p");
   italianPara2.textContent = "Extra Parmesan - $0.75";
   italianOptions.appendChild(italianOptionsPara);
   italianOptions.className = "additional-items-container";


   container.appendChild(italianOptions);


   const sides = new menuSection(
       "Sides",
       "https://media.istockphoto.com/id/511621559/photo/cajun-seasoned-french-fries.jpg?s=612x612&w=0&k=20&c=LM_SvCTbSsUTHSJSWOxzsyolo9YbDeNAXTibip4n1O4="
   )


   sides.addSection();

   const sideOptions = document.createElement("div");
   const sidePara = document.createElement("p");
   sidePara.textContent = "Cheese Fries - $1.00";
   const sidePara2 = document.createElement("p");
   sidePara2.textContent = "Spicy Mayo or Garlic Aioli - $0.75";
   sideOptions.append(sidePara, sidePara2);
   sideOptions.className = "additional-items-container";


   retrieveFood("Sides");


   const pizza = new menuSection(
       "Pizza",
       "https://media.istockphoto.com/id/1083487948/photo/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-concrete-background-top.jpg?s=612x612&w=0&k=20&c=E5rcp7F5y3SII4AYFmxFfcnkh6_LtVO4dzvjJDkXook="
   )


   pizza.addSection();


   retrieveFood("Pizza");


   const pizzaToppings = document.createElement("div");
   const pizzaToppingsPara = document.createElement("p");
   pizzaToppingsPara.textContent = "Toppings: $2 each";
   const pizzaToppingsPara2 = document.createElement("p");
   pizzaToppingsPara2.textContent = "Sausage ~ Pepperoni ~ Fresh Mushroom ~ Green Pepper ~ Garlic ~ Onion ~ Black Olive ~ Anchovies ~ Broccoli ~ Meatball ~ Salami ~ Bacon ~ Extra Cheese ~ Fra Diablo ~ Sliced Hot Cherry Peppers";
   pizzaToppings.append(pizzaToppingsPara, pizzaToppingsPara2);
   pizzaToppings.className = "additional-items-container";


   const gourmetToppings = document.createElement("div");
   const gourmetToppingsPara = document.createElement("p");
   gourmetToppingsPara.textContent = "Gourmet Toppings: $2.50 each";
   const gourmetToppingsPara2 = document.createElement("p");
   gourmetToppingsPara2.textContent = "Eggplant ~ Sun-Dried Tomato ~ Spinach ~ Fresh Tomato Slices ~ Artichokes ~ Pineapple ~ Roasted Red Pepper ~ Fresh Basil ~ Hot Honey";
   gourmetToppings.append(gourmetToppingsPara, gourmetToppingsPara2);
   gourmetToppings.className = "additional-items-container";

   container.appendChild(pizzaToppings);

   container.appendChild(gourmetToppings);


   const specialtyPie = new menuSection(
       "Specialty Pie",
       "https://thumbs.dreamstime.com/b/specialty-pizza-toppings-fresh-medium-size-extra-hot-fresh-out-oven-shallow-depth-field-32244068.jpg"
   )


   specialtyPie.addSection();


   retrieveFood("Specialty Pie");


   const specialtyPieOptions = document.createElement("div");
   const specialtyPiePara = document.createElement("p");
   specialtyPiePara.textContent = `Ranch Drizzle - $0.50`;
   const specialtyPiePara2 = document.createElement("p");
   specialtyPiePara2.textContent = "Gluten-Free Crust - $2.00";
   specialtyPieOptions.append(specialtyPiePara, specialtyPiePara2);
   specialtyPieOptions.className = "additional-items-container";


   container.appendChild(specialtyPieOptions);


   const glutenFree = new menuSection(
       "Gluten Free",
       "https://heatherchristo.com/wp-content/uploads/2015/01/Creamy-Sun-dried-tomato-Pasta-with-Spicy-Chicken-Sausage.jpg"
   )


   glutenFree.addSection();


   retrieveFood("Gluten Free");


   const allergens = document.createElement("div");
   const allergensPara = document.createElement("p");
   allergensPara.textContent = "Gluten-Free Pasta - $2.00";
   const allergensPara2 = document.createElement("p");
   allergensPara2.textContent = "Gluten-Free Bun - $2.00";
   allergens.append(allergensPara, allergensPara2);
   allergens.className = "additional-items-container";


   container.appendChild(allergens);


   const kids = new menuSection(
       "Kids",
       "https://media.istockphoto.com/id/547133980/photo/macaroni-and-cheese-background.jpg?s=612x612&w=0&k=20&c=D3jViAaJtVI1Oi-AWNGcHNqLsbk10Wi_zKimkG-1NTg="
   )


   kids.addSection();


   retrieveFood("Kids");


   const guestsAge = document.createElement("div");
   const guestsScript = document.createElement("p");
   guestsScript.textContent = "Juice Box - $1.00";
   guestsAge.appendChild(guestsScript);
   guestsAge.className = "additional-items-container";


   container.appendChild(guestsAge);
};


let foodArray = [];


function retrieveFood(type) {
   for (let i = 0; i < foodArray.length; i++) {
       const formatted = type
       .toLowerCase()
       .split(" ")
       .join("-");
       let menuItem = foodArray[i];
       if (menuItem.type == formatted) {
           const itemContainer = document.createElement("div");
           itemContainer.className = "food-item-container";
           const nameAndPrice = document.createElement("div");
           nameAndPrice.className = "food-item-top-header";
           const descriptionBox = document.createElement("div");
           descriptionBox.className = "food-item-bottom-header";
           const description = document.createElement("span");
           if (typeof menuItem.description === "string") {
               description.textContent = menuItem.description;
           }
           const nameSpan = document.createElement("span");
           nameSpan.textContent = menuItem.name;
           nameSpan.className = "food-item-name";
           const separatorLine = document.createElement("span");
           separatorLine.className = "separator-line";
           const price = document.createElement("span");
           price.className = "item-price";
           price.textContent = menuItem.price;


           const typeContainer = document.getElementById(`${type}-section`);


           descriptionBox.appendChild(description);
           nameAndPrice.append(nameSpan, separatorLine, price);
           itemContainer.append(nameAndPrice, descriptionBox);
           typeContainer.appendChild(itemContainer);


       }
   }
};




class menuSection {
   constructor(category, image) {
       this.category = category;
       this.image = image;
   }


   getFormatted() {
       return this.category
           .toLowerCase()
           .split(" ")
           .join("-");
   }


   addSection() {
       const menuSection = document.createElement("div");
       menuSection.className = "menu-section";
       menuSection.id = `${this.getFormatted()}Container`;


       const sectionHeader = document.createElement("h2");
       const sectionTitle = document.createElement("span");
       sectionTitle.textContent = this.category;


       sectionHeader.appendChild(sectionTitle);
       menuSection.appendChild(sectionHeader);
       const content = document.getElementById("content") || document.body;
       content.appendChild(menuSection);


       const backgroundWrapper = document.createElement("div");
       backgroundWrapper.className = "parallax-wrapper";


       const foodBackgroundImg = document.createElement("div");
       foodBackgroundImg.className = "food-background-img";
       foodBackgroundImg.setAttribute("data-parallax-speed", "2");
       foodBackgroundImg.style.backgroundImage = `url(${this.image})`;


       backgroundWrapper.appendChild(foodBackgroundImg);
       content.appendChild(backgroundWrapper);


       const section = document.createElement("div");
       section.id = `${this.category}-section`;
       section.className = "food-section";
       content.appendChild(section);
   }
}


class Food {
   constructor(name, type, description, price, addToMenu) {
       this.name = name;
       this.type = type;
       this.description = description;
       this.price = price;
       this.addToMenu = addToMenu;
  
       this.addToMenu();
   }


}


const friedCalamari = new Food(
   "Fried Calamari",
   "appetizers",
   "Lightly breaded with lemon and aioli",
   "10.99",
   function () {
       foodArray.push(this);
   }
);


const garlicBread = new Food(
   "Garlic Bread",
   "appetizers",
   "Toasted with herbed butter and parmesan",
   "5.99",
   function() {
       foodArray.push(this);
   }
)


const mozzSticks = new Food(
   "Mozzarella Sticks",
   "appetizers",
   "Crispy, golden, served with marinara",
   "8.99",
   function() {
       foodArray.push(this);
   }
)

const chxTenders = new Food(
   "Chicken Tenders",
   "appetizers",
   "Served with honey mustard",
   "9.99",
   function() {
       foodArray.push(this);
   }
)


const loadedNachos = new Food(
   "Loaded Nachos",
   "appetizers",
   "Cheddar, jalapeños, pico de gallo, sour cream",
   "11.49",
   function() {
       foodArray.push(this);
   }
)

const greekSalad = new Food(
   "Greek Salad",
   "soup-and-salad",
   "Feta, olives, cucumber, red onion, vinaigrette",
   "10.99",
   function() {
       foodArray.push(this);
   }
)

const caesarSalad = new Food(
   "Classic Caesar Salad",
   "soup-and-salad",
   "Romaine, parmesan, croutons, Caesar dressing",
   "9.49",
   function() {
       foodArray.push(this);
   }
)

const gardenSalad = new Food(
   "Garden Salad",
   "soup-and-salad",
   "Mixed greens, tomato, cucumber, onion",
   "7.99",
   function() {
       foodArray.push(this);
   }
)

const tomatoBasilSoup = new Food(
   "Tomato Basil Soup",
   "soup-and-salad",
   "Creamy and house-made",
   "6.99",
   function() {
       foodArray.push(this);
   }
)

const chxNoodleSoup = new Food(
   "Chicken Noodle Soup",
   "soup-and-salad",
   "Slow-cooked with fresh veggies",
   "6.99",
   function() {
       foodArray.push(this);
   }
)

const classicBurger = new Food(
   "Classic Cheeseburger",
   "burgers",
   "Lettuce, tomato, American cheese, brioche bun",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const baconBBQ = new Food(
   "Bacon BBQ Burger",
   "burgers",
   "Smoky BBQ sauce, crispy bacon, cheddar",
   "13.49",
   function() {
       foodArray.push(this);
   }
)


const mushroomSwiss = new Food(
   "Mushroom Swiss Burger",
   "burgers",
   "Sautéed mushrooms, melted Swiss",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const spicyJalaBurger = new Food(
   "Spicy Jalapeño Burger",
   "burgers",
   "Pepper jack, jalapeños, chipotle mayo",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const cheeseburger = new Food(
   "Veggie Black Bean Burger ",
   "burgers",
   "Avocado, lettuce, tomato, vegan bun",
   "11.49",
   function() {
       foodArray.push(this);
   }
)

const classicBLT = new Food(
   "Classic BLT",
   "sandwiches",
   "make it Irish for $2.00 extra",
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const trkySand = new Food(
   "Turkey Club",
   "sandwiches",
   "Roasted turkey, bacon, lettuce, tomato",
   "10.99",
   function() {
       foodArray.push(this);
   }
)


const grilledChz = new Food(
   "Grilled Cheese",
   "sandwiches",
   "Cheddar and mozzarella on sourdough",
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const tunaMelt = new Food(
   "Tuna Melt",
   "sandwiches",
   "Albacore tuna, Swiss, grilled rye",
   "9.99",
   function() {
       foodArray.push(this);
   }
)


const hamSwiss = new Food(
   "Ham & Swiss",
   "sandwiches",
   "Dijon mustard, lettuce, tomato",
   "10.49",
   function() {
       foodArray.push(this);
   }
)


const chxCaesarWrap = new Food(
   "Chicken Caesar Wrap",
   "sandwiches",
   "Grilled chicken, romaine, Caesar dressing",
   "10.99",
   function() {
       foodArray.push(this);
   }
)

const chzSteak = new Food(
   "Philly Cheesesteak",
   "specialty-sandwiches",
   "Shaved steak, onions, provolone",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const bfChxWrap = new Food(
   "Buffalo Chicken Wrap",
   "specialty-sandwiches",
   "Spicy tenders, ranch, lettuce",
   "11.49",
   function() {
       foodArray.push(this);
   }
)

const bbqPPork = new Food(
   "BBQ Pulled Pork",
   "specialty-sandwiches",
   "Slow-roasted, house BBQ sauce, pickles",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const capPanini = new Food(
   "Caprese Panini",
   "specialty-sandwiches",
   "Fresh mozzarella, tomato, basil pesto",
   "10.49",
   function() {
       foodArray.push(this);
   }
)

const cubanSand = new Food(
   "Cuban Sandwich",
   "specialty-sandwiches",
   "Pork, ham, Swiss, pickles, mustard",
   "11.99",
   function() {
       foodArray.push(this);
   }
)

const ribeye = new Food(
   "Ribeye Steak (12 oz)",
   "meats",
   "Grilled to order with garlic herb butter",
   "22.99",
   function() {
       foodArray.push(this);
   }
)


const gChxBreast = new Food(
   "Grilled Chicken Breast",
   "meats",
   "Marinated and served with vegetables",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const bBackRibs = new Food(
   "Baby Back Ribs (Half Rack)",
   "meats",
   "House BBQ glaze, fall-off-the-bone tender",
   "17.99",
   function() {
       foodArray.push(this);
   }
)

const meatLoaf = new Food(
   "Meatloaf Dinner",
   "meats",
   "Classic style with brown gravy",
   "13.99",
   function() {
       foodArray.push(this);
   }
)

const porkChops = new Food(
   "Pork Chops",
   "meats",
   "Pan-seared and seasoned",
   "15.49",
   function() {
       foodArray.push(this);
   }
)

const fishChips = new Food(
   "Fish & Chips",
   "fish",
   "Beer-battered cod, tartar sauce",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const grilledSalmon = new Food(
   "Grilled Salmon",
   "fish",
   "Lemon dill sauce, served with rice",
   "17.99",
   function() {
       foodArray.push(this);
   }
)


const shrimpScampi = new Food(
   "Shrimp Scampi",
   "fish",
   "Garlic butter, linguine pasta",
   "16.99",
   function() {
       foodArray.push(this);
   }
)

const blackTilapia = new Food(
   "Blackened Tilapia",
   "fish",
   "Cajun spice, fresh lime",
   "15.49",
   function() {
       foodArray.push(this);
   }
)


const seafoodPlatter = new Food(
   "Seafood Platter",
   "fish",
   "Shrimp, scallops, cod, hush puppies",
   "19.99",
   function() {
       foodArray.push(this);
   }
)

const spaghettiMarinara = new Food(
   "Spagetti Marinara",
   "italian",
   "House tomato sauce, fresh basil",
   "11.49",
   function() {
       foodArray.push(this);
   }
)


const chxParm = new Food(
   "Chicken Parmesan ",
   "italian",
   "Breaded cutlet, mozzarella, spaghetti",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const fettAlfredo = new Food(
   "Fettuccine Alfredo ",
   "italian",
   "Creamy Alfredo, optional chicken or shrimp",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const lasagna = new Food(
   "Lasagna",
   "italian",
   "Layered pasta with beef and ricotta",
   "14.99",
   function() {
       foodArray.push(this);
   }
)

const eggRollatini = new Food(
   "Eggplant Rollatini",
   "italian",
   "Stuffed with cheese, baked in sauce",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const frenchFries = new Food(
   "French Fries",
   "sides",
   0,
   "3.99",
   function() {
       foodArray.push(this);
   }
)


const onionRings = new Food(
   "Onion Rings",
   "sides",
   0,
   "4.49",
   function() {
       foodArray.push(this);
   }
)


const sideCaesar = new Food(
   "Side Caesar Salad",
   "sides",
   0,
   "4.99",
   function() {
       foodArray.push(this);
   }
)


const coleslaw = new Food(
   "Coleslaw",
   "sides",
   0,
   "3.49",
   function() {
       foodArray.push(this);
   }
)

const sweetPoFries = new Food(
   "Sweet Potato Fries",
   "sides",
   0,
   "4.49",
   function() {
       foodArray.push(this);
   }
)


const mediumPie = new Food(
   `12” Medium Pie`,
   "pizza",
   0,
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const largePie = new Food(
   `16” Large Pie`,
   "pizza",
   0,
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const meatLovers = new Food(
   "Meat Lovers",
   "specialty-pie",
   "Pepperoni, sausage, bacon, ham",
   "17.99",
   function() {
       foodArray.push(this);
   }
)


const margherita = new Food(
   "Margherita",
   "specialty-pie",
   "Fresh mozzarella, basil, tomato",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const vegSupreme = new Food(
   "Veggie Supreme",
   "specialty-pie",
   "Peppers, onions, mushrooms, olives",
   "16.49",
   function() {
       foodArray.push(this);
   }
)


const bbqChxPiz = new Food(
   "BBQ Chicken",
   "specialty-pie",
   "Grilled chicken, BBQ sauce, red onion",
   "17.49",
   function() {
       foodArray.push(this);
   }
)


const whitePizza = new Food(
   "White Pie",
   "specialty-pie",
   "Ricotta, garlic, mozzarella, spinach",
   "16.99",
   function() {
       foodArray.push(this);
   }
)

const gfCheesePizza = new Food(
   `GF Cheese Pizza (10")`,
   "gluten-free",
   0,
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const gChxPlate = new Food(
   "Grilled Chicken Plate",
   "gluten-free",
   0,
   "14.49",
   function() {
       foodArray.push(this);
   }
)

const gfpasta = new Food(
   "GF Pasta with Marinara",
   "gluten-free",
   0,
   "12.49",
   function() {
       foodArray.push(this);
   }
)


const gfMixSalad = new Food(
   "Mixed Green Salad",
   "gluten-free",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)

const bunlessBrgr = new Food(
   "Bunless Burger",
   "gluten-free",
   0,
   "10.99",
   function() {
       foodArray.push(this);
   }
)


const kidsPizza = new Food(
   "Kids Cheese Pizza",
   "kids",
   0,
   "7.49",
   function() {
       foodArray.push(this);
   }
)


const kidsChxTendsFries = new Food(
   "Chicken Tenders & Fries",
   "kids",
   0,
   "6.99",
   function() {
       foodArray.push(this);
   }
)


const kidsMacChz = new Food(
   "Mac & Cheese",
   "kids",
   0,
   "5.99",
   function() {
       foodArray.push(this);
   }
)

const kidsBurger = new Food(
   "Kids Burger",
   "kids",
   0,
   "6.99",
   function() {
       foodArray.push(this);
   }
)

const kidsSpgMtballs = new Food(
   "Spaghetti & Meatballs",
   "kids",
   0,
   "7.49",
   function() {
       foodArray.push(this);
   }
)