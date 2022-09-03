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
     {id}
    </div>
  )
}

export default Assesment