# Plano de Testes de Software

Requisitos para realização dos testes de software:
- Site disponível no github
- Navegador de internet - Chrome, firefox, opera, etc
- Conectividade com a internet


## Plano de testes do Login

| Caso de teste 1 | Login de usuário com sucesso |
|:-------- |:--------------:| 
| Objetivo do teste | Verificar se a partir do fornecimento das credencias corretas, o login é realizado com sucesso |
| Pré-condições de testes | Acessar a tela de login, clicar na opção "Cadastre-se" e registrar-se usando as credenciais com usuário "usuario.teste" e senha "1234" |
| Passos | Preencher o formulário de login com as credenciais cadastradas, clicar em "Entrar" e verificar se o redirecionamento à tela de dias da semana ocorre |
| Resultado | Ao preencher as credencias, foi apresentada a tela de dias da semana |

| Caso de teste 2 | Login de usuário com erro |
|:-------- |:--------------:| 
| Objetivo do teste |Verificar se a partir do fornecimento das credencias incorretas, o login retorna erro |
| Pré-condições de testes | Acessar a tela de login, clicar na opção "Cadastre-se" e registrar-se usando as credenciais com usuário "usuario.teste" e senha "1234"|
| Passos | Preencher o formulário de login com uma senha diferente (4567), clicar em "Entrar" e verificar se é apresentado um dialog de erro informando que as credencias estão erradas |
| Resultado| Foi constado a apresentação do dialog com a mensagem "Usuário ou senha incorretos."  |

## Plano de testes do cadastro

| Caso de teste 3 | Cadastro de usuário |
|:-------- |:--------------:| 
| Objetivo do teste | Verificar se a partir do fornecimento de credenciais, o cadastro é realizado com suceso |
| Pré-condições de testes | Acessar a tela de login|
| Passos | Clicar em "Cadastre-se", preencher o formulário usando as credenciais com usuário "usuario.teste" e senha "1234" e verificar se o dialog de sucesso aparece e se o redirecionamento à tela de Login ocorre |
| Resultado| Foi apresentado o dialog de sucesso e o redirecionamento à tela de login ocorreu |

## Plano de 

| Caso de teste 3 | Cadastro de usuário |
|:-------- |:--------------:| 
| Objetivo do teste | Verificar se a partir do fornecimento de credenciais, o cadastro é realizado com suceso |
| Pré-condições de testes | Acessar a tela de login|
| Passos | Clicar em "Cadastre-se", preencher o formulário usando as credenciais com usuário "usuario.teste" e senha "1234" e verificar se o dialog de sucesso aparece e se o redirecionamento à tela de Login ocorre |
| Resultado| Foi apresentado o dialog de sucesso e o redirecionamento à tela de login ocorreu |
