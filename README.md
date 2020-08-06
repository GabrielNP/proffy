<p align="center">
   <img src="https://github.com/vsamarcus/proffy/blob/master/.github/logo.png?raw=true" alt="Proffy" width="280"/>
</p>

# Next Level Week #2 by @Rocketseat

Vamos criar a Proffy, uma plataforma de estudos e conexão entre alunos e professores.

## Sumário
- [Dependências](#Dependências)
- [Executar projeto](#Executar-Projeto)
- [Documentação](#Breve-documentação-técnica)


## Dependências:

- Node + NPM
- Yarn

## Executar Projeto

```bash
# Clonar repositório
$ git clone https://github.com/GabrielNP/proffy.git
```

### Executar Web

```bash
# Ir para a pasta web
cd web/
```

#### Com NPM
```bash
# Instalar dependências
$ npm install 
# Executar aplicação
$ npm start
```
#### Com Yarn
```bash
# Instalar dependências
$ yarn install 
# Executar aplicação
$ yarn start
```

Acessar pelo navegador o endereço `http://localhost:3000` para ver a aplicação rodando.

### Executar API

...

## Breve documentação técnica

Este tópico tem como finalidade deixar registrado para o autor e qualquer pessoa algumas instruções que foram aprendidas e/ou utilizadas para conceber este projeto.


#### Criar uma aplicação React:

```
yarn creat-react-app <nome-do-projeto> --template typescript

ou

npx creat-react-app <nome-do-projeto> --template typescript
```

No caso desse projeto utilizamos o parâmetro `--template typescript`, o qual permite selecionar um modelo/template para criar o projeto.

#### Criar um servidor Node:

 -
   ```bash
   # Iniciar um projeto
   yarn init -y
   
   ou
   
   npm init -y
   ```

- No caso deste projeto queremos trabalhar com Typescript, portanto é necessário instalar essa dependência (ver [módulos instalados](#Módulos-instalados)).

- 
   ```bash
   # Criar aquivo de configuração do Typescript
   yarn tsc --init 

   ou 

   npx tsc --init
   ```

#### Módulos instalados

|Módulo|Comando|
|------|-------|
|Rotas de navegação|`yarn add react-router-dom`|
||`yarn add @types/react-router-dom -D`
|Typescript|`yarn add typescript -D`
|Node TS server|`yarn add ts-node-dev -D`
|Express|`yarn add express`
||`yarn add @types/express -D`
