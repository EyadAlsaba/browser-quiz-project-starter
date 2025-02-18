'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
import { handleAnswerCheck } from '../handlers/questionHandlers.js';
//import { restartGame } from '../views/questionViews.js';

export const nextQuestion = () => {
  handleNextQuestion();
};

export const checkAnswer = (event) => {
  handleAnswerCheck(event);
};
