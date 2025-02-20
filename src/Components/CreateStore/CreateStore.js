import React, { useState } from 'react'

const CreateStore = () => {
    const [storeName, setStoreName] = useState("");
    const [domain, setDomain] = useState("");
    const [email, setEmail] = useState("");

    const [isValidName, setIsValidName] = useState(false);
    const [isValidDomain, setIsValidDomain] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [errorDominMegs, setErrorDominMegs] = useState(true)


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
    console.log(isValidDomain, isValidEmail, isValidName)
    console.log(isValidDomain.length)
    return (
        <div>
            <form action={hanldeSubmit}>
                <h3 className="text-3xl font-bold underline">Create a Store</h3>
                <p>Add your basic store information and  complete the setup</p>
                <hr />
                <div>
                    <div>
                        <div>
                            icon - pc
                        </div>
                        <div>
                            <div>
                                <h4>Give your online store a name</h4>
                                <small>A great store name is big part of your success. Make sure it aligns with your brand and products</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input style={{ outline: 'none' }} className={!isValidName ? "rounded border border-gray-500 focus:ring-blue-500   px-3 py-2 " : "rounded border border-red-500 focus:ring-red-500  px-3 py-2 "}

                            placeholder="How'd you like to call you store?" type="text" name='name' onChange={handleStoreName} />
                        {
                            isValidName && <small className='text-red-500'>Store name must be at least 3 Characters long</small>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            icon - earth
                        </div>
                        <div>
                            <div>
                                <h4>Your online store subdomain</h4>
                                <small>A SEO-friendly store name is a crucial part of your success. Make sure it
                                    aligns with your brand and products.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input style={{ outline: 'none' }} className={errorDominMegs ? "rounded border border-gray-500 focus:ring-blue-500   px-3 py-2 " : "rounded border border-red-500 focus:ring-red-500  px-3 py-2 "} placeholder="Enter your domain name" type="text" name='domain' onChange={handleValidDomin} />
                        {
                            isValidDomain && <small className='text-red-500'>{isValidDomain}</small>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            icon- location
                        </div>
                        <div>
                            <div>
                                <h4>Where's your store located?</h4>
                                <small>Set your store's default location so we can optimize store access and
                                    speed for your customers.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form class="max-w-sm mx-auto">
                            {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select name="location" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                <option value="Bangladesh">Bangladesh</option>
                              
                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </select>
                        </form>
                        {/* <select name="location" id="location">

                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Canada">Canada</option>
                        </select> */}
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            icon
                        </div>
                        <div>
                            <div>
                                <h4>What's your Category?</h4>
                                <small>Set your store's default category so that we can optimize store access
                                    and speed for your customers.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                    <form class="max-w-sm mx-auto">
                            {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a category</option>
                                <option value="Fashion">Bangladesh</option>
                              
                                <option value="Cloth">Cloth</option>
                               
                            </select>
                        </form>
                        {/* <select name="category" id="category">

                            <option value="Fashion">Fashion</option>
                            <option value="Cloth">Cloth</option>
                            <option value="Germany">Germany</option>
                            <option value="Canada">Canada</option>
                        </select> */}
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            icon
                        </div>
                        <div>
                            <div>
                                <h4>Choose store currency</h4>
                                <small>This is the main currency you wish to sell in.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                    <form class="max-w-sm mx-auto">
                            {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select name="currency" id="currency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a currency</option>
                                <option value="Bangladesh">Bangladesh</option>
                              
                                <option value="BDT">BDT(Taka)</option>

                            </select>
                        </form>
                        {/* <select name="currency" id="currency">

                            <option value="BDT">BDT(Taka)</option>

                        </select> */}
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            icon
                        </div>
                        <div>
                            <div>
                                <h4>Store contact email</h4>
                                <small>This is the email you'll use to send notifications to and receive orders
                                    from customers.</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input name='email' placeholder='you@example.com' type="email" onChange={handleEmail} />
                        {
                            isValidEmail && <small>Invalid emial format</small>
                        }
                    </div>
                </div>

                <input disabled={isValidDomain || !isValidDomain && !isValidEmail} type="submit" value={"Create store"} />
            </form>
        </div>
    )
}

export default CreateStore
