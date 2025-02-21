import { useEffect, useState } from "react"

const ShowProduct = ({ }) => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {

        fetch('https://glore-bd-backend-node-mongo.vercel.app/api/product')
            .then((res) => res.json())
            .then((res) => setProducts(res.data))
    }, [])



    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 p-5 mx-auto">
           
            {
                products?.map((data,index) => 
                <div key={index} className="cursor-pointer gap-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-72 w-full" src="https://res.cloudinary.com/dmoxym9g7/image/upload/f_auto,q_auto/Prodcut%202668?_a=BAMCkGTG0" alt="" />
                    <div >
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {data.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {data.price}</p>
                        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a> */}
                    </div>
                </div>)
            }



        </div>
    )

}
export default ShowProduct;