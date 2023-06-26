const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let myList = [];

function addNewTask(){
    myList.push(input.value);

    showTasks()
}

function showTasks(){
     let newLi = ;
}

button.addEventListener('click', addNewTask);