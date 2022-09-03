import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
const Assesment = ({data}) => {
  const [id,setId] = useState()
const [food,setFood] = useState('')
const [bad,setbad]=useState([])
const [good,setgood]=useState([])

console.log(data)

useEffect(() => {
  fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=4197398f39a347779ebe6b83c15e846a&query=${data}&number=1`)
  .then((response)=> response.json())
  .then((data)=>{
    console.log(data)
    setId(data.results[0].id)
  
  fetch(`https://api.spoonacular.com/recipes/${data.results[0].id}/nutritionWidget.json?apiKey=456c36e8487b43a09029092269496f6f&includeNutrition=true`).then((response)=>response.json())
  .then((data)=>{setbad(data.bad)
   setgood(data.good)}
  )  
    

  })

}, [data])


  return (
    // <Card sx={{ minWidth: 275 }}>
    <div className='flex justify-center'>
    <div className='w-[40%] border-2'>
      <h1 className='text-center text-green-600'>BAD</h1>
     {bad?.map((item,int)=>(
      <>
       <div className='p-5 bg-gray-200'>
       <span className='text-xl font-semibold'>{item.title}</span>:<span className='text-xl text-green-600 font-semibold'>{item.amount}</span>
       </div> 
       <Divider></Divider>
       </>
     ))}
    </div>

      <div className='w-[40%] border-2'>

      <h1 className='text-center text-orange-500'>GOOD</h1>
     {good?.map((item,int)=>(
      <>
       <div className='p-2 bg-gray-200'><span  className='text-xl font-semibold'>{item.title}</span>:<span className='text-xl text-red-600 font-semibold'>{item.amount}</span></div> 
       <Divider></Divider>
       </>
     ))}
    </div>
    </div>
    // </Card>
  )
}

export default Assesment