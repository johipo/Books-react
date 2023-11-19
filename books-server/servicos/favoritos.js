import fs from 'fs';

function getLivrosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletaFavoritoPorId(id){
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
    const livrosFavoritosAtualizados = favoritos.filter( livro => livro.id !== id);

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFavoritosAtualizados));
}

function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    if (favoritos.find(livro => livro.id === id)) {
        return 'Livro já se encontra favoritado';
    } else {
        const livroInserido = livros.find(livro => livro.id === id);
        const novaListaDeFavoritos = [...favoritos, livroInserido];

        fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos));
        return 'Livro Favoritado com Sucesso';
    }
}

export { 
    getLivrosFavoritos,
    insereFavorito,
    deletaFavoritoPorId
};