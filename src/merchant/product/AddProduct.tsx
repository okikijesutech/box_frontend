import { useState } from "react";
import ProductLayout from "../../layouts/ProductLayout";
import MerchantLayout from "../../layouts/MerchantLayout";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQunatity] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    try {
      axios.post("http://localhost:3000/merchant/products", {
        name: name,
        quantity: quantity,
        desc: desc,
        price: price,
      });
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
              onChange={(e) => setQunatity(e.target.value)}
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
            <input type='text' id='productJpeg' />
          </form>
          <button
            type='submit'
            className='bg-white rounded-[30px] px-3 py-2 mt-5'
          >
            Add Product
          </button>
        </div>
      </ProductLayout>
    </MerchantLayout>
  );
};

export default AddProduct;
