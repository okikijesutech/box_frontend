import { useEffect, useState } from "react";
import axios from "axios";
import MerchantLayout from "../../../layouts/MerchantLayout";
import ProductLayout from "../../../layouts/ProductLayout";
import { FaSearch, FaTrash, FaEye, FaSyncAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useAuth } from "../../../contexts/AuthContext";
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

  const handleDelete = async (id: number) => {
    // Added async keyword to handleDelete function
    try {
      await axios.delete(`http://localhost:3000/product/${id}`); // Added await to axios.delete
      setProducts(products.filter((product) => product.id !== id));
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MerchantLayout>
      <ToastContainer />
      <div>
        <ProductLayout>
          <div className='flex items-center border border-black rounded-md px-3 py-2'>
            <input
              type='text'
              className='mr-3 focus:outline-none'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className='overflow-x-auto mt-5'>
            <table className='min-w-full bg-white border border-gray-300'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='py-2 px-4 border-b'>Item</th>
                  <th className='py-2 px-4 border-b'>Quantity</th>
                  <th className='py-2 px-4 border-b'>Actions</th>{" "}
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <tr
                      key={product.id}
                      className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className='py-2 px-4 border-b'>{product.name}</td>
                      <td className='py-2 px-4 border-b'>{product.quantity}</td>
                      <td className='py-2 px-4 border-b'>
                        <button
                          className='mr-2'
                          onClick={() => handleDelete(product.id)}
                        >
                          <FaTrash /> Delete
                        </button>
                        <button
                          className='mr-2'
                          onClick={() => openModal(product)}
                        >
                          <FaEye /> View
                        </button>
                        <button>
                          <FaSyncAlt /> Restock
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className='py-2 px-4 border-b'>
                      No Products
                    </td>
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
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
      <div className='relative bg-white p-6 rounded-md'>
        <button onClick={closeModal} className='absolute top-0 right-0 p-2'>
          <FaXmark size={24} />
        </button>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p>Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

export default Product;
