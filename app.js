console.log("Hello class")
var parentUl = document.getElementById("ulParent")
var input = document.getElementById("todoInput")

 
function addTodo() {
    if(!input.value) {
        alert("Enter task value")
        return
    }

    var liElement = document.createElement("li")


    var liTxt = document.createTextNode(input.value)

liElement.appendChild(liTxt)


liElement.className = "list-group-item d-flex align-items-center justify-content-between"


var div = document.createElement("div")
var editButton = document.createElement("button")
var delButton= document.createElement("button")

editButton.innerHTML = "EDIT"
editButton.setAttribute("onclick", "editTodo(this)")

delButton.innerHTML = "DEL"
delButton.setAttribute("onclick", "deleteTodo(this)")

editButton.className = "btn btn-info"
delButton.className = "btn btn-danger"

div.appendChild(editButton)
div.appendChild(delButton)

liElement.appendChild(div)

ulParent.appendChild(liElement)

input.value = ""

};

function editTodo(el) {
        
        var li = el.parentNode.parentNode
    
        var placeHolder = li.firstChild.nodeValue
        var editValue = prompt("Edit Todo", placeHolder)
    
    
        li.firstChild.nodeValue = editValue
    
    
};

function deleteTodo(elem) {

    elem.parentNode.parentNode.remove()
};

function delAll() {
    parentUl.innerHTML = ""
}