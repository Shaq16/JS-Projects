const con = document.querySelector("#container")
const love = document.querySelector(".ri-heart-fill")

con.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(function(){
        love.style.transform="translate(-50%,-50%) scale(0)"
    },2000)
})
