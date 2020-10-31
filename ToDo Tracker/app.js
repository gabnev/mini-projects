let userInput = document.querySelector('#newTask');
const list = document.querySelector('#list');

// LOCAL STORAGE

const todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify
(todosArray));

let storage = JSON.parse(localStorage.getItem('todos'));

storage.forEach((item) => {
  todoMaker(item);
})

// NEW ITEMS

document.querySelector('#addBtn').addEventListener('click', (e) => {
  todosArray.push(userInput.value);
  localStorage.setItem('todos', JSON.stringify(todosArray));
  console.log(localStorage)
  
  todoMaker(userInput.value);
  userInput.value = '';
  e.preventDefault();
})

function todoMaker(todo) {
  const newItem = document.createElement('li');
  newItem.className = 'todo';
  newItem.textContent = `${todo}`;
  list.appendChild(newItem);
}

// CLEAR ALL

document.querySelector('#clearBtn').addEventListener('click', () => {
  
  localStorage.clear();
  console.log(localStorage)

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});


