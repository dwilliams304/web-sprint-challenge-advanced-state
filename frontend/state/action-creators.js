// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM } 
  from './action-types'

import axios from 'axios'

export const moveClockwise = () => {
  return { type: MOVE_CLOCKWISE }
 }

export const moveCounterClockwise = () => {
  return { type: MOVE_COUNTERCLOCKWISE }
 }

export const selectAnswer = id => {

 }

export const setMessage = message => {

 }

export const setQuiz = quiz => {
  return { type: SET_QUIZ_INTO_STATE, payload: quiz }
 }

export const inputChange = (name, value) => {
  return { type: INPUT_CHANGE, payload: {value, name}}
 }

export const resetForm = () => {
  return {type: RESET_FORM}
 }

// ❗ Async action creators
export function fetchQuiz() {
  return(dispatch => {
    dispatch(setQuiz())
    axios.get("http://localhost:9000/api/quiz/next")
      .then(res => {
        console.log(res);
        setQuiz(res);
      })
      .catch(err => {
        console.log(err);
      })
  })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  
}
export function postAnswer() {
  return(dispatch => {
    axios.post('http://localhost:9000/api/quiz/answer', {})
      .then(res => {
        console.log(res);
        resetForm();
      })
      .catch(err => {
        console.log(err);
      })
  })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  
}
export function postQuiz() {
  return(dispatch => {
    console.log('Quiz posted');
    axios.post('http://localhost:9000/api/quiz/new', {})
      .then(res => {

      })
      .catch(err => {

      })
  })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
