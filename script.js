let button=document.getElementById('add');
let todoList=document.getElementById('todolist');
let input=document.getElementById('input');
// for storing the list as array
let todos=[];

button.addEventListener('click',()=>{
    todos.push(input.value);
    addtodo(input.value)
    input.value=''

})

function addtodo(todo){
    // for adding the each list in next line
    let para=document.createElement('p')
    para.innerHTML=todo
    todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
    })

    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
    })
}