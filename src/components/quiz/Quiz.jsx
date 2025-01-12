import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useAuthContext } from "@asgardeo/auth-react";


const sampleQuestions = [
    {
        id: 1,
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
        answer: "Central Processing Unit"
    },
    {
        id: 2,
        question: "Which language is used for web apps?",
        options: ["PHP", "Python", "JavaScript", "All"],
        answer: "All"
    },
    {
        id: 3,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna", "None of these"],
        answer: "Hyper Text Markup Language"
    }
];

export const Quiz = () => {

    // const authContext = useAuthContext();
    // console.log(authContext);
    // if (!authContext) {
    //     return <div>Loading...</div>;
    // }
    // const { state, signIn, signOut } = authContext;

    // if (!state.isAuthenticated) {
    //     console.log("User not authenticated");
    //     return <button onClick={() => signIn()}>Login</button>;
    // }

    // console.log(`User ID: ${state.username}`);
    // console.log(`Score: ${calculateScore()}`); // Assuming calculateScore is a function that calculates the user's score
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [timer, setTimer] = useState(600); // 10 minutes in seconds

    useEffect(() => {
        // Fetch questions from the database using axios
        // For now, we use hardcoded sampleQuestions
        setQuestions(sampleQuestions);

        // Timer countdown
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(countdown);
                    submitQuiz();
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleNextQuestion = () => {
        if (selectedOption) {
            // Save the answer (for now, just log it)
            console.log(`Question ${questions[currentQuestionIndex].id} answered with: ${selectedOption}`);
            setSelectedOption('');
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const submitQuiz = () => {
        // Submit the quiz answers (for now, just log it)
        console.log(JSON.stringify(questions));
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;

    }

    if (currentQuestionIndex >= questions.length) {
        return <div>Quiz completed. Thank you!</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <h1>Quiz</h1>
            <div>Time remaining: {Math.floor(timer / 60)}:{timer % 60}</div>
            <div>
                <h2>{currentQuestion.question}</h2>
                {currentQuestion.options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`option${index}`}
                            name="quiz"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option${index}`}>{option}</label>
                    </div>
                ))}
            </div>
            <button onClick={handleNextQuestion}>Next</button>
        </div>
    );
};

