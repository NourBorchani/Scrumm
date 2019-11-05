
function addTask() {
  var task = document.getElementById('task').value;
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  if (task == "") {
    alert("veuillez remplir la tâche ");
    return;
  }

  console.log(task);
  var todo = {
    id: Math.floor((Math.random() * 1000) + 1),
    task: task,
    etat: "backlog",
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
function displayBacklog() {
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html = `<h3>Sprint Backlog</h3>`;
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].etat == "backlog") {
      console.log(todoTable);

      html += `<div class="card">
          <div class="card-header card-header-info">
          
         <h4>${todoTable[i].task}  </h4>
         
         
         </div>
         <div class="card-body">
      
           <button class="button button-progress" style="font-weight: gras" onclick='moveInprogress(${todoTable[i].id})'>In Progress</button>
        
           <button type="button" onclick='deleteTask(${todoTable[i].id})' class="button button-delete">Delete</button>
           <button type="button" onclick='editTask(${todoTable[i].id})' rel="tooltip" title="" class="btn btn-primary btn-link btn-sm" onclick="editProfile(693)" data-original-title="Edit Task">
                      <i class="material-icons">edit</i>
                    </button>
                    

         </div>
         </div>`
    }
  }
  document.getElementById('divTasks').innerHTML = html;
}

function displayInProgress() {
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html = `<h3>In progress </h3>`;
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].etat == "inProgress") {
      console.log(todoTable);

      html += `<div class="card" id="divCard">
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
function displayInReview() {
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html = `<h3>InReview </h3>`;
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].etat == "InReview") {
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
function displayDone() {

  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  var html = `<h3>Done </h3>`;
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].etat == "done") {
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

    for (let i = 0; i < todoTable.length; i++) {
      if (todoTable[i].id == id) {
        todoTable.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(todoTable));
        displayTask();
        return true;
      }
    }
    return false;
  }
}

// 
function moveBacklog(id) {
  var task = document.getElementById('task').value;
  console.log(id);
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].id == id) {
      todoTable[i].etat = "backlog";
    }
  }
  localStorage.setItem('tasks', JSON.stringify(todoTable));
  displayTask()
}

function moveInprogress(id) {
  var task = document.getElementById('task').value;
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].id == id) {
      todoTable[i].etat = "inProgress";
    }
  }
  localStorage.setItem('tasks', JSON.stringify(todoTable));
  displayTask()
}


//
function moveDone(id) {
  var task = document.getElementById('task').value;
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].id == id) {
      todoTable[i].etat = "done";
    }
  }
  localStorage.setItem('tasks', JSON.stringify(todoTable));
  displayTask();
}
function moveDone(id) {
  var task = document.getElementById('task').value;
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].id == id) {
      todoTable[i].etat = "done";
    }
  }
  localStorage.setItem('tasks', JSON.stringify(todoTable));
  displayTask()
}
function moveInReview(id) {
  var task = document.getElementById('task').value;
  var todoTable = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < todoTable.length; i++) {
    if (todoTable[i].id == id) {
      todoTable[i].etat = "InReview";
    }
  }
  localStorage.setItem('tasks', JSON.stringify(todoTable));
  displayTask()
}



function displayTask() {
  var utilisateur = JSON.parse(localStorage.getItem('connected'));

console.log('hqhqhqhqhqhqhahahahah');
console.log((utilisateur[1] == "developer"));

  if (utilisateur[1] == "developer") {
    document.getElementById('prj').style.display = 'none';
    document.getElementById('prf').style.display = 'none';
    document.getElementById('Team').style.display = 'none';
  }


}

function logout(){
  var user = JSON.parse(localStorage.getItem('connected'));
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      user.splice(user[i], 1);
      
    }
    
    
  }
}

