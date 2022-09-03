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
const Mvp = () => {


  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState();
  const [quantity, setQuantitiy] = useState();
  const [avatarPreview, setAvatarPreview] = useState('');

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



  const predictsabgi = async () => {
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
      <div className="parent3">
        <section className="left3">
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
        result?(<>
          <div className=''>
              <p>Result : <span className='text-orange-500'> {result}</span></p>
          </div>
        </>):(<></>)
       }

        </section>



        <section className="middle3 card card-5" >
          <h1>Extracted Data</h1>
          {
            (avatarPreview === "" && (
              <>
                <img id='outputimageupload' alt="Avatar Preview" />
              </>
            ))
          }
        </section>
      </div>
      
      <h2 className='homeHeading'>Lets Analyse</h2>

      <Assesment data={result} />

      <MealPlanner calorie={2000} />
    </div>
  )
}

export default Mvp