import './Products.css';
import {useSelector , useDispatch} from 'react-redux';
import {getProduct , clearErrors} from '../../actions/productActions';
import {Fragment , useEffect, useState } from 'react'
import ProductCard from '../Home/ProductCard';
import {useParams} from 'react-router-dom';
import Pagination from 'react-js-pagination' ;
import Slider from '@material-ui/core/Slider';
import {useAlert} from 'react-alert';

import Typography from '@mui/material/Typography';


import Loader from '../layout/Loader/loader';
import MetaData from '../layout/metaData';

const categories = ["Laptop" , "Footwear" , "Bottom" , "Tops" , "Attire" , "Camera" , "Smartphones"];


function Products() {

    const dispatch = useDispatch();
    const alert = useAlert();


    const [currentPage ,setCurrentPage] = useState(1);
    const [price , setPrice]= useState([0,1000]);
    const [category , setCategory] = useState("");
    const [ratings , setRatings] = useState(0)


    
    const {keyword}=useParams();



    const {loading , error ,products , productsCount ,resultPerPage } = useSelector((state)=>state.products);
   
    


    const setCurrentPageNo=(e)=>{
        setCurrentPage(e)
        
    }
    
    const priceHandler=(event , newPrice)=>{
        setPrice(newPrice)
    }
    


   useEffect(()=>{

    if(error){

        alert.error(error)
        dispatch(clearErrors())
    }

    dispatch(getProduct(keyword ,currentPage , price ,category , ratings))

   },[dispatch , keyword , currentPage , price , category , ratings , alert ,error]) 

   
 

    return ( 
        <Fragment>
            {loading ? <Loader />:(
            <Fragment> 
                <MetaData title = "Products -- Ecommerce" />
                <h2 className='homeHeading'>Get fit with some yoga tips..</h2>

                <div className='productsHead border-2 m-10 '>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/klmBssEYkdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/RJ44oIxWiYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/0vDs2fnq8ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/YjmQVMLhNT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/IT94xC35u6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="350" height="315" src="https://www.youtube.com/embed/0XBcrjkkwQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </Fragment>)}
        </Fragment>
     );
}

export default Products;