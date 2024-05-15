import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit, showCorrectAnswer} = this.props;
		const isCorrect = selectedOption === question.answer;

		return(
			<div className="">
				<br></br>
				<h3>{question.id}. kérdés</h3>
				<h5 className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
						showCorrectAnswer={showCorrectAnswer}
						isCorrect={isCorrect}
					/>
					<button type="submit" className="btn btn-primary mt-2">
						TOVÁBB
					</button>
				</form>
				{showCorrectAnswer && !isCorrect && ( // Zölddel jelöljük a helyes választ
					<div className="bg-success">
						Helyes válasz: {question.answer}
					</div>
				)}
			</div>
		)
	}
}

export default Question;
