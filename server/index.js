
import express, { json } from 'express';
import questionRoute from './routes/questionsRoute.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use('/api/questions', questionRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
