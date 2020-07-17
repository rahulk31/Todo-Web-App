const addForm = document.querySelector('.add');
const list = document.querySelector('.list-group')
const search = document.querySelector('.search input');


const generateTemplate = todo => {
  const html = `<li><span>${todo}</span> 
  <img src="./close.png" alt="trash" class="delete">
</li>`;
  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
  
});

//delete todos

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));


};


//Keyup event  : Search feature
search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});