import { useState } from "react";
import ProductLayout from "../../../layouts/ProductLayout";
import MerchantLayout from "../../../layouts/MerchantLayout";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(""); // Changed 'setQunatity' to 'setQuantity'
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | string>("");
  const { accessToken, user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();

      // Append form fields to FormData object
      if (name) formData.append("name", name);
      if (quantity) formData.append("quantity", quantity);
      if (desc) formData.append("desc", desc);
      if (price) formData.append("price", price);
      if (user?.id) formData.append("merchantId", user.id);
      if (image) formData.append("image", image);

      const response = await axios.post(
        "http://localhost:3000/merchant/product",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/from-data", // Corrected "multipart/from-data" to "multipart/form-data"
          },
        }
      );
      if (response.status === 200) navigate("/merchant/product");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MerchantLayout>
      <ProductLayout>
        <div className='p-4 border-2 border-green-500 bg-green-500 rounded shadow-md'>
          {" "}
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor='name' className='text-white'>
              Product name
            </label>{" "}
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
            />
            <label htmlFor='quantity' className='text-white'>
              Quantity
            </label>{" "}
            <input
              type='number'
              id='quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
            />
            <label htmlFor='desc' className='text-white'>
              Description
            </label>{" "}
            <input
              type='text'
              id='desc'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
            />
            <label htmlFor='price' className='text-white'>
              Price for each
            </label>{" "}
            <input
              type='text'
              id='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500'
            />
            <label htmlFor='productJpeg' className='relative mt-6 h-[100px]'>
              {image ? (
                <img
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  alt='Product'
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full flex justify-center items-center bg-gray-200'>
                  <span className='text-4xl text-gray-400'>+</span>
                </div>
              )}
              <input
                type='file'
                accept='image/*'
                onChange={handleChange}
                id='productJpeg'
                className='hidden'
              />
            </label>
            <button
              type='submit'
              className='bg-white rounded-full px-3 py-2 mt-5'
            >
              {isLoading ? <LoadingSpinner /> : "Add Product"}
            </button>
          </form>
        </div>
      </ProductLayout>
    </MerchantLayout>
  );
};

export default AddProduct;
