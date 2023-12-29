import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SizeSelector from '../../components/Products/sizeSelector';
import QtyControl from '../../components/Products/qtyControl';
import AddCartButton from '../../components/Products/addCartButton';
import { useAppDispatch } from '../../app/hooks';
import { saveActualProductComplete } from '../../app/Products/productActions';
import { useSelector } from 'react-redux';
import { findIdBySize, getIndexById } from '../../app/Products/helper';
import { buildProductByIndex } from '../../app/Products/builders';
import { addToCart, clearAlerts } from '../../app/Cart/cartActions';
import { Buffer } from 'buffer';
import axios from 'axios';
import CustomErrorAlert from '../../components/Alerts/CustomErrorAlert';
import CustomSuccessAlert from '../../components/Alerts/CustomSuccessAlert';


const ProductDetail: React.FC = () => {

  const navigate = useNavigate();
  const params = useParams();
  const productId = (params as any)?.id;

  const { productCatalog, currentProduct } = useSelector((state: any) => state.productCatalog);
  const { cart, errorMessage, successMessage } = useSelector((state: any) => state.cart);
  console.log("successMessage", successMessage)
  console.log("errorMessage", errorMessage)
  const [sizeSelected, setSizeSelected] = useState<string>('');
  const [qty, setQty] = useState<number>(1);
  const [idIndex, setIdIndex] = useState(0);
  const [image, setImage] = useState('')

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAlerts())
  }, [])

  useEffect(() => {
    if (Object.values(productCatalog).length == 0) {
      navigate('/');
    } else {
      dispatch(saveActualProductComplete(productCatalog, productId));
    }
  }, [productCatalog])

  useEffect(() => {
    if (Object.values(currentProduct).length !== 0)
      setIdIndex(getIndexById(currentProduct, productId))
  }, [currentProduct])

  useEffect(() => {
    if (Object.values(currentProduct).length !== 0)
      setSizeSelected(currentProduct.size[idIndex])
  }, [idIndex])

  const handleSizeChange = (size: string) => {
    setSizeSelected(size);
    const nextProduct = findIdBySize(currentProduct, size);
    setIdIndex(getIndexById(currentProduct, nextProduct))
    navigate('/product/' + nextProduct);
  };

  const handleQtyChange = (qty: number) => {
    setQty(qty);
  };

  const handleAddCart = () => {
    const productToCart = buildProductByIndex(currentProduct, idIndex, qty, sizeSelected)
    dispatch(addToCart(cart, productToCart));
  };

  const getImage = async () => {
    axios.get(currentProduct.image, { responseType: "arraybuffer" })
      .then((response) =>
        setImage(Buffer.from(response.data, "binary").toString("base64"))
      ).catch((err) => {
        console.log("ocurrio un error al cargar la imagen", err)
      });
  }
  getImage();

  return (Object.values(currentProduct).length !== 0 ?
    <section className="py-10 font-poppins">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-96">
                <img className="object-contain w-full lg:h-full" src={`data:;base64,${image}`} alt={currentProduct.model}/>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                  {currentProduct.model}
                </h2>
                <p className="inline-block text-2xl font-semibold text-gray-700">
                  <span>${' '}{currentProduct.price[idIndex].toFixed(2)}</span>
                </p>
              </div>
              <div className="mb-6 ">
                <SizeSelector
                  sizes={currentProduct.size}
                  sizeSelected={sizeSelected}
                  onSizeChange={handleSizeChange}
                />

                <QtyControl
                  qty={qty}
                  max={currentProduct.stock[idIndex]}
                  onQtyChange={handleQtyChange}
                />
                <AddCartButton onClick={handleAddCart} disabled={currentProduct.stock[idIndex] === 0} />
              </div>
              
            </div>
          </div>
        </div>
        {errorMessage && <CustomErrorAlert AlertMessage={errorMessage}  onCancelAlert={()=>{dispatch(clearAlerts())}}/>}
        {successMessage && <CustomSuccessAlert AlertMessage={successMessage} onCancelAlert={()=>{dispatch(clearAlerts())}}/>}
      </div>
    </section>
    : <></>
  );
};

export default ProductDetail;