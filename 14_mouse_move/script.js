const elem=document.querySelectorAll(".elem");
const elemImage = document.querySelector(".elem img")

// elem1.addEventListener("mousemove",function(e){
//     elemImage.style.left=e.x+"px";
//     elemImage.style.top=e.y+"px";  
// })

// elem1.addEventListener("mouseenter",function(){
//     elemImage.style.opacity=1;
// })

// elem1.addEventListener("mouseleave",function(){
//     elemImage.style.opacity=1;
// })

elem.forEach(function(val){ 

    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    })

    val.addEventListener("mousemove",function(e){
        elemImage.style.left=e.x+"px";
        elemImage.style.top=e.y+"px";
    })
    
});