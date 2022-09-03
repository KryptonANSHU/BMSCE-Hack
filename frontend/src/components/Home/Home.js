import React ,{Fragment , useEffect} from 'react';
import { CgMouse } from 'react-icons/cg';
import MetaData from '../layout/metaData';
import './Home.css';
import { clearErrors , getProduct } from '../../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import Product from './ProductCard.js';
import Loader from '../layout/Loader/loader';
import { useAlert } from 'react-alert';
import Working from './Working';
import styles from "./Hero.module.css";

function Home() {

    const alert = useAlert();
    const dispatch = useDispatch();
    

    const {loading , error , products } = useSelector((state)=>state.products )
  

    useEffect(()=>{
       
    if(error)
    {
        alert.error(error);

        dispatch(clearErrors())
    }
    
      
       dispatch(getProduct());
       

    },[dispatch , error, alert ])

    return ( 
        <Fragment>
            {loading ? (<Loader />):(

            <Fragment>
            <MetaData title="BurnCal"/>
            <div className="banner">
                <p className=' '>Welcome to BurnCal</p>
                <h1>Start Monitoring / Stop Bloating</h1>

                <a href="#container">
                
                <button
                //   onClick={scrollToContactUs}
                  className={
                    // 'font-thin rounded-sm bg-gradient-to-r from-[#4A99D3] to-[#00A1D3] p-4 my-6 text-xs text-white  ' +
                    styles.heroButton
                  }
                >
                  GET STARTED
                </button>
                </a>
            </div>

            <h2 className='homeHeading'>Nutrition Care Process</h2>

            <Working />

            {/* <div className="container" id="container">
                {products && products.map((product , i)=><Product product={product} key={i}/>)}
                
            </div> */}

        </Fragment>)}

        </Fragment>
     );
}

export default Home;