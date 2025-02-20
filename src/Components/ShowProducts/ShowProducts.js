import { useEffect, useState } from "react"

const ShowProduct=({})=>{
const [products,setProducts]=useState("");
useEffect(()=>{

    fetch('https://glore-bd-backend-node-mongo.vercel.app/api/product')
    .then((res)=> res.json())
    .then((res)=> setProducts(res.data))
  },[])



    return(
        <div>
            <h1 className="text-3xl font-bold underline">Product = {products.length}</h1>

        </div>
    )

}
export default ShowProduct;