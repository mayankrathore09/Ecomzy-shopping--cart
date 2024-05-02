import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner'

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setloading]= useState(true)
    const [posts,setposts] = useState([])


    async function fetchdata(){
        setloading(true)

        try{
            const response = await fetch(API_URL)
            const output = await response.json()
            setposts(output);
        }
        catch{
            console.log("error while fetching data")
            setposts([])
        }

        setloading(false)

    }

    useEffect(()=>{
        fetchdata()
    },[])

  return (
    <div>
        {
            loading ? <Spinner/> :
            posts.length > 0 ?
            (
                <div className='grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh] '>
                {
                    posts.map((post)=>(
                        <Product key={post.id} post={post}></Product>
                    ))
                }
                </div>
            ):(
            <div className='flex justify-center items-center'>
               <p>  NO DATA FOUND</p>
            </div>
            )
            
        }
    </div>
  )
}

export default Home