import React, { useEffect, useState } from 'react'
import axios from '../../api';
import { useParams } from 'react-router-dom';


const SinglePost = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/products/${id}`);
                setData(res.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    console.log(data);


    return (

        <div className='max-w-[1315px] mx-auto  px-4 '>
            <div className='flex gap-14 items-center'>
                <div>
                    <img className='max-w-[726px] h-[490px]' src={data.image} alt="" />
                </div>
                <div className='w-full'>
                    <div className=' gap-[20px]  items-center p-[20px] ' >
                        <h2 className='text-[#22262A] text-[24px]'  > {data.name} </h2>
                        <div className='flex gap-[15px] items-center pt-[10px] ' >
                            <p className='font-semibold text-[#40BFFF] text-[20px]' > {data.price} </p>
                            <p className='text-[#9098B1]' > {data.rating} </p>
                        </div>
                    </div>
                    <div className=' w-full max-w-[250px] h-[150px] p-[20px]  ' >
                        <p>Availability:</p>
                        <p>Category</p>
                        <p>Free shipping</p>
                        <p>In stock: 10</p>
                        <p>Accessories</p>
                    </div>
                    <div className=' flex justify-between items-center  ' >
                        <div className='max-w-[160px] h-[50px] bg-[#F6F7F8] m-[20px] flex  w-full items-center justify-around ' >
                            <button className='p-[10px] text-[#33A0FF] text-[25px] '  >-</button>
                            <p>2</p>
                            <button className='p-[10px] text-[#33A0FF] text-[25px] '>+</button>
                        </div>
                        <div className='max-w-[160px] h-[50px] bg-[#F6F7F8] w-full '>
                            Add To Cart
                        </div>
                        <div className='max-w-[63px] h-[50px] bg-[#F6F7F8] w-full '>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>

    )
}

export default SinglePost
