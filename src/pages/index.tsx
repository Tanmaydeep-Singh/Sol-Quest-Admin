import CreateQuestDetails from "@/components/CreateQuestDetails";
import CreateTask from "@/components/CreateTask";
import QuestReward from "@/components/QuestReward";
import { useCreateQuestMutation } from "@/features/api";
import Link from "next/link";
import { useState } from "react";

export enum rewardType {
  NFT_reward = "NFT_reward",
  token_reward = "token_reward",
  whitelist_reward = "whitelist_reward",
}


const CreateQuest = () => {
  const [admin, setAdmin] = useState(true);
  const [step, setStep] = useState(1);
  const [create, response] = useCreateQuestMutation();

  const [data, setCreateQuestDetails] = useState({
    quest_name: "",
    quest_details: "",
    imageurl: "https://picsum.photos/200/300",
    eligibility: "ALL_USERS",
    reward_method: "LUCKY_DRAW",
    reward_type: rewardType.token_reward,
    startTimestamp: "",
    endTimestamp: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tasks, setTasks] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reward, setQuestReward] = useState({
    gem_reward: 0,
  });

  const handleCreateQuesrDetails = (data: any) => {
    setCreateQuestDetails(data);
  };

  const handleQuestsTasks = (data: any) => {
    console.log("FINAL TAAK", data.slice(1));
    setTasks(data.slice(1));
  };

  const handleQuestReward = (data: any) => {
    console.log("reward", data);
    setQuestReward(data);
  };
  const createQuestData = {
    createdBy: "64183d1580e0eee88eb08fff",
    tasks: tasks,
    imageurl: "https://picsum.photos/200/300",
    eligibility: data.eligibility,
    rewardMethod: data.reward_method,
    questTitle: data.quest_name,
    questDescription: data.quest_details,
    rewardType: data.reward_type,
    gemsReward: Number(reward.gem_reward),
    startTimestamp: data.startTimestamp,
    endTimestamp: data.endTimestamp,
    status: "DRAFTED",
  };

  const createQuest = () => {
    // Create a hook to create task
    console.log("CREATE QUEST", createQuestData);
    // create(createQuestData)
    // 	.unwrap()
    // 	.then((response: any) => {
    // 		console.log(response);
    // 	})
    // 	.then((error: any) => {
    // 		console.log(error);
    // 	});
    console.log(" QUEST RESPONSE MUTATION", response.data);

    // axios
    // 	.post(baseURL + "/creator/create-quest", createQuestData)
    // 	.then(async (response) => {
    // 		console.log(response);
    // 		if (response.status === 201) {
    // 			alert("QUEST CREATED");
    // 			// dispatch(getAllQuestsQuery({}));
    // 		}
    // 	})
    // 	.catch((error) => {
    // 		alert("QUEST CREATION FAILED");
    // 		console.log(error);
    // 	});
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex">
      <div className="basis-[100%] ">
        <div className=" flex h-4/5 w-9/12 w-full justify-center text-[#ffffff]">
          <div className=" mx-10 w-full rounded-md  p-6 shadow-md ">
            {step === 1 ? (
              <CreateQuestDetails onData={handleCreateQuesrDetails} />
            ) : step === 2 ? (
              <CreateTask onData={handleQuestsTasks} />
            ) : (
              <QuestReward onData={handleQuestReward} />
            )}
            <div className="mt-6 flex justify-between">
              {step < 3 && (
                <button
                  type="submit"
                  className="rounded-lg bg-blue-500 px-6 py-1.5 text-white hover:bg-blue-600"
                  onClick={() => {
                    console.log(createQuestData);
                    handleNext();
                  }}
                >
                  Next
                </button>
              )}
              {step > 1 && step < 4 && (
                <button
                  type="button"
                  className="rounded-lg bg-gray-300 px-6 py-1.5 text-gray-700 hover:bg-gray-400"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {step > 2 && step < 4 && (
                <button
                  type="button"
                  className="rounded-lg bg-blue-500 px-6 py-1.5 text-white hover:bg-blue-600"
                  onClick={() => {
                    createQuest();
                    console.log(createQuestData);
                  }}
                >
                  Submit
                </button>
              )}
              {step === 4 && <Link href="quest/all">View All Quests</Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuest;
