
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
    etat: "backlog" ,
}
todoTable.push(todo)
localStorage.setItem('tasks', JSON.stringify(todoTable));
displayTask()
}

function displayTask() {

   displayBacklog();
   displayInProgress();
   displayInReview();
   displayDone();

    
}
function displayBacklog()
{
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html =`<h3>Sprint Backlog</h3>`;
  for (let i = 0; i < todoTable.length; i++) {
      if (todoTable[i].etat=="backlog")
      {
          console.log(todoTable);

          html += `<div class="card">
          <div class="card-header card-header-info">
          
         <h4>${todoTable[i].task}</h4>
         
         </div>
         <div class="card-body">
      
           <button class="button button-progress" style="font-weight: gras" onclick='moveInprogress(${todoTable[i].id})'>In Progress</button>
        
           <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
                    

         </div>
         </div>`
        }
  }
  document.getElementById('divTasks').innerHTML = html;
}

function displayInProgress()
{
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html =`<h3>In progress </h3>`;
  for (let i = 0; i < todoTable.length; i++) {
      if (todoTable[i].etat=="inProgress")
      {
          console.log(todoTable);

          html += `<div class="card">
          <div class="card-header card-header-warning">
          
         <h4>${todoTable[i].task}</h4>
         
         </div>
         <div class="card-body">
           <button class="button button-backlog" onclick='moveBacklog(${todoTable[i].id})'>Backlog</button>
      
           <button class="button button-review" onclick='moveInReview(${todoTable[i].id})'>In Review</button>
          
           <br>
           <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
                      

         </div>
         </div>`
        }
  }
  document.getElementById('tasksInprogress').innerHTML = html;
}
function displayInReview()
{
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html =`<h3>InReview </h3>`;
  for (let i = 0; i < todoTable.length; i++) {
      if (todoTable[i].etat=="InReview")
      {
          console.log(todoTable);

          html += `<div class="card">
          <div class="card-header card-header-danger">
         <h4>${todoTable[i].task}</h4>
         </div>
         <div class="card-body">
         
           <button class="button button-backlog" onclick='moveBacklog(${todoTable[i].id})' >Backlog</button>
           <button class="button button-progress" onclick='moveInprogress(${todoTable[i].id})'>In Progress</button>
           <button class="button button-done" onclick='moveDone(${todoTable[i].id})'>Done</button>
           
           <br>
           <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
                     

         </div>
         </div>`
        }
  }
  document.getElementById('tasksInreview').innerHTML = html;
}
function displayDone()
{
  
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html =`<h3>Done </h3>`;
  for (let i = 0; i < todoTable.length; i++) {
      if (todoTable[i].etat=="done")
      {
          console.log(todoTable);

          html += `<div class="card">
          <div class="card-header card-header-success">
         <h4>${todoTable[i].task}</h4>
         </div>
      
      
         <div class="card-body">
           <button class="button button-backlog" onclick='moveBacklog(${todoTable[i].id})'>Backlog</button>
      
           <button class="button button-review" onclick='moveInReview(${todoTable[i].id})'>In Review</button>
           <button class="button button-progress" onclick='moveInprogress(${todoTable[i].id})'>In Progress</button>
           <br>
           <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
                     

         </div>
         </div>`
        }
  }
  document.getElementById('tasksInDone').innerHTML = html;
}
function deleteTask(id) {
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
    }

     // 
     function moveBacklog (id)
     {
      var task = document.getElementById('task').value;
      console.log(id);
      var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
      for (let i=0;i<todoTable.length;i++)
      {
        if (todoTable[i].id==id)
        {
          todoTable[i].etat="backlog";
        }
      }
      localStorage.setItem('tasks', JSON.stringify(todoTable));
      displayTask()
     }   

     function moveInprogress (id )
     {
      var task = document.getElementById('task').value;
      var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
      for (let i=0;i<todoTable.length;i++)
      {
        if (todoTable[i].id==id)
        {
          todoTable[i].etat="inProgress";
        }
      }
      localStorage.setItem('tasks', JSON.stringify(todoTable));
      displayTask()
     }   


     //
     function moveDone (id )
     {
      var task = document.getElementById('task').value;
      var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
      for (let i=0;i<todoTable.length;i++)
      {
        if (todoTable[i].id==id)
        {
          todoTable[i].etat="done";
        }
      }
      localStorage.setItem('tasks', JSON.stringify(todoTable));
      displayTask()
     }  
     function moveDone (id )
     {
      var task = document.getElementById('task').value;
      var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
      for (let i=0;i<todoTable.length;i++)
      {
        if (todoTable[i].id==id)
        {
          todoTable[i].etat="done";
        }
      }
      localStorage.setItem('tasks', JSON.stringify(todoTable));
      displayTask()
     }   
     function moveInReview (id )
     {
      var task = document.getElementById('task').value;
      var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
      for (let i=0;i<todoTable.length;i++)
      {
        if (todoTable[i].id==id)
        {
          todoTable[i].etat="InReview";
        }
      }
      localStorage.setItem('tasks', JSON.stringify(todoTable));
      displayTask()
     }             

    /* function edit user story 
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
      }*/