import { Router } from 'express';
import {addQuestion,getAllQuestions} from '../controllers/questionsController.js';

const router = Router();

router.post('/',addQuestion);
router.get('/',getAllQuestions);

export default router;