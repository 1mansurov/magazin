
import { Link } from 'react-router-dom'
import zvezda from '../../img/zvezda.svg'

const ProductItem = ({ product }) => {


    return (
        <Link to={`/single-post/${product.id}`} className="products__wrapper__card border-[3px] mx-auto  rounded-md border-[#F6F7F8] ">
            <img className='w-[299px] h-[272px] object-contain  ' src={product.image} alt="" />
            <div className='bg-[#f6f7f8] text-center' >
                <h4 className='' >{product.name}</h4>
               <div className='justify-center flex p-3' > <img className=' justify-center block' src={zvezda} alt="" /></div>
                <div className='comment ' >
                    <p className='text-[#9098B1] line-through p-1 ' > {product.price} </p>
                    <small className='text-xl text-[#40BFFF] mx-5  '  >$534,33</small>
                    <span className='text-[#FB7181]' >24% Off</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem
