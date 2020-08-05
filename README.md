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


#### Criar um projeto React com Yarn:

```
yarn creat-react-app <nome-do-projeto> --template typescript
```

No caso desse projeto utilizamos o parâmetro `--template typescript`, o qual permite selecionar um modelo/template para criar o projeto.


#### Módulos instalados

|Módulo|Comando|
|------|-------|
|Rotas de navegação|`yarn add react-router-dom`|
||`yarn add @types/react-router-dom -D`
