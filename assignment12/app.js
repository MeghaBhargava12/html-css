const input = document.getElementById('input');
const form = document.getElementById('form');
const formCheck = document.querySelector('.checkbox-list');

// Inital function to get all the items from localStorage if exists
getItems();

function getItems() {
  let lists=getListItemsFromLocalStorage();
  lists.forEach(function (list) {
    createListItemInUI(list);
  })
}

// event listener when add element to list
form.addEventListener('submit', addItemToList);

//event listener to check if the checkbox is clicked to remove the element
formCheck.addEventListener('click', removeItemFromList);

//create li in ui when new element to be added
function createListItemInUI(text) {
  const li = document.createElement('li');
    li.className = 'checkbox-item';
    li.innerHTML = `<div class="form-check">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">${text}</label>
              </div><hr>`;
    formCheck.appendChild(li);
}

//get the all the list element from LocalStorage
function getListItemsFromLocalStorage() {
  let lists;
  if (localStorage.getItem('lists') === null) {
    lists = [];
  } else {
    lists = JSON.parse(localStorage.getItem('lists'));
  }
  return lists;
}

//called when new item to be added in the list
function addItemToList(e) {
  const inputText = input.value;
  createListItemInUI(inputText);
  addTolocalStorage(inputText);
  e.preventDefault();
}

//called when need to remove a item from list
function removeItemFromList(e) {
  const text = e.target.parentNode.querySelector('label').innerHTML;
  if (e.target.className === 'form-check-input') {
    removeTaskFromLocalStorage(text);
    e.target.parentNode.parentNode.remove();
  }
}

//add new item to loaclStorage
function addTolocalStorage(input) {
  let lists=getListItemsFromLocalStorage();
  lists.push(input);
  localStorage.setItem('lists', JSON.stringify(lists));
}

//remove item from localStorage
function removeTaskFromLocalStorage(text) {
  let lists = getListItemsFromLocalStorage();
  lists.forEach(function (list, index) {
    if (list === text) {
      lists.splice(index, 1);
    }
  });
  localStorage.setItem('lists', JSON.stringify(lists));
}