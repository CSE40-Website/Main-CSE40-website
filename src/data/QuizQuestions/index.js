import { generalKnowledge } from './generalKnowledge'
import { javascript } from './javascript'
import { python } from './python'
import { react } from './react'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

export const Question = {
  question: '',
  choices: [],
  type: 'MCQs' | 'MAQs' | 'boolean',
  correctAnswers: [],
  score: 0,
  code: '',
  image: null,
}

export const Topic = {
  topic: '',
  level: '',
  totalQuestions: 0,
  totalScore: 0,
  totalTime: 0,
  questions: Question,
}

export const quiz = {
  JavaScript: javascript,
  React: react,
  Python: python,
  'General Knowledge': generalKnowledge,
}
