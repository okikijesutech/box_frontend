import { useState } from "react";
import ProductLayout from "../../layouts/ProductLayout";
import MerchantLayout from "../../layouts/MerchantLayout";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQunatity] = useState(0);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const { accessToken } = useAuth();

  const handleSubmit = async () => {
    try {
      // const formData = new FormData(); // Create FormData object

      // // Append form fields to FormData object
      // formData.append("name", name);
      // formData.append("quantity", quantity.toString());
      // formData.append("desc", desc);
      // formData.append("price", price);
      // formData.append("image", selectedImage); // Append selected image file

      const response = await axios.post(
        "http://localhost:3000/merchant/product",
        // formData,
        {
          name: name,
          quantity: quantity,
          desc: desc,
          price: price,
          image: selectedImage,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/from-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
              onChange={(e) => setSelectedImage(e.target.value)}
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
              Add Product
            </button>
          </form>
        </div>
      </ProductLayout>
    </MerchantLayout>
  );
};

export default AddProduct;
