import { useState } from "react";

const Coinmarketcap = (props: any) => {
	const taskData = {
		task: "coinmarketcap",
		customisation: {},
		points: 50,
	};

	const [task, setTask] = useState({
		// task1
		link: "",
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
	};

	return (
		<form className="rounded-md  p-5">
			<div className=" text-[#ffffff] ">
				<div className="">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">Coinmarketcap Link</div>
					<div className="collapse-content">
						<input
							type="text"
							name="link"
							value={task.link}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
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

export default Coinmarketcap;
