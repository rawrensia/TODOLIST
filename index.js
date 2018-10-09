document.addEventListener('DOMContentLoaded', e => {
    
    // Do something here
    const todoList = [
        'Buy ice cream',
        'Buy sushi',
        'Buy fish'
    ];
    const todoListContainer = document.querySelector('#task-list-container > ul.list-group');
    
    todoList.map(value => {
        const newTodoItem = document.createElement('li');
        newTodoItem.classList += 'list-group-item';
        newTodoItem.setAttribute('id', 'todolist');
        newTodoItem.textContent = value;
        todoListContainer.appendChild(newTodoItem);
    });

    // Print user input on the list item
    const taskInput = document.querySelector('#task-name-input');
    taskInput.addEventListener('keyup', e=> { 
        if (e.keyCode === 13){ // If user presses enter
            const newTodoItem = document.createElement('li');
            newTodoItem.classList += 'list-group-item';
            newTodoItem.setAttribute('id', 'todolist');
            newTodoItem.textContent = taskInput.value;
            todoListContainer.appendChild(newTodoItem);
            
            // Add edit button
            var edit = document.createElement("span");
            var editTxt = document.createTextNode("Edit");
            edit.className = "edit";
            edit.appendChild(editTxt);
            newTodoItem.appendChild(edit);
            
            // Add close button
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            newTodoItem.appendChild(span);

            // Edit list item when edit button is clicked
            var editTxt = document.getElementsByClassName("edit");
            var j;
            for(j = 0; j < editTxt.length; j++){
                editTxt[j].onclick = function() {
                var listItem = this.parentElement;
                var editInput = listItem.querySelector("input[type=text]");
                var label = listItem.querySelector("li");
                editInput.value = label.innerText;
                }
            }

            // Remove list item when close button is clicked
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
                    close[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";
                }   
            }  
        }

});

// Create a "close" and "edit" button and append it to each list item
var myNodelist = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
    var edit = document.createElement("span");
    var editTxt = document.createTextNode("Edit");
    edit.className = "edit";
    edit.appendChild(editTxt);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(edit);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }   
} 

// Text is strikedthrough when clicking on a list item
var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        ev.target.classList.toggle('checked');
    }, false);

});

