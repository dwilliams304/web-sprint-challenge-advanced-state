import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { inputChange, postQuiz, form } = props;

  const onChange = evt => {
    const {name, value} = evt.target;
    inputChange(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={form.newQuestion} name="newQuestion" id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={form.newTrueAnswer} name="newTrueAnswer" id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={form.newFalseAnswer} name="newFalseAnswer" id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={
        form.newQuestion.trim().length > 0 && 
        form.newTrueAnswer.trim().length > 0 &&
        form.newFalseAnswer.trim().length > 0 ? false: true
        }>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
