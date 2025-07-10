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

## Estrutura do projeto

/pages         -> Classes que representam as páginas do sistema (Page Objects)
/tests         -> Arquivos de teste
/utils         -> Funções utilitarias, como geradores de dados
/wdio.conf.js  -> Configuração do WebdriverIO