import { useState } from "react";

const ENS = (props: any) => {
	const taskData = {
		task: "ens",
		customisation: {},
		points: 30,
	};

	const [task, setTask] = useState({
		// task1
		ens_domain_per_address: 0,
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
		<form className="rounded-md   p-5">
			<div className=" text-[#ffffff] ">
				<div className="">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">Number of ENS domains</div>
					<div className="collapse-content">
						<input
							type="text"
							name="ens_domain_per_address"
							value={task.ens_domain_per_address}
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

export default ENS;
