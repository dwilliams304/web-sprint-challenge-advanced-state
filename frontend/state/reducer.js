// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM } 
  from './action-types'


const initialState = {
  wheel: 0,
  quiz: null,
  selectedAnswer: null,
  infoMessage: '',
  form: {
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: ''
  }
}

function wheel(state = initialState.wheel, action) {
  switch(action.type){
    case(MOVE_CLOCKWISE):
      return(state === 5 ? state = 0 : state + 1)
    
    case(MOVE_COUNTERCLOCKWISE):
      return(state === 0 ? state = 5 : state - 1)

    default:
      return state;
  }
}

function quiz(state = initialState.quiz, action) {
  switch(action.type){
    case(SET_QUIZ_INTO_STATE):
      return(state = action.payload)
    
    default:
      return state;
  }
}

function selectedAnswer(state = initialState.selectedAnswer, action) {
  switch(action.type){
    case(SET_SELECTED_ANSWER):
      return(state = action.payload)
    
    
    default:
      return state;
  }
}

function infoMessage(state = initialState.infoMessage, action) {
  switch(action.type){
    case(SET_INFO_MESSAGE):
      return(state = action.payload)

    default:
      return state;
  }
}

function form(state = initialState.form, action) {
  switch(action.type){
    case(INPUT_CHANGE):
      return({
        ...state,
        [action.payload.name]: action.payload.value
      })

    case(RESET_FORM):
      return({
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: ''
      })
    default:
      return state;
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
