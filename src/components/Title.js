import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.css'

class Title extends PureComponent {
  static propTypes = { // eslint-disable-line no-undef
      content: PropTypes.string.isRequired,
   }

  render() {
    return (
      <h1 className= "Title">{ this.props.content }</h1>
    )
  }
}

export default Title
