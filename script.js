let todoList = [{item: 'Buy Milk',
dueDate: '4/10/2023'},
{item: 'GO to the gym',
dueDate: '4/10/2023'}]; // add some todos to the list
displayItems(); // display the todos when the page loads
function addTodo(){
    let inputElement = document.querySelector('#todoInput');
    let todoItem = inputElement.value;
    let dateElement = document.querySelector('#dateInput');
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate}) // add the new todo to the list
    inputElement.value = ''; // empty the input
    dateElement.value = ''; // empty the input

    displayItems(); // display the updated list
}

function displayItems() {
    let containerElement = document.querySelector('.todoContainer'); // Get the container element
    let list = '';
    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
      list += `
          <span>${item}</span>
          <span>${dueDate}</span>
          <button class="delTodoBtn" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = list; // Assign the generated HTML to the container's innerHTML
  }
  