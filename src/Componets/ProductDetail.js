import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPost } from "../Services/Actions/action";
import "./ProductDetail.css";
import Slider from "./Slider";

function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.post.post);
  const { id } = useParams();
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    dispatch(getPost(id));
  };

  console.log(product);

  
    
  return (

    <div>
    <div className="main-detail">
    
      <div className="detailcontainer">
        <img
          src={product.image}
          alt="card"
        />
      </div>
      <div className="detail-card">
        <h2>{product.title}</h2>
        <p>
          MRP : Rs <span className="disc">{product.mrp}</span>{" "}
        </p>
        <p>Price : Rs {product.price}</p>
        <h3>Description</h3>
        <div className="description"> <p>{product.description}</p></div>
        

        <div className="buy-botton">
          <button className="cart">
            <i class="fas fa-shopping-cart"></i> ADD TO CART
          </button>
          <button className="buy">
            <i class="fas fa-shopping-bag"></i> BUY NOW
          </button>
        </div>
      </div>
      
    </div>
      <Slider/>
    </div>
    
    
  );
}

export default ProductDetail;
