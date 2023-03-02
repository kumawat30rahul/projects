// displaying th eproducts========
let productDiv = document.getElementById('productsWrapper')
//=====>>>>>>>card function<<<<<=========//
function createProductCard(product) {
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
          <button class="add_tocart" data-product-id=${product.id} id="addToCart">ADD TO CART</button>
        </div>
      </div>
    `;
}
//===>>>>>fetching the data<<<<===//
let productCards;
let tofilterData;
let products
fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        products = data
        tofilterData = data;
        productCards = products.map(product => createProductCard(product))
        productDiv.innerHTML = productCards.join("")

        //=======>>>>>>>adding to cart<<<<<<<<============//
        let addToCartBtns = document.querySelectorAll('#addToCart')
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        addToCartBtns.forEach((addToCartBtn) => {
            const id = addToCartBtn.getAttribute('data-product-id')
            const product = data.find((product) => product.id == id)
            if (product) {
                addToCartBtn.addEventListener("click", () => {
                    console.log("working");
                    addToCartBtn.style.backgroundColor = 'green'
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart))
                })
            }
        })

    })



//=====>>>>>>>>filtering Button filter function<<<<<<========//
const allButton = document.getElementById('searchCatBtn');
allButton.addEventListener("click", () => showProducts());

const mensButton = document.getElementById('searchCatBtnM');
mensButton.addEventListener("click", () => showProducts("men's clothing"));

const womensButton = document.getElementById('searchCatBtnW');
womensButton.addEventListener("click", () => showProducts("women's clothing"));

const jewelleryButton = document.getElementById('searchCatBtnJ');
jewelleryButton.addEventListener("click", () => showProducts("jewelery"));

const electronicsButton = document.getElementById('searchCatBtnE');
electronicsButton.addEventListener("click", () => showProducts("electronics"));

function showProducts(category) {
    productDiv.innerHTML = "";
    console.log("working");
    if (category) {
        products = tofilterData.filter((product) => {
            return product.category === category;
        });
    } else {
        products = tofilterData;
    }
    productCards = products.map(product => createProductCard(product));
    productDiv.innerHTML = productCards.join("");
}
//======>>>>>>>>filter function<<<<<<<<<=========//
const filterArray = document.querySelectorAll('[type=checkbox]')
let filterValues = []

filterArray.forEach(filter => {
  filter.addEventListener("change", (e) => {
    if (e.target.checked) {
      let value = filter.value
      filterValues.push(value)
      filterShowCategory(filterValues)
    } else {
      const index = filterValues.indexOf(e.target.value);
      if (index !== -1) {
        filterValues.splice(index, 1);
        filterShowCategory(filterValues);
      }
    }
  })
})

function filterShowCategory(filter_values) {
  productDiv.innerHTML = "";
  let filteredproducts = tofilterData;

  if (filterValues.length === 0) {
    products = tofilterData
  } else {
    const categoryArray = filter_values.filter(values => {
      return !values.includes("-")
    })
    if (categoryArray && categoryArray.length > 0) {
      filteredproducts = filteredproducts.filter((product) => {
        return categoryArray.includes(product.category)
      });
    }

    const priceRangeArray = filter_values.filter(values => {
      return values.includes("-");
    })
    if (priceRangeArray && priceRangeArray.length > 0) {
      filteredproducts = filteredproducts.filter(product => {
        return priceRangeArray.some((range) => {
          const min = parseFloat(range.split("-")[0]);
          const max = parseFloat(range.split("-")[1]);
          return product.price >= min && product.price <= max
        })
      })
    }
    const rateRangeArray = filter_values.filter(values => {
      return values.includes("*");
    })
    if (rateRangeArray && rateRangeArray.length > 0) {
      filteredproducts = filteredproducts.filter(product => {
        return rateRangeArray.some((range) => {
          const min = parseInt(range.split("*")[0]);
          const max = parseInt(range.split("*")[1]);
          return product.rating["rate"] >= min && product.rating["rate"] <= max
        })
      })
    }
  }

  products = filteredproducts;
  productCards = products.map(product => createProductCard(product));
  productDiv.innerHTML = productCards.join("");
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