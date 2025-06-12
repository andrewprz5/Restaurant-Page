import {goIntoHeader, bizDscrptn2, phone, viewMenuText} from "./content.js";
import "./findus.css";

export default function findUs(container) {
    goIntoHeader();

    const h1Container = document.createElement("div");
    h1Container.className = "h1-container";
    h1Container.id = "h1Container";
    const h1 = document.createElement("h1");
    h1.className = "h1-tab";
    const span = document.createElement("span");
    span.textContent = "Find Us";

    container.appendChild(h1Container);
    h1Container.appendChild(h1);
    h1.appendChild(span);

    // GMAPS & owners

    const flexContainer = document.createElement("div");
    flexContainer.id = "findUsContainer";

    const googleMaps = document.createElement("div");
    googleMaps.id = "googleMaps";

    const iframe = document.createElement("iframe");
    iframe.setAttribute("loading", "lazy");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7640645905285!2d-74.12016968420164!3d41.00853697930085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e4872c7e400f%3A0x208d89c32db990b3!2sNellie's%20Place!5e0!3m2!1sen!2sus!4v1599767199545!5m2!1sen!2sus";
    iframe.setAttribute("width", "1200");
    iframe.setAttribute("height", "825");
    iframe.setAttribute("frameborder", "0");
    iframe.allowFullscreen = true;

    const ownersDiv = document.createElement("div");
    ownersDiv.className = "";
    ownersDiv.id = "ownersDiv";
    const ownersImg = document.createElement("img");
    ownersImg.id = "ownersImg";
    ownersImg.setAttribute("fetchpriority", "high");
    ownersImg.setAttribute("decoding", "async");
    ownersImg.src = "https://nelliesplacenj.com/wp-content/uploads/2020/09/Karen-Chris-2.jpg";
    ownersImg.alt = "Karen & Chris Martini - Nellie's Place";
    ownersImg.setAttribute("itemprop", "image");
    ownersImg.setAttribute("height", "1616");
    ownersImg.setAttribute("width", "702");
    ownersImg.srcset = "https://nelliesplacenj.com/wp-content/uploads/2020/09/Karen-Chris-2.jpg 702w, https://nelliesplacenj.com/wp-content/uploads/2020/09/Karen-Chris-2-130x300.jpg 130w, https://nelliesplacenj.com/wp-content/uploads/2020/09/Karen-Chris-2-445x1024.jpg 445w, https://nelliesplacenj.com/wp-content/uploads/2020/09/Karen-Chris-2-667x1536.jpg 667w";
    ownersImg.setAttribute("sizes", "(max-width: 702px) 100vw, 702px");
    ownersImg.title = "Karen & Chris";


    googleMaps.appendChild(iframe);
    ownersDiv.appendChild(ownersImg);
    flexContainer.append(googleMaps, ownersDiv);
    container.appendChild(flexContainer);

    //contact-form

    const contactFormContainer = document.createElement("div");
    contactFormContainer.id = "contactFormContainer";

    const contactFormH2 = document.createElement("h2");
    const contactFormSpan = document.createElement("span");
    contactFormSpan.textContent = "Contact Us";

    const formContainer = document.createElement("div");
    formContainer.id = "formContainer";
    const form = document.createElement("form");
    form.action = "/find-us/#wpcf7-f215-p200-o1";
    form.method = "post";
    form.noValidate = true;

    const errorDiv = document.createElement("div");
    errorDiv.id = "errorDiv";

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(!form.checkValidity()) {
            form.classList.add('invalid');
            errorDiv.textContent = "One or more fields have an error. Please check and try again.";
            errorDiv.style.display = "block";
            form.appendChild(errorDiv);
        } else {
            form.classList.remove('invalid');
            errorDiv.style.display = "none";
            form.submit();
        }
    });

    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name <br>";
    const nameInput = document.createElement("input");
    nameInput.size = "40";
    nameInput.maxLength = "400";
    nameInput.value = "";
    nameInput.type = "text";
    nameInput.name = "your-name";

    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email * <br>";
    const emailInput = document.createElement("input");
    emailInput.size = "40";
    emailInput.maxLength = "400";
    emailInput.value = "";
    emailInput.type = "email";
    emailInput.name = "your-email";

    const messageLabel = document.createElement("label");
    messageLabel.innerHTML = "Leave us a message <br>";
    const messageArea = document.createElement("textarea");
    messageArea.cols = "40";
    messageArea.rows = "10";
    messageArea.maxLength = "2000";
    messageArea.name = "your-message";

    const submitDiv = document.createElement("div");
    submitDiv.id = "submitDiv";
    const submitInput = document.createElement("input");
    submitInput.value = "Submit";
    submitInput.type = "submit";

    nameLabel.appendChild(nameInput);
    emailLabel.appendChild(emailInput);
    messageLabel.appendChild(messageArea);
    submitDiv.appendChild(submitInput);
    form.append(nameLabel, emailLabel, messageLabel, submitDiv);
    submitDiv.appendChild(submitInput);
    contactFormH2.appendChild(contactFormSpan);
    formContainer.appendChild(form);
    contactFormContainer.append(contactFormH2, formContainer);
    container.appendChild(contactFormContainer);

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
    
    const viewMenuAnchor = document.createElement("a");
    viewMenuAnchor.href = "https://nelliesplacenj.com/menu/";
    viewMenuAnchor.id = "menuLink";
    
    const viewMenuSpan = document.createElement("span");
    viewMenuSpan.textContent = viewMenuText;
    viewMenuAnchor.appendChild(viewMenuSpan);
    viewMenuDiv.appendChild(viewMenuAnchor);
    
    orderMenuDiv.append(placeOrderDiv, viewMenuDiv);
    container.appendChild(orderMenuDiv);


}