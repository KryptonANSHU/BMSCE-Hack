import React, { useState } from 'react'
import './mvp.css'
import Assesment from './Assesment';
import MealPlanner from './MealPlanner';
const Mvp = () => {


  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState();
  const [quantity, setQuantitiy] = useState();
  const [avatarPreview, setAvatarPreview] = useState('');
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [age, setAge] = useState()


  // lang --> English Translated data
  // language --> detected language

  // const [convert,setConvert] = useState()

  const onFileChange = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
    const type = e.target.files[0].type;
    console.log(type)
    if (type === "application/pdf") {
      alert('Please Use Screenshots of PDF (Not PDF)....This Feature is Yet to be Implemented')
    }

    const reader = new FileReader();
    console.log('yooo')
    reader.onload = () => {

      console.log('Hi' + reader.readyState)
      if (reader.readyState === 2) {

        setAvatarPreview(reader.result);

      }
    }


    reader.readAsDataURL(e.target.files[0])
  }

  // const registerDataChange = (e)=>{
  //       const reader = new FileReader();
  // console.log('yooo')
  //       reader.onload=()=>{

  //           console.log('Hi' + reader.readyState)
  //           if(reader.readyState===2){

  //               setAvatarPreview(reader.result);

  //           }
  //       }


  //       reader.readAsDataURL(e.target.files[0])


  // }


  return (
    <div>9
      <div className="parent3">
        <section className="left3">
          <p></p>
          <i class="fa-solid fa-arrow-down"></i>
          <input type="file" onChange={onFileChange} accept="image/"></input>
          <span className='mx-5'>Choose Quantitiy Please </span>
          <select value={quantity} onChange={e => setQuantitiy(e.target.value)}>
            <option value={1}>Full</option>
            <option value={1 / 2}>Half</option>
            <option value={1 / 4}>Quarter</option>
          </select>

          <button>Upload Button </button>


        </section>



        <section className="middle3 card card-5" >
          <h1>Extracted Data</h1>
          {122
            (avatarPreview === "" && (
              <>
                <img src={avatarPreview} alt="Avatar Preview" />
              </>
            ))
          }
        </section>
      </div>

      <h2 className='homeHeading'>Nutritional Assesment</h2>
      <Assesment data='banana' />

      <h2 className='homeHeading'>Nutritional Diagnosis</h2>
      <h2 className='homeHeading'>Nutritional Assesment</h2>
        <form className="signUpForm">
        <div className="signUpName">
          <input
            type="text"
            placeholder="Height"
            required
            name="height"
            value={height}
          />
        </div>

        <div className="signUpName">
          <input
            type="text"
            placeholder="Weight"
            required
            name="weight"
            value={weight}
          />
        </div>

        <div className="signUpName">
          <input
            type="text"
            placeholder="Age"
            required
            name="age"
            value={age}
          />
        </div>

      </form>

      <h2 className='homeHeading'>Nutritional Meal Analyser</h2>
      <MealPlanner calorie={2000} />

    </div>
  )
}

export default Mvp