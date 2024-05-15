import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Options extends Component {
	render() {
		const { options, selectedOption, onOptionChange, showCorrectAnswer, isCorrect } = this.props;

		return (
			<div className='options'>
				{options.map((option, index) => (
					<div key={index} className="form-check">
						<input
							type="radio"
							name="option"
							id={index}
							value={option}
							checked={selectedOption === option}
							onChange={onOptionChange}
							disabled={showCorrectAnswer}
							className="form-check-input"
						/>
						<label for={index} className={`form-check-label ${showCorrectAnswer && !isCorrect && option === selectedOption ? "bg-danger" : ""} ${showCorrectAnswer && isCorrect && option === selectedOption ? "bg-success" : ""}`}>{option}</label>
					</div>
				))}
			</div>
		);
	}
}

export default Options;
