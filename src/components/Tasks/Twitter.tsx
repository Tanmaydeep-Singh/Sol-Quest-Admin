import { useState } from "react";

const Twitter = (props: any) => {
	const taskData = {
		task: "twitter",
		customisation: {},
		points: 50,
	};

	const [task, setTask] = useState({
		// task1
		twitter_id: "",
		// task2
		like: "",
		// task3
		retweet: "",
	});

	const handleInputChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setTask({ ...task, [name]: value });
	};

	const handleData = (event: any) => {
		event.preventDefault();
		taskData.customisation = task;
		// eslint-disable-next-line react/destructuring-assignment
		props.onData(taskData);
		setTask({
			// task1
			twitter_id: "",
			// task2
			like: "",
			// task3
			retweet: "",
		});
	};

	return (
		<div className="rounded-md  ">
			<form className="p-5">
				<div className="collapse-title text-md rounded text-[#ffffff]">Twitter ID</div>
				<div className="collapse-title text-md mt-4 text-[#ffffff]">
					Enter the Twitter ID
				</div>
				<div className="collapse-content">
					<input
						type="text"
						name="twitter_id"
						value={task.twitter_id}
						onChange={handleInputChange}
						className=" my-2 h-8  w-full border-b-2   text-[#000000] "
					/>
				</div>
				<button
					type="button"
					className=" m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold hover:border-blue-500 hover:bg-blue-400"
					onClick={handleData}
				>
					Add Tasks
				</button>{" "}
				<div className="collapse-title text-md mt-4 text-[#ffffff]">
					Enter the share link for the tweet you want to like
				</div>
				<div className="collapse-content">
					<input
						type="text"
						name="like"
						value={task.like}
						onChange={handleInputChange}
						className=" my-2 h-8  w-full border-b-2   text-[#000000] "
					/>
				</div>
				<button
					type="button"
					className=" m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold hover:border-blue-500 hover:bg-blue-400"
					onClick={handleData}
				>
					Add Tasks
				</button>{" "}
				<div className="collapse-title text-md mt-4 text-[#ffffff] ">
					Enter the share link for the tweet you want to retweet
				</div>
				<div className="collapse-content">
					<input
						type="text"
						name="retweet"
						value={task.retweet}
						onChange={handleInputChange}
						className=" my-2 h-8  w-full border-b-2   text-[#000000] "
					/>
				</div>
				<button
					type="button"
					className=" m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold hover:border-blue-500 hover:bg-blue-400"
					onClick={handleData}
				>
					Add Tasks
				</button>{" "}
				<br />
			</form>
		</div>
	);
};

export default Twitter;
