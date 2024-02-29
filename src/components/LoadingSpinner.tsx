import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-12 h-12 rounded-full border-4 border-gray-200 animate-spin'></div>
      {/* <div className='w-12 h-12 rounded-full border-4 border-gray-200'>
        <div className='w-full h-full border-t-4 border-gray-500 rounded-full animate-roll'></div>
      </div> */}
    </div>
  );
};

export default LoadingSpinner;
