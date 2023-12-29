import React, { useEffect, useState } from 'react';
import { productToCart } from '../../app/Products/productModel';
import axios from 'axios';
import { Buffer } from 'buffer';
import { deleteById, updateQtyById } from '../../app/Cart/cartActions';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import DeleteModal from './deleteModal';
import QtyControl from '../Products/qtyControl';
import { getStockById } from '../../app/Products/helper';

interface CartProductProp {
  product: productToCart;
}

const CartProduct: React.FC<CartProductProp> = ({ product }) => {

  const { productCatalog } = useSelector((state: any) => state.productCatalog);
  const { cart } = useSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();
  const [productStock, setProductStock] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qty, setQty] = useState<number>(product.qty);
  const [image, setImage] = useState('')

  useEffect(() => {
    const currentStock = getStockById(productCatalog, product.id)
    setProductStock(currentStock)
  }, [productCatalog])


  const handleQtyChange = (qty: number) => {
    dispatch(updateQtyById(cart, productCatalog, product.id, qty));
    setQty(qty);
  };

  const handleOnDelete = () => {
    dispatch(deleteById(cart, product.id))
  }

  const getImage = async () => {
    axios.get(product.image, { responseType: "arraybuffer" })
      .then((response) =>
        setImage(Buffer.from(response.data, "binary").toString("base64"))
      ).catch((err) => {
        console.log("ocurrio un error al cargar la imagen", err)
      });
  }
  getImage();

  const totalPrice = product.price * product.qty;

  return (
    <div
      className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 xl:justify-between border-opacity-40">
      <div className="w-full mb-2 lg:mb-0 h-946 md:h-44 md:w-44">
        <img src={`data:;base64,${image}`} alt={product.model} className="object-cover w-full h-full"/>
      </div>
      <div className="w-full px-4 mb-6 md:w-auto xl:mb-0">
        <a className="block mb-5 text-xl font-medium hover:underline">
          {product.model}</a>
        <div className="flex flex-wrap">
          <p className="text-sm font-medium">
            <span>Size:</span>
            <span className="ml-2 text-gray-400">{product.size}</span>
          </p>
        </div>
      </div>
      <div className="w-full px-4 mt-6 mb-6 md:w-auto xl:mb-0 xl:mt-0">
        <QtyControl qty={qty} max={productStock} onQtyChange={handleQtyChange} />
      </div>
      <div className="w-full px-4 xl:w-auto">
        <span className="text-xl font-medium text-gray-700">
          <span className="text-sm">$</span>
          <span>{totalPrice.toFixed(2)}</span>
        </span>
      </div>
      <button
        className="absolute top-0 right-0 text-gray-300 lg:mt-6 lg:-mr-4 hover:text-gray-600"
        onClick={()=>setIsModalOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          className="w-6 h-6 bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <DeleteModal
        isOpen={isModalOpen}
        onRequestClose={()=>setIsModalOpen(false)}
        onConfirm={handleOnDelete}
      />
    </div>
  );
};

export default CartProduct;
