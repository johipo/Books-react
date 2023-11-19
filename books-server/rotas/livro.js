import { Router } from 'express';
import { getLivro, postLivro, patchLivro, deleteLivro } from '../controladores/livro.js'
import { verificaIdLivroExistente, verificaIdNumero, verificaBody } from '../middleware/middlewares.js';

const router = Router();

router.get('/:id', verificaIdNumero, verificaIdLivroExistente, getLivro)
router.post('/', verificaBody, postLivro)
router.patch('/:id', verificaIdNumero, verificaIdLivroExistente, verificaBody, patchLivro)
router.delete('/:id', verificaIdNumero, verificaIdLivroExistente, deleteLivro)

export default router;