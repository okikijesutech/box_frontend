import { useEffect, useState } from "react";
import io from "socket.io-client";
import MerchantLayout from "../../layouts/MerchantLayout";
import Chat from "../chat/Chat";

interface Message {
  content: string;
  sender: string;
}

interface ChatSession {
  id: string;
  messages: Message[];
}

const Community = () => {
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
      <div>
        <h1>This is the community page</h1>
        {chatSessions.map((session) => (
          <Chat
            key={session.id}
            initialMessages={session.messages}
            sender={session.id}
            socket={socket}
          />
        ))}
      </div>
    </MerchantLayout>
  );
};

export default Community;
