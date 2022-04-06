const dom = (function () {
    let addElement = function (elementType, parentNode, classWanted) {
        let elementWanted =  document.createElement(elementType)
        let parent = document.querySelector(parentNode)
        elementWanted.classList.add(classWanted);
        parent.appendChild(elementWanted);
        return elementWanted;
    };
    return {addElement};
})();

const pageLoad = function () {
    let header = dom.addElement("header", "#content", "header");
    let restaurantName = dom.addElement("div", ".header", "restaurantName");
    restaurantName.textContent = "Moby Chic"
    let tabs = dom.addElement("nav", ".header", "tabs");
    let homeTab = dom.addElement("div", ".tabs", "homeTab");
    homeTab.textContent = "home";
    homeTab.classList.add("selected");
    let menuTab = dom.addElement("div", ".tabs", "menuTab");
    menuTab.textContent = "menu";
    let contactTab = dom.addElement("div", ".tabs", "contactTab");
    contactTab.textContent = "contact";
    let main = dom.addElement("main", "#content", "main");
    tabs.childNodes.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.textContent === "home") {
                homeModule.showHome();
                homeTab.classList.add("selected");
                menuTab.classList.remove("selected");
                contactTab.classList.remove("selected");
            } else if (tab.textContent === "menu") {
                menuModule.showMenu();
                homeTab.classList.remove("selected");
                menuTab.classList.add("selected");
                contactTab.classList.remove("selected");
            } else if (tab.textContent === "contact") {
                contactModule.showContact();
                homeTab.classList.remove("selected");
                menuTab.classList.remove("selected");
                contactTab.classList.add("selected");
            }
        })
    })
    homeModule.showHome();
};

const homeModule = (function() {
    const showHome = () => {
        let main = document.querySelector(".main");
        main.replaceChildren("");
        let homeMessage = dom.addElement("div", ".main", "homeMessage")
        homeMessage.textContent = "Welcome to Moby Chic, where you will be eating as whale as you *don't* feel right now reading this sentence. " + 
         "Seriously though, check our menu tab and be amazed at the delicious offerings within.";
    };
    return {showHome};
})();

const menuModule = (function () {
    const dishFactory = (name, image) => {
        this.name = name,
        this.image = image
    };
    let roastedPigeons = Object.create(dishFactory, {
        "name": {value: "Delicious Roasted Pigeons"},
        "image": {value: "../src//img/roastedPigeon.jpg"}
    });
    let pigeonPie = Object.create(dishFactory, {
        "name": {value: "Exquisite Pigeon Pie"},
        "image": {value: "../src//img/pigeonPie.png"}
    });
    let pigeonAuPain = Object.create(dishFactory, {
        "name": {value: "Mysterious Pigeon Au Pain d'Épices"},
        "image": {value: "../src/img/pigeonAuPain.png"}
    });

    let dishes = [roastedPigeons, pigeonPie, pigeonAuPain];


    const showMenu = () => {
        let main = document.querySelector(".main");
        main.replaceChildren("");
        let menuMessage = dom.addElement("div", ".main", "menuMessage")
        menuMessage.textContent = "At our restaurant, you may order:";
        dishes.forEach((item, index) => {
            let dishDiv = dom.addElement("div", ".main", "dishDiv");
            let dishName = document.createElement("p");
            dishName.classList.add("dishName");
            dishDiv.appendChild(dishName);
            dishName.textContent = `${item.name}`;
            let dishImage = document.createElement("img");
            dishImage.classList.add("dishImage");
            dishImage.setAttribute("src", `${item.image}`);
            dishDiv.appendChild(dishImage);
            console.log(dishImage.src);
        })
    };
    return {showMenu};
})();

const contactModule = (function () {
    const showContact = () => {
        let main = document.querySelector(".main");
        main.replaceChildren("");
        let contactMessage = dom.addElement("div", ".main", "menuMessage")
        contactMessage.textContent = "If you wish to get in contact, don't hesitate to send a pigeon to the following coordinates: x: 69º, y: 420º.";
    };
    return {showContact};
})();

export {pageLoad, homeModule, menuModule, contactModule};