# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Diante de um cenário pós pandêmico estamos sempre ocupados e sobrecarregados com nossos afazeres do cotidiano, comumente sem tempo hábil para descanso ou mesmo para cumrprir o que nos é proposto. Diante disso, será desenvolvido como solução da problemática citada, um aplicativo web que irá auxiliar o usuário na organização das tarefas do dia a dia.  

O seguinte projeto usou como artefatos e ferramentas para especificação
a criação de personas, história de usuário e os requisitos arquiteturais e restrições. Sendo os requisitos classificados de acordo com a prioridade.
Neste documento foram criadas duas personas, João Paulo Alves e Ana Paula Maria. 
Abaixo estão as histórias de usuário, mostrando as necessidades e os motivos que levaram os mesmos a aderirem ao aplicativo.
Em seguida temos uma tabela mostrando todos os resquisitos,funcionais e não funcionais e as restrições.

## Personas

+ ### João Paulo Alves
|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-planejamento-diario/blob/main/docs/img/joao.png" width="400">   |_30 anos, casado e com 2 filhos, mora no interior paulista com sua família_   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Professor de História
|**História** | <p>João cresceu em uma família monoparental com sua mãe e irmã mais nova. Seu pai os abandonou quando ele tinha apenas 5 anos de idade. Sua mãe trabalhava muito para sustentar a família e muitas vezes não estava em casa. João teve que cuidar de sua irmã mais nova e aprender a se virar sozinho desde muito jovem.<br>Apesar das dificuldades ele se formou na faculdade com um diploma em história e agora é professor de história em uma escola secundária.<br>João é casado e tem dois filhos. Ele é um pai amoroso e dedicado que quer dar aos seus filhos tudo o que ele nunca teve quando era criança.</p>
|**Frustrações/Problemas** |Hoje aos 30 anos João tem uma vida mais estável em uma família mais estruturada, porém tem dificuldades em conciliar seu emprego de professor com as outras partes de sua vida que são muito importantes para ele, como tirar um tempo em seus dias para ficar com sua família e ter uma relação saudável com seus filhos, realizar exercícios físicos e ter um tempo para o lazer.
|**Metas** | <p>- Organizar melhor o seu tempo de trabalho em casa e lazer<br> - Passar mais tempo com a família<br> - Realizar mais exercícios físicos</p>

+ ### Ana Paula Maria
|<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t12-planejamento-diario/blob/main/docs/img/Ana%20paula.jpeg" width="400">   |_37 anos, casada_   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | <p>Auxiliar Administrativo<br> Cursando Ciências Contábeis<br> Iniciará uma pós graduação</p>
|**História** | <p>Ana Paula tem uma jornada de 8h de trabalho diária, iniciando às 8 da manhã e terminando às 17 horas. Além disso, ela também dedica parte do seu tempo para se exercitar, estudar, cuidar dos afazeres de casa e dar atenção ao esposo e família.<br>O trajeto de casa/trabalho e vice versa, é de aproximadamente 1h30 por dia, o que consome uma relevante parte do seu tempo. Chegar em casa após 1 hora de treino, ter que cozinhar e organizar algumas coisa de casa e ainda estudar para os dois curso em que estar matriculada, é um desafio enorme para ela, pois constantemente não tem atingindo as suas metas diárias.<br>Hoje, o seu principal objetivo é conseguir se organizar melhor quanto ao cumprimento das suas atividades e puder ter maior qualidade de vida, tanto para ela e para as pessoas que a cercam.</p>
|**Frustrações/Problemas** |<p>Não tenho planejado bem o desenvolvimento das tarefas, muitas vezes não tenho conseguido cumprir com todas.<br>Acredito que seja por falta de disciplina ou  não estou gerindo bem o meu tempo.<br>Tento reservar uma hora de segunda a quinta para atividade física, mas nem  sempre consigo de fato</p>
|**Metas** | <p>- Conseguir manter uma rotina diária de atividade física<br> - Conseguir manter uma rotina diária de estudos da graduação<br> - Ter tempo para as tarefas de casa</p>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`        | QUERO/PRECISO ... `FUNCIONALIDADE`                     |PARA ... `MOTIVO/VALOR`                                       |
|----------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
|João Paulo, 30 anos, Professor| Classificar compromissos na sua agenda| Separar as tarefas pessoal e profissional |
|Ana Paula, 37 anos, Estudante | Fazer registro da entrega dos trabalhos da faculdade | Otimizar o tempo e não perder datas  |
|Pedro Pascal, 48 anos, Sindico | Montar cronograma mensal| Para não precisar remarcar compromissos que se repetem todo mês |
|Wagner Moura, 46 anos, Atleta | Se lembrar de comer na hora certa | Evitar perder a hora da dieta |
|Cleo Pires, 40 anos, Telemarketing | Aplicativo de tarefas que pode ser acessado em qualquer lugar | Poder verificar agenda no computador de casa e no celular no trabalho|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Sistema de loguin e senha para o usuario poder acessar a agenda de qualquer dispositivo de forma responsiva e com dados sincronizados automaticamente | ALTA |
|RF-002| Permitir que o usuário adicione, edite e exclua compromissos e tarefas | ALTA | 
|RF-003| Permitir que o usuário defina lembretes e notificações para compromissos e tarefas | ALTA |
|RF-004| Permitir que o usuário defina a prioridade das tarefas e compromissos | ALTA |
|RF-005| Permitir que o usuário categorize tarefas e compromissos de acordo com diferentes áreas da vida (trabalho, estudos, lazer, etc) | ALTA |
|RF-006| Permitir que o usuário integre sua agenda com outros calendários externos | MÉDIA |
|RF-007| Permitir que o usuário obtenha relatórios e estatísticas sobre seu desempenho e produtividade ao longo do tempo | MÉDIA |
|RF-008| Permitir que o usuário personalize a interface da aplicação, ajustando cores, fontes e layouts. | BAIXA |


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
|02| O projeto deve ser desenvolvido em HTML, CSS E JAVASCRIPT |
|03| A documentação e o código da aplicação devem ser publicados no GitHub |
