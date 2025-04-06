const request=document.querySelector("#request")
const istatus=document.querySelector("h5")

let check=0
request.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML="Friends"
        istatus.style.color="green"
        request.innerHTML="Remove Friend"
        check=1;

    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        request.innerHTML="Add Friend"
        check=0;

    }

    
})

