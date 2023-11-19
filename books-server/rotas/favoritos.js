import { Router } from 'express';
import { verificaIdFavoritoExistente } from '../middleware/middlewares.js';
import { deletaLivroFavorito, getFavoritos, postLivroFavorito } from '../controladores/favoritos.js';

const router = Router();

router.get('/', getFavoritos)
router.post('/:id', postLivroFavorito)
router.delete('/:id', verificaIdFavoritoExistente, deletaLivroFavorito)

export default router;