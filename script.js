const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
const button=document.querySelector(".row button");

function addTask(){
    if(inputbox.value === ""){
        alert('You must write something!');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
     inputbox.value="";
}
inputbox.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
    addTask();
    savedata();
    }
})
button.addEventListener('click',()=>{

    addTask();
    savedata();
})
// button.addEventListener("click",(e)=>{
//     addTask();
//     // if(e.target.tagName === "LI")
//     // {
//     //     e.target.classList.toggle("checked");
//     //     savedata();
//     // }
//     // else if(e.target.tagName === "SPAN"){
//     //     e.target.parentElement.remove();
//     //     savedata();
//     // }
// });
// inputbox.addEventListener("keyup",(e)=>{
//     if(e.key==='Enter'){
//         addTask();
//         if(e.target.tagName === "LI")
//     {
//         e.target.classList.toggle("checked");
//         savedata();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         savedata();
//     }
//     }
// });
listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();