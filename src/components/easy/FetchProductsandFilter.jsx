import React, { useEffect, useState } from 'react'

const FetchProductsandFilter = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterInput,setFilterInput]=useState("");

    const fetchData = async () => {
        try {
            setLoading(true)

            const response = await fetch("https://dummyjson.com/products?limit=40", {
                method: "GET",
            })

            console.log(response);

            if(!response.ok){
                window.alert("Failed to retreive data");
                return;
            }
            const productsData =await response.json();
            console.log(productsData?.products)

            if(productsData?.products){
            setData(productsData.products);
            console.log("fatched:",productsData?.products)
            }

        } catch (error) {
            console.error(error);
            console.log("Error while fetchign data")
        } finally {
            setLoading(false);
        }
    }

    const handleFilterInputChange =(e)=>{
        setFilterInput(e.target.value);
        console.log(e.target.value);
    }

    const filteredProducts=data.filter(product => product?.title.toLowerCase().includes(filterInput.toLowerCase()));

    useEffect(()=>{
        fetchData();
    },[])




    return (
        <div className='w-full min-h-screen'>
            <div className='flex justify-center items-center'>
                {loading && (
                    <div>
                        Loading....
                    </div>
                )}

                <div className='flex flex-col'>

                    <div>
                        Filter Input :
                        <input
                        type='text'
                        value={filterInput}
                        onChange={handleFilterInputChange}
                        />
                    </div>

                    {/* {console.log(filteredProducts)} */}
                         <div className="max-h-[500px] overflow-y-auto border rounded p-2">
                     <ul className="flex flex-col space-y-2">
                         {filteredProducts.map((product) => (
                             <li key={product.id} className="p-2 border-b">
                                 {product.title}
                             </li>
                         ))}
                     </ul>
                 </div>
                    <button className='' onClick={fetchData}>Refetch</button>
                    <button onClick={()=>{setFilterInput("")}}>Clear Filter</button>
                </div>
            </div>
        </div>
    )
}

export default FetchProductsandFilter













































// import React, { useEffect, useState } from 'react'

// const FetchProductsandFilter = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // filted logic 

//     const [filterInput, setFilterInput] = useState("");

//     const fetchProductsData = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch("https://dummyjson.com/products?limit=40", {
//                 method: "GET",
//             })

//             if (!response.ok) {
//                 window.alert("failed to fetch data");
//                 // return;
//             }

//             const fetchedData = await response.json();

//             if (fetchedData?.products) {
//                 console.log(fetchedData.products[0].title + "1111");
//                 setData(fetchedData.products);
//             }

//         } catch (error) {
//             console.error("Error in fetching data");
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }

//     }

//     // filter logic 

//     const handleFilterInputChange = (e)=>{
//         setFilterInput(e.target.value);
//         console.log(e.target.value);
//     }

//      const filteredProducts = data.filter( product => product.title.toLowerCase().includes(filterInput.toLowerCase()))

//     useEffect(() => {
//         fetchProductsData();
//     }, [])

//     return (
//         <div>

//             <p>{loading ? "Loading..." : ""}</p>

//             <div>
//                 <div>Filter Input :</div>
//                 <input type='text'
//                     onChange={handleFilterInputChange}
//                     value={filterInput}
//                 />
//             </div>

//             {/* show all the products  */}

//             <div>
//                 <div>All Products here :</div>
//                 <hr />

//                 <div className="max-h-[500px] overflow-y-auto border rounded p-2">
//                     <ul className="flex flex-col space-y-2">
//                         {filteredProducts.map((product, index) => (
//                             <li key={index} className="p-2 border-b">
//                                 {product.title}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>



//             </div>


//         </div>
//     )
// }

// export default FetchProductsandFilter
