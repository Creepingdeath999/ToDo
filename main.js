const sideMenu=document.getElementById('side-menu');
const myTasksH1=sideMenu.querySelector('.mytasks-h1');

/*newtastk*/
const addTask=document.getElementById('add-task');
const addTaskBtn=document.getElementById('save');
const cancel=addTaskBtn.previousElementSibling;


let taskContainer=document.querySelector('.active-tasks');
const titleInpt=document.getElementById('task-title');
const descr=titleInpt.nextElementSibling;

const newTaskBtn=document.getElementById('new-task-btn')
myTasksH1.addEventListener('click', ()=>{
    document.querySelector('ul').classList.toggle('mytasks-visible');
    myTasksH1.querySelector('h1').nextElementSibling.classList.toggle('arrow-rotated');
})



function newTask(){
     let task=document.createElement('div');
     task.classList.add('active-task');
     task.innerHTML=`
    
     <div class="circle"></div>
     <div class="task-content">
       <h1>${titleInpt.value}</h1>
       <p>
         ${descr.value}
       </p>
       <div class="time">
           <span>${getDate()}</span>
       </div>
       </div>
     `
    if(descr.value.trim()!=="" && titleInpt.value.trim()!==""){
        taskContainer.append(task);
        addTask.classList.toggle('visible');

    }else{
        return;
    }
}

function getDate(){
    let current=new Date();
    let hr=current.getHours();
    let min=current.getMinutes();

    return `${hr}:${min}`;
}

addTaskBtn.addEventListener('click', newTask);
newTaskBtn.addEventListener('click',()=>{
    addTask.classList.toggle('visible');
});
cancel.addEventListener('click', ()=>{
    addTask.classList.toggle('visible');
});

