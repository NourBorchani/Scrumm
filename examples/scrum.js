
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
displayTask();
document.getElementById('task').value = "";
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


          html += `<div id ="${todoTable[i].id}" class="card" draggable="true" ondragstart="drag(event)">
          <div class="card-header card-header-info" style=" height: 100px;width: 50%;">
          
      
          <button class="button button-progress"  onclick='moveInprogress(${todoTable[i].id})'>InProgress</button>
       
          <button type="button"  onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
          </div>
          <div class="card-body">
         <h4>${todoTable[i].task}</h4>
         
       
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

          html += `<div class="card" id ="${todoTable[i].id}"  draggable="true" ondragstart="drag(event)">
          
        
          <div class="card-header card-header-warning" style=" height: 135px;width: 100%;"  >
          <button class="button button-backlog" onclick='moveBacklog(${todoTable[i].id})' >Backlog</button>
      
          <button class="button button-review" onclick='moveInReview(${todoTable[i].id})'>InReview</button>
          
          
          <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete" >Delete</button>
         
         </div>
         <div class="card-body">
         <h4>${todoTable[i].task}</h4>

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

          html += `<div class="card" id ="${todoTable[i].id}"  draggable="true" ondragstart="drag(event)">
          <div class="card-header card-header-danger" style=" height: 135px;width: 95%;"  >
          <button class="button button-backlog" onclick='moveBacklog(${todoTable[i].id})' >Backlog</button>
          <button class="button button-done" onclick='moveDone(${todoTable[i].id})'>Done</button>
          <button class="button button-progress" onclick='moveInprogress(${todoTable[i].id})'>InProgress</button>
          <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
          </div>       
         <div class="card-body">
         <h4>${todoTable[i].task}</h4>
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
          /*<div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
          <div class="card-header card-header-warning card-header-icon">
            <div class="card-icon">
              <i class="material-icons">content_copy</i>
            </div>
            <p class="card-category">Used Space</p>
            <h3 class="card-title">49/50
              <small>GB</small>
            </h3>
          </div>
          //<div class="card-footer">
            <div class="stats">
              <i class="material-icons text-danger">warning</i>
             
            </div>
          </div>
        </div>
      </div>*/

          html += `<div class="card" id ="${todoTable[i].id}"  draggable="true" ondragstart="drag(event)">
          <div class="card-header  card-header-success"  style=" height: 135px;width: 100%;"     >
          <button class="button button-backlog" onclick='moveBacklog(${todoTable[i].id})'>Backlog</button>
          <button class="button button-review" onclick='moveInReview(${todoTable[i].id})'>In Review</button>
          <button class="button button-progress" onclick='moveInprogress(${todoTable[i].id})'>In Progress</button>
          <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
        </div>
         <div class="card-body">
         <h4>${todoTable[i].task}</h4>
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
  }   
    return false;     
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
     
     function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
      console.log (ev.target.id)
    }
    
    function drop(ev,) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      console.log (ev.dataTransfer.getData("text"));

      ev.target.appendChild(document.getElementById(data));
      
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