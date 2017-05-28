import React from 'react';
import '../../assets/styles/atoms/Button.css';

const Button = ({onClick, children, isActive, leftIcon, rightIcon, customStyle}) => {

  let stateClass;

  if (!isActive ) {
    stateClass = 'btn--inactive'
    customStyle = null
    onClick = null
  }

  let leftIconElement;

  if (leftIcon) {
    leftIconElement = <img className = "btn__icon btn__icon--left" src = {leftIcon}/>
  }

  let rightIconElement;

  if (rightIcon) {
    rightIconElement = <img className = "btn__icon btn__icon--right" src = {rightIcon}/>
  }

  return (
    <button className = {`btn ${stateClass}`} style = {customStyle} onClick = {onClick}>
      {leftIconElement}
      {children}
      {rightIconElement}
    </button>
  )

}

Button.defaultProps = {
  isActive: true
}

export default Button;
