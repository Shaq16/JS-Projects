const accessKey="43GvDZdDyiPLz9PtbTcQBRvz4sWLm2LtiYTP_32HoqE"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const showMore = document.getElementById("show-more")
const searchResult = document.getElementById("search-result")

let keyword=""
let page=1;

async function searchImages(){
    keyword=searchBox.value 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})