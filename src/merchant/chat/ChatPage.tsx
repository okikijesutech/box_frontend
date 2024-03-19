import { useEffect, useState } from "react";
import io from "socket.io-client";
import MerchantLayout from "../../layouts/MerchantLayout";
import Chatbox from "./Chat";

interface Message {
  content: string;
  sender: string;
}

interface ChatSession {
  id: string;
  messages: Message[];
}

const ChatPage = () => {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("message", (msg: Message) => {
      const existingSession = chatSessions.find(
        (session) => session.id === msg.sender
      );

      if (existingSession) {
        setChatSessions((prevSessions) =>
          prevSessions.map((session) => {
            if (session.id === msg.sender) {
              return {
                ...session,
                messages: [...session.messages, msg],
              };
            }
            return session;
          })
        );
      } else {
        setChatSessions((prevSessions) => [
          ...prevSessions,
          {
            id: msg.sender,
            messages: [msg],
          },
        ]);
      }
    });
  }, [chatSessions, socket]);

  return (
    <MerchantLayout>
      {chatSessions.length === 0 ? (
        <p>No active chat</p>
      ) : (
        chatSessions.map((session) => (
          <Chatbox
            key={session.id}
            initialMessages={session.messages}
            sender={session.id}
            socket={socket}
          />
        ))
      )}
    </MerchantLayout>
  );
};

export default ChatPage;
