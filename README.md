## Conceito

  Esse é o nono projeto solicitado durante o Bootcamp Respondeaí, a ideia do projeto foi fazer o layout,fornecido atraves do figma, de um site mobile que reserva assentos em sessões de filmes.

## Requisitos

- Este é o primeiro projeto que usamos React desde o inicio do projeto, não só uma refatoração de projetos antigos.
- O layout requisitado esta no figma: https://www.figma.com/file/rc7ZTYfLZg9zpGahWB1aXb/Cineflex
- necessario aplicar o conceito de single page aplication, utilizando react-router-dom.
- o cabeçalho como bonus tem um botão de voltar de pagina, que aparece em todas as paginas, menos na pagina inicial
- 4 paginas solicitadas:

  1. "/": A pagina inicial, necessario solicatar os filmes de um servidor dado e mostra-los nessa pagina
  2. "/sessoes/:idFilme": Esta pagina é acessada quando clicamos em um filme de nossa escolha, a pagina é renderizada mostrando as sessões e dias de cada sessão do filme escolhido
  3. "/assentos/:idSessao": Apóes Escolher uma sessão do filme, esta pagina é renderizado mostrando todos os assentos disponiveis e indisponiveis para aquela sessão. Esta é a pagina que foi solicitado a maior quantidade de requisitos, é necessario mudar a cor do assento selecionado pelo usuario para verde claro. como um bonus cada assento tera um comprador diferente, então para cada assento clicado é necessario gerar novos dois inputs pedindo o nome do comprador e seu cpf.
  4. "/sucesso": após clicar no botão de agendar, o pedido é enviado para um servidor e, ao voltar com um sucesso, essa pagina é carregada mostrando todos os dados do pedido feito.

## Scripts

Neste Projeto, você pode executar os scripts fornecidos pelo create-react-app abaxio:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
