import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

interface Message {
  content: string;
  sender: string;
}

interface Props {
  initialMessages: Message[]; // Explicitly specify the type of initialMessages
  sender: string;
  socket: Socket; // Assuming you have imported SocketIOClient
}

const Chat = ({ initialMessages, sender, socket }: Props) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages || []);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, [socket]);

  const handleSend = () => {
    socket.emit("message", { content: message, sender });
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
