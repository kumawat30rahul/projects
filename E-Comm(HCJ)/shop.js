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
let products;
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      let sizes = ['S','M','L','XL']
      let colours = ['red','blue','black'];
      
        data = data.map(product => {
          
          return {
            ...product,
            sizes: sizes[Math.round(Math.random()*4)],
            colours: colours[Math.round(Math.random()*3)]
          }
        })
        
        products = data
        console.log(products);
        tofilterData = data;
        productCards = products.map(product => {
          return createProductCard(product)
        })
        productDiv.innerHTML = productCards.join("")

        //=======>>>>>>>adding to cart<<<<<<<<============//

        const cart = JSON.parse(localStorage.getItem('cart')) || []
        productDiv.addEventListener('click', (event) => {
          const addToCartBtn = event.target.closest('#addToCart');
          if (addToCartBtn) {
            const id = addToCartBtn.getAttribute('data-product-id');
            const product = data.find((product) => product.id == id);
            if (product) {
              addToCartBtn.style.backgroundColor = 'green'
              cart.push(product);
              localStorage.setItem('cart', JSON.stringify(cart));
            }
          }
        });

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
console.log(filterArray);
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
  let filteredproducts = tofilterData.slice();

  if (filterValues.length === 0) {
    products = tofilterData.slice();
  } else {
    const sizeArray = filter_values.filter(values => {
      return values === 'S' || values === 'M' || values === 'L' || values === 'XL'
     })
    console.log(sizeArray);
    if (sizeArray && sizeArray.length > 0) {
      filteredproducts = filteredproducts.filter((product) => {
        return sizeArray.includes(product.sizes)
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
    const colourArray = filter_values.filter(values => {
      return values === 'red' || values === 'blue'|| values === 'black';
    })
    console.log(colourArray);
    if (colourArray && colourArray.length > 0) {
      filteredproducts = filteredproducts.filter(product => {
        return colourArray.includes(product.colours)
      })
    }
  }

  products = filteredproducts;
  productCards = products.map(product => createProductCard(product));
  productDiv.innerHTML = productCards.join("");
}

//========>>>> searchbar functionality<<<<========//
let searchBarFilter = document.getElementById('searchIcon')
let searchInputValueFunction = document.getElementById('searchBar')

let newProducts;
searchInputValueFunction.addEventListener("keyup",() => {
  let searchInputValue = document.getElementById('searchBar')
  productDiv.innerHTML = "";
  let searchValue = searchInputValue.value
  products = tofilterData
  products = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase())
  })
  products.sort()
  newProducts = products.map(product => createProductCard(product))
  productDiv.innerHTML = newProducts.join("");
})


//======>>>>>>>>navbar navigation<<<<<<<<=========//

const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')

const shop = document.getElementById('listItemShop')

home.addEventListener("click", () => {
    location.reload()
})

login.addEventListener("click", () => {
    alert("Logout first")
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