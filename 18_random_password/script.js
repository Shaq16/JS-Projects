const copy = document.querySelector(".copy")
const generate = document.querySelector("button")
const passwordBox = document.querySelector(".password")
const length = 12;

const upperCase = "ABCDEJGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*(){}[]<>?=+-"

const allChars = "ABCDEJGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>?=+-"


generate.addEventListener("click",function(){
    function createPassword(){
        let password = ""
        password+=upperCase[Math.floor(Math.random()*upperCase.length)]
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
        password+=number[Math.floor(Math.random()*number.length)]
        password+=symbol[Math.floor(Math.random()*symbol.length)]

        while(length>password.length){
            password+=allChars[Math.floor(Math.random()*allChars.length)]
        }

        passwordBox.value=password
    }
    createPassword()
}
)

copy.addEventListener("click",function(){
    function copyPassword(){
        passwordBox.select()
        document.execCommand("copy")
    }
    copyPassword()
})
