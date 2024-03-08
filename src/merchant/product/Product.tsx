import { useEffect, useState } from "react";
import axios from "axios";
import MerchantLayout from "../../layouts/MerchantLayout";
import ProductLayout from "../../layouts/ProductLayout";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { FaXmark } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

interface ProductType {
  id: number;
  name: string;
  quantity: number;
}

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const { accessToken, user } = useAuth();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/merchant/${user?.id}/product`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [accessToken]);

  const handleDelete = (id: any) => {
    try {
      axios.delete(`http://localhost:3000/product/${id}`);
      setProducts(products.filter((product) => product.id !== id)); // Remove the deleted product from state
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Product doesn't exist");
    }
  };

  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const filteredProducts = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <MerchantLayout>
      <ToastContainer />
      <div>
        <ProductLayout>
          <div className='border-black border-[2px] w-[250px] rounded-md px-3 py-2'>
            <input
              type='text'
              className='mr-3 focus:outline-none'
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
                  <th className='py-2 px-4 border-b'>Action</th>
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
                      <td className='py-2 px-4 border-b'>
                        <button onClick={() => handleDelete(product.id)}>
                          delete
                        </button>
                      </td>
                      <td className='py-2 px-4 border-b'>
                        <button onClick={() => openModal(product)}>
                          view product
                        </button>
                      </td>
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
          {modal && <Modal product={selectedProduct} closeModal={closeModal} />}
        </ProductLayout>
      </div>
    </MerchantLayout>
  );
};

const Modal = ({
  product,
  closeModal,
}: {
  product: ProductType | null;
  closeModal: () => void;
}) => {
  if (!product) return null;

  return (
    <div className='bg-green-500 w-[300px] h-[300px] absolute top-[100px] left-[600px]'>
      <button onClick={closeModal}>
        <FaXmark />
      </button>
      <h3>{product.name}</h3>
      <p>quantity: {product.quantity}</p>
      <h1>product</h1>
    </div>
  );
};

export default Product;
