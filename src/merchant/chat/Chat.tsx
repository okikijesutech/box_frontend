import { useEffect, useState } from "react";
import io from "socket.io-client";

interface Message {
  content: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("chat message", (msg: Message) => {
      setMessages([...messages, msg]);
    });
  }, [messages, socket]);

  const handleSend = () => {
    socket.emit("chat message", message);
    setMessage("");
  };
  return (
    <div className='max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg'>
      <ul className='overflow-y-auto max-h-72'>
        {messages.map((msg, index) => (
          <li key={index} className='mb-2'>
            <div className='bg-blue-500 text-white py-2 px-4 rounded-lg'>
              <span>{msg.content}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex'>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className='bg-blue-500 text-white px-4 py-2 rounded-r-lg'
        >
          send
        </button>
      </div>
    </div>
  );
};

export default Chat;
