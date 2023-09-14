import { useState } from "react";

const Quiz = (props: any) => {
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");
	const [answer, setAnswer] = useState("");
	const [question, setQuestion] = useState("");

	const taskData = {
		task: "quiz",
		customisation: {},
		points: 10,
	};

	// const [task, setTask] = useState({
	// 	// task1
	// 	question: "Question",
	// 	options: [option1, option2, option3, option4],
	// 	answer: 0,
	// });

	// const handleInputChange = (event: { target: { name: any; value: any } }) => {
	// 	const { name, value } = event.target;
	// 	console.log(option1);
	// 	setTask({ ...task, [name]: value });
	// };

	const handleData = (event: any) => {
		event.preventDefault();
		const task = {
			// task1
			question: question,
			options: [option1, option2, option3, option4],
			answer: answer,
		};
		taskData.customisation = task;
		// eslint-disable-next-line react/destructuring-assignment
		props.onData(taskData);
	};

	return (
		<form className="rounded-md   p-5">
			<div className=" text-[#ffffff] ">
				<div className="">
					<input type="checkbox" />

					{/* QUESTION */}
					<div className="collapse-title text-md mt-4">Define Question?</div>
					<div className="collapse-content">
						<input
							type="text"
							name="question"
							value={question}
							onChange={(e) => {
								setQuestion(e.target.value);
							}}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>

					{/* OPRIONS */}
					<div className="collapse-title text-md mt-4">Options</div>
					<div className="collapse-content">
						<input
							type="text"
							name="option 1"
							value={option1}
							onChange={(e) => {
								setOption1(e.target.value);
							}}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="option 2"
							value={option2}
							onChange={(e) => {
								setOption2(e.target.value);
							}}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="option 3"
							value={option3}
							onChange={(e) => {
								setOption3(e.target.value);
							}}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="option 4"
							value={option4}
							onChange={(e) => {
								setOption4(e.target.value);
							}}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>

					{/* Answer */}
					<div className="collapse-title text-md mt-4">Select Correct Option?</div>
					<select
						name="reward_method"
						value={answer}
						onChange={(e) => {
							setAnswer(e.target.value);
						}}
						className="select select-ghost mb-6 w-full w-full max-w-xs rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
						required
					>
						<option>0</option>
						<option>1 </option>
						<option>2</option>
						<option>3</option>
					</select>
				</div>
			</div>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold hover:border-blue-500 hover:bg-blue-400"
				onClick={handleData}
			>
				Save Task
			</button>
		</form>
	);
};

export default Quiz;
