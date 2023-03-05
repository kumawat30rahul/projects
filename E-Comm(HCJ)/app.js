//===>>>>>displayin the product on home page<<<<<<<=========//

fetch('https://fakestoreapi.com/products') //////========>>>>>>>>> fetching data with fetch
    .then((response) => response.json())
    .then(data => {
        let title = document.getElementById('prdtTitle')  ///////////////////////////////
        let rating = document.getElementById('rate')      ///////////////////////////////
        let description = document.getElementById('DESC') /////// Accessing card elements for display
        let image = document.getElementById('IMAGE')      ///////////////////////////////
        let price = document.getElementById('PRICE')      ///////////////////////////////

        const product = data[3]
        title.innerText = product.title
        price.innerText = `Price: $${product.price}`
        rating.innerText = `Rating: ${product.rating["rate"]}`
        description.innerText = product.description.split(" ").splice(0,13).join(" ")
        image.src = product.image

    })

    //-------->>>>> buttons on home page and their navigation to respective pages <<<---------//    
    const loginBtn = document.getElementById("Login")
    const userData = JSON.parse(localStorage.getItem('userData'))
    loginBtn.addEventListener("click", ()=>{
            window.location.href = "login.html"
    })

    const signupBtn = document.getElementById("SignUp")
    signupBtn.addEventListener("click", ()=>{
        window.location.href = "signup.html"
    })

//======>>>>>>>>navbar navigation<<<<<<<<=========//

const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')
const shop = document.getElementById('listItemShop');

signup.addEventListener("click",()=>{
    window.location.href = "./SignupPage/signup.html"
})

const user = JSON.parse(localStorage.getItem('currentUser'))  //=======>>>>> getting user from localstorage to check if logedin or not

login.addEventListener("click",()=>{
    if(user){
        window.location.href = 'Shop/shop.html'
    }else{
        window.location.href = "LoginPage/login.html"
    }
})

myprofile.addEventListener("click",()=>{
    if(user){
        window.location.href = 'MyProfile/myprofile.html'
    }else{
        alert("LogIn first")
    }
    
})
mycart.addEventListener("click",()=>{
    if(user){
        window.location.href = 'MyCart/mycart.html'
    }else{
        alert("LogIn first")
    }
})

shop.addEventListener("click", () => {
    if (user) {
        window.location.href = 'Shop/shop.html'
    } else {
        alert("LogIn first")
    }
})

home.addEventListener("click",()=>{
    if(user){
        window.location.href = "Shop/shop.html"
    }else{
        alert("Login first")
    }
})