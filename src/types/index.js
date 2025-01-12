import { Dispatch, SetStateAction } from 'react';
import { Question } from '../data/QuizQuestions';

export const ScreenTypes = {
  SplashScreen: 'SplashScreen',
  QuizTopicsScreen: 'QuizTopicsScreen',
  QuizDetailsScreen: 'QuizDetailsScreen',
  QuestionScreen: 'QuestionScreen',
  ResultScreen: 'ResultScreen',
};

export const Result = {
  selectedAnswer: [],
  isMatch: false,
  ...Question,
};

export const QuizContextTypes = {
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: /** @type {Dispatch<SetStateAction<ScreenTypes>>} */ (null),
  quizTopic: '',
  selectQuizTopic: /** @type {(type: string) => void} */ (null),
  questions: /** @type {Question[]} */ ([]),
  setQuestions: /** @type {Dispatch<SetStateAction<any[]>>} */ (null),
  result: /** @type {Result[]} */ ([]),
  setResult: /** @type {Dispatch<SetStateAction<any[]>>} */ (null),
  timer: 0,
  setTimer: /** @type {Dispatch<SetStateAction<number>>} */ (null),
  endTime: 0,
  setEndTime: /** @type {(type: number) => void} */ (null),
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: '',
  },
};