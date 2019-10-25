
function addTask()
{ 
var task = document.getElementById('task').value;
var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
if (task =="") 
    {alert("veuillez remplir la tâche ");
    return;}

console.log(task);
var todo = {
    id: Math.floor((Math.random() * 1000) + 1),
    task: task,  
}
todoTable.push(todo)
localStorage.setItem('tasks', JSON.stringify(todoTable));
displayTask()
}

function displayTask() {

    var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
    var html =`<h2>Backlog</h2>`;
    for (let i = 0; i < todoTable.length; i++) {
        
            console.log(todoTable);

            html += `<div class="input-group overflow">
           <span>${todoTable[i].task}</span>
           <a href="#" class="drag">Drag</a>
           <div class="margin-top-10">
             <button class="button button-backlog">Backlog</button><button class="button button-progress">In Progress</button><button class="button button-progress">In Review</button><button class="button button-done">Done</button><br><button type="button" onclick='deleteTask(${i},${todoTable[i].id},)' class="button button-delete"  >Delete</button>
           </div>
           </div>`
    }
    // console.log(html);
    document.getElementById('divTasks').innerHTML = html;

}
function deleteTask(index,id) {
    var conf = confirm("Press a button!");
    if (conf) {
    var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
            
    for (let i=0 ; i<todoTable.length ;i++ )  
    {
        if (todoTable[i].id==id)
        {
            todoTable.splice(i, 1);
            localStorage.setItem('tasks', JSON.stringify(todoTable));
            displayTask();
            return true;
        }
    }    
    return false;   }
    
    function inReview(){
    var etat={}

    
    }}