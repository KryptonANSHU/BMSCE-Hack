import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Cookies from 'universal-cookie';
const Assesment = ({ data }) => {
  const cookies = new Cookies();
  const [id, setId] = useState()
  const [food, setFood] = useState('')
  const [bad, setbad] = useState([])
  const [good, setgood] = useState([])

  console.log(data)

  useEffect(() => {
    fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=2e12e7f89b8e45a79819e091d85876ae&query=${data}&number=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setId(data.results[0].id)

        fetch(`https://api.spoonacular.com/recipes/${data.results[0].id}/nutritionWidget.json?apiKey=2e12e7f89b8e45a79819e091d85876ae&includeNutrition=true`).then((response) => response.json())
          .then((data) => {
            setbad(data.bad)
            setgood(data.good)
          }
          )


      })

  }, [data])


  return (
    // <Card sx={{ minWidth: 275 }}>
    <div className='flex justify-center '>
      <div className='w-[40%] border-2'>
        <h1 className='text-center text-2xl font-semibold text-red-600'>BAD</h1>
        {bad?.map((item, int) => (

          <>
            {item.title === 'Calories' && cookies.set(`${item.title}`, item.amount)}
            {item.title === 'Fat' && cookies.set(`${item.title}`, item.amount)}
            {item.title === 'Carbohydrates' && cookies.set(`${item.title}`, item.amount)}
            {item.title === 'Protein' && cookies.set(`${item.title}`, item.amount)}

        
            <div className='p-4 bg-gray-200'>
              <span className='text-xl font-semibold'>{item.title}</span>:<span className='text-xl text-red-600 font-semibold'>{item.amount}</span>
            </div>
            <Divider></Divider>
          </>
        ))}
      </div>

      <div className='w-[40%] border-2 mr-5'>

        <h1 className='text-center text-2xl font-semibold text-green-500'>GOOD</h1>
        {good?.map((item, int) => (
          <>
            {item.title === 'Protein' && cookies.set(`${item.title}`, item.amount)}

            <div className='p-4 bg-gray-200'><span className='text-xl font-semibold'>{item.title}</span>:<span className='text-xl text-green-600 font-semibold'>{item.amount}</span></div>
            <Divider></Divider>
          </>
        ))}
      </div>
      <img src={`https://api.spoonacular.com/recipes/${id}/nutritionWidget.png?apiKey=2e12e7f89b8e45a79819e091d85876ae&includeNutrition=true`} alt="sdd" id='spoon'></img>
    </div>
    // </Card>
  )
}

export default Assesment