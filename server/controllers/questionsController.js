import {db} from '../db.js';


export const addQuestion = async (req, res) => {
    const { problem, image_url, answers, correct_answer_index } = req.body;

    if (!problem || !answers || correct_answer_index === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const result = await db.query(
            'INSERT INTO questions (problem, image_url, answers, correct_answer_index) VALUES (?, ?, ?, ?)',
            [problem, image_url, JSON.stringify(answers), correct_answer_index]
        );
        res.status(201).json({ message: 'Question added successfully', quiz_id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Database error', details: error.message });
    }
};

export const getAllQuestions = async (req,res) =>{
    try{
        const result = await db.query('SELECT * FROM questions');
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({ error: 'Database error', details: error.message });
    }
}