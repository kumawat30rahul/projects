let userData = JSON.parse(localStorage.getItem('userData')); //=======>>>>> getting user from localstorage to check if signedup or not

let currUser = {     //---------->>>>>>>>>>>>>>>>>>>> object for current user
    name: "",
    email: "",
    password: "",
    randomstring: ""
}
const currentUser = JSON.parse(localStorage.getItem('currentUser')) //=======>>>>> getting user from localstorage to check if logedin or not

if (currentUser) {
    window.location.href = "shop.html"  //=================>>>>>>>>> if loged in then redirect to shop page
} else {
    let loginBtn = document.getElementById('logIn')
    loginBtn.addEventListener("click", () => {
        if (!userData) {                                  //======>>>>>>>>>> if not signedup alert is shown
            alert("USER NOT FOUND!!! Sign Up first")
        } else {
            let loginEmail = document.getElementById('emailAddress').value
            let loginPassword = document.getElementById('password').value

            userData.forEach((user, index) => {
                if (loginEmail === user.email && loginPassword === user.password) {    //========>>>> password and email validation
                    window.location.href = "shop.html"                               //========>>>> redirection to shop page after login
                    alert("Login Success")

                    let uniqueString = randomStringGenerator()                      //========>>>> calling the random string generator function

                    currUser["name"] = userData[index].name                         /////////////////////////////////                            
                    currUser["email"] = userData[index].email                       /////////////////////////////////
                    currUser["password"] = userData[index].password                 //////updating the current user object and storing it in local storage so that next time the user comes they are directly redirected to shop page
                    currUser["randomstring"] = uniqueString                         /////////////////////////////////
                    localStorage.setItem('currentUser', JSON.stringify(currUser))    /////////////////////////////////

                } else {
                    if (loginEmail === "" && loginPassword === "") {
                        alert("Please provide valid email and password!")
                    } else if (loginEmail !== user.email) {
                        alert("Incorrect Email!")
                    } else if (loginPassword !== user.password) {
                        alert("Incorrect Password!")
                    }
                }
            })
        }
    })
}

////==============>>>>>>>>>>>>>>>>>random 12 character long string function<<<<<<<<<<<<<<==============//
function randomStringGenerator() {
    let uniqueString = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 10; i++) {
        uniqueString += characters.charAt(Math.round(Math.random() * characters.length))
    }
    return uniqueString
}

//======>>>>>>>>navbar navigation<<<<<<<<=========//

const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')
const shop = document.getElementById('listItemShop')

login.addEventListener("click", () => {
    location.reload()
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

home.addEventListener("click", () => {
    if (user) {
        window.location.href = 'shop.html'
    } else {
        alert("LogIn first")
    }
})