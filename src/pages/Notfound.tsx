import error from "../assets/404.jpg";
const Notfound = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-[48px]'>Not Found</h1>
      <div className='w-[400px]'>
        <img src={error} alt='Not found' className='w-[100%]' />
      </div>
      <button className='border-[2px] border-black rounded-[15px] px-3 py-2 mt-5'>
        <a href='/' className='text-[24px]'>
          Go Home
        </a>
      </button>
    </div>
  );
};

export default Notfound;
