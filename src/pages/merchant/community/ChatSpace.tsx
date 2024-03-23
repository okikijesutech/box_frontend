interface ChatSpaceProps {
  groupId: string;
  onClose: () => void;
}
const ChatSpace = ({ groupId, onClose }: ChatSpaceProps) => {
  return (
    <div className='flex h-screen'>
      {/*Sidebar*/}
      <div className='w-1/4 bg-gray-200'>{/*Sidebar content*/}</div>
      <div className='w-3/4 bg-white'>
        <div className='flex justify-between items-center px-4 py-2 border-b border-gray-300'>
          <h2 className='text-lg font-semibold'>Group Chat</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className='overflow-y-auto'>{/*Chat messages goes here*/}</div>
        <div className='flex justify-between items-center px-4 py-2 border-t border-gray-300'>
          <input
            type='text'
            placeholder='Type your message ... '
            className='w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-green-500'
          />
          <button className='ml-2 px-3 py-1 bg-blue-500 text-white rounded-md'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSpace;
