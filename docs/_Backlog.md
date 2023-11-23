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

# Valoração

A métrica utilizada nessa etapa foi: "Regra de Moscow"




## Como funciona a métrica da Regra de Moscow
A escala de Moscow é uma ferramenta que estamos usando para priorização de historias de usuário que classifica elas em quatro categorias:

Pontuação de 0-4 pontos (Não ter):

Historias de usuário com uma pontuação de 0-4 pontos são não essenciais para o produto ou serviço. Elas não são necessárias para o seu funcionamento básico e podem ser adiadas ou até mesmo descartadas.

Pontuação de 5-8 pontos (Pode ter):

Historias de usuário com uma pontuação de 5-8 pontos são importantes, mas não essenciais. Elas podem melhorar o produto ou serviço, mas não são necessárias para o seu funcionamento básico.

Pontuação de 9-12 pontos (Deveria ter):

Historias de usuário com uma pontuação de 9-12 pontos são importantes. Elas podem melhorar o produto ou serviço de forma significativa, mas não são essenciais para o seu funcionamento básico.

Pontuação de 13-15 pontos (Deve ter):

Historias de usuário com uma pontuação de 13-15 pontos são essenciais para o produto ou serviço. Elas são necessárias para o seu funcionamento básico e devem ser priorizadas.

## Regra de Moscow
| Descrição | Intervalo |
|-----------|-----------|
| Não ter   |    0-4    |
| Pode ter   |   5-8    |
| Deveria ter|   9-12   |
| Deve ter   |   13-15  |

</br>
</br>


## Tabela de Valoração dos Épicos
|Épico|  Regra de Moscow|
|-------|-----------------|
|1 - Plataforma de gerênciamento e visualização de catálogo| 15 |
| 2 - Plataforma de gerenciamento empresarial |12|


</br>
</br>

# Tabela de Valoração das User Stories

| Épico | User Story  | Regra de Moscow |
|-------|---------|-----------------|
|Priorização Épico 1 |  |  | |  |  |  |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.1.1.1** Como cliente, eu quero informar meu contato para que algum funcionário me auxilie na escolha.  |  15 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.1.1.2** Como funcionário, eu quero ter uma forma de visualizar os contatos preenchidos para que eu possa dialogar com os interessados.  |   15 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.1.2.1** Como cliente, eu quero visualizar os produtos em tabela e mapa, para facilitar a identificação e busca.  |  15 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.1.2.2** Como cliente, eu quero pesquisar os produtos por texto, para achar produtos por informações específicas.  |  15 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.2.1.1** Como funcionário, eu quero adicionar novos produtos para que a atualização da página inicial seja pelo sistema.  |  13 ||
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.2.1.2** Como funcionário, eu quero remover produtos para manter a visualização coerente com o mundo real.  |  13 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.2.1.3** Como funcionário, eu quero atualizar informações e estado sobre um produto, para que os produtos mantenham informações corretas.  |  15 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.2.1.4** Como funcionário, eu quero ser notificado via email sempre que um contrato estiver 15 dias antes do seu vencimento.  |  15 |
| 1 - Plataforma de gerênciamento e visualização de catálogo | **1.2.1.5** Como funcionário, eu quero importar arquivos .csv ou .xslx sobre os produtos para criar vários de uma vez.  |   8 |
|Priorização Épico 2 |  |  | |  |  |  |
| 2 - Plataforma de gerenciamento empresarial | **2.1.1.1** Como funcionário, eu quero adicionar novos funcionários ao meu sistema para que tenham acesso a plataforma.  |  7 |
| 2 - Plataforma de gerenciamento empresarial | **2.1.1.2** Como funcionário, eu quero de excluir funcionários para em caso de demissão, eles não terem mais acesso a plataforma.  |  7 |
| 2 - Plataforma de gerenciamento empresarial | **2.1.1.3** Como funcionário, eu quero atualizar outros funcionários já criados para corrigir erros cometidos na criação.  |  7 |
| 2 - Plataforma de gerenciamento empresarial | **2.1.1.4** Como funcionário, eu quero ver todos os funcionários criados para ver quem tem acesso a plataforma.  |  7 |
| 2 - Plataforma de gerenciamento empresarial | **2.1.2.1** Como funcionário, eu quero adicionar responsabilidades aos funcionários para melhor organização.  |  5 |
| 2 - Plataforma de gerenciamento empresarial | **2.1.2.2** Como funcionário, eu quero remover responsabilidades aos funcionários para que tarefas.  |  5 |
| 2 - Plataforma de gerenciamento empresarial | **2.1.2.3** Como funcionário, eu quero ver as responsabilidades a mim atribuídas para melhor organização.  |  5 |
| 2 - Plataforma de gerenciamento empresarial | **2.2.1.1** Como funcionário, eu quero poder visualizar o histórico de fluxo de caixa dos produtos, para acompanhar o desempenho financeiro dos produtos.  |  14 |
| 2 - Plataforma de gerenciamento empresarial | **2.2.1.2** Como funcionário, eu quero poder gerar gráficos de pizza sobre o lucro por região e por produto para facilitar a identificação dos produtos mais importantes.  |  7 |
| 2 - Plataforma de gerenciamento empresarial | **2.2.2.1** Como funcionário, eu quero poder adicionar ganhos e gastos a um produto para que eu controle o fluxo de caixa.  | 13 |
| 2 - Plataforma de gerenciamento empresarial | **2.2.2.2** Como funcionário, eu quero poder remover ganhos e gastos a um produto para que eu controle o fluxo de caixa  |  13 |

</br>
</br>

# Definition of Ready (DoR):
Uma história atingirá a definição de preparada quando estiver de acordo com esses quatro itens:

* A história de usuário está representando um requisito?;
* A história possui informação necessária para ser trabalhada?;
* A história possui critérios de aceitação?;
* A história cabe em uma sprint?

A história atingirá a definição de pronta quando estiver de acordo com esses itens:

* Estiver de acordo com todos os critérios de aceitação;
* Sua implementação estiver de acordo com os padrões de codificação;
* Ter passado por todos os testes;
* Estiver devidamente documentada.






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
| 1.2.1.4 |  Como funcionário, eu quero ser notificado via email sempre que um contrato estiver 15 dias antes do seu vencimento. |

</br>
</br>

# Proposta de MVP2
| US | Descrição |
|------|----------|
| 1.2.1.2 |  Como funcionário, eu quero importar arquivos .csv ou .xslx sobre os produtos para criar vários de uma vez. |
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

