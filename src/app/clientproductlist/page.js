"use client";

import { useEffect, useState } from "react";

const Page = () => {
    const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(data => setProduct(data.products));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-red-500 mx-auto">
        Fetch Data with API in Client Component
      </h1>
      <h2 className=" text-green-700 text-2xl mt-5 font-medium">
        Product List
      </h2>
      {
        product.map(item => {
            return(
                <h3 key={item.id} className='font-semibold my-4'>Name: {item.title}, Price: ${item.price}</h3>
            )
        })
      }
    </div>
  );
};

export default Page;
