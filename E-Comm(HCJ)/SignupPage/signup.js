
const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/                                                  //------- Email regular expression
const newPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/      //------- Password regular expression
let registerBTN = document.getElementById('REGISTER') // signup button element

let userData =  []

    registerBTN.addEventListener("click", () => {
        let Name = document.getElementById('fullName').value       // name value input element
        let Email = document.getElementById('emailAddress').value   //email value input element
        let newPassword = document.getElementById('password').value // new passowrd value input element
        let confirmPassword = document.getElementById('confirmPassword').value // confirm pass value input element

        if ( emailPattern.test(Email) && 
             newPasswordPattern.test(newPassword) && 
             newPassword !== Name && 
             newPassword !== Email && 
             confirmPassword === newPassword) {  //========>>>>>>email and passwrod validation
            let user = {
                name: Name,
                email: Email,
                password: newPassword
            }
            userData.push(user)
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = "../LoginPage/login.html"
        } else {
            if (Name === "" && Email === "" && newPassword === "" && confirmPassword === "") {
                alert("Please Provide Valid Details")
            } else if (Name === "") {
                alert("Please Provide Valid Name")
            } else if (!emailPattern.test(Email)) {
                alert("Please Provide Valid Email Address")
            } else if (!newPasswordPattern.test(newPassword)) {
                alert("Please Provide Valid Password")
            } else if (newPassword === Name) {
                alert("Password cannot be same as name")
            } else if (newPassword === Email) {
                alert("Password cannot be same as email address")
            } else if (confirmPassword !== newPassword) {
                alert("Password does not match")
            }
        }
    })
// }

//======>>>>>>>>navbar navigation<<<<<<<<=========//

const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')
const shop = document.getElementById('listItemShop')

home.addEventListener("click",()=>{
    alert("Login First")
})

login.addEventListener("click",()=>{
    window.location.href = "../LoginPage/login.html"
})

signup.addEventListener("click",()=>{
    location.reload()
})

const user = JSON.parse(localStorage.getItem('currentUser'))
myprofile.addEventListener("click",()=>{
    if(user){
        window.location.href = '../MyProfile/myprofile.html'
    }else{
        alert("LogIn first")
    }
})


mycart.addEventListener("click",()=>{
    if(user){
        window.location.href = '../MyCart/mycart.html'
    }else{
        alert("LogIn first")
    }

})

 shop.addEventListener("click", () => {
    if (user) {
        window.location.href = '../Shop/shop.html'
    } else {
        alert("LogIn first")
    }
})
