import { geTodosLivros} from '../servicos/livros.js';

function getLivros(req, res){
    try {
        const livros = geTodosLivros();
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export {
    getLivros
};