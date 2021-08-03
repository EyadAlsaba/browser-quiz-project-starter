'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};

export const handleAnswerCheck = (event) => {
  console.log(event.target)
  return
  const questionIndex = quizData.questions;
  questionIndex.forEach((questionX) => {
    if (questionX.selected === questionX.correct) {
      console.log(`That's true hora`);
    } else {
      console.log(
        `correct answer is ${questionX.correct}, for more info check links ${questionX.links[0].href}`
      );
    }
  });
};
