
import React from 'react'
import "./Footer.css"
function Footer() {
	return (
		<footer class="footer-body">
		 <div className="footer-container">
			 <div className="footer-row">
				 <div className="footer-column">
					 <h4>COMPANY</h4>
					 <ul>
						 <li><a >Shipping</a></li>
						 <li><a >Return Policy</a></li>
						 <li><a >Work With Us</a></li>
						 <li><a >Terms & Conditions</a></li>
                	 </ul>
				 </div>

				 <div className="footer-column">
					 <h4>FOLLOW US ON OUT THERE</h4>
					
					 <ul className="list">
						 <li><i class="fab fa-facebook-square " > Facebook</i></li>
						 <li><i class="fab fa-twitter-square">  Twitter</i></li>
						 <li><i class="fab fa-pinterest-square"> Pinterest</i></li>
						 <li><i class="fab fa-instagram"> Instagram</i></li>
                	 </ul>
				 </div>
				 <div className="footer-column">
					 <h4>THANK YOU</h4>
					 <p>Thank you for giving me this opportunity to join the Infoware on behalf of this project. i am glad if my project would be consider.</p>
				 </div>

				 <div className="footer-column">
					 <h4>NEWS LETTER</h4>

					 <input type="input" placeholder=" Infoware@gmail.com " className="input"/><input type="submit" className="button"/>					 
				 </div>
			 </div>
		 </div>

		</footer>
	)
}

export default Footer
