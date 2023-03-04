let userData = JSON.parse(localStorage.getItem('userData'));

let currUser = {
    name: "",
    email: "",
    password: "",
    randomstring: ""
}
const currentUser = JSON.parse(localStorage.getItem('currentUser'))

if(currentUser){
    window.location.href = "shop.html"
}else{
let loginBtn = document.getElementById('logIn')
    loginBtn.addEventListener("click",() => {
        if(!userData){
            alert("USER NOT FOUND!!! Sign Up first")
        }else{
            let loginEmail = document.getElementById('emailAddress').value
            let loginPassword = document.getElementById('password').value
        
            userData.forEach((user,index) => {
                if(loginEmail === user.email && loginPassword === user.password){
                    window.location.href = "shop.html"
                    alert("Login Success")
                    let uniqueString = randomStringGenerator()
                    // userData[index].randomString = uniqueString
                    currUser["name"] = userData[index].name
                    currUser["email"] = userData[index].email
                    currUser["password"] = userData[index].password
                    currUser["randomstring"] = uniqueString
                    localStorage.setItem('currentUser',JSON.stringify(currUser))
                    // localStorage.setItem('uniqueString', uniqueString)
                }else{
                    if(loginEmail === "" && loginPassword === ""){
                        alert("Please provide valid email and password!")
                    }else if(loginEmail !== user.email){
                        alert("Incorrect Email!")
                    }else if(loginPassword !== user.password){
                        alert("Incorrect Password!")
                    }
                }
            })
        }
    
})
}

function randomStringGenerator(){
    let uniqueString = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i = 0;i<10;i++){
        uniqueString += characters.charAt(Math.round(Math.random()*characters.length))
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

login.addEventListener("click",()=>{
    location.reload()
    
})

signup.addEventListener("click",()=>{
    window.location.href = "signup.html"
})

const user = JSON.parse(localStorage.getItem('currentUser'))
myprofile.addEventListener("click",()=>{
    if(user){
        window.location.href = 'myprofile.html'
    }else{
        alert("LogIn first")
    }

})
mycart.addEventListener("click",()=>{
    if(user){
        window.location.href = 'mycart.html'
    }else{
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

 home.addEventListener("click",()=>{
     if (user) {
        window.location.href = 'shop.html'
     } else {
         alert("LogIn first")
     }
})