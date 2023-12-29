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
import { addToCart } from '../../app/Cart/cartActions';
import {Buffer} from 'buffer';
import axios from 'axios';


const ProductDetail: React.FC = () => {
    
  const navigate = useNavigate();
  const params = useParams();
  const productId = (params as any)?.id;

  const {productCatalog, currentProduct} = useSelector((state: any) => state.productCatalog);
  const {cart} = useSelector((state: any) => state.cart);
  
  const [sizeSelected, setSizeSelected] = useState<string>('');
  const [qty, setQty] = useState<number>(1);
  const [idIndex, setIdIndex] = useState(0);
  const [image, setImage] = useState('')
  
  const dispatch = useAppDispatch();

    useEffect(() => {
      if(Object.values(productCatalog).length == 0){
        navigate('/');
      } else {
        dispatch(saveActualProductComplete(productCatalog, productId));
      }
    }, [productCatalog])

    useEffect(() => {
      if(Object.values(currentProduct).length !== 0)
        setIdIndex(getIndexById(currentProduct, productId))
    }, [currentProduct])

    useEffect(() => {
      if(Object.values(currentProduct).length !== 0)
        setSizeSelected(currentProduct.size[idIndex])
    }, [idIndex])

  const handleSizeChange = (size: string) => {
    setSizeSelected(size);
    const nextProduct = findIdBySize(currentProduct, size);
    setIdIndex(getIndexById(currentProduct, nextProduct))
    navigate('/product/'+ nextProduct);
  };

  const handleQtyChange = (qty: number) => {
    setQty(qty);
  };

  const handleAddCart = () => {
    const productToCart = buildProductByIndex(currentProduct, idIndex, qty, sizeSelected)
    dispatch(addToCart(cart, productToCart));
  };

  const getImage = async () => {
    axios.get(currentProduct.image,{responseType: "arraybuffer"})
    .then((response) =>
      setImage(Buffer.from(response.data, "binary").toString("base64"))
    ).catch((err)=>{
      console.log("ocurrio un error al cargar la imagen", err)
    });
  }
  getImage();

  return (Object.values(currentProduct).length !== 0 ?
    <div className="flex p-4 ">
      <div className="w-2/3 pr-4 ">
        <img src={`data:;base64,${image}`} alt={currentProduct.model} className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-2">{currentProduct.model}</h2>
        <p className="text-gray-600 mb-2">{currentProduct.price[idIndex].toFixed(2)}</p>

        <SizeSelector sizes={currentProduct.size} sizeSelected={sizeSelected} onSizeChange={handleSizeChange} />

        <QtyControl qty={qty} max={currentProduct.stock[idIndex]} onQtyChange={handleQtyChange} />

        <AddCartButton onClick={handleAddCart} disabled={currentProduct.stock[idIndex] == 0}/>
      </div>
    </div> : <></>
  );
};

export default ProductDetail;