'use client'
const Product = ({item}) => {
  return (
    <div>
        <button onClick={() => alert(`$${item.price}`)} className='p-2 bg-green-600 text-white border-none'>check price</button>
    </div>
  )
}

export default Product