import "./menu.css";
import { containerFee, goIntoHeader} from "./content.js";


export default function menuPage(container) {
   goIntoHeader();


   const menuHeader = document.createElement("div");
   menuHeader.id = "menuHeader";


   const menuTopHeader = document.createElement("div");
   menuTopHeader.id = "menuTopHeader";


   const nelliesName = document.createElement("div");
   nelliesName.id = "nelliesMenuName";
   nelliesName.className = "menu-header-item";
   const viewMenuContainer = document.createElement("div");
   viewMenuContainer.className = "menu-header-item";
   viewMenuContainer.id = "viewMenuContainer";
   const menuImg = document.createElement("div");
   menuImg.className = "menu-header-item";
   menuImg.id = "menuImg";


   const nelliesHeadline = document.createElement("h1");
   nelliesHeadline.id = "nelliesHeadline";
   const nelliesText = document.createElement("span");
   nelliesText.textContent = "Nellie's Place";


   const viewMenu = document.createElement("div");
   viewMenu.id = "viewMenu";
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
   nelliesHeadline.appendChild(nelliesText);
   nelliesName.appendChild(nelliesHeadline);
   subtitle.appendChild(containerPara);
   menuTextHeader.appendChild(menuText);
   menuTitle.appendChild(menuTextHeader);
   sectionLine.appendChild(separator);
   menuTopHeader.append(nelliesName, viewMenuContainer, menuImg);
   menuBottomHeader.append(sectionLine, menuTitle, subtitle);
   menuHeader.append(menuTopHeader, menuBottomHeader);
   container.appendChild(menuHeader);


   const appetizers = new menuSection(
       "Appetizers",
       "https://nelliesplacenj.com/wp-content/uploads/2020/06/bacon-cheese-fries-2560X1380-1024x552.jpg"
   )


   appetizers.addSection();


   retrieveFood("Appetizers");


   const soupAndSalad = new menuSection(
       "Soup and Salad",
       "https://nelliesplacenj.com/wp-content/uploads/2020/10/salads-cropped-scaled.jpg"
   )


   soupAndSalad.addSection();


   retrieveFood("Soup and Salad");


   const additionalItemsContainer = document.createElement("div");
   const additionalItemsPara = document.createElement("p");
   additionalItemsPara.textContent = "Add Chicken to a Salad $4.00 ~ Add Steak to a Salad $6.00";
   const additionalItemsPara2 = document.createElement("p");
   additionalItemsPara2.textContent = "Add Shrimp to a Salad $6.00 ~ Add Salmon to a Salad $8.00 ~ Add Avocado to a Salad $2.50";
   additionalItemsContainer.append(additionalItemsPara, additionalItemsPara2);
   additionalItemsContainer.className = "additional-items-container";


   container.appendChild(additionalItemsContainer);


   const burgers = new menuSection(
       "Burgers",
       "https://nelliesplacenj.com/wp-content/uploads/2020/06/bacon-cheeseburger-2560x1380-1.jpg"
   )


   burgers.addSection();


   retrieveFood("Burgers");


   const lettuceTomatoContainer = document.createElement("div");
   const lettuceTomatoPara = document.createElement("p");
   lettuceTomatoPara.textContent = "Lettuce and Tomato upon request";
   lettuceTomatoContainer.appendChild(lettuceTomatoPara);
   lettuceTomatoContainer.className = "additional-items-container";


   container.appendChild(lettuceTomatoContainer);


   const sandwiches = new menuSection(
       "Sandwiches",
       "https://nelliesplacenj.com/wp-content/uploads/2020/12/IMG_6545cropped.jpg"
   )


   sandwiches.addSection();


   retrieveFood("Sandwiches");


   const breadOptions = document.createElement("div");
   const breadOptionsPara = document.createElement("p");
   breadOptionsPara .textContent = "Gluten free wraps or Round Rolls available for $3.00 additional";
   breadOptions.appendChild(breadOptionsPara);
   breadOptions.className = "additional-items-container";


   container.appendChild(breadOptions);


   const specialtySandwiches = new menuSection(
       "Specialty Sandwiches",
       "https://nelliesplacenj.com/wp-content/uploads/2020/12/panini-cropped.jpg"
   )


   specialtySandwiches.addSection();


   retrieveFood("Specialty Sandwiches");


   const xtraOptions = document.createElement("div");
   const xtraOptionsPara = document.createElement("p");
   xtraOptionsPara.textContent = "Gluten Free Wraps or Round Rolls available for $3.00 additional";
   const xtraOptionsPara2 = document.createElement("p");
   xtraOptionsPara2.textContent = "All Burgers and Sandwiches served with French Fries and Cole Slaw ~ Fruit substitution available";
   const xtraOptionsPara3 = document.createElement("p");
   xtraOptionsPara3.textContent = "Substitute Waffle Fries, Sweet Potato Fries, Onion Rings or Sauteed Spinach for $3.00 ~ with Side Salad $3.00 additional";
   xtraOptions.append(xtraOptionsPara, xtraOptionsPara2, xtraOptionsPara3);
   xtraOptions.className = "additional-items-container";


   container.appendChild(xtraOptions);


   const meats = new menuSection(
       "Meats",
       "https://nelliesplacenj.com/wp-content/uploads/2020/12/IMG_9731cropped.jpg"
   )


   meats.addSection();


   retrieveFood("Meats");


   const meatOptions = document.createElement("div");
   const meatOptionsPara = document.createElement("p");
   meatOptionsPara.textContent = "Above served with Side Salad and Choice of Potato, Rice or Linguini";
   const meatOptionsPara2 = document.createElement("p");
   meatOptionsPara2.textContent = "Substitute Waffle Fries, Sweet Potato Fries, Onion Rings or Sauteed Spinach for $3.00";
   meatOptions.append(meatOptionsPara, meatOptionsPara2);
   meatOptions.className = "additional-items-container";


   container.appendChild(meatOptions);


   const fish = new menuSection(
       "Fish",
       "https://nelliesplacenj.com/wp-content/uploads/2020/11/fish-and-chips-cropped-scaled.jpg"
   )


   fish.addSection();


   retrieveFood("Fish");


   const fishOptions = document.createElement("div");
   const fishOptionsPara = document.createElement("p");
   fishOptionsPara.textContent = "Above served with Side Salad and Choice of Potato, Rice or Linguini";
   const fishOptionsPara2 = document.createElement("p");
   fishOptionsPara2.textContent = "Substitute Waffle Fries, Sweet Potato Fries, Onion Rings or Sauteed Spinach for $3.00";
   fishOptions.append(fishOptionsPara, fishOptionsPara2);
   fishOptions.className = "additional-items-container";


   container.appendChild(fishOptions);


   const italian = new menuSection(
       "Italian",
       "https://nelliesplacenj.com/wp-content/uploads/2020/12/IMG_8225-cropped.jpg"
   )


   italian.addSection();


   retrieveFood("Italian");


   const italianOptions = document.createElement("div");
   const italianOptionsPara = document.createElement("p");
   italianOptionsPara.textContent = "Above servied with Side Salad";
   italianOptions.appendChild(italianOptionsPara);
   italianOptions.className = "additional-items-container";


   container.appendChild(italianOptions);


   const sides = new menuSection(
       "Sides",
       "https://nelliesplacenj.com/wp-content/uploads/2020/06/fries-2560x1380-1.jpg"
   )


   sides.addSection();


   retrieveFood("Sides");


   const pizza = new menuSection(
       "Pizza",
       "https://nelliesplacenj.com/wp-content/uploads/2020/06/pizza-2560x1380-1.jpg"
   )


   pizza.addSection();


   retrieveFood("Pizza");


   const pizzaToppings = document.createElement("div");
   const pizzaToppingsPara = document.createElement("p");
   pizzaToppingsPara.textContent = "TOPPINGS: $2 each";
   const pizzaToppingsPara2 = document.createElement("p");
   pizzaToppingsPara2.textContent = "Sausage ~ Pepperoni ~ Fresh Mushroom ~ Green Pepper ~ Garlic ~ Onion ~ Black Olive ~ Anchovy ~ Broccoli ~ Meatball ~ Salami ~ Bacon ~ Extra Cheese ~ Fra Diablo ~ Sliced Hot Cherry Peppers";
   pizzaToppings.append(pizzaToppingsPara, pizzaToppingsPara2);
   pizzaToppings.className = "additional-items-container";


   const gourmetToppings = document.createElement("div");
   const gourmetToppingsPara = document.createElement("p");
   gourmetToppingsPara.textContent = "GOURMET TOPPINGS: $2.50 each";
   const gourmetToppingsPara2 = document.createElement("p");
   gourmetToppingsPara2.textContent = "Eggplant ~ Sun-Dried Tomato ~ Spinach ~ Fresh Tomato Slices ~ Artichokes ~ Pineapple ~ Roasted Red Pepper ~ Fresh Basil ~ Hot Honey";
   gourmetToppings.append(gourmetToppingsPara, gourmetToppingsPara2);
   gourmetToppings.className = "additional-items-container";


   container.appendChild(gourmetToppings);


   const specialtyPie = new menuSection(
       "Specialty Pie",
       "https://nelliesplacenj.com/wp-content/uploads/2020/06/specialty-pizza-2560x1380-1.jpg"
   )


   specialtyPie.addSection();


   retrieveFood("Specialty Pie");


   const specialtyPieOptions = document.createElement("div");
   const specialtyPiePara = document.createElement("p");
   specialtyPiePara.textContent = `All Specialty Pizzas are Priced as a 14" Large Pie`;
   const specialtyPiePara2 = document.createElement("p");
   specialtyPiePara2.textContent = "Gluten Free available for $4.00 extra";
   specialtyPieOptions.append(specialtyPiePara, specialtyPiePara2);
   specialtyPieOptions.className = "additional-items-container";


   container.appendChild(specialtyPieOptions);


   const glutenFree = new menuSection(
       "Gluten Free",
       "https://nelliesplacenj.com/wp-content/uploads/2020/10/chicken-nuggets-gluten-free-cropped.jpg"
   )


   glutenFree.addSection();


   retrieveFood("Gluten Free");


   const allergens = document.createElement("div");
   const allergensPara = document.createElement("p");
   allergensPara.textContent = "While these products are Gluten Free, our kitchen is not.";
   const allergensPara2 = document.createElement("p");
   allergensPara2.textContent = "Please speak to a manager for allergen questions.";
   allergens.append(allergensPara, allergensPara2);
   allergens.className = "additional-items-container";


   container.appendChild(allergens);


   const kids = new menuSection(
       "Kids",
       "https://nelliesplacenj.com/wp-content/uploads/2020/11/Kids-chicken-nuggets-and-fries-cropped-scaled.jpg"
   )


   kids.addSection();


   retrieveFood("Kids");


   const guestsAge = document.createElement("div");
   const guestsScript = document.createElement("p");
   guestsScript.textContent = "For Guests Under 10";
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
   "hot, medium or sweet",
   "14.99",
   function () {
       foodArray.push(this);
   }
);


