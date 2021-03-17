const sideMenu=document.getElementById('side-menu');
const myTasksH1=sideMenu.querySelector('.mytasks-h1');

/*newtastk*/
const addTask=document.getElementById('add-task');
const addTaskBtn=document.getElementById('save');
const cancel=addTaskBtn.previousElementSibling;

const completedTask=document.querySelector('.completed-tasks');
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
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let current=new Date();
    let hr=current.getHours();
    let min=current.getMinutes();


    return `${hr}:${min}`;
}

/*event listeners*/

addTaskBtn.addEventListener('click', newTask);
newTaskBtn.addEventListener('click',()=>{
    addTask.classList.toggle('visible');
});
cancel.addEventListener('click', ()=>{
    addTask.classList.toggle('visible');
});

taskContainer.addEventListener('click', e=>{
    let circle=e.target;
    if(circle.classList[0]==="circle"){
        let task=circle.parentElement;
        task.classList.add('completed-task');
        completedTask.append(task);
    }
});
completedTask.addEventListener('click', e=>{
    let circle=e.target;
    if(circle.classList[0]==="circle"){
        let task=circle.parentElement;
 
       task.classList.add('active-task');
        taskContainer.append(task);
    
    }
})

taskContainer.addEventListener('dblclick',e=>{
    let task=e.target;
        task.classList.add('completed-task');
        completedTask.append(task);
})

completedTask.addEventListener('dblclick',e=>{
    let task=e.target;
        task.classList.add('active-task');
        taskContainer.append(task);
})