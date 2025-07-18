# Projeto de Automação de Testes Web

## Descrição

Este projeto automatiza testes da aplicação web https://automationexercise.com/

---

## Tecnologias e ferramentas

* Usa o framework WebdriverIO
* O Allure Reporter para gerar relatórios
* Padrão de projeto Page Object
* Estrutura de teste Triple A (Arrange, Act, Assert)
* Execução no modo headless
* Organizado por suítes
* Faker para gerar dados dinâmicos

---

## Pré-requisitos

* Node.js instalado
* Navegador Chrome instalado
* Git

---

## Como executar

1. Clone o repositório:

   git clone https://github.com/seuusuario/seuprojeto.git

2. Instale as dependências:

   npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/allure-reporter allure-commandline faker

3. Execute os testes:

   npx wdio run wdio.conf.js

4. Gere o relatório Allure:

   allure generate reports/allure-results --clean -o allure-report
   allure open allure-report

---

## Visualizar o relatório após a execução da pipeline

Após a pipeline finalizar, você pode baixar e visualizar o relatório localmente seguindo os passos abaixo:

1. Faça o download do artefato gerado na execução da pipeline.

2. Descompacte o arquivo em uma pasta de sua preferência.

3. Abra o terminal e navegue até a pasta onde o relatório foi extraído.  
   Exemplo:
   cd /caminho/para/a/pasta/allure-report

4. Caso ainda não tenha, instale o servidor estático serve:
   npm install -g serve

5. Execute o servidor local na porta 8080:
   serve -l 8080

6. Abra o navegador e acesse:
   http://localhost:8080
   
---

## Estrutura do projeto

/pages         -> Classes que representam as páginas do sistema (Page Objects)
/tests         -> Arquivos de teste
/utils         -> Funções utilitarias, como geradores de dados
/wdio.conf.js  -> Configuração do WebdriverIO