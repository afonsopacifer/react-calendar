import React from 'react';
import '../../assets/styles/atoms/CheckBox.css';

const CheckBox = ({id, label, action, isChecked}) => {

	let labelDone;

	if (isChecked) {
		labelDone = "checkbox__label--done";
	}

  return (
		<div className = "checkbox">
			<span>
				<input
					className = "checkbox__input"
					id = {id}
					type = "checkbox"
					checked = {isChecked}
					onChange = {action}/>
			</span>
			<label
				className = {`checkbox__label ${labelDone}`}
				for = {id}>
				{label}
			</label>
		</div>
  )

}

export default CheckBox;
