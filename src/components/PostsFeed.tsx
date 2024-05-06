import stock from "../assets/stock.jpg";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const posts = [
  "best product lorem akdfj;ka a;dfka;jdksfaj;k a;kdfja;kjfa;dklfak;",
  "smart product",
  "super product a;fdiaj aidfau adlfuadlufa alufdladufaldufalundfoain iuandfunadn",
];

const PostsFeed = () => {
  return (
    <div className='max-w-[600px] mx-auto my-4 rounded border-black border-[2px] p-4 h-[200px] overflow-auto custom-scrollbar'>
      <ul className=''>
        {posts.map((post, index) => (
          <li key={index} className='m-2'>
            <div className='flex gap-3 items-center bg-gray-100 hover:bg-gray-700 hover:text-white rounded-3xl p-3'>
              <div className='w-10 h-10 rounded-full cursor-pointer'>
                <img
                  src={stock}
                  alt=''
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div>
                <p className='text-sm cursor-pointer'>{post}</p>
                <div className='flex gap-4 items-center justify-start my-3'>
                  <FaRegThumbsUp size={18} className='hover:text-blue-400' />
                  <FaRegThumbsDown size={18} className='hover:text-blue-400' />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsFeed;
