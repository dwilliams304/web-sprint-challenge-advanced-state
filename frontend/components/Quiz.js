import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, postAnswer, setMessage } from '../state/action-creators';



export function Quiz(props) {

  const { quiz, selectedAnswer, fetchQuiz, selectAnswer, postAnswer, setMessage } = props;

  const handleSubmit = e => {
    e.preventDefault();
    postAnswer(quiz.quiz_id, selectedAnswer);
    fetchQuiz();
  }

  const handleSelection = e => {
    selectAnswer(e.target.id);
    setMessage('');
  }


  useEffect(() => {
    if(!quiz) fetchQuiz();
  }, [])

  const checkIfSelected = idx => {
    if(selectedAnswer === quiz.answers[idx].answer_id) return true;
    return false;
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${checkIfSelected(0) ? "selected": ""}`}>
                {quiz.answers[0].text}
                <button onClick={handleSelection} id={quiz.answers[0].answer_id}>{checkIfSelected(0) ? "SELECTED": "Select"}</button>
              </div>

              <div className={`answer ${checkIfSelected(1) ? "selected": ""}`}>
                {quiz.answers[1].text}
                <button onClick={handleSelection} id={quiz.answers[1].answer_id}>{checkIfSelected(1) ? "SELECTED": "Select"}</button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={selectedAnswer === null ? true: false}>Submit answer</button>
          </>
        ) : ('Loading next quiz...')
      }
    </div>
  )
}

const mapStateToProps = state => {
  return({
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  })
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer, setMessage})(Quiz)