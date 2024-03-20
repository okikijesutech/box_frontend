import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import axios from "axios";
import { FaClosedCaptioning } from "react-icons/fa";
import ChatSpace from "./ChatSpace";

interface GroupChat {
  id: string;
  name: string;
  // Add other properties as needed
}

const Modal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [membersIds, setMemberIds] = useState<string[]>([]);
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("/members"); // Replace with your API endpoint for fetching members
        setMembers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMembers();
  }, []);
  const handleMemberToggle = (memberId: string) => {
    if (membersIds.includes(memberId)) {
      setMemberIds(membersIds.filter((id) => id !== memberId));
    } else {
      setMemberIds([...membersIds, memberId]);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/chat/create", { name, membersIds });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white p-4 rounded shadow-md'>
      <h2 className='text-lg font-bold mb-4'>Create a Community room</h2>
      <button
        onClick={() => onClose()}
        className='bg-blue-500 text-white px-3 py-2 rounded-md'
      >
        <FaClosedCaptioning size={24} />
      </button>
      <form onSubmit={handleSubmit} className='mt-4'>
        <label className='block mb-2' htmlFor='name'>
          Name
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500'
          />
        </label>
        <div>
          <h3 className='text-lg font-bold mb-2'>Select Members:</h3>
          {members.map((member) => (
            <div key={member.id} className='flex items-center mb-2'>
              <input
                type='checkbox'
                id={member.id}
                checked={membersIds.includes(member.id)}
                onChange={() => handleMemberToggle(member.id)}
                className='mr-2'
              />
              <label htmlFor={member.id}>{member.name}</label>
            </div>
          ))}
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2'
        >
          Create Community Room
        </button>
      </form>
    </div>
  );
};

const Community = () => {
  const [groupChats, setGroupChats] = useState<GroupChat[]>([]);
  const [modal, setModal] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroupChats = async () => {
      try {
        const response = await axios.get("/chat");
        setGroupChats(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGroupChats();
  }, []);

  const handleGroupChatClick = (groupId: string) => {
    setSelectedChat(groupId);
    console.log("Clicked on group chat:", groupId);
  };
  const handleCloseChatSpace = () => {
    setSelectedChat(null);
  };
  return (
    <MerchantLayout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>
          This is the Communities page where you can create and access other
          communities
        </h1>
        <button
          onClick={() => setModal(true)}
          className='bg-green-500 text-white px-4 py-2 rounded-md mb-4'
        >
          Create Group chat
        </button>
        <div className='flex'>
          <div className='w-3/4'>
            <div>
              <ul>
                {groupChats.map((groupChat, index) => (
                  <li key={index} className='mb-2'>
                    <button
                      onClick={() => handleGroupChatClick(groupChat.id)}
                      className='text-green-500 hover:underline'
                    >
                      {groupChat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {selectedChat && (
            <div className='w-1/4'>
              <ChatSpace
                groupId={selectedChat}
                onClose={handleCloseChatSpace}
              />
            </div>
          )}
        </div>
        {modal && <Modal onClose={() => setModal(false)} />}
      </div>
    </MerchantLayout>
  );
};

export default Community;
