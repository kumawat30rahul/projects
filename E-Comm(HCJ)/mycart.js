// displaying th eproducts========

const data = JSON.parse(localStorage.getItem('cart')) //------------->>>>> accessing the cart data through localstorage

let productDiv = document.getElementById('cartPrdtWrapper')
let checkOutDiv = document.getElementById('checkPrice')
let total = document.getElementById('Total')

let productPrices;
let productCards;
let products = data

if(data){                                           //------------>>>>if data is found displaying the products and prices
    productCards = products.map((product) => {      //------------>>>> products
        return displayCard(product);
    })
    productDiv.innerHTML = productCards.join("")
    
    productPrices = products.map((product,index) => { //------------->>>> prices
        return displayPrice(product,index+1)
    })
    checkOutDiv.innerHTML = productPrices.join("")
     
    let totalPrice = cartPrice();                    //------------->>>>> calling the total price function
    total.innerText = `$${totalPrice.toFixed(2)}`
}

//----------->>>>> remove button functionality <<<<<<---------------//

productDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove_item')) { //---------- accessssing the remove button

        const id = event.target.getAttribute('data-product-id');
        const index = data.findIndex((product) => product.id == id); //------ fincdint th eproduct id after clicking on the button

        if (index !== -1) {
            data.splice(index, 1); //---- removing the products and mapping afterwards
            localStorage.setItem('cart', JSON.stringify(data));

            productCards = data.map(product => displayCard(product));
            productPrices = data.map((product,index) => displayPrice(product,index+1));

            totalPrice = cartPrice();
            total.innerText = `$${totalPrice.toFixed(2)}`

            productDiv.innerHTML = productCards.join("");
            checkOutDiv.innerHTML = productPrices.join("")
        }
    }
});

//=====>>>>>>>>function to display card<<<<<=======//

function displayCard(product) {
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
//=====>>>>>>>>function to display the p[rice of the cards<<<<<<=====//

function displayPrice(product,index) {
    
    return `
        <div class="checkou_prdt_price" id="checkoutPrdtPrice">
            <p class="serial_number" id="serialNumber">${index}.</p>
            <div class="name_price" id="namePrice">
                <p class="name" id="Name">${product.title.split(" ").splice(0, 3).join(" ")}</p>
                <p class="price" id="Price">$${product.price}</p>
            </div>
        </div>
    `
}
//=======>>>>>>function to calculate total of the cart<<<<<<=======//
function cartPrice() {
    return data.reduce((sum, product) => {
        return sum + product.price
    }, 0)
}
//=======>>>>>>>payment process<<<<<<<<<==========//

let paymentAmount = cartPrice();
document.getElementById("checkOutbtn").onclick = function (e) {
    console.log("wroking");
    var options = {
      key: "rzp_test_9OXl2wK2vH03Va", // Enter the Key ID generated from the Dashboard
      amount: paymentAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#000",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        handler: function (response) {
            // Redirect the user to the shop.html page after the payment is completed
            window.location.href = "shop.html";
          },
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    e.preventDefault();
  };
//======>>>>>>>>navbar navigation<<<<<<<<=========//

const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')
const shop = document.getElementById('listItemShop')

home.addEventListener("click", () => {
    window.location.href = "shop.html"
})

login.addEventListener("click", () => {
    window.location.href = "login.html"
})
signup.addEventListener("click", () => {
    alert("Logout First to sign up")
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
