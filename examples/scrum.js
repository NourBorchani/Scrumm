
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
    var html =`<h3>Sprint Backlog</h3>`;
    for (let i = 0; i < todoTable.length; i++) {
        
            console.log(todoTable);

            html += `<div class="input-group overflow">
           <span>${todoTable[i].task}</span>
        
           <div class="margin-top-10">
             <button class="button button-backlog"><small>Backlog</small></button><button class="button button-progress"><small>In Progress</small></button><button class="button button-progress"><small>In Review</small></button><button class="button button-done"><small>Done</small></button><br><button type="button" onclick='deleteTask(${i},${todoTable[i].id},)' class="button button-delete"><small>Delete</small></button>
                <button class="button button-backlog" id="edit" onclick="Edit()">Edit</button>             

           </div>
           </div>`
    }
    // console.log(html);
    document.getElementById('divTasks').innerHTML = html;

}
function deleteTask(index,id) {
    var conf = confirm("Is This goodbye");
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

            

    // function edit user story 
    function Edit(){
        // Get the modal
      var modal = document.getElementById("myModal");
      
      // Get the button that opens the modal
      var btn = document.getElementById("edit");
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks the button, open the modal 
      btn.onclick = function() {
        modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      }