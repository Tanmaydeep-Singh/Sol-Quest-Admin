import { useState } from "react";

const QuestReward = (props: any) => {
	const [formData, setFormData] = useState({
		gem_reward: 0,
	});

	const handleInputChange = (event: any) => {
		event.preventDefault();
		console.log(event.target.value);
		setFormData({ ...formData, gem_reward: event.target.value });
	};

	const handleData = (event: any) => {
		event.preventDefault();
		console.log(formData);
		// eslint-disable-next-line react/destructuring-assignment
		props.onData(formData);
	};

	return (
		<form>
			<h3 className="text-lg mb-4 font-medium">Step 3</h3>
			<div className="mb-4">
				<label className="mb-1 block font-medium text-gray-300" htmlFor="name">
					Reward
				</label>
				<input
					type="text"
					name="gem_reward"
					value={formData.gem_reward}
					onChange={handleInputChange}
					className="w-full rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
				/>
			</div>
			<button
				type="button"
				className=" m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold text-[#000] hover:border-blue-500 hover:bg-blue-400"
				onClick={handleData}
			>
				Save Quest
			</button>
		</form>
	);
};

export default QuestReward;
