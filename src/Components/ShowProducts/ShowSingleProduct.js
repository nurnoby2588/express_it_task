import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"

export default function ShowSingleProduct() {
    const [singleProduct, setSingleProduct] = useState("")
    const [url, setUrl] = useState('')
    console.log(singleProduct)
    console.log(url)
    let params = useParams()
    const { id } = params;
    useEffect(() => {

        fetch(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
            .then((res) => res.json())
            .then((res) => {
                let value = res.data;
                const data = value.find((data) => data._id == id)
                const images = data.images.find((data) => data)
                setUrl(images)
                setSingleProduct(data)
            })
    }, [])
    return (
        <div>
            <div className='mx-auto w-2/6 h-2/6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 grid grid-cols-2 gap-4'>
                <div>
                    <img src={url.optimizeUrl} />

                </div>
                <div>
                    <p>Name : {singleProduct.name}</p>
                    <p>Price : {singleProduct.price}</p>
                    <p>Description : {singleProduct.description}</p>
                    <p>CreatedAt: {dayjs(singleProduct.createdAt).format('DD/MM/YYYY') }</p>
                </div>

            </div>
        </div>
    )
}
