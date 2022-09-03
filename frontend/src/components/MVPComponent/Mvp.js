import React, { useState } from 'react'
import './mvp.css'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import Assesment from './Assesment';
import MealPlanner from './MealPlanner';
import { Assessment } from '@mui/icons-material';
import Loader from '../layout/Loader/loader'
import { Divider } from '@mui/material';
const Mvp = () => {

  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [act,setAct]=useState();
  const [cal,setCal]=useState();


  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState('');
  const [quantity, setQuantitiy] = useState();
  const [avatarPreview, setAvatarPreview] = useState('');
  const [loader,setLoader]= useState(true)

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [flag, setflag] = useState(false)
  const [name, setname] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const [imageUrls, setImageUrls] = useState([]);
  const [localurl, setlocalurl] = useState('')
  const imagesListRef = ref(storage, "images/");

  const changeHandler = (event) => {

    setImageUpload(event.target.files[0]);

    var image = document.getElementById('outputimageupload');
    image.src = URL.createObjectURL(event.target.files[0]);

    setIsSelected(true);
  };
  const uploadFile = () => {
    console.log(imageUpload)

    if (imageUpload == null) {
      setflag(false)
      return;
    }
    let fileuuidname = `${imageUpload.name + v4()}`
    setname(fileuuidname)
    const imageRef = ref(storage, `images/${fileuuidname}`);
    console.log(imageRef);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    setflag(true)

  };
  const calorcal = (e) => {
    e.preventDefault();
    let RMR = weight * 13.75 + height * 5 - age * 6.76 + 655.1;
    let totalcal, time;

    if (act=='low') {
      totalcal = 0.2 * RMR + RMR;
      time = 60;
    } else if (act=='mid') {
      totalcal = 0.5 * RMR + RMR;
      time = 80;
    } else {
      totalcal = 0.8 * RMR + RMR;
      time = 120;
    }

    totalcal = time * 10 + totalcal;
    totalcal = totalcal - 0.2 * totalcal;

    setCal(totalcal)
  };


  const predictsabgi = async () => {
    setLoader(false)
    let data = {
      name
    }
    // const blog = { title, body, author };
    await fetch('http://localhost:3002', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(name)
    })
      .then((response) => response.json())
      .then((data) => setResult(data.category));
  }


  const predict = () => {
    let data = {
      name
    }
    // const blog = { title, body, author };
    fetch('http://localhost:3002/dishdata', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(name)
    })
      .then((response) => response.json())
      .then((data) => setResult(data.category));
  }

  return (
    <div>
      <div className="parent3 ">
        <section className="left3 border-2">
          <p></p>
          <i class="fa-solid fa-arrow-down"></i>
          <input type="file" onChange={changeHandler} accept="image/"></input>
          <span className='mx-5'>Choose Quantitiy Please </span>
          <select value={quantity} onChange={e => setQuantitiy(e.target.value)}>
            <option value={1}>Full</option>
            <option value={1 / 2}>Half</option>
            <option value={1 / 4}>Quarter</option>
          </select>

          <button onClick={uploadFile}>Upload Button </button>

          <button onClick={predictsabgi}>Predict Ingredient </button>
          {/* <button onClick={predict}>predict dish </button > */}

          {
        (result || loader)?(<>
          <div className=''>
              <p>Result : <span className='text-orange-500'> {result}</span></p>
          </div>
        </>):(<Loader />)
       }

        </section>



        <section className="middle3 card card-5" >
          <h1>Selected Image</h1>
          {
            (avatarPreview === "" && (
              <>
                <img id='outputimageupload' alt="Avatar Preview" />
              </>
            ))
          }
        </section>
      </div>

      <h2 className='homeHeading'>Nutrition Assesment</h2>
            <Assesment data={result} />
         
      
            <Divider></Divider>
      <h2 className='homeHeading'>Nutrition Diagnosis</h2>
      <form className="loginForm" onSubmit={calorcal}>
        <div className="loginEmail">
          <input
            type="number"
            placeholder="Height"
            required
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="loginEmail">
          <input
            type="number"
            placeholder="Weight"
            required
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="loginEmail">
          <input
            type="number"
            placeholder="Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <input type="radio" value="low" name="gender" onChange={(e) => setAct(e.target.value)}/> Low
          <input type="radio" value="mid" name="gender" onChange={(e) => setAct(e.target.value)}/> Mid
          <input type="radio" value="high" name="gender" onChange={(e) => setAct(e.target.value)}/> High
        </div>
        <input type="submit" value="Calculate Calorie" className="loginBtn" />
      </form>
        <p className='text-center text-xl text-orange-400 font-extrabold my-3'>Your Target Calories : {cal}</p>
        <Divider></Divider>
      <h2 className='homeHeading'>Nutrition Intervention</h2>

      <MealPlanner calorie={cal} />
      <Divider></Divider>
      <h2 className='homeHeading'>Nutrition Moderation</h2>
    </div>
  )
}

export default Mvp