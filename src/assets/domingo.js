function addTask() {
  // Obtém o valor digitado pelo usuário
  var taskInput = document.getElementById("task-input");
  var taskTime = document.getElementById("task-time");

  var tasks = {
    name: taskInput.value,
    time: taskTime.value,
    completed: false
  };

  // Verifica se a tarefa não está vazia
  if (tasks.name.trim() !== "") {
    // Obtém a lista de tarefas
    var taskList = JSON.parse(localStorage.getItem("domingo")) || [];

    // Adiciona a nova tarefa à lista
    taskList.push(tasks);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("domingo", JSON.stringify(taskList));

    // Limpa o campo de entrada
    taskInput.value = "";
    taskTime.value = "";

    // Atualiza a exibição da lista de tarefas
    displayTasks();
  }
}

// Função para marcar uma tarefa como concluída
function completeTask(index) {
  // Obtém a lista de tarefas
  var taskList = JSON.parse(localStorage.getItem("domingo"));

  // Marca a tarefa como concluída
  taskList[index].completed = !taskList[index].completed;

  // Salva a lista atualizada no localStorage
  localStorage.setItem("domingo", JSON.stringify(taskList));

  // Atualiza a exibição da lista de tarefas
  displayTasks();
}

// Função para excluir uma tarefa
function deleteTask(index) {
  // Obtém a lista de tarefas
  var taskList = JSON.parse(localStorage.getItem("domingo"));

  // Remove a tarefa da lista
  taskList.splice(index, 1);

  // Salva a lista atualizada no localStorage
  localStorage.setItem("domingo", JSON.stringify(taskList));

  // Atualiza a exibição da lista de tarefas
  displayTasks();
}

// Função para exibir as tarefas na lista
function displayTasks() {
  // Obtém a lista de tarefas
  var taskList = JSON.parse(localStorage.getItem("domingo")) || [];

  // Ordena a lista de tarefas pelo horário
  taskList.sort(function(a, b) {
    var timeA = new Date("1970/01/01 " + a.time);
    var timeB = new Date("1970/01/01 " + b.time);
    return timeA.getTime() - timeB.getTime();
  }); 

  // Obtém o elemento da lista no HTML
  var taskListElement = document.getElementById("task-list");

  // Limpa o conteúdo da lista
  taskListElement.innerHTML = "";

  // Percorre cada tarefa na lista
  taskList.forEach(function(task, index) {
    // Cria um novo elemento de lista
    var listItem = document.createElement("div");
    listItem.className = 'card col-md-12 mt-4';


    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Define a classe do elemento de lista com base na conclusão da tarefa
   // if (task.completed) {
   //   cardBody.className = "card-body";
    //}

    // Cria um elemento de parágrafo para exibir o nome da tarefa
    var taskName = document.createElement("h5");
    //taskName.className = 'card-title';
    taskName.textContent = task.name;

    if(task.completed) {
      taskName.className = 'card-title  completed'
    } else {
      taskName.className ='card-title'
    }

    // Cria um elemento de parágrafo para exibir o horário da tarefa
    var taskTime = document.createElement("p");
    //taskTime.className = 'card-text';
    taskTime.textContent = task.time;

    if(task.completed) {
      taskTime.className = 'card-text float-left completed'
    } else {
      taskTime.className ='card-text float-left'
    }

    // Cria um botão para marcar a tarefa como concluída
    var completeButton = document.createElement("button");
    completeButton.className = 'btn btn-primary mr-2 float-right';
    completeButton.textContent = "Concluir";
    completeButton.addEventListener('click', function() {
      completeTask(index);
    });

    // Cria um botão para excluir a tarefa
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = 'btn btn-primary float-right';
    deleteButton.addEventListener("click", function() {
      deleteTask(index);
    });

    // Adiciona os elementos à lista
    cardBody.appendChild(taskName);
    cardBody.appendChild(taskTime);
    cardBody.appendChild(completeButton);
    cardBody.appendChild(deleteButton);
    listItem.appendChild(cardBody);

    // Adiciona o elemento de lista à lista no HTML
    taskListElement.appendChild(listItem);
  });
}


// Chama a função displayTasks para exibir as tarefas ao carregar a página
displayTasks();

// Obtém o botão de adicionar
var addButton = document.getElementById("add-button");

// Associa o evento de clique ao botão de adicionar
addButton.addEventListener("click", addTask);

    // Função para adicionar uma tarefa
    function addTask() {
      var taskInput = document.getElementById("task-input");
      var taskTime = document.getElementById("task-time");

      var task = {
        name: taskInput.value,
        time: taskTime.value,
        completed: false
      };

      if (task.name.trim() !== "") {
        var taskList = JSON.parse(localStorage.getItem("domingo")) || [];
        taskList.push(task);
        localStorage.setItem("domingo", JSON.stringify(taskList));
        taskInput.value = "";
        taskTime.value = "";
        displayTasks();
      }
    }

    displayTasks();

    var addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addTask);