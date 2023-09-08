import React from 'react'
import { connect } from 'react-redux'


export function Message(props) {


  return <div id="message">{props.infoMessage}</div>
}

const mapStateToProps = state => {
  return({
    infoMessage: state.infoMessage
  })
}

export default connect(mapStateToProps, {})(Message)