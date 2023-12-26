const inputbox=document.getElementById("inp-box");
const listContainer=document.getElementById("list-cont");
function displayData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
displayData();
function addActivity(){
    if(inputbox.value === ''){
        alert("Add Some Activity");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let s=document.createElement("span");
        s.innerHTML="\u00d7";
        li.appendChild(s);
    }
    inputbox.value="";
    addData();
}
listContainer.addEventListener('click',function(e){
    console.log("event clicked");
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    addData();
},false);
function addData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

