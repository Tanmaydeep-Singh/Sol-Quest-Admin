import { useState } from "react";

const Opensea = (props: any) => {
	const taskData = {
		task: "opensea",
		customisation: {},
		points: 30,
	};

	const [task, setTask] = useState({
		// task1
		purchased_count: 0,
		// task2
		constract_purchase_count: 0,
		contract_purchase: "",
		// task3
		purchased_count_value: 0,
		// task4
		contract_purchased_count: 0,
		contract_purchase_value: "",
		// task5
		sale_count: 0,
		// task6
		constract_sale_count: 0,
		contract_sale: "",
		// task7
		sale_count_value: 0,
		// task8
		contract_sale_count: 0,
		contract_sale_value: "",
	});

	const handleInputChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setTask({ ...task, [name]: value });
	};

	const handleData = (event: any) => {
		event.preventDefault();
		taskData.customisation = task;
		console.log(taskData);

		// eslint-disable-next-line react/destructuring-assignment
		props.onData(taskData);
	};

	return (
		<form className="scrollbar-hide h-96 overflow-y-auto rounded-md   p-5">
			<div className=" text-[#ffffff] ">
				<div className="">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">Number of NFTs Purchased.</div>
					<div className="collapse-content">
						<input
							type="text"
							name="purchased_count"
							value={task.purchased_count}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000]"
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">
						Number of Specified NFTs Purchased.
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="constract_purchase_count"
							value={task.constract_purchase_count}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
						<input
							type="text"
							placeholder="Type here"
							name="contract_purchase"
							value={task.contract_purchase}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">
						Total Value of NFTs Purchased has reached the required amount.
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="purchased_count_value"
							value={task.purchased_count_value}
							onChange={handleInputChange}
							className=" my-2 h-8 w-full border-b-2   text-[#000000] "
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">
						Total Value of Specifie NFTs Purchased has reached the required amount.
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="contract_purchased_count"
							value={task.contract_purchased_count}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
						<input
							type="text"
							name="contract_purchase_value"
							value={task.contract_purchase_value}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">Number of NFTs Sold.</div>
					<div className="collapse-content">
						<input
							type="text"
							name="sale_count"
							value={task.sale_count}
							onChange={handleInputChange}
							className=" my-2 h-8 w-full border-b-2   text-[#000000]"
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">
						Number of Specified NFTs Sold.
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="constract_sale_count"
							value={task.constract_sale_count}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
						<input
							type="text"
							name="contract_sale"
							value={task.contract_sale}
							onChange={handleInputChange}
							className=" bg  my-2  h-8 w-full border-b-2 text-[#000000] "
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<input type="checkbox" />
					<div className="collapse-title text-md mt-4">
						Total Value of NFTs Sold has reached the required amount.
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="sale_count_value"
							value={task.sale_count_value}
							onChange={handleInputChange}
							className=" my-2 h-8 w-full border-b-2 text-[#ffffff] "
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="text-[#ffffff]">
					<div className="collapse-title text-md mt-4">
						Total Value of Specifie NFTs Sold has reached the required amount.
					</div>
					<div className="collapse-content">
						<input
							type="text"
							name="contract_sale_count"
							value={task.contract_sale_count}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
						<input
							type="text"
							name="contract_sale_value"
							value={task.contract_sale_value}
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

export default Opensea;
