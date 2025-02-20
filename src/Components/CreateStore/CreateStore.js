import React, { useState } from 'react'
import { AiOutlineDesktop } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";
import { MdOutlineEditLocation } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const CreateStore = () => {
    const [storeName, setStoreName] = useState("");
    const [domain, setDomain] = useState("");
    const [email, setEmail] = useState("");

    const [isValidName, setIsValidName] = useState(false);
    const [isValidDomain, setIsValidDomain] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [errorDominMegs, setErrorDominMegs] = useState(false)


    const handleStoreName = (e) => {
        const name = e.target.value;
        if (name.length > 2) {
            setIsValidName(false);
            setStoreName(name)
        }
        else {
            setIsValidName(true)
        }

    }

    const handleValidDomin = (e) => {
        const name = e.target.value;
        if (name.length > 3) {
            setIsValidDomain("")
            try {
                fetch(`https://interview-task-green.vercel.app/task/domains/check/${name}.expressitbd.com`)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.data.taken) {
                            setErrorDominMegs(false)
                            setIsValidDomain("Not Abailable Domain, Re-enter!")
                        }
                        else {
                            setIsValidDomain(res.data.taken)
                            setDomain(res.data.taken)
                            setErrorDominMegs(true)

                        }
                    })

            } catch (error) {
                console.log(error)
            }

        }
        else {
            setErrorDominMegs(false)
            setIsValidDomain("Domain name must be 4 Characters long")
        }


    }

    const handleEmail = (e) => {
        const email = e.target.value
        console.log(email)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let testEmai = emailRegex.test(email);
        if (!testEmai) {
            setIsValidEmail(false)

        }
        else {
            setIsValidEmail(true)

        }

    }

    const hanldeSubmit = async (formData) => {

        const name = formData.get('name');
        const domain = formData.get('domain');
        const location = formData.get('location');
        const category = formData.get('category');
        const currency = formData.get('currency');
        const email = formData.get('email');
        const data = {
            name, domain, location, category, currency, email
        }
        console.log(data)
        if (!isValidDomain) {
            fetch('https://example.com/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    key: 'value'
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
            console.log("post")
        }
    }
    console.log("errorDominMegs", errorDominMegs)
    console.log("isValidEmail", isValidEmail)
    console.log("isValidName", isValidName)
    console.log(isValidDomain.length)
    return (
        <div>
            <form style={{ position:'fixed',top:"0px",bottom:'0px', left:'0px',right:'0px' , margin:'auto' , overflow:'auto'}} className=' md:w-[650px] lg:w-[950px] lg:h-[710px] w-[1200px] xl:h-[710px] md:h-[700px] sm:h-[750px] h-[700px] rounded-sm shadow-md bg-slate-100  mx-auto p-5' action={hanldeSubmit}>
                <h3 className="text-2xl font-semibold mb-5">Create a Store</h3>
                <div  className="sm:w-full w-3/12">
                <p className="">Add your basic store information and  complete the setup</p>
                </div>
               
                <hr className='mb-5 mt-1' />

                <div className='grid  lg:grid-cols-2 sm:grid-cols-1 p-3'>
                    <div className='flex flex-row'>
                        <div className=' flex-none w-[40px]'>
                            <  AiOutlineDesktop className='text-blue-300' style={{ fontSize: '30px' }} />
                        </div>
                        <div className='flex-1 px-2'>
                            <div>
                                <h4 className='font-bold'>Give your online store a name</h4>
                                <small className='hidden sm:block'>A great store name is big part of your success. Make sure it aligns with your brand and products</small>
                            </div>
                        </div>
                    </div>
                    <div className=' pl-3'>
                        <div>
                            <input style={{ outline: 'none' }} className={!isValidName ? " w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full  rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500  px-3 py-2 " : "w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full rounded border border-red-500 focus:ring-red-500  px-3 py-2 "}

                                placeholder="How'd you like to call you store?" type="text" name='name' onChange={handleStoreName} />
                        </div>
                        <div>
                            {
                                isValidName && <small className='text-red-500'>Store name must be at least 3 Characters long</small>
                            }
                        </div>


                    </div>
                </div>

                <div className='grid lg:grid-cols-2 p-3'>
                    <div className='flex flex-row'>
                        <div className=' flex-none w-[40px]'>
                            <  TiWorld className='text-blue-300' style={{ fontSize: '30px' }} />
                        </div>
                        <div className='flex-1 px-2'>
                            <div>
                                <h4 className='font-bold'>Your online store subdomain</h4>
                                <small className='hidden sm:block'>A SEO-friendly store name is a crucial part of your success. Make sure it
                                    aligns with your brand and products.</small>
                            </div>
                        </div>
                    </div>
                    <div className=' pl-3'>
                        <div>
                            <input style={{ outline: 'none' }} className={!isValidDomain ? "xw-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500   px-3 py-2 " : "xw-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full rounded border border-red-500 focus:ring-red-500  px-3 py-2 "} placeholder="Enter your domain name" type="text" name='domain' onChange={handleValidDomin} />
                        </div>
                        <div>
                            {
                                isValidDomain && <small className='text-red-500'>{isValidDomain}</small>
                            }
                        </div>


                    </div>
                </div>

                <div className='grid lg:grid-cols-2 p-3'>
                    <div className='flex flex-row'>
                        <div className=' flex-none w-[40px]'>
                            <MdOutlineEditLocation className='text-blue-300' style={{ fontSize: '30px' }} />

                        </div>
                        <div className='flex-1 px-2'>
                            <div>
                                <h4 className='font-bold'>Where's your store located?</h4>
                                <small className='hidden sm:block'>Set your store's default location so we can optimize store access and
                                    speed for your customers.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pl-3">
                            {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                <option value="Bangladesh">Bangladesh</option>

                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </div>
                        {/* <select name="location" id="location">

                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Canada">Canada</option>
                        </select> */}
                    </div>
                </div>


                <div className='grid lg:grid-cols-2 p-3'>
                    <div className='flex flex-row'>
                        <div className=' flex-none w-[40px]'>
                            <MdCategory className='text-blue-300' style={{ fontSize: '30px' }} />

                        </div>
                        <div className='flex-1 px-2'>
                            <div>
                                <h4 className='font-bold'>What's your Category?</h4>
                                <small className='hidden sm:block'>Set your store's default category so that we can optimize store access
                                    and speed for your customers.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pl-3">
                            {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a category</option>
                                <option value="Fashion">Fashion</option>

                                <option value="Cloth">Cloth</option>

                            </select>
                        </div>
                        {/* <select name="category" id="category">

                            <option value="Fashion">Fashion</option>
                            <option value="Cloth">Cloth</option>
                            <option value="Germany">Germany</option>
                            <option value="Canada">Canada</option>
                        </select> */}
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 p-3'>
                    <div className='flex flex-row'>
                        <div className=' flex-none w-[40px]'>
                            <MdCurrencyExchange className='text-blue-300' style={{ fontSize: '30px' }} />

                        </div>
                        <div className='flex-1 px-2'>
                            <div>
                                <h4 className='font-bold'>Choose store currency</h4>
                                <small className='hidden sm:block'>This is the main currency you wish to sell in.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pl-3">
                            {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select name="currency" id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a currency</option>
                                <option value="BDT">BDT(Taka)</option>

                            </select>
                        </div>
                        {/* <select name="currency" id="currency">

                            <option value="BDT">BDT(Taka)</option>

                        </select> */}
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 p-3'>
                    <div className='flex flex-row'>
                        <div className=' flex-none w-[40px]'>
                            <MdOutlineEmail className='text-blue-300' style={{ fontSize: '30px' }} />

                        </div>
                        <div className='flex-1 px-2'>
                            <div>
                                <h4 className='font-bold'>Store contact email</h4>
                                <small className='hidden sm:block'>This is the email you'll use to send notifications to and receive orders
                                    from customers.</small>
                            </div>
                        </div>
                    </div>
                    <div className='pl-3'>
                        <div>
                            <input style={{ outline: 'none' }} className={isValidEmail ? " w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500  px-3 py-2 " : "w-fit sm:w-2/4 xl:w-full lg:w-11/12 md:w-full rounded border border-red-500 focus:ring-red-500  px-3 py-2 "} name='email' placeholder='you@example.com' type="email" onChange={handleEmail} />
                        </div>
                        <div>
                            {
                                !isValidEmail && <small className='text-red-500'>Invalid emial format</small>
                            }
                        </div>


                    </div>
                </div>
                <div className='flex  justify-srart md:justify-center lg:justify-end xl:justify-end p-3'>
                    <input className={`  px-6 py-2 text-white font-semibold rounded-lg transition duration-300 ${(isValidName == false && isValidEmail == true && errorDominMegs == false)
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                        }`} disabled={isValidName == false && isValidEmail == true && errorDominMegs == false} type="submit" value={"Create store"} />
                </div>


            </form>
        </div>
    )
}

export default CreateStore
