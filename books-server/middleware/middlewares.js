import fs from 'fs';

function verificaIdLivroExistente(req, res, next) {
    const { id } = req.params;
  
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter( livro => livro.id === id);
  
    if (livroFiltrado.length > 0) {
        next(); 
    } else {
        res.status(404).send('Id do livro não foi encontrado'); 
    }
};

function verificaIdFavoritoExistente(req, res, next) {
    const { id } = req.params;
  
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));
    const livroFiltrado = livros.filter( livro => livro.id === id);
  
    if (livroFiltrado.length > 0) {
        next(); 
    } else {
        res.status(404).send('Id do livro não foi encontrado'); 
    }
};

function verificaIdNumero(req, res, next) {
    const { id } = req.params;
    let valor = Number(id);

    if (!isNaN(valor) && valor > 0) {
        next(); 
    } else {
        res.status(422).send('Id do livro é inválido'); 
    }
}

function verificaBody(req, res, next) {
    const body = req.body;

    if (Object.keys(body).length == 1 && body.nome) {
        next(); 
    } else {
        res.status(400).send('Body inválido, verifique de utilizar apenas o campo nome no body'); 
    }
}

export {
    verificaIdLivroExistente,
    verificaIdFavoritoExistente,
    verificaIdNumero,
    verificaBody
};
  