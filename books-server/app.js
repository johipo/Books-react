import express from 'express';
import rotaLivro  from './rotas/livro.js'
import rotaLivros  from './rotas/livros.js'
import rotaFavoritos  from './rotas/favoritos.js'
import cors from 'cors';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}))

app.use('/livro', rotaLivro);
app.use('/livros', rotaLivros);
app.use('/favoritos', rotaFavoritos);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})