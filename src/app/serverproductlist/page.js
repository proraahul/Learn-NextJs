import Product from "./product";

const ProductList = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};

const Page = async () => {
  let products = await ProductList();
  // console.log(products);
  return (
    <div>
      <h1 className="text-3xl text-red-500 mx-auto">
        Fetch Data with API in Server Component
      </h1>
      <h2 className=" text-green-700 text-2xl mt-5 font-medium">
        Product List
      </h2>
      {
        products.map(item => {
          return(
            <>
            <h3 className='font-semibold my-4'>Name: {item.title}</h3>
            <Product item={item}/>
            </>
          )
        })
      }

    </div>
  );
};

export default Page