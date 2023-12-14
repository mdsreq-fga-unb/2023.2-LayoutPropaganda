#


# Requisitos Funcionais

| código | Requisitos Funcionais
|--------|----------------------|
|  RF01  |  Captação de dados de contato do cliente.|
|  RF02  |  Visualização dos produtos por meio de tabela e mapa. |
|  RF03  |  Pesquisar os produtos por texto |
|  RF04  |  Cadastrar novos produtos.|
|  RF05  |  Excluir produtos existentes. |
|  RF06  |  Atualizar dados dos produtos. |
|  RF07  |  Cadastrar novos funcionários. |
|  RF08  |  Visualizar funcionários. |
|  RF09  |  Alterar dados do funcionário. |
|  RF10  |  Excluir funcionários. |
|  RF11  |  Visualizar o faturamento dos produtos.    |
|  RF12  |  Visualizar lucro dos produtos. |
|  RF13  | Importar produtos com csv e xlsx. |
|  RF14  | Notificar com email validade de contrato |
|  RF15  | Atribuir responsabilidades à funcionários |
|  RF16  | Remover responsabilidades de funcionários |
|  RF17  | Visualizar responsabilidades de funcionários |
|  RF18  | Completar responsabilidades de funcionários |
|  RF19  | Gerar gráficos de lucro por região |
|  RF20  | Adicionar lucros e gastos |
|  RF21  | Remover lucros e gastos |

</br>
</br>

# Requisitos Não Funcionais
| código | tipo | descrição |
|--------|------|-----------|
| RNF01  | INTERFACE | Deve ser possível visualizar a interface sem scroll horizontal nas proporções: 16:9, 9:16|
| RNF02  | DESEMPENHO | Todas as requisições devem retornar em menos de um 1 segundo para velocidade de banda acima de 50MB/s |
| RNF03  | INTERFACE | A interface deve ter o mapa de calor com distribuição do tipo: distribuição uniforme |
| RNF04  | PORTABILIDADE | O sistema deve ser compatível com as últimas versões do Chrome, Firefox e Safari |
| RNF05  | REQUISITOS DE IMPLEMENTAÇÃO | A aplicação deve garantir a privacidade dos dados dos usuários, estando de acordo com a Lei Geral de Proteção de Dados (13.709/2018) |
| RNF06  | SUPORTABILIDADE | O código deve ser escrito de forma que facilite a manutenção e atualizações por meio de arquitetura SOLID e uso do DDD |
| RNF07  | USABILIDADE | A aplicação deve conter uma seção informativa acerca dos tipos de painéis que a empresa aluga |
| RNF08  | REQUISITOS DE IMPLEMENTAÇÃO | A área restrita do sistema deve permitir acesso apenas aos funcionários autenticados |
| RNF09 | USABILIDADE |Filtrar os produtos por cidades, disponibilidade e tipos de mídias.|

</br>
</br>

# Definition of Ready (DoR):
Uma história atingirá a definição de preparada quando estiver de acordo com esses quatro itens:

* A história de usuário está representando um requisito?;
* A história possui informação necessária para ser trabalhada?;
* A história possui critérios de aceitação?;
* A história cabe em uma sprint?

# Definition of Done (DoD):
A história atingirá a definição de pronta quando estiver de acordo com esses itens:

* Estiver de acordo com todos os critérios de aceitação;
* Sua implementação estiver de acordo com os padrões de codificação;
* Ter passado por todos os testes;