const buffaloCalamari = new Food(
   "Buffalo Calamari",
   "appetizers",
   "hot, medium or mild",
   "15.99",
   function() {
       foodArray.push(this);
   }
);


const chickenFingers = new Food(
   "Chicken Fingers",
   "appetizers",
   0,
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const buffChickenFingers = new Food(
   "Buffalo Chicken Fingers",
   "appetizers",
   "hot, medium, mild or Elkin style",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const friedMozz = new Food(
   "Fried Mozzarella",
   "appetizers",
   0,
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const pretzelBites = new Food(
   "Pretzel Bites",
   "appetizers",
   "With cheese sauce",
   "10.99",
   function() {
       foodArray.push(this);
   }
)


const soupOfTheDay = new Food(
   "Soup of the Day",
   "soup-and-salad",
   "cup",
   "4.99",
   function() {
       foodArray.push(this);
   }
)


const chzyFries = new Food(
   "Cheezy Fries",
   "appetizers",
   "with bacon",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const friedRavioli = new Food(
   "Fried Ravioli",
   "appetizers",
   0,
   "9.99",
   function() {
       foodArray.push(this);
   }
)


const chickenWings = new Food(
   "Chicken Wings",
   "appetizers",
   "buffalo or Elkin style",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const brdBnlssChxWings = new Food(
   "Breaded Boneless Chicken Wings",
   "appetizers",
   "Buffalo style",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const jalapenoPoppers = new Food(
   "Jalapeno Poppers",
   "appetizers",
   0,
   "9.99",
   function() {
       foodArray.push(this);
   }
)


const homeChili = new Food(
   "Homemade Chili",
   "appetizers",
   0,
   "9.49",
   function() {
       foodArray.push(this);
   }
)


const irishNachos = new Food(
   "Irish Nachos",
   "appetizers",
   "potato chips topped with corned beef, sauerkraut and Swiss cheese",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const nachos = new Food(
   "Nachos",
   "appetizers",
   "beef chili or grilled chicken",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const potatoSkins = new Food(
   "Potato Skins",
   "appetizers",
   0,
   "10.99",
   function() {
       foodArray.push(this);
   }
)


const friedZucchiniStx = new Food(
   "Fried Zucchini Sticks",
   "appetizers",
   0,
   "10.99",
   function() {
       foodArray.push(this);
   }
)


const garlicBreadParm = new Food(
   "Garlic Bread Parmesan",
   "appetizers",
   0,
   "5.99",
   function() {
       foodArray.push(this);
   }
)


const joeBite = new Food(
   "Joe-Joe Bites",
   "appetizers",
   "cheeseburger sliders",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const spinachArtDips = new Food(
   "Spinach Artichoke Dips",
   "appetizers",
   0,
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const bakedStfdClams = new Food(
   "Baked Stuffed Clams",
   "appetizers",
   0,
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const musselsMarinara = new Food(
   "Mussels Marinara",
   "appetizers",
   "hot, medium, sweet or scampi",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const buffaloShrimp = new Food(
   "Buffalo Shrimp",
   "appetizers",
   "sauteed hot, medium or mild",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const steamers = new Food(
   "Steamers",
   "appetizers",
   0,
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const theWorks = new Food(
   "The Works",
   "appetizers",
   "mozzarella sticks, fried ravioli, potato skins, broccoli & cheddar bites",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const scLinguini = new Food(
   "Shrimp & Clam Linguini",
   "appetizers",
   0,
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const clamsHalf = new Food(
   "Clams on the Half Shell",
   "appetizers",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const soupBowl = new Food(
   "Soup of the Day",
   "soup-and-salad",
   "bowl",
   "6.49",
   function() {
       foodArray.push(this);
   }
)


const frenchOnionSoup = new Food(
   "French Onion Soup",
   "soup-and-salad",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const dinnerSalad = new Food(
   "Dinner Salad",
   "soup-and-salad",
   "with French onion soup $1.00 additional",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const quicheDay = new Food(
   "Quiche of the Day",
   "soup-and-salad",
   0,
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const quicheSalad = new Food(
   "Quiche of the Day & Dinner Salad",
   "soup-and-salad",
   0,
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const greekSmall = new Food(
   "Greek Salad",
   "soup-and-salad",
   "iceburg lettuce, tomato, onion, pepper, cucumber, feta, olives, and anchovies - small",
   "9.99",
   function() {
       foodArray.push(this);
   }
)


const greekLarge = new Food(
   "Greek Salad",
   "soup-and-salad",
   "iceburg lettuce, tomato, onion, pepper, cucumber, feta, olives, and anchovies - large",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const caesarSmall = new Food(
   "Nellie's Caesar Salad",
   "soup-and-salad",
   "romaine with tomato wedges, cucumber, roasted red pepper and croutons - small",
   "9.99",
   function() {
       foodArray.push(this);
   }
)


const caesarLarge = new Food(
   "Nellie's Caesar Salad",
   "soup-and-salad",
   "romaine with tomato wedges, cucumber, roasted red pepper and croutons - large",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const classicSmall = new Food(
   "Classic Caesar Salad",
   "soup-and-salad",
   "romaine with parmesan cheese and croutons - small",
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const classicLarge = new Food(
   "Classic Caesar Salad",
   "soup-and-salad",
   "romaine with parmesan cheese and croutons - large",
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const grillBuffChxSalad = new Food(
   "Grilled Buffalo Chicken Salad",
   "soup-and-salad",
   "Buffalo chicken over iceburg lettuce with tomato wedges, chopped celery, carrot and crumbled bleu cheese",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const cobbSalad = new Food(
   "Cobb Salad",
   "soup-and-salad",
   "romaine with tomato, peppers, onions, bacon, hard-boiled egg and chicken",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const springMix = new Food(
   "Nellie's Spring Mix",
   "soup-and-salad",
   "arcadian harvest greens, crumbled bleu cheese, craisins, red onion, grape tomato and sliced almonds",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const spinachSalad = new Food(
   "Spinach Salad",
   "soup-and-salad",
   "spinach leaves with bacon, sliced mushroom, roasted pepper, red onion and hard boiled egg with balsamic vinaigrette",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const hangerSteakSalad = new Food(
   "Hanger Steak Salad",
   "soup-and-salad",
   "with red onion, tomato wedges and crumbled bleu cheese over baby arugula",
   "19.99",
   function() {
       foodArray.push(this);
   }
)


const texMexSalad = new Food(
   "Tex Mex Salad",
   "soup-and-salad",
   "breaded chicken, romaine, diced tomato, red onion, corn, black beans, sliced avocado, jalapeno, monterey jack cheese and tortilla strips with ranch dressing",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const mushroomBurger = new Food(
   "Mushroom, Onion & Swiss Burger",
   "burgers",
   0,
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const baconBleuBurger = new Food(
   "Bacon Bleu Cheeseburger",
   "burgers",
   0,
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const blackBeanBurger = new Food(
   "Black Bean Veggie Burger",
   "burgers",
   0,
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const montereyJackBurger = new Food(
   "Monterey Jack Avocado Burger",
   "burgers",
   "with tomato and red onion",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const bbqBurger = new Food(
   "Barbecue Burger",
   "burgers",
   "with barbecue sauce, cheddar, and red onion",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const cheeseburger = new Food(
   "Cheeseburger",
   "burgers",
   0,
   "14.49",
   function() {
       foodArray.push(this);
   }
)


const turkeyBurger = new Food(
   "Turkey Burger",
   "burgers",
   0,
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const rasherBurger = new Food(
   "Rasher Cheddar Burger",
   "burgers",
   "topped with cheddar & Irish bacon",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const deliSandwich = new Food(
   "Deli Sandwich",
   "sandwiches",
   "turkey, ham, roast beef, salami, tuna salad, corned beef or pastrami",
   "13.99",
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


const clubSandwich = new Food(
   "Club Sandwich",
   "sandwiches",
   "turkey,roast beef, tuna, or ham & cheese",
   "14.49",
   function() {
       foodArray.push(this);
   }
)


const grilledClub = new Food(
   "Grilled Chicken or Cheeseburger Club",
   "sandwiches",
   0,
   "15.49",
   function() {
       foodArray.push(this);
   }
)


const tunaMelt = new Food(
   "Tuna Melt",
   "sandwiches",
   0,
   "11.99",
   function() {
       foodArray.push(this);
   }
)


const chxBLT = new Food(
   "Breaded Chicken BLT",
   "sandwiches",
   "with spicy mayo",
   "15.49",
   function() {
       foodArray.push(this);
   }
)


const chxHero = new Food(
   "Nellie's Chicken Hero",
   "sandwiches",
   "chicken cutlet with brown gravy and mozzarella cheese",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const grilledCheese = new Food(
   "Grilled Cheese",
   "sandwiches",
   "add bacon, ham, or tomato $9.99",
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const chiliDogs = new Food(
   "Chili Cheese Dogs (2)",
   "sandwiches",
   0,
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const parmHero = new Food(
   "Parmesan Hero",
   "sandwiches",
   "chicken, meatball or eggplant",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const reuben = new Food(
   "Reuben",
   "sandwiches",
   "corned beef or pastrami",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const cheesesteak = new Food(
   "Philly Cheesesteak",
   "sandwiches",
   "with peppers, onions & mushrooms $1.00 extra",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const buffChxWrap = new Food(
   "Buffalo Chicken Wrap",
   "specialty-sandwiches",
   "hot, medium or mild with lettuce, tomato and ranch or bleu cheese",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const vegMozzWrap = new Food(
   "Grilled Vegetable & Fresh Mozzarella Wrap",
   "specialty-sandwiches",
   "grilled eggplant, squash and peppers with fresh mozzarella",
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const chxCaesarWrap = new Food(
   "Classic Chicken Caesar Wrap",
   "specialty-sandwiches",
   0,
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const bbqChxWrap = new Food(
   "BBQ Chicken Wrap",
   "specialty-sandwiches",
   "breaded barbeque chicken with bacon and cheddar cheese",
   "13.99",
   function() {
       foodArray.push(this);
   }
)


const chxFajitaPanini = new Food(
   "Chicken Fajita Panini",
   "specialty-sandwiches",
   "grilled chicken, cheddar cheese, peppers, onions, and fajita sauce",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const turkeyBLTWrap = new Food(
   "Turkey BLT Wrap",
   "specialty-sandwiches",
   0,
   "12.99",
   function() {
       foodArray.push(this);
   }
)


const frenchDipPanini = new Food(
   "French Dip Panini",
   "specialty-sandwiches",
   "roast beef, caramelized onions, swiss cheese, and a side of au jus",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const romaPanini = new Food(
   "Roma Panini",
   "specialty-sandwiches",
   "chicken, fresh mozzarella, tomato, basil and pesto mayonnaise",
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const poBoyCod = new Food(
   "Po Boy Cod Sandwich",
   "specialty-sandwiches",
   "fried cod, lettuce, tomato, pickle & remoulade",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const grilledChxSandwich = new Food(
   "Grilled Chicken Sandwich",
   "specialty-sandwiches",
   "grilled chicken with roasted peppers, fresh mozzarella & arugula on a brioche roll",
   "14.99",
   function() {
       foodArray.push(this);
   }
)




const danishBBRibs = new Food(
   "Danish Baby Back Ribs",
   "meats",
   "full rack",
   "22.99",
   function() {
       foodArray.push(this);
   }
)


const nyStripSteak = new Food(
   "New York Strip Steak (12 oz)",
   "meats",
   0,
   "29.99",
   function() {
       foodArray.push(this);
   }
)


const slicedSteakSandwich = new Food(
   "Sliced Steak Sandwich",
   "meats",
   "add mushrooms and onions OR served on garlic bread parmesan $1.00 extra",
   "23.99",
   function() {
       foodArray.push(this);
   }
)


const chickenCaprese = new Food(
   "Chicken Caprese",
   "meats",
   "tomato, fresh mozzarella & balsamic glaze",
   "21.99",
   function() {
       foodArray.push(this);
   }
)


const chickenDuffy = new Food(
   "Chicken Duffy",
   "meats",
   "sauteed chicken, broccoli, hot cherry peppers and garlic in oil",
   "21.99",
   function() {
       foodArray.push(this);
   }
)


const shepherdsPie = new Food(
   "Shepherd’s Pie",
   "meats",
   "made with ground lamb served with mashed potato",
   "20.99",
   function() {
       foodArray.push(this);
   }
)


const calvesLiver = new Food(
   "Calves Liver",
   "meats",
   "with bacon & onions",
   "10.99",
   function() {
       foodArray.push(this);
   }
)


const fishChips = new Food(
   "Fish & Chips",
   "fish",
   0,
   "21.99",
   function() {
       foodArray.push(this);
   }
)


const broiledSalmon = new Food(
   "Broiled Salmon",
   "fish",
   0,
   "24.99",
   function() {
       foodArray.push(this);
   }
)


const musselsDiavolo = new Food(
   "Mussels Fra Diavolo",
   "fish",
   "served over linguini",
   "22.99",
   function() {
       foodArray.push(this);
   }
)


const shrimpScampi = new Food(
   "Shrimp Scampi",
   "fish",
   "served over linguini",
   "22.99",
   function() {
       foodArray.push(this);
   }
)


const cavatelliSausageBroc = new Food(
   "Cavatelli, Sausage & Broccoli",
   "italian",
   0,
   "20.99",
   function() {
       foodArray.push(this);
   }
)


const eggplantParm = new Food(
   "Eggplant Parmesan",
   "italian",
   "with linguini",
   "20.99",
   function() {
       foodArray.push(this);
   }
)


const chickenWay = new Food(
   "Chicken Your Way",
   "italian",
   "marsala, francaise, vodka, plum tomato basil, parmesan or broccoli scampi sauce, with linguini",
   "21.99",
   function() {
       foodArray.push(this);
   }
)


const spaghettiMeatballs = new Food(
   "Spagetti & Meatballs",
   "italian",
   "marsala, francasie, vodka, plum tomato basil or broccoli scampi sauce with linguini",
   "16.99",
   function() {
       foodArray.push(this);
   }
)


const spaghettiMeatSauce = new Food(
   "Spaghetti with Meat Sauce",
   "italian",
   0,
   "16.99",
   function() {
       foodArray.push(this);
   }
)


const ravioliMarinara = new Food(
   "Ravioli Marinara",
   "italian",
   "meat or cheese",
   "15.99",
   function() {
       foodArray.push(this);
   }
)


const penneVodkaBasil = new Food(
   "Penne with Vodka or Plum Tomato Basil Sauce",
   "italian",
   0,
   "16.99",
   function() {
       foodArray.push(this);
   }
)


const bakedPotato = new Food(
   "Baked Potato",
   "sides",
   0,
   "4.49",
   function() {
       foodArray.push(this);
   }
)


const cajunFries = new Food(
   "Cajun Fries",
   "sides",
   0,
   "6.99",
   function() {
       foodArray.push(this);
   }
)


const sweetPotatoFries = new Food(
   "Sweet Potato Fries",
   "sides",
   0,
   "7.49",
   function() {
       foodArray.push(this);
   }
)


const onionRings = new Food(
   "Onion Rings",
   "sides",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const potatoChips = new Food(
   "Homemade Potato Chips",
   "sides",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const frenchFries = new Food(
   "French Fries",
   "sides",
   0,
   "6.99",
   function() {
       foodArray.push(this);
   }
)


const frenchFriesXtra = new Food(
   "French Fries",
   "sides",
   "with gravy or cheese",
   "7.49",
   function() {
       foodArray.push(this);
   }
)


const meatballsSausage = new Food(
   "Meatballs or Sausage",
   "sides",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const coleslaw = new Food(
   "Coleslaw",
   "sides",
   0,
   "3.99",
   function() {
       foodArray.push(this);
   }
)


const barPie = new Food(
   `12” Bar Pie`,
   "pizza",
   0,
   "12.00",
   function() {
       foodArray.push(this);
   }
)


const largePie = new Food(
   `14” Large Pie`,
   "pizza",
   0,
   "13.00",
   function() {
       foodArray.push(this);
   }
)


const california = new Food(
   "California",
   "specialty-pie",
   "Canadian bacon and pineapple",
   "17.00",
   function() {
       foodArray.push(this);
   }
)


const greekSaladPizza = new Food(
   "Greek Salad Pizza",
   "specialty-pie",
   "our plain cheese pie topped with iceberg lettuce, tomato, cucumber, onion, peppers, feta cheese and anchovies with vinaigrette dressing",
   "20.00",
   function() {
       foodArray.push(this);
   }
)


const grilledChickenPizza = new Food(
   "Grilled Chicken",
   "specialty-pie",
   "BBQ, buffalo sauce or with basil",
   "18.00",
   function() {
       foodArray.push(this);
   }
)


const whitePizza = new Food(
   "White Pizza",
   "specialty-pie",
   0,
   "16.50",
   function() {
       foodArray.push(this);
   }
)


const vegetablePizza = new Food(
   "Vegetable",
   "specialty-pie",
   "broccoli, onion, black olives, green peppers & mushrooms",
   "21.00",
   function() {
       foodArray.push(this);
   }
)


const rigatoniPizza = new Food(
   "Rigatoni Plum Tomato Basil",
   "specialty-pie",
   "plum tomato basil sauce, mozzarella, rigatoni and ricotta dollops",
   "20.00",
   function() {
       foodArray.push(this);
   }
)


const specialPizza = new Food(
   "Nellie’s Special",
   "specialty-pie",
   "a mix of our favorite toppings",
   "22.50",
   function() {
       foodArray.push(this);
   }
)


const meatLovers = new Food(
   "Meat Lovers",
   "specialty-pie",
   "pepperoni, meatball, sausage and bacon",
   "20.00",
   function() {
       foodArray.push(this);
   }
)


const margarita = new Food(
   "Margarita",
   "specialty-pie",
   "fresh tomato, basil, and fresh mozzarella",
   "20.50",
   function() {
       foodArray.push(this);
   }
)


const buffChxSpecial = new Food(
   "Buffalo Chicken Special",
   "specialty-pie",
   "breaded chicken, hot sauce, ranch dressing and celery",
   "22.00",
   function() {
       foodArray.push(this);
   }
)


const chxBaconRanch = new Food(
   "Chicken, Bacon & Ranch",
   "specialty-pie",
   0,
   "22.00",
   function() {
       foodArray.push(this);
   }
)


const vodkaMargherita = new Food(
   "Vodka Margherita",
   "specialty-pie",
   "pink vodka sauce, tomato, basil and fresh mozzarella",
   "21.00",
   function() {
       foodArray.push(this);
   }
)


const arugulaSaladPie = new Food(
   "Arugula Salad Pie",
   "specialty-pie",
   "arugula with crumbled bleu cheese, red onion & tomato",
   "22.00",
   function() {
       foodArray.push(this);
   }
)


const gfCheesePizza = new Food(
   "Gluten Free Cheese Pizza",
   "gluten-free",
   "toppings priced same as above",
   "17.00",
   function() {
       foodArray.push(this);
   }
)


const gfChickenNugs = new Food(
   "Gluten Free Chicken Nuggets",
   "gluten-free",
   0,
   "14.99",
   function() {
       foodArray.push(this);
   }
)


const gfChickenParm = new Food(
   "Gluten Free Chicken Parmesan",
   "gluten-free",
   "served with gluten free pasta",
   "26.99",
   function() {
       foodArray.push(this);
   }
)


const kidsChxParm = new Food(
   "Chicken Parmesan",
   "kids",
   0,
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const kidsChxFingers = new Food(
   "Chicken Fingers",
   "kids",
   0,
   "8.49",
   function() {
       foodArray.push(this);
   }
)


const kidsBurger = new Food(
   "Cheeseburger",
   "kids",
   0,
   "8.99",
   function() {
       foodArray.push(this);
   }
)


const kidsHotDog = new Food(
   "Hot Dog",
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
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const kidsRavioli = new Food(
   "Ravioli",
   "kids",
   "meat or cheese",
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const kidsSpaghetti = new Food(
   "Spaghetti & Meatball",
   "kids",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)


const kidsChxBroc = new Food(
   "Grilled Chicken & Broccoli",
   "kids",
   0,
   "7.99",
   function() {
       foodArray.push(this);
   }
)
