'use client'
const Student = ({params}) => {
  // console.log(params);
  return (
    <div>
        <h1 className="text-3xl text-red-500">Student Details</h1>
        <h3 className="mt-5">Student Name: {params.student}</h3>
    </div>
  )
}

export default Student