import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
console.log(products)
    const handleSingleItms = (data) => {
        navigate(`/product/${data}`);
    };

   
    const API_URL = "https://glore-bd-backend-node-mongo.vercel.app/api/product";
    const dummy='https://dummyjson.com/products'
    
    useEffect(() => {
        fetch(dummy)
            .then((res) => res.json())
            .then((res) => {console.log(res) 
                 setProducts(res.products)})
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    

    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 p-5 mx-auto">
            {products?.map((data, index) => (
                <div
                    onClick={() => handleSingleItms(data._id)}
                    key={index}
                    className="cursor-pointer gap-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <img className="h-96 w-full" src={data?.thumbnail} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Name: {data.title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Price: {data.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowProduct;
