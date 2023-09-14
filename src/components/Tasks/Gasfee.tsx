import { useState } from "react";

const Gasfee = (props: any) => {
	const taskData = {
		task: "gas_fee",
		customisation: {},
		points: 50,
	};

	const [task, setTask] = useState({
		// task1
		total_gas_fee_spent: 0,
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
		<form className="rounded-md    p-5">
			<div className=" text-[#ffffff] ">
				<div className="">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">GasFees</div>
					<div className="collapse-content">
						<input
							type="text"
							name="total_gas_fee_spent"
							value={task.total_gas_fee_spent}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
				</div>
				<button
					type="button"
					className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold  text-[#13141D] hover:border-blue-500 hover:bg-blue-400"
					onClick={handleData}
				>
					Save Task
				</button>
			</div>
		</form>
	);
};

export default Gasfee;