# Backlog
| Tema | Épico    | Capability     | Feature     | User Story  |
|------|----------|----------------|-------------|-------------|
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.1** Suporte ao cliente | **1.1.1** Gerir contatos de clientes | **1.1.1.1** Como cliente, eu quero informar meu contato para que algum funcionário me auxilie na escolha. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.1** Suporte ao cliente | **1.1.1** Gerir contatos de clientes | **1.1.1.2** Como funcionário, eu quero ter uma forma de visualizar os contatos preenchidos para que eu possa dialogar com os interessados. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.1** Suporte ao cliente | **1.1.2** Disponibilizar os produtos para visualização | **1.1.2.1** Como cliente, eu quero visualizar os produtos em tabela e mapa, para facilitar a identificação e busca. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.1** Suporte ao cliente | **1.1.2** Disponibilizar os produtos para visualização | **1.1.2.2** Como cliente, eu quero pesquisar os produtos por texto, para achar produtos por informações específicas. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.2** Administração de informações dos produtos | **1.2.1** Gerir detalhes de informações de produtos | **1.2.1.1** Como funcionário, eu quero adicionar novos produtos para que a atualização da página inicial seja pelo sistema. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.2** Administração de informações dos produtos | **1.2.1** Gerir detalhes de informações de produtos | **1.2.1.2** Como funcionário, eu quero remover produtos para manter a visualização coerente com o mundo real. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.2** Administração de informações dos produtos | **1.2.1** Gerir detalhes de informações de produtos | **1.2.1.3** Como funcionário, eu quero atualizar informações e estado sobre um produto, para que os produtos mantenham informações corretas. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.2** Administração de informações dos produtos | **1.2.1** Gerir detalhes de informações de produtos | **1.2.1.4** Como funcionário, eu quero ser notificado via email sempre que um contrato estiver 15 dias antes do seu vencimento. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **1** Plataforma de gerênciamento e visualização de catálogo | **1.2** Administração de informações dos produtos | **1.2.1** Gerir detalhes de informações de produtos | **1.2.1.5** Como funcionário, eu quero importar arquivos .csv ou .xslx sobre os produtos para criar vários de uma vez. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.1** Gerir detalhes de informações dos funcionários | **2.1.1.1** Como funcionário, eu quero adicionar novos funcionário são meu sistema para que tenham acesso a plataforma. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.1** Gerir detalhes de informações dos funcionários | **2.1.1.2** Como funcionário, eu quero de excluir funcionários para em caso de demissão, eles não terem mais acesso a plataforma. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.1** Gerir detalhes de informações dos funcionários | **2.1.1.3** Como funcionário, eu quero atualizar outros funcionários já criados para corrigir erros cometidos na criação. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.1** Gerir detalhes de informações dos funcionários | **2.1.1.4** Como funcionário, eu quero ver todos os funcionários criados para ver quem tem acesso a plataforma. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.2** Gerir responsabilidades dos funcionários | **2.1.2.1** Como funcionário, eu quero adicionar responsabilidades aos funcionários para melhor organização. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.2** Gerir responsabilidades dos funcionários | **2.1.2.2** Como funcionário, eu quero remover responsabilidades aos funcionários para que tarefas. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.1** Administração dos funcionários | **2.1.2** Gerir responsabilidades dos funcionários | **2.1.2.3** Como funcionário, eu quero ver as responsabilidades a mim atribuídas para melhor organização. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.2** Gerenciar finanças | **2.2.1** Visualizar  métricas do financeiro | **2.2.1.1** Como funcionário, eu quero poder visualizar o histórico de fluxo de caixa dos produtos, para acompanhar o desempenho financeiro dos produtos. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.2** Gerenciar finanças | **2.2.1** Visualizar  métricas do financeiro | **2.2.1.2** Como funcionário, eu quero poder gerar gráficos de pizza sobre o lucro por região e por produto para facilitar a identificação dos produtos mais importantes. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.2** Gerenciar finanças | **2.2.2** Gerenciar  dados financeiros dos produtos | **2.2.2.1** Como funcionário, eu quero poder adicionar ganhos e gastos a um produto para que eu controle o fluxo de caixa. |
| Melhorar visibilidade de produtos e gerenciamento empresarial. | **2** Plataforma de gerenciamento empresarial | **2.2** Gerenciar finanças | **2.2.2** Gerenciar  dados financeiros dos produtos | **2.2.2.2** Como funcionário, eu quero poder remover ganhos e gastos a um produto para que eu controle o fluxo de caixa |

</br>
</br>





