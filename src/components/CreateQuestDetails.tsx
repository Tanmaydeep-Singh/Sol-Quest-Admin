import { useState } from "react";

export enum rewardType {
	NFT_reward = "NFT_reward",
	token_reward = "token_reward",
	whitelist_reward = "whitelist_reward",
}
const CreateQuestDetails = (props: any) => {
	const [formData, setFormData] = useState({
		quest_name: "",
		quest_details: "",
		imageurl: "https://picsum.photos/200/300",
		eligibility: "ALL_USERS",
		reward_method: "LUCKY_DRAW",
		reward_type: rewardType.token_reward,
		startTimestamp: 0,
		endTimestamp: 0,
	});

	const handleInputChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		console.log("Form Data", formData);
	};

	const handleData = (event: any) => {
		event.preventDefault();
		if (
			formData.quest_name === "" ||
			formData.quest_details === ""
			// formData.startTimestamp === 0 ||
			// formData.endTimestamp === 0
		) {
			// Swal.fire({
			//   icon: "error",
			//   title: "Oops...",
			//   text: "You forgot to fill some fields",
			// });
			console.log("Form Data", formData);
		} else {
			// Swal.fire({
			//   position: "top-end",
			//   icon: "success",
			//   title: "Your work has been saved",
			//   showConfirmButton: false,
			//   timer: 1500,
			// });
			console.log("Form Data", formData);
			// eslint-disable-next-line react/destructuring-assignment
			props.onData(formData);
		}
	};

	const [media, setMedia] = useState("");

	const handleChangeMedia = (event: any) => {
		setMedia(event.target.files[0]);
		console.log("media", media);
	};

	return (
		<form>
			<div className="mb-4 w-10/12">
				<label className="mb-1 block font-medium text-gray-300" htmlFor="name">
					Quest Name
				</label>
				<input
					type="text"
					name="quest_name"
					value={formData.quest_name}
					onChange={handleInputChange}
					className="w-full rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
					required
				/>
			</div>
			<div className="mb-4 w-10/12">
				<label className="mb-1 block font-medium text-gray-300">Quest Discription</label>
				<textarea
					name="quest_details"
					value={formData.quest_details}
					onChange={handleInputChange}
					className="h-40 w-full rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
					required
				/>
			</div>
			<div className="mb-4">
				<div className="grid w-10/12 grid-cols-3">
					<div className="w-48">
						<label className="mb-1 block font-medium text-gray-300">
							Eligibity Criteria
						</label>
						<select
							name="eligibility"
							value={formData.eligibility}
							onChange={handleInputChange}
							className="select select-ghost mb-6 w-full max-w-xs rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
							required
						>
							<option disabled selected>
								Eligibity_Criteria
							</option>
							<option>ALL_USERS</option>
							<option>NEW_USERS</option>
							<option>NFT_HOLDERS</option>
							<option>MIN_POINT_CHECK</option>
						</select>
					</div>
					<div className="w-48">
						<label className="mb-1 block font-medium text-gray-300">
							Reward Method
						</label>
						<select
							name="reward_method"
							value={formData.reward_method}
							onChange={handleInputChange}
							className="select select-ghost mb-6 w-full w-full max-w-xs rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
							required
						>
							<option disabled selected>
								RewardMethod
							</option>
							<option>FCFS </option>
							<option>LUCKY_DRAW</option>
						</select>
					</div>
					<div className="w-48">
						<label className="mb-1 block font-medium text-gray-300">Reward Type</label>
						<select
							name="reward_type"
							value={formData.reward_type}
							onChange={handleInputChange}
							className="select select-ghost mb-6 w-full w-full max-w-xs rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
							required
						>
							<option disabled selected>
								RewardType
							</option>
							<option> NFT_reward</option>
							<option>token_reward</option>
							<option>whitelist_reward</option>
						</select>
					</div>
				</div>
				<div className="mb-4 ">
					<label className="mb-1 block font-medium text-gray-300" htmlFor="name">
						Start:
					</label>
					<input
						type="datetime-local"
						name="startTimestamp"
						value={formData.startTimestamp}
						onChange={handleInputChange}
						className="w-3/6	 rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
						required
					/>
				</div>{" "}
				<div className="mb-4 ">
					<label className="mb-1 block font-medium text-gray-300" htmlFor="name">
						End:
					</label>
					<input
						type="datetime-local"
						name="endTimestamp"
						value={formData.endTimestamp}
						onChange={handleInputChange}
						className="w-3/6	 rounded-md border border-gray-400 bg-[#ffffff] p-2 text-[#000000]"
						required
					/>
				</div>
				{/* a */}
				<label
					className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					htmlFor="file_input"
				>
					Upload Image
				</label>
				<input
					className="block w-3/6 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-[#000000] "
					type="file"
					value=""
					onChange={(event) => handleChangeMedia(event)}
				/>
				<button
					type="button"
					className=" bg-[#000000] text-[#ffffff] "
					onClick={handleData}
				>
					Save
				</button>
			</div>
		</form>
	);
};

export default CreateQuestDetails;
