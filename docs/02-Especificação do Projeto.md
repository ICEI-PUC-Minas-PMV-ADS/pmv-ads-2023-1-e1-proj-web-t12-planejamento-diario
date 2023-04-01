# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Diante de um cenário pós pandêmico estamos sempre ocupados e sobrecarregados com nossos afazeres do cotidiano, comumente sem tempo hábil para descanso ou mesmo para cumrprir o que nos é proposto. Diante disso, será desenvolvido como solução da problemática citada, um aplicativo web que irá auxiliar o usuário na organização das tarefas do dia a dia.  

É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

![João Paulo Persona 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-planejamento-diario/blob/main/docs/img/Jo%C3%A3o%20Paulo%20Alves1.png)


![Ana Paula Persona 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-planejamento-diario/blob/main/docs/img/Persona%202%20imagem%20ok.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário adicione, edite e exclua compromissos e tarefas | ALTA | 
|RF-002| Permitir que o usuário defina lembretes e notificações para compromissos e tarefas | ALTA |
|RF-003| Permitir que o usuário defina a prioridade das tarefas e compromissos | ALTA |
|RF-005| Permitir que o usuário categorize tarefas e compromissos de acordo com diferentes áreas da vida (trabalho, estudos, lazer, etc) | ALTA |
|RF-006| Sistema de loguin e senha para o usuario poder acessar a agenda de qualquer dispositivo de forma responsiva e com dados sincronizados automaticamente | ALTA |
|RF-007| Permitir que o usuário integre sua agenda com outros calendários externos | MÉDIA |
|RF-008| Permitir que o usuário obtenha relatórios e estatísticas sobre seu desempenho e produtividade ao longo do tempo | MÉDIA |
|RF-009| Permitir que o usuário personalize a interface da aplicação, ajustando cores, fontes e layouts. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  MÉDIA | 
|RNF-003| Deve estar disponível 24h por dia |  ALTA | 
|RNF-004| Deve conter uma arquitetura limpa com clara separação de responsibilidades de cada camada e componente |  ALTA | 
|RNF-005| Deve conter código limpo para que seja de fácil manutenção |  ALTA | 
|RNF-006| Deve ser executável em quaisquer plataformas e navegadores | MÉDIA | 
|RNF-007| Deve ser capaz de surportar múltiplos usuários simultaneamente | ALTA | 
|RNF-008| Não deverá expor dados sensíveis de usuários | ALTA |
|RNF-009| Deverá ser acessível à pessoas com alguma forma de deficiência física | ALTA |
|RNF-010| O sistema deverá ter sua interface desenvolvida com HTML e CSS | ALTA |
|RNF-011| O sistema deverá ser desenvolvido utilizando a linguagem de programação javascript | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
