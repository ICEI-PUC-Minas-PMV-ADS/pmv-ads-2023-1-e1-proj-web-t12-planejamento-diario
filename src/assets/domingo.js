// Função para adicionar uma tarefa
function addTask() {
    // Obtém o valor digitado pelo usuário
    var taskInput = document.getElementById("task-input");
    var taskTime = document.getElementById("task-time");
  
    var task_domingo = {
      name: taskInput.value,
      time: taskTime.value,
      completed: false
    };
  
    // Verifica se a tarefa não está vazia
    if (task_domingo.name.trim() !== "") {
      // Obtém a lista de tarefas
      var taskList = JSON.parse(localStorage.getItem("task_domingo")) || [];
  
      // Adiciona a nova tarefa à lista
      taskList.push(task_domingo);
  
      // Salva a lista atualizada no localStorage
      localStorage.setItem("task_domingo", JSON.stringify(taskList));
  
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
    var taskList = JSON.parse(localStorage.getItem("task_domingo"));
  
    // Marca a tarefa como concluída
    taskList[index].completed = true;
  
    // Salva a lista atualizada no localStorage
    localStorage.setItem("task_domingo", JSON.stringify(taskList));
  
    // Atualiza a exibição da lista de tarefas
    displayTasks();
  }
  
  // Função para excluir uma tarefa
  function deleteTask(index) {
    // Obtém a lista de tarefas
    var taskList = JSON.parse(localStorage.getItem("task_domingo"));
  
    // Remove a tarefa da lista
    taskList.splice(index, 1);
  
    // Salva a lista atualizada no localStorage
    localStorage.setItem("task_domingo", JSON.stringify(taskList));
  
    // Atualiza a exibição da lista de tarefas
    displayTasks();
  }
  
  // Função para exibir as tarefas na lista
  function displayTasks() {
    // Obtém a lista de tarefas
    var taskList = JSON.parse(localStorage.getItem("task_domingo")) || [];
  
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
      var listItem = document.createElement("li");
  
      // Define a classe do elemento de lista com base na conclusão da tarefa
      if (task.completed) {
        listItem.classList.add("completed");
      }

      // Cria um elemento de parágrafo para exibir o horário da tarefa
      var taskTime = document.createElement("span");
      taskTime.textContent = task.time;
        
  
      // Cria um elemento de parágrafo para exibir o nome da tarefa
      var taskName = document.createElement("span");
      taskName.textContent = task.name;
  

      // Cria um botão para marcar a tarefa como concluída
      var completeButton = document.createElement("button");
      completeButton.textContent = "Concluir";
      completeButton.addEventListener("click", function() {
        completeTask(index);
      });
  
      // Cria um botão para excluir a tarefa
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.addEventListener("click", function() {
        deleteTask(index);
      });
  
      // Adiciona os elementos à lista
      listItem.appendChild(taskName);
      listItem.appendChild(taskTime);
      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
  
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
          var taskList = JSON.parse(localStorage.getItem("task_domingo")) || [];
          taskList.push(task);
          localStorage.setItem("task_domingo", JSON.stringify(taskList));
          taskInput.value = "";
          taskTime.value = "";
          displayTasks();
        }
      }
  
      // Função para marcar uma tarefa como concluída
      function completeTask(event) {
        var completeButton = event.target;
        var listItem = completeButton.parentNode;
        var taskName = listItem.querySelector("span.task-name").textContent;
  
        var taskList = JSON.parse(localStorage.getItem("task_domingo"));
  
        for (var i = 0; i < taskList.length; i++) {
          if (taskList[i].name === taskName) {
            taskList[i].completed = !taskList[i].completed;
            break;
          }
        }
  
        localStorage.setItem("task_domingo", JSON.stringify(taskList));
        displayTasks();
      }
  
      // Função para excluir uma tarefa
      function deleteTask(event) {
        var deleteButton = event.target;
        var listItem = deleteButton.parentNode;
        var taskName = listItem.querySelector("span.task-name").textContent;
  
        var taskList = JSON.parse(localStorage.getItem("task_domingo"));
  
        for (var i = 0; i < taskList.length; i++) {
          if (taskList[i].name === taskName) {
            taskList.splice(i, 1);
            break;
          }
        }
  
        localStorage.setItem("task_domingo", JSON.stringify(taskList));
        displayTasks();
      }
  
      // Função para exibir as tarefas na lista
      function displayTasks() {
        var taskList = JSON.parse(localStorage.getItem("task_domingo")) || [];
  
        taskList.sort(function(a, b) {
          var timeA = new Date("1970/01/01 " + a.time);
          var timeB = new Date("1970/01/01 " + b.time);
          return timeA - timeB;
        });
  
        var taskListElement = document.getElementById("task-list");
        taskListElement.innerHTML = "";
  
        taskList.forEach(function(task) {
          var listItem = document.createElement("li");
  
          if (task.completed) {
            listItem.classList.add("completed");
          }
  
          var taskName = document.createElement("span");
          taskName.classList.add("task-name");
          taskName.textContent = task.name;
  
          var taskTime = document.createElement("span");
          taskTime.textContent = task.time;
  
          var completeButton = document.createElement("button");
          completeButton.textContent = "Concluir";
          completeButton.addEventListener("click", completeTask);
  
          var deleteButton = document.createElement("button");
          deleteButton.textContent = "Excluir";
          deleteButton.addEventListener("click", deleteTask);
  
          listItem.appendChild(taskTime);
          listItem.appendChild(taskName);
          listItem.appendChild(completeButton);
          listItem.appendChild(deleteButton);
  
          taskListElement.appendChild(listItem);
        });
      }
  
      displayTasks();
  
      var addButton = document.getElementById("add-button");
      addButton.addEventListener("click", addTask);