# Proposta de MVP1
| US | Descrição |
|------|----------|
| 1.1.1.1 |  Como cliente, eu quero informar meu contato para que algum funcionário me auxilie na escolha. |
| 1.1.1.2 |  Como funcionário, eu quero ter uma forma de visualizar os contatos preenchidos para que eu possa dialogar com os interessados. |
| 1.1.2.1 |  Como cliente, eu quero visualizar os produtos em tabela e mapa, para facilitar a identificação e busca. |
| 1.1.2.2 |  Como cliente, eu quero pesquisar os produtos por texto, para achar produtos por informações específicas. |
| 1.2.1.1 |  Como funcionário, eu quero adicionar novos produtos para que a atualização da página inicial seja pelo sistema. |
| 1.2.1.2 |  Como funcionário, eu quero remover produtos para manter a visualização coerente com o mundo real. |
| 1.2.1.3 |  Como funcionário, eu quero atualizar informações e estado sobre um produto, para que os produtos mantenham informações corretas. |

</br>
</br>

# Proposta de MVP2
| US | Descrição |
|------|----------|
| 1.2.1.2 |  Como funcionário, eu quero importar arquivos .csv ou .xslx sobre os produtos para criar vários de uma vez. |
| 1.2.1.4 |  Como funcionário, eu quero ser notificado via email sempre que um contrato estiver 15 dias antes do seu vencimento. |
| 2.1.1.1 |  Como funcionário, eu quero adicionar novos funcionários ao meu sistema para que tenham acesso a plataforma. |
| 2.1.1.2 |  Como funcionário, eu quero de excluir funcionários para em caso de demissão, eles não terem mais acesso a plataforma. |
| 2.1.1.3 |  Como funcionário, eu quero atualizar outros funcionários já criados para corrigir erros cometidos na criação. |
| 2.1.1.4 |  Como funcionário, eu quero ver todos os funcionários criados para ver quem tem acesso a plataforma. |
| 2.1.2.1 |  Como funcionário, eu quero adicionar responsabilidades aos funcionários para melhor organização. |
| 2.1.2.2 |  Como funcionário, eu quero remover responsabilidades aos funcionários para que tarefas. |
| 2.1.2.3 |  Como funcionário, eu quero ver as responsabilidades a mim atribuídas para melhor organização. |
| 2.2.1.1 |  Como funcionário, eu quero poder visualizar o histórico de fluxo de caixa dos produtos, para acompanhar o desempenho financeiro dos produtos. |
| 2.2.1.2 |  Como funcionário, eu quero poder gerar gráficos de pizza sobre o lucro por região e por produto para facilitar a identificação dos produtos mais importantes |
| 2.2.2.1 | Como funcionário, eu quero poder adicionar ganhos e gastos a um produto para que eu controle o fluxo de caixa |
| 2.2.2.2 |  Como funcionário, eu quero poder remover ganhos e gastos a um produto para que eu controle o fluxo de caixa |


