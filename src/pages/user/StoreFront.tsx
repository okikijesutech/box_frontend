import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";

const StoreFront = () => {
  // Define product data as an array of objects
  const productsData = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of product 1",
      price: 10.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of product 3",
      price: 14.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [products, setProducts] = useState([]);
  const [showChatModal, setShowChatModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Set the products state with the data
    setProducts(productsData);
  }, []);

  const handleChatClick = () => {
    setShowChatModal(true);
  };

  const handleCloseChatModal = () => {
    setShowChatModal(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Handle click outside of the chat modal
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".chat-modal")) {
      setShowChatModal(false);
    }
  };

  return (
    <div className='bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen relative'>
      <UserLayout />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-white'>StoreFront</h1>
          <div className='flex items-center justify-center gap-3'>
            <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none mt-4'>
              <Link to='/user'>Back to Market Square</Link>
            </button>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
              onClick={handleChatClick}
            >
              Chat
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between'
            >
              <div>
                <img src={product.image} alt={product.name} className='mb-4' />
                <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-gray-700 mb-2'>{product.description}</p>
                <p className='text-gray-700'>Price: ${product.price}</p>
              </div>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mt-4'
                onClick={() => handleProductClick(product)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none mt-4'>
          <Link to='/user'>Back to Market Square</Link>
        </button>
      </div>
      {showChatModal && (
        <div className='fixed bottom-4 right-4 z-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 chat-modal'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold mb-4'>
                Chat with Storefront Owner
              </h2>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                onClick={handleCloseChatModal}
              >
                Close Chat
              </button>
            </div>
            {/* Chat component goes here */}
            <div className='flex flex-col h-96 overflow-y-auto'>
              <div className='mb-4'>
                {/* Chat message display */}
                <div className='bg-gray-200 p-2 rounded-md mb-2'>Message 1</div>
                <div className='bg-gray-200 p-2 rounded-md mb-2'>Message 2</div>
              </div>
            </div>
            {/* Input for message */}
            <input
              type='text'
              className='w-full border border-gray-300 rounded-md px-3 py-2 mb-2'
              placeholder='Type your message...'
            />
            {/* Send button */}
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mb-4'>
              Send
            </button>
          </div>
        </div>
      )}
      {/* Transparent overlay to allow interaction with the main page */}
      {showChatModal && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={handleOutsideClick}
        ></div>
      )}
      {/* Product details modal */}
      {selectedProduct && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <div className='bg-white rounded-lg shadow-lg p-6 z-50'>
            <div className='flex'>
              <h2 className='text-xl font-semibold mb-4'>
                Product Details - {selectedProduct.name}
              </h2>
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mt-4'
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreFront;
