import { getLivroPorId, insereLivro, modificaLivro, deletaLivro } from '../servicos/livro.js';

function getLivro(req, res){
    try {
        const id = req.params.id;
        const livro = getLivroPorId(id);
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body;
        insereLivro(livroNovo);
        res.status(201);
        res.send('Livro inserido com Sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id;
        const modificacoes = req.body;
        const livroAtualizado = modificaLivro(modificacoes ,id);
        res.send(`Livro atualizado\n\n${JSON.stringify(livroAtualizado)}`)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id;
        deletaLivro(id);
        res.send(`Livro Deletado`)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export {
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};