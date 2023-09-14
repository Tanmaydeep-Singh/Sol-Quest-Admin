import { useState } from "react";

const Referal = (props: any) => {
	const taskData = {
		task: "referral",
		customisation: {},
		points: 20,
	};

	const [task, setTask] = useState({
		isActive: false,
		count: 0,
	});
	const data = {
		isActive: false,
		count: 0,
	};

	const handleData = (event: any) => {
		event.preventDefault();
		taskData.customisation = task;
		// eslint-disable-next-line react/destructuring-assignment
		props.onData(taskData);
	};

	const handleInputChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setTask({ ...task, [name]: value });
	};

	return (
		<form className="rounded-md  p-5">
			<div className=" text-[#ffffff] ">
				<div className="">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">ADD REFERAL TASK</div>
					<div className="collapse-content" />
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

export default Referal;
