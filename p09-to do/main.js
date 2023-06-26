const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listTask = document.querySelector('.list-task');

let myList = [];

function addNewTask() {
    myList.push({
        task: input.value,
        completed: false
    });

    input.value = '';

    showTasks()
};

function showTasks() {
    let newLi = '';

    myList.forEach((item, position) => {
        newLi +=
            `
            <li class="task ${item.completed && "done"}">
                <i class="fa-solid fa-circle-check" onclick = "checked(${position})"></i>
                <p>${item.task}</p>
                <i class="fa-solid fa-trash" onclick = "deleteItem(${position})"></i>
            </li>
        `;
    });

    listTask.innerHTML = newLi;

    localStorage.setItem('list', JSON.stringify(myList))
};

function deleteItem(position) {
    myList.splice(position, 1);

    showTasks()
};

function checked(position) {
    myList[position].completed = !myList[position].completed

    showTasks()
};

function stockTask() {
    const localStorageTask = localStorage.getItem('list');

    if (localStorageTask) {
        myList = JSON.parse(localStorageTask);
    }

    showTasks();
};

stockTask();
button.addEventListener('click', addNewTask);