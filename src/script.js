
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

  const loginButton = document.getElementById('submit-button')
  loginButton.onclick = () => login()

  const registerButton = document.getElementById('register-button')
  registerButton.onclick = () => redirectToRegisterPage()

  function redirectToRegisterPage() {
    window.location.href="cadastro.html"
  }
  
  function login() {

    var username = document.getElementById('login').value;
    var password = document.getElementById('password').value;
  
    // Verificar se os campos estão preenchidos
    if (username.length === 0 || password.length === 0) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Recuperar o usuário e senha do localStorage
    var user = JSON.parse(localStorage.getItem('user'));

    // Verificar se o usuário e senha estão corretos
    if (username === user.username && password === user.password) {
      alert('Login realizado com sucesso.');
  
      // Redirecionar para a página days_of_week.html
      window.location.href="days_of_week.html";
    } else {
      alert('Usuário ou senha incorretos.');
    }
  
    clearFields();
  }