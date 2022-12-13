# PDV - APP

### Aplicativo desenvolvido para a disciplina de Projeto de Desenvolvimento de Software.

#### Requisitos

- [React Native Ambiente de Desenvolvimento](https://reactnative.dev/docs/environment-setup)
- Gerenciador de pacotes ([Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) ou [NPM](https://www.npmjs.com/))

### Rodando o APP

- Instale as dependências do projeto: 

```bash
  yarn || npm i
```

- Crie o arquivo .env e preencha-o com `http://localhost:3001` caso esteja rodando a API na mesma máquina do aplicativo.

```bash
cp .env.example .env
```

- Rode o Metro Bundler:

```bash
npx react-native run start 
```

- Compile o projeto: 

```bash
npx react-native run-android || npx react-native run-ios
```
