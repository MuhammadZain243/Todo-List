const add_button = document.querySelector("#addbutton");
const input_box = document.querySelector("#input-box");
const list_container = document.querySelector("#list-container");
const row = document.querySelector("#row");
const add = document.querySelector("#plus-button")
let flag = false;

add.addEventListener("click",function(){
    if(!flag){
        row.style.opacity = "1";
        flag = true;
        add.style.transform = "rotate(135deg)";
        input_box.style.cursor= "auto";
        add_button.style.cursor= "pointer"
    } else {
        row.style.opacity = "0";
        flag = false;
        add.style.transform = "rotate(0deg)";
        input_box.style.cursor= "context-menu";
        add_button.style.cursor= "context-menu";
    }
    input_box.value = ""
})

add_button.addEventListener("click",function(){
    if(input_box.value === ''){
        alert("You must write something")
    } else {
        let li = document.createElement("li")
        li.innerHTML = input_box.value
        list_container.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input_box.value = ""
    SaveAllData()
})

list_container.addEventListener("click",function(e){
    if(e.target.tagName ===  "LI"){
        e.target.classList.toggle("checked")
        SaveAllData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveAllData();
    }
}, false)

const SaveAllData = () =>{
    localStorage.setItem("data",list_container.innerHTML)
}

const ShowAllData = () =>{
    list_container.innerHTML = localStorage.getItem("data");
}
ShowAllData();