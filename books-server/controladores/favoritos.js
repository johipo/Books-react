import { getLivrosFavoritos, deletaFavoritoPorId, insereFavorito} from '../servicos/favoritos.js';

function getFavoritos(req, res){
    try {
        const livros = getLivrosFavoritos();
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivroFavorito(req, res){
    try {
        const id = req.params.id
        const message = insereFavorito(id);
        res.status(201);
        res.send(message)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletaLivroFavorito(req, res){
    try {
        const id = req.params.id;
        deletaFavoritoPorId(id);
        res.send(`Livro Favorito Deletado`)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export {
    getFavoritos,
    postLivroFavorito,
    deletaLivroFavorito
};