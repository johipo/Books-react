import { Router } from 'express';
import { getLivros} from '../controladores/livros.js'

const router = Router();

router.get('/', getLivros)

export default router;