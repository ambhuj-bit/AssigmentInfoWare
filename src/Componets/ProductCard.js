import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";


function ProductCard({ postData }) {
 
  const { id, image, title, mrp, price } = postData;
  return (

    

    <div className="Card-container">
     
      
        <div className="Cards">
        
          <div className="image">
          <Link to={`/Detail/${id}`}>
              <img src={image} />
           </Link>
            <div class="detail">
               <div className="title">
                   <h5 className="h5">{title}</h5>
               </div>
                  <div className="price">
                    <p>
                         MRP : Rs <span className="disc">{mrp}</span>{" "}
                   </p>
                   <p>Price : Rs {price} </p>
               </div>
          </div>
          </div>
          

          
      
      </div>

</div>
  );
}

export default ProductCard;
