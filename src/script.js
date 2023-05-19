
function signup() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
  
    // Verificar se os campos estão preenchidos
    if (username.length === 0 || password.length === 0) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    window.location.href="index.html"
  
    // Salvar o usuário e senha no localStorage
    var user ={
      username:username,
      password:password
    }
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('Cadastro realizado com sucesso.');
    clearFields();
    
  }
  const form = document.getElementById('form-login')
  if(form !== null){
    form.addEventListener('submit', login)
  }
  
  function login(event) {
    event.preventDefault()
    var username = event.target.username.value;
    var password = event.target.password.value;
  
    // Verificar se os campos estão preenchidos
    if (username.length === 0 || password.length === 0) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Recuperar o usuário e senha do localStorage
    var user = JSON.parse(localStorage.getItem('user'));

    // Verificar se o usuário e senha estão corretos
    if (username === user.username && password === user.password) {
      console.log('Login realizado com sucesso.');
  
      // Redirecionar para a página days_of_week.html
      window.location.href="days_of_week.html";
    } else {
      alert('Usuário ou senha incorretos.');
    }
  
    clearFields();
  }