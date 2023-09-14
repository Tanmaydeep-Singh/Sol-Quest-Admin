import Link from "next/link";
import { useState } from "react";

const Telegram = (props: any) => {
	const taskData = {
		task: "telegram_task",
		customisation: {},
		points: 50,
	};

	const [task, setTask] = useState({
		// task1
		join_telegram: "telegram",
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
					<div className="collapse-title text-md mt-4">Follow on Telegram</div>
					<div className="collapse-content">
						<input
							type="text"
							name="join_telegram"
							value={task.join_telegram}
							onChange={handleInputChange}
							className=" my-2 h-8  w-full border-b-2   text-[#000000] "
						/>
						<Link href="https://t.me/QEngine01Bot" className="flex gap-[10px]">
							<span>Invite-Bot</span>
						</Link>
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

export default Telegram;
