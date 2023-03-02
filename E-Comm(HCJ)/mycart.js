// displaying th eproducts========

const data = JSON.parse(localStorage.getItem('cart'))
console.log(data);
let productDiv = document.getElementById('cartPrdtWrapper')

let productCards;
let products = data
productCards = products.map((product) => {
    return displayCard(product);
})

productDiv.innerHTML = productCards.join("")

productDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove_item')) {
      const id = event.target.getAttribute('data-product-id');
      const index = data.findIndex((product) => product.id == id);
      if (index !== -1) {
        data.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(data));
        productCards = data.map(product => displayCard(product));
        productDiv.innerHTML = productCards.join("");
      }
    }
  });

//=====>>>>>>>>function to display card<<<<<=======//

function displayCard(product){
    return `
            <div class="prdt_card">
                <div class="prdt_img" id="prdtImg">
                    <img src="${product.image}" alt="" class="image" id="IMAGE">
                </div>
                <div class="prdt_contents" id="prdtContents">
                    <p class="prdt_title" id="prdtTitle">${product.title.split(" ").splice(0, 3).join(" ")}</p>
                    <p class="price" id="PRICE">Price: ${product.price}</p>
                    <p class="rating" id="rate">Rating: ${product.rating["rate"]}</p>
                    <p class="count" id="COUNT">Count: ${product.rating["count"]}</p>
                </div>
                <div class="btn" id="BTN">
                    <button class="remove_item" data-product-id=${product.id} id="removeItem">REMOVE</button>
                </div>
            </div>
            `
}
//======>>>>>>>>navbar navigation<<<<<<<<=========//

const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')
const shop = document.getElementById('listItemShop')

home.addEventListener("click", () => {
    window.location.href = "index.html"
})

login.addEventListener("click", () => {
    window.location.href = "login.html"
})
signup.addEventListener("click", () => {
    window.location.href = "signup.html"
})

const user = JSON.parse(localStorage.getItem('currentUser'))
myprofile.addEventListener("click", () => {
    if (user) {
        window.location.href = 'myprofile.html'
    } else {
        alert("LogIn first")
    }

})
mycart.addEventListener("click", () => {
    if (user) {
        window.location.href = 'mycart.html'
    } else {
        alert("LogIn first")
    }

})

shop.addEventListener("click", () => {
    if (user) {
        window.location.href = 'shop.html'
    } else {
        alert("LogIn first")
    }

})
