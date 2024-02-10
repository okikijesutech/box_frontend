import { useEffect, useState } from "react";
import axios from "axios";
import MerchantLayout from "../../layouts/MerchantLayout";
import ProductLayout from "../../layouts/ProductLayout";
import { FaSearch } from "react-icons/fa";

interface ProductType {
  id: number;
  name: string;
  quantity: number;
}

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product", {});
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MerchantLayout>
      <div>
        <ProductLayout>
          <div className='border-black border-[2px] w-[250px] rounded-md px-3 py-2'>
            <input
              type='text'
              className='mr-3'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className='overflow-x-auto overflow-y-auto mt-5'>
            <table className='min-w-full bg-white border border-gray-300'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='py-2 px-4 border-b'>Item</th>
                  <th className='py-2 px-4 border-b'>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(filteredProducts) &&
                filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <tr
                      key={product.id}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className='py-2 px-4 border-b'>{product.name}</td>
                      <td className='py-2 px-4 border-b'>{product.quantity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>No Product</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </ProductLayout>
      </div>
    </MerchantLayout>
  );
};

export default Product;
