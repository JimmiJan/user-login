const names = document.getElementById("name")
const password = document.getElementById("password")

const email = document.getElementById("email")

const sing = () => {
    console.log(names.value);
    console.log(password.value);
    console.log(email.value);



    const obj = {
        name: names.value,
        password: password.value,
        Email: email.value,
    }
    localStorage.setItem("user", JSON.stringify(obj))
    alert("user login success")
    window.location.assign("./sing.html")
}

const og=() => {


    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userdata = JSON.parse(localStorage.getItem("user"))
    if(email.value === userdata.Email && password.value === userdata.password){
        alert("login")
    }else {
        alert("invalid")
    }
    // alert("hahah")
}

























// alert("hello class")


// const input1 = document.getElementById("input1")
// const h1 = document.getElementById("h1")

// const nextPage = () => {
//     const obj = {
//         name: input1.value,
//         number: 12345,
//         bool: true
//     }

//     localStorage.setItem("name", JSON.stringify(obj))
//     window.location.assign("./about.html")
// }

// const setValue = () => {
//     const { name } = JSON.parse(localStorage.getItem("name"))
//     // console.log(value)
//     h1.innerHTML = `HELLO {name}`
// }




// const username = document.getElementById("username")
// const email = document.getElementById("email")
// const password = document.getElementById("password")


// const createAccount = () => {
//     console.log(username.value)
//     console.log(email.value)
//     console.log(password.value)

//     const userObj = {
//         username: username.value,
//         email: email.value,
//         password: password.value,
//     }

//     localStorage.setItem("user", JSON.stringify(userObj))
//     alert("successfully signup")
//     window.location.assign("./login.html")


// }


// const login = () => {
//     const email = document.getElementById("email")
//     const password = document.getElementById("password")
//     const userData = JSON.parse(localStorage.getItem("user"))
//     console.log(userData)
//     if (email.value === userData.email && password.value === userData.password) {
//         alert("user login")
//     } else {
//         alert("invalid user")
//     }
// }



//Multiple user's///
// const createAccount = () => {
//     console.log(username.value)
//     console.log(email.value)
//     console.log(password.value)

//     const userObj = {
//         username: username.value,
//         email: email.value,
//         password: password.value,
//     }

//     const user = JSON.parse(localStorage.getItem("users")) || []
//     console.log(user)

//     const userIndex = user.findIndex((value, ind) => {
//         return value.email === userObj.email
//     })
//     console.log(userIndex);
//     if (userIndex === -1) {
//         user.push(userObj)
//         localStorage.setItem("users", JSON.stringify(user))
//         alert("successfully signup")
//         window.location.assign("./login.html")

//     } else {
//         alert("email already exists")
//     }



// }


// const login = () => {
//     const email = document.getElementById("email")
//     const password = document.getElementById("password")
//     const userData = JSON.parse(localStorage.getItem("users"))
//     console.log(userData)
//     const checkUser = userData.find((value) => {
//         return value.email === email.value && value.password === password.value
//     })

//     console.log(checkUser);
//     if (checkUser) {
//         localStorage.setItem("currentUser", JSON.stringify(checkUser))
//         alert("login")
//     } else {
//         alert("invalid")
//     }

// }