const currentUser = JSON.parse(localStorage.getItem('currentUser'))
const userData = JSON.parse(localStorage.getItem('userData'))


let yourName = document.getElementById('NAME')
yourName.innerText = currentUser.name /////////////=========>>>>>> name display = WELCOME BACK RAHUL

let nameIndex;                       //===========>>>>>>>>>> stroing index value of current user in userData for updation
userData.forEach((user,index)=>{
    if(user.name === currentUser.name){
        nameIndex = index
    }
})

//==============>>>>>>>> NAME UPDATION FUNCTION <<<<<<<==========//

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

//==============>>>>>>>> PASSWORD UPDATION FUNCTION <<<<<<<==========//

let passwordButton = document.getElementById('changePassword')
passwordButton.addEventListener("click",()=>{

    let oldPassword = document.getElementById('oldPassword').value  //===== Old password
    let newPassword = document.getElementById('newPassword').value  //===== New password
    let confirmPassword = document.getElementById('confirmNewPassword').value   //===== Confirm password

    if(oldPassword === userData[nameIndex].password && oldPassword === currentUser.password){  //==== condtion to match password
        if(newPassword === confirmPassword){

            //========>>>>>>> updating the local storage items <<<<<<<======//
            
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
    window.location.href = '../LoginPage/login.html'
})


//=======>>>>>>>>nav fnctionality<<<<<<<<<=======//
const home = document.getElementById('listItemHome')
const login = document.getElementById('listItemLogIn')
const signup = document.getElementById('listItemSignUp')
const myprofile = document.getElementById('listItemProfile')
const mycart = document.getElementById('listItemMyCart')
const shop = document.getElementById('listItemShop')

home.addEventListener("click", () => {
    window.location.href = "../Shop/shop.html"
})

login.addEventListener("click", () => {
    alert("Logout First")
})
signup.addEventListener("click", () => {
    alert("Logout First to sign up")
})

const user = JSON.parse(localStorage.getItem('currentUser'))
myprofile.addEventListener("click", () => {
    location.reload()
})
mycart.addEventListener("click", () => {
    if (user) {
        window.location.href = '../MyCart/mycart.html'
    } else {
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