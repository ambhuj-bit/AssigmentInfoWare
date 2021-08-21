import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'


function Product() {
	const data = useSelector((state)=>state.post.data)
	return (
		<div className="row">
 
 
			{data.map((postData)=>(
				<ProductCard postData={postData} key={postData.id}/>
			))}
		</div>

		
	)
}

export default Product
