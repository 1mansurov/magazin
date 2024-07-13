import React, { useEffect, useState } from 'react'
import product from '../../img/products.svg'
import { useTranslation } from 'react-i18next';
import axios from '../../api'
import ProductItem from '../product-item/ProductItem';


const Product = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/products');
        setData(res.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(data);


  return (
    <div className='max-w-[1315px] mx-auto '>
        <h3 className='text-center text-[#22262A] text-3xl p-5' >{t('allProductsTitle')}</h3>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-5' >
          {data?.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
      <a className='flex justify-center p-[20px] ' href=""><img className='more' src={product} alt="" /></a>
    </div>
  )
}

export default Product

