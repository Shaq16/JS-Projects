const imgBox = document.querySelector("#imgBox")
const qrImage = document.querySelector("#qrImage")
const qrText = document.querySelector("#qrText")
const btn = document.querySelector(".btn")


btn.addEventListener("click",function(){
    function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value
    
    if(qrText.value.length===0){
        alert("No text or url typed");
        return
    }
    imgBox.classList.add("show-img");


}
generateQR()
})
