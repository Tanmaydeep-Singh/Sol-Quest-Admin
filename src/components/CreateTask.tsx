import { useState } from "react";
import Coingecko from "./Tasks/Coingecko";
import Coinmarketcap from "./Tasks/Coinmarketcap";
import Discord from "./Tasks/Discord";
import ENS from "./Tasks/ENS";
import Gasfee from "./Tasks/Gasfee";
import NFT from "./Tasks/NFT";
import Opensea from "./Tasks/Opensea";
import Quiz from "./Tasks/Quiz";
import Reddit from "./Tasks/Reddit";
import Referal from "./Tasks/Referal";
import Telegram from "./Tasks/Telegram";
import Twitter from "./Tasks/Twitter";
import Walletbalance from "./Tasks/Walletbalance";
import Youtube from "./Tasks/Youtube";

const CreateTask = (props: any) => {
	const [activeTask, setActiveTask] = useState(0);
	const [taskArray, setTaskArray] = useState([{}]);

	const handleTwitterTask = (data: any) => {
		console.log("data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleDiscordTask = (data: any) => {
		console.log("data", data);
		setTaskArray([...taskArray, data]);
	};
	const handleTelegramTask = (data: any) => {
		console.log("data", data);
		setTaskArray([...taskArray, data]);
	};
	const handleReferalTask = (data: any) => {
		console.log("data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleENSTask = (data: any) => {
		console.log("ENS data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleOpenseaTask = (data: any) => {
		console.log("Opensea Data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleGasfeeTask = (data: any) => {
		console.log("Opensea Data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleRedditTask = (data: any) => {
		console.log("Reddit Data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleNFTTask = (data: any) => {
		console.log("Opensea Data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleWalletbalanceTask = (data: any) => {
		console.log("Opensea Data", data);
		setTaskArray([...taskArray, data]);
	};
	const handleQuizTask = (data: any) => {
		console.log("Quiz Data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleYoutubeTask = (data: any) => {
		console.log("Youtube Data", data);
		setTaskArray([...taskArray, data]);
	};

	const handleCoingeckoTask = (data: any) => {
		console.log("Coingecko Data", data);
		setTaskArray([...taskArray, data]);
	};
	const handleCoinmarketcapTask = (data: any) => {
		console.log("Coinmarketplace", data);
		setTaskArray([...taskArray, data]);
	};
	const handleData = (event: any) => {
		event.preventDefault();
		console.log("TASK ARRAY SEND", taskArray);
		// eslint-disable-next-line react/destructuring-assignment
		props.onData(taskArray);
	};

	return (
		<div className="text-[#000000]">
			<div className="mb-4">
				<label className="mb-2 block font-medium text-gray-300" htmlFor="name">
					Tasks
				</label>
			</div>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={(e) => {
					e.preventDefault();
					setActiveTask(1);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Twitter
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={(e) => {
					e.preventDefault();
					setActiveTask(2);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Discord
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-yellow-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(3);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Telegram
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(4);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Referal
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(5);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				ENS
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(6);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Openseas
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(7);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				NFT
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(8);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Wallet Balance
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(9);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Gas fees
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(10);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				QUIZ
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(11);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Reddit
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(12);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Youtube
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(13);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Coingecko
			</button>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] bg-red-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
				onClick={() => {
					setActiveTask(14);
					// setTaskArray([...taskArray, task]);
					console.log("taskArray", taskArray);
				}}
			>
				Coinmarketcap
			</button>
			<div className="">
				{activeTask === 1 ? (
					<Twitter onData={handleTwitterTask} />
				) : activeTask === 2 ? (
					<Discord onData={handleDiscordTask} />
				) : activeTask === 3 ? (
					<Telegram onData={handleTelegramTask} />
				) : activeTask === 4 ? (
					<Referal onData={handleReferalTask} />
				) : activeTask === 5 ? (
					<ENS onData={handleENSTask} />
				) : activeTask === 6 ? (
					<Opensea onData={handleOpenseaTask} />
				) : activeTask === 7 ? (
					<NFT onData={handleNFTTask} />
				) : activeTask === 8 ? (
					<Walletbalance onData={handleWalletbalanceTask} />
				) : activeTask === 9 ? (
					<Gasfee onData={handleGasfeeTask} />
				) : activeTask === 10 ? (
					<Quiz onData={handleQuizTask} />
				) : activeTask === 11 ? (
					<Reddit onData={handleRedditTask} />
				) : activeTask === 12 ? (
					<Youtube onData={handleYoutubeTask} />
				) : activeTask === 13 ? (
					<Coingecko onData={handleCoingeckoTask} />
				) : activeTask === 14 ? (
					<Coinmarketcap onData={handleCoinmarketcapTask} />
				) : (
					<div />
				)}
			</div>
			<button
				type="button"
				className="m-2 rounded border-b-4 border-[#ffffff] bg-[blanchedalmond] px-4 py-2 font-bold hover:border-blue-500 hover:bg-blue-400"
				onClick={handleData}
			>
				Save
			</button>{" "}
		</div>
	);
};

export default CreateTask;
