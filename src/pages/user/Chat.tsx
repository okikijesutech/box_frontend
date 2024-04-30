import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import { FaSearch } from "react-icons/fa";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState("admin");
  const [messages, setMessages] = useState({
    admin: [
      {
        id: 1,
        sender: "bot",
        content: "Welcome! How can I assist you today?",
      },
    ],
  });
  const [newMessage, setNewMessage] = useState("");
  const [groupName, setGroupName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState([]); // State for storing created groups

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        id: Object.keys(messages[selectedUser]).length + 1,
        sender: "user",
        content: newMessage,
      };
      setMessages({
        ...messages,
        [selectedUser]: [...(messages[selectedUser] || []), newMsg],
      });
      setNewMessage("");
    }
  };

  const startGroupChat = () => {
    setShowModal(true);
  };

  const createGroupChat = () => {
    const newGroup = groupName.trim();
    if (newGroup !== "") {
      setGroups([...groups, newGroup]); // Add the new group to the list
      setGroupName(""); // Clear the input field
      setSelectedUser(newGroup); // Set the default chat to the newly created group
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const chatId = selectedUser;
  const chatWithName = selectedUser === "admin" ? "Admin" : selectedUser;

  return (
    <div className='bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen'>
      <UserLayout />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-white mb-4'>Chat</h1>
        <div className='text-white mb-4'>
          <h2 className='text-lg font-semibold mb-2'>
            Chat with {chatWithName}
          </h2>
        </div>
        <div
          className='bg-white rounded-lg shadow-lg p-4 mb-4 overflow-y-auto'
          style={{ maxHeight: "400px" }}
        >
          {(messages[chatId] || []).map((message) => (
            <div
              key={message.id}
              className={`mb-2 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span className='text-gray-600'>
                {message.sender === "user" ? "You" : "Bot"}
              </span>
              <p className='bg-gray-200 rounded-lg p-2 inline-block'>
                {message.content}
              </p>
            </div>
          ))}
        </div>
        <div className='flex items-center mb-4'>
          <input
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-400'
          />
          <button
            onClick={sendMessage}
            className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none'
          >
            Send
          </button>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-lg font-semibold mb-2'>Group Chats</h2>
            <div className='mt-4 overflow-auto' style={{ maxHeight: "200px" }}>
              <ul>
                {groups.map((group, index) => (
                  <li
                    key={index}
                    className='text-gray-800 cursor-pointer py-2 px-4 rounded-md hover:bg-gray-200'
                    onClick={() => setSelectedUser(group)}
                  >
                    {group}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-semibold mb-2'>
              Create Your Group Chat
            </h2>
            <button
              className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md'
              onClick={startGroupChat}
            >
              Start Group Chat
            </button>
          </div>
        </div>
        <div className='mt-4'>
          <div className='flex justify-center items-center gap-3'>
            <input
              type='text'
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder='Enter group name...'
              className='border border-gray-300 rounded px-4 py-2 mb-4 w-full'
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
              <FaSearch />
            </button>
          </div>
          <button
            // onClick={addGroupToList.bind(null, groupName)}
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Add Group
          </button>
        </div>
        {selectedUser !== "admin" && (
          <div className='mt-4'>
            <button
              className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md'
              onClick={() => setSelectedUser("admin")}
            >
              Chat with Admin
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg p-8'>
            <h2 className='text-2xl font-semibold mb-4'>Create Group Chat</h2>
            <input
              type='text'
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder='Enter group name'
              className='border border-gray-300 rounded px-4 py-2 mb-4 w-full'
            />
            <div className='flex justify-end'>
              <button
                onClick={createGroupChat}
                className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'
              >
                Create
              </button>
              <button
                onClick={closeModal}
                className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
