var message = document.querySelector(".alert");
var form = document.querySelector("form");
var submit = document.getElementById("submit");
var grocery = document.getElementById("value");
var listContainer = document.querySelector(".list-container");
var clearBtn = document.querySelector(".clear-btn");
var list = document.querySelector(".list");
var containerList = document.querySelector(".container-list");



editFlag = false;
editId = "";


// eventListeners
form.addEventListener("submit",addItems);
clearBtn.addEventListener("click",clearAllItems);
window.addEventListener("DOMContentLoaded",displayStoredItems)

// End of EventListeners
//functions
//var id = new Date().getTime().toString()

function addItems(e){
    e.preventDefault();
    let item = grocery.value
    if(item && !editFlag){
        id =  new Date().getTime().toString()
        value = grocery.value;
        createItems(value,id);
        displayAlert("Item Added Successfully","success");
        setLocalStorage(editId,value)
        setBackToDefault();
        selectBtn();
    }
    else if(item && editFlag){
        editElement.innerHTML = item
        id = editElement.parentElement.dataset.id
        displayAlert("Item Edited","success");
        //console.log(id);
        editLocal(id,item)
        setBackToDefault();
    }
    else{
        displayAlert("Please Enter a Value","danger")
    };
};
function displayStoredItems(){
    items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createItems(item.value,item.id);
            selectBtn();
            displayAlert("Previous Items Added","success")
        });
        //console.log(items);
    }
    else{
        displayAlert("NO previous Items","danger")
    }
}

function createItems(value,id){
    editId = id
    var element = document.createElement("div");
    element.classList.add("list")
    var attr = document.createAttribute("data-id");
    attr.value = editId;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="item">${value}</p>
    <button class="delete-btn">*</button>
    <button class="edit-btn">Edit</button>`
    listContainer.classList.add("show-container");
    containerList.appendChild(element);
};
function displayAlert(text,action){
    message.textContent = `${text}`;
    message.classList.add(`${action}`);
    setTimeout(function(){
        message.textContent = "";
        message.classList.remove(`${action}`)
    },2000)
};
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editId = "";
    submit.textContent = "submit";
};
function deleteItems(e){
    var item = e.currentTarget.parentElement;
    editId = item.dataset.id
    //console.log(editId);
    deleteFromLocalStorage(editId)
    containerList.removeChild(item);
    displayAlert("Item Deleted","danger");
    length = containerList.children.length
    setBackToDefault()
    if(length === 0){
        listContainer.classList.remove("show-container")
    };
};
function editItems(e){
    editElement = e.currentTarget.parentElement.firstChild;
    editId = editElement.dataset.id;
    grocery.value = editElement.innerHTML
    editFlag = true;
    submit.textContent = "Edit";
    //console.log(editElement);
};
function clearAllItems(){
    item = containerList.children.length;
    if(item > 0){
        containerList.innerHTML = ""
    };
    listContainer.classList.remove("show-container");
    displayAlert("Items Cleared","danger")
    setBackToDefault()
    localStorage.removeItem("list")
};
//End of functions
//Local Storage
function setLocalStorage(id,value){
    const  grocery = {id,value}
    items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem("list",JSON.stringify(items))
    //console.log(items);
}
function deleteFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem("list",JSON.stringify(items))
}
function getLocalStorage(){
    return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[];
}
function editLocal(id,value){
    items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value
        }
        return item
    })
    localStorage.setItem("list",JSON.stringify(items))
}
function selectBtn(){
    var deleteBtn = document.querySelectorAll(".delete-btn");
    var editBtn = document.querySelectorAll(".edit-btn");
    editBtn.forEach(function(edit){
        edit.addEventListener("click",editItems);
    });
    deleteBtn.forEach(function(del){
        del.addEventListener("click",deleteItems);
    });

}



//End of Local storage and functions