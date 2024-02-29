import { useState } from "react";
import ProductLayout from "../../layouts/ProductLayout";
import MerchantLayout from "../../layouts/MerchantLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQunatity] = useState(0);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  // const [selectedImage, setSelectedImage] = useState<File | string>("");
  const { accessToken, user } = useAuth();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      // Append form fields to FormData object
      if (name !== undefined) formData.append("name", name);
      if (name !== undefined) formData.append("quantity", quantity.toString()); // Convert quantity to string
      if (name !== undefined) formData.append("desc", desc);
      if (price !== undefined) formData.append("price", price);
      if (user?.id !== undefined) formData.append("merchantId", user?.id);
      // formData.append("image", selectedImage); // Append selected image file

      const response = await axios.post(
        "http://localhost:3000/merchant/product",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/from-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <MerchantLayout>
      <ProductLayout>
        <div className='p-4 border-[2px] border-green-500 bg-green-500 rounded shadow-md'>
          <form action='' onSubmit={handleSubmit} className='flex flex-col'>
            <label htmlFor='name'>Product name</label>
            <input
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='quantity'>Quantity</label>
            <input
              type='text'
              id='quantity'
              onChange={(e) => setQunatity(parseInt(e.target.value))}
            />
            <label htmlFor='desc'>Description</label>
            <input
              type='text'
              id='desc'
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor='price'>Price for each</label>
            <input
              type='text'
              id='price'
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor='productJpeg'>Image</label>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  // setSelectedImage(file);
                }
              }}
              id='productJpeg'
            />
            {/* {selectedImage && (
              <div>
                <h3>preview</h3>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt='preview'
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </div>
            )} */}
            <button
              type='submit'
              className='bg-white rounded-[30px] px-3 py-2 mt-5'
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
