import Card from "react-bootstrap/Card";
import React, { useContext, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom'
import useFetch from '../CustomHook/useFetch'
import { ToastContainer, toast } from 'react-toastify';
import CartContext from "../Context/CartContext";

const SingleProduct = () => {
  const {handleAddToCart} = useContext(CartContext )
    const {id} = useParams()
    const {data,laoding} = useFetch(`https://fakestoreapi.com/products/${id}`)
    console.log(id);
    const {title,price,image,description} = data;
    useEffect(()=>{
      document.title = `product | ${title}`
    }

    )

    const notify = () => {
      toast("An item has been added",{
        position:toast.POSITION.TOP_CENTER
      })};


  return (
    <div className='container'>
    <h2>{laoding && <ClipLoader color={"red"}  size={50}/>}</h2>
    <div className="row justify-content-between align-items-center mt-5">
        
        <div className="col-sm-12 text-center col-md-4">
        <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={image} className="img-fluid " />
          </Card>
        </div>

        <div className="col-sm-12 col-md-7">
            <h1 className="text-danger fw-bold">{title}</h1>
            <h4 className="text-success lh-base">{description} </h4>
            <h3>${price}</h3>
            <button onClick={()=>{handleAddToCart(data);notify()}} className="btn btn-primary w-50 fs-3">add to cart</button>
            <ToastContainer/>
        </div>
        {/* <div className="">
       
        </div> */}
        
    </div>
   
        </div>
  );
};

export default SingleProduct