# Critérios de aceitação
| História | Critério |
|----------| ---------|
| Como cliente, eu quero informar meu contato para que algum funcionário me auxilie na edição.| O cliente deve ser capaz de fornecer seu nome, email e telefone; O funcionário deve ser notificado do contato do cliente; Os dados devem ser salvos em um banco de dados. |
| Como funcionário, eu quero ter uma forma de visualizar os contatos preenchidos para que eu possa dialogar com os interessados. | O funcionário deve ser capaz de visualizar todos os contatos preenchidos em uma tabela; O funcionário deve ser capaz de visualizar as informações de contato do cliente, incluindo nome, e-mail, telefone e data/hora em que o contato foi preenchido. |
| Como cliente, eu quero visualizar os produtos em lista e mapa, para facilitar a identificação e busca. | A lista deve conter as seguintes informações: nome, região, tipo de mídia e disponibilidade; Deve ter um mapa ao lado de cada produto mostrando a sua localização  O cliente deve ser capaz de filtrar os produtos por: nome, localização, tipo de mídia e disponibilidade. |
| Como cliente, eu quero pesquisar os produtos por texto, para achar produtos por informações específicas. | Conforme o cliente digita no campo de pesquisa, o sistema deve atualizar os resultados da pesquisa em tempo real; Os resultados da pesquisa devem mostrar produtos que contém o texto pesquisado, seja no nome, descrição, região ou tipo; Se a pesquisa não retornar resultados, deve ser mostrada uma mensagem informando que nenhum produto correspondente foi encontrado; Os resultados da pesquisa devem fornecer o nome, imagem, região, descrição e localização por mapa de cada mídia correspondente; O sistema pode sugerir pesquisas anteriores ao cliente ao começar a digitar.|
| Como funcionário, eu quero adicionar novos produtos para que a atualização da página inicial seja pelo sistema. | O formulário deve solicitar nome, localização, tamanho, tipo, descrição, região, e imagens (no máximo 4); Os tipos devem ser: Outdoor, Triedro e Frontlight; O funcionário deve receber um pop-up de confirmação quando o produto for adicionado; O novo produto deve ser exibido na listagem após a adição; O funcionário deve receber um pop-up de falha quando a adição falhar |
| Como funcionário, eu quero remover produtos para manter a visualização coerente com o mundo real. |O sistema deve solicitar uma confirmação ao funcionário antes de remover um produto; O Sistema deve manter um registro da remoção de um produto para restauração; A listagem de mídias deve ser atualizada automaticamente após a remoção de um produto; O funcionário deve receber um pop-up de que a remoção foi bem-sucedida; Em caso de falha na remoção, o funcionário deve receber um pop-up informando sobre o erro.|
|  Como funcionário, eu quero atualizar informações e estado sobre um produto, para que os produtos mantenham informações corretas. |O sistema deve fornecer campos para editar nome, localização e disponibilidade; Após a atualização das informações e do estado do produto, o funcionário deve receber um pop-up de que as alterações foram salvas com sucesso; O funcionário deve ter uma opção para desfazer as alterações, caso perceba um erro imediatamente após a atualização. |
|  Como funcionário, eu quero ser notificado via email sempre que um contrato estiver 15 dias antes do seu vencimento. |A notificação deve ser enviada via e-mail ao funcionário responsável; Deve constar no conteúdo do e-mail as seguintes informações sobre o contato: Nome das partes envolvidas, data do início e do vencimento no formato XX/XX/XXXX e localização do produto; Em caso de falha, o sistema deve tentar reenviar o e-mail após 1 hora, no máximo 3 tentativas.|
|  Como funcionário, eu quero importar arquivos .csv ou .xslx sobre os produtos para criar vários de uma vez. |O sistema deve aceitar e processar arquivos nos formatos .csv e .xlxs Após a importação, o sistema deve fornecer um resumo dos produtos importados, incluindo qualquer erro ou problema encontrado; Se um produto com informações idênticas já existir no sistema, o mesmo não deve ser duplicado. O sistema pode alertar o usuário ou ignorar a entrada duplicada; Após a importação, bem-sucedida, os produtos importados devem ser adequadamente integrados ao sistema e aparecer em pesquisas, listagens e outras funções pertinentes.|
| Como funcionário, eu quero adicionar novos funcionários ao meu sistema para que tenham acesso à plataforma |O sistema deve solicitar nome, sobrenome, CPF, e-mail e senha inicial Não deve ser possível adicionar dois funcionários com o mesmo endereço de e-mail; Após a adição bem-sucedida, o sistema deve mostrar um pop-up de confirmação e deve atualizar a lista de funcionários; O novo funcionário deve receber as instruções de primeiro acesso por e-mail, incluindo como configurar a senha |
| Como funcionário, eu quero excluir funcionários para, em caso de demissão, não terem mais acesso à plataforma.|Antes de excluir um funcionário, o sistema deve solicitar uma confirmação da ação; Após a exclusão, um pop-up de confirmação de que o funcionário foi removido com sucesso deve ser exibido; Após a exclusão, o funcionário não deve mais ser capaz de acessar a plataforma usando suas credenciais; Em caso de erro na exclusão, deve existir um procedimento para restaurar o acesso do funcionário |
| Como funcionário, eu quero atualizar outros funcionários já criados para corrigir erros cometidos na criação.|Deve ser possível alterar nome, sobrenome, CPF, e e-mail; Se o e-mail for alterado, o sistema deve garantir que não exista outro funcionário com o mesmo endereço de e-mail; Após editar e salvar as alterações, informações, um pop-up de confirmação deve ser exibido.|
| Como funcionário, eu quero ver todos os funcionários criados para ver quem tem acesso à plataforma.|Cada entrada de lista deve mostrar informações básicas do funcionário, como nome, sobrenome, ID, cargo, e data de criação no sistema; Deve ser possível ordenar a lista de funcionários por diversos critérios, como nome e data de adesão; Deve haver uma funcionalidade de buscas que permite filtrar a lista de funcionários por nome e sobrenome; A visualização da lista de funcionários deve ser acessível apenas a funcionários com as devidas permissões, como gerentes e administradores.|
| Como funcionário, eu quero adicionar tarefas aos funcionários para melhor organização.|Cada entrada de lista deve mostrar informações básicas do funcionário, como nome, sobrenome, ID, cargo, e data de criação no sistema; Deve ser possível ordenar a lista de funcionários por diversos critérios, como nome e data de adesão; Deve haver uma funcionalidade de buscas que permite filtrar a lista de funcionários por nome e sobrenome; A visualização da lista de funcionários deve ser acessível apenas a funcionários com as devidas permissões, como gerentes e administradores.|
| Como funcionário, eu quero adicionar tarefas aos funcionários para melhor organização.|Deve ser solicitado, descrição, prazo e o funcionário que terá a tarefa; Após atribuir a tarefa, o sistema deve confirmar que a ação foi realizada com sucesso; Quando uma nova tarefa for atribuída, o funcionário deve receber uma notificação via e-mail com as informações de sua nova tarefa|
| Como funcionário, eu quero remover tarefas dos funcionários para manter suas responsabilidades atualizadas.|Ao tentar remover uma tarefa, um pop-up de confirmação deve ser exibido; Ao remover uma tarefa, a lista de tarefas do funcionário deve ser imediatamente atualizada; O funcionário deve receber uma notificação via e-mail informando da remoção de sua tarefa.|
| Como funcionário, eu quero ver as responsabilidades a mim atribuídas para melhor organização.|O funcionário deve poder marcar uma tarefa como concluída e receber um pop-up de confirmação antes da ação.|
| Como funcionário, eu quero poder visualizar o histórico de fluxo de caixa dos produtos, para acompanhar o desempenho financeiro dos produtos.|O funcionário deve ter a opção de definir um intervalo de datas para visualizar o fluxo de caixa em um período específico; O histórico deve mostrar os detalhes: receitas, despesas, lucro/prejuízo associado a cada produto dentro do período selecionado; Os termos financeiros e os números exibidos devem possuir legendas ou tooltips explicativos.
| Como funcionário, eu quero poder gerar gráficos de pizza sobre o lucro por região e por produto para facilitar a identificação dos produtos mais importantes.|Deve haver um seletor para selecionar a visualização do gráfico ou por região ou por produto; Os gráficos devem refletir os dados mais recentes disponíveis sobre lucros por região e produto; O funcionário deve ter a opção de definir um intervalo de datas para analisar o lucro; Deve ser exibido um tooltip mostrando os valores exatos e informações adicionais relevantes ao passar o cursor sobre um segmento do gráfico |
| Como funcionário, eu quero poder adicionar ganhos e gastos a um produto para que eu controle o fluxo de caixa. |Ao adicionar um ganho ou gasto, os campos como “Quantidade”, “Data”, “Descrição” e “Tipo (Ganho/Gasto)” devem ser obrigatórios; Os valores inseridos para ganhos e gastos devem ser numéricos e não-negativos; Após adicionar um ganho ou gasto, deve ser exibido um pop-up confirmando a ação; Após a adição de um novo ganho ou gasto, o fluxo de caixa associado ao produto deve ser atualizado automaticamente.|
| Como funcionário, eu quero poder remover ganhos e gastos a um produto para que eu controle o fluxo de caixa. |Ao tentar realizar uma remoção o sistema deve solicitar uma confirmação; Após a remoção, um pop-up confirmando a remoção deve ser exibido; Após a remoção, o fluxo de caixa associado ao produto deve ser atualizado automaticamente; Deve haver um botão para desfazer a remoção.|

