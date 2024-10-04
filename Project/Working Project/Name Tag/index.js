const nameTag=document.getElementById("name");
const btn=document.getElementById("btn");

const tagsContainer=document.querySelector(".tags");

const addName=()=>{
    
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText=` Hey ! I am ${nameTag.value}`;
    tagsContainer.append(tag);
}