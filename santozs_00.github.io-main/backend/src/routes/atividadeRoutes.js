import { Router } from 'express';
import { listarAtividades, criarAtividade } from '../controllers/atividadeController.js';

const router = Router();

router.get('/', listarAtividades);
router.post('/', criarAtividade);

export default router;
