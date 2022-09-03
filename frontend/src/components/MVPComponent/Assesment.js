import React, { useEffect, useState } from 'react'

const Assesment = ({data}) => {
  const [id,setId] = useState()
const [food,setFood] = useState('')
console.log(data)

useEffect(() => {
  fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=ee7cb0bda7894f23afce13adda285b90&query=${data}&number=1`)
  .then((response)=> response.json())
  .then((data)=>{
    setId(data.results[0].id)


  })

}, [])


  return (
    <div>
      <h1 className='text-3xl text-orange-500 font-semibold underline m-5' >
        Nutritional Assesment
      </h1>
      <p>{food}</p>
    </div>
  )
}

export default Assesment