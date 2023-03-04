const currentUser = JSON.parse(localStorage.getItem('currentUser'))
const userData = JSON.parse(localStorage.getItem('userData'))
let yourName = document.getElementById('NAME')
yourName.innerText = currentUser.name

let nameIndex;
userData.forEach((user,index)=>{
    if(user.name === currentUser.name){
        nameIndex = index
    }
})


let nameButton = document.getElementById('Change')
nameButton.addEventListener("click",()=>{
    let newName = document.getElementById('newName').value
    userData[nameIndex].name = newName
    currentUser.name = newName
    yourName.innerText = newName
    localStorage.setItem('currentUser',JSON.stringify(currentUser))
    localStorage.setItem('userData',JSON.stringify(userData))
    setTimeout(()=>{
        alert("Name Updated")
    },500)
})

let passwordButton = document.getElementById('changePassword')
passwordButton.addEventListener("click",()=>{
    let oldPassword = document.getElementById('oldPassword').value
        let newPassword = document.getElementById('newPassword').value
        let confirmPassword = document.getElementById('confirmNewPassword').value
    if(oldPassword === userData[nameIndex].password && oldPassword === currentUser.password){
        if(newPassword === confirmPassword){

            userData[nameIndex].password = newPassword
            currentUser.password = newPassword
            localStorage.setItem('currentUser',JSON.stringify(currentUser))
            localStorage.setItem('userData',JSON.stringify(userData))
            setTimeout(()=>{
                alert("Password Updated")
            },500)
        }else{
            alert("Confirm Password does not match")
        }
    }else{
        alert("Old password does not match")
    }
})
//=======>>>>>>>> logout functionality<<<<========//
let logoutBtn = document.getElementById('logOut')
logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem('currentUser')
    window.location.href = 'login.html'
})


//=======>>>>>>>>nav fnctionality<<<<<<<<<=======//
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
    alert("Logout First")
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