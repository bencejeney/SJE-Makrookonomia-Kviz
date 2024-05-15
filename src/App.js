import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import fejezet1 from "./Components/Fejezet1";
import fejezet2 from "./Components/Fejezet2";
import fejezet3 from "./Components/Fejezet3";
import fejezet4 from "./Components/Fejezet4";
import fejezet5 from "./Components/Fejezet5";
import fejezet6 from "./Components/Fejezet6";
import fejezet7 from "./Components/Fejezet7";
import fejezet8 from "./Components/Fejezet8";
import fejezet9 from "./Components/Fejezet9";
import fejezet10 from "./Components/Fejezet10";
import Score from "./Components/Score";
import shuffleArray from "./utils/shuffleArray";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionBank: null,
			currentQuestion: 0,
			selectedOption: "",
			score: 0,
			quizEnd: false,
			randomOrder: false,
			showCorrectAnswer: false,
		};
	}

	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.checkAnswer();
	};

	checkAnswer = () => {
		const { questionBank, currentQuestion, selectedOption } = this.state;
		const isCorrect = selectedOption === questionBank[currentQuestion].answer;

		if (isCorrect) {
			this.setState((prevState) => ({ score: prevState.score + 1 }));
		}

		this.setState({ showCorrectAnswer: true, isCorrect });

		setTimeout(this.handleNextQuestion, 3000);
	};

	handleNextQuestion = () => {
		const { questionBank, currentQuestion } = this.state;
		if (currentQuestion + 1 < questionBank.length) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				selectedOption: "",
				showCorrectAnswer: false,
			}));
		} else {
			this.setState({
				quizEnd: true,
			});
		}
	};

	handleChapterSelect = (chapter) => {
		this.setState({
			questionBank: chapter,
			currentQuestion: 0,
			selectedOption: "",
			score: 0,
			quizEnd: false,
			randomOrder: false,
		});
	};

	handleRandomOrderToggle = () => {
		this.setState((prevState) => ({
			randomOrder: !prevState.randomOrder,
		}));
	};

	render() {
		const { questionBank, currentQuestion, selectedOption, score, quizEnd, randomOrder, showCorrectAnswer } = this.state;
		return (
			<div className="App d-flex flex-column align-items-center justify-content-center">
				<h1 className="app-title">Selye János Egyetem - Makroökonómia kvíz</h1>
				{questionBank === null ? (
					<div>
						<h2>Válassz egy fejezetet:</h2>
						<ul>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet1) : fejezet1)}>1. fejezet ({fejezet1.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet2) : fejezet2)}>2. fejezet ({fejezet2.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet3) : fejezet3)}>3. fejezet ({fejezet3.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet4) : fejezet4)}>4. fejezet ({fejezet4.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet5) : fejezet5)}>5. fejezet ({fejezet5.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet6) : fejezet6)}>6. fejezet ({fejezet6.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet7) : fejezet7)}>7. fejezet ({fejezet7.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet8) : fejezet8)}>8. fejezet ({fejezet8.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet9) : fejezet9)}>9. fejezet ({fejezet9.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(fejezet10) : fejezet10)}>10. fejezet ({fejezet10.length} kérdés)</li>
							<li onClick={() => this.handleChapterSelect(randomOrder ? shuffleArray(qBank) : qBank)}>Összes ({qBank.length} kérdés)</li>
						</ul>
						<button onClick={this.handleRandomOrderToggle}>
							{randomOrder ? "Véletlenszerű sorrend kikapcsolása" : "Véletlenszerű sorrend bekapcsolása"}
						</button>
					</div>
				) : (
					<div>
						{!quizEnd ? (
							<Question
								question={questionBank[currentQuestion]}
								selectedOption={selectedOption}
								onOptionChange={this.handleOptionChange}
								onSubmit={this.handleFormSubmit}
								showCorrectAnswer={showCorrectAnswer}
								randomOrder={randomOrder}
							/>
						) : (
							<Score
								score={score}
								onNextQuestion={this.handleNextQuestion}
								className="score"
							/>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default App;
