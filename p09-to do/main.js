const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');

let myList = [];

function addNewTask(){
    myList.push(input.value);

    console.log(myList);
}

button.addEventListener('click', addNewTask);