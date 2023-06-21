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
| Resultado| Foi apresentado o dialogo de sucesso e o redirecionamento à tela de login ocorreu |

## Teste Cadastro de tarefas 

| Caso de teste 4 | Cadastro de tarefa |
|:-------- |:--------------:| 
| Objetivo do teste | Verificar se as tarefas estão sendo criadas com o horário desejado com sucesso |
| Pré-condições de testes | Logar no site, Acessar o dia escolhido para adicionar tarefa|
| Passos | Clicar na barra de tarefas, preencher o nome da tarefa, escolher o horário desejado, clicar no botão "Adicionar" |
| Resultado| Foi criado uma aba na tela com a atividade cadastrada e o horário marcado |

| Caso de teste 5 | Concluir tarefa |
|:-------- |:--------------:| 
| Objetivo do teste | Verificar se depois de criado, a tarefa pode ser marcada como concluida |
| Pré-condições de testes | Logar no site, cadastrar uma tarefa|
| Passos | Escolher a tarefa já cadastrada que deseja, clicar no botão "Concluir" |
| Resultado| A tarefa concluida vai aparecer riscada no nome e horário e permanecer na pagina. |

| Caso de teste 6 | Excluir tarefa |
|:-------- |:--------------:| 
| Objetivo do teste | Verificar se uma tarefa pode ser deletada |
| Pré-condições de testes | Logar no site, cadastrar uma tarefa |
| Passos | Escolher a tarefa já cadastrada que deseja, clicar no botão "Excluir" |
| Resultado| A tarefa escolhida foi deletada da lista de tarefas |

