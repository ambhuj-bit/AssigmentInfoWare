import { GET_POST } from "../Constant";
const initialState={
	data:[
		
			{
			  "userId": 1,
			  "id": 1,
			  "image":"https://m.media-amazon.com/images/I/51YXG1bDM5L._SL1024_.jpg",
			  "title": "Apple iphone 168GB",
			  "description": "A14 Bionic, the fastest chip in a smartphone.An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
			 "mrp": "69000", 
			  "price":"55000",

			},
			{
				"userId": 2,
				"id": 2,
				"image":"data:image/jpeg;base64,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",
				"title": "Adidas Men's  Tennis Shoe",
				"description": "Sole: Rubber Closure: Lace-Up Shoe Width: Medium Adidas Men Tennis sports shoes",
			   "mrp": "4599", 
				"price":"3500",
  
			  },
			  {
				"userId": 3,
				"id": 3,
				"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDfb77ogQX3Y-dtHrP7sGtoflDsY7ISlaRQ&usqp=CAU",
				"title": "LOUIS MOINET",
				"description": "The machinery inside a watch that keeps things ticking is called the movement or a calibre. A synonym of size, the word ‘calibre’, first used as a watchmaking term in 1715, originally referred to the build of a watch movement—the layout, dimensions, shape and size of the wheels, barrels, bridges and so on. Today the word is a substitute for movement, the complete mechanism with the mainspring, escape wheel, bridges, gear train, and other components including the rotor in automatic watches. Calibres are either mechanical or quartz-based. While the latter are powered mostly by a battery, the former can either be manual winding, or self-would by an oscillating mass or rotor.",
			   "mrp": "  443700", 
				"price":"355243",
  
			  },
			  {
				"userId": 4,
				"id": 4,
				"image":"https://m.media-amazon.com/images/I/61aLHvHLjUS._SL1500_.jpg",
				"title": "JBL Wireless Headphone",
				"description": "JBL Club One by Harman Wireless Over-Ear True Adaptive Noise Cancelling Headphones with 40 mm Hi-Res Orange Graphene Drivers and JBL Pro Quality Sound, 45 Hours Playtime, Ambient Aware & Talkthru",
			   "mrp": "29999", 
				"price":"24999",
  
			  },
			  {
				"userId": 5,
				"id": 5,
				"image":"https://m.media-amazon.com/images/I/613a-3jtieL._SL1500_.jpg",
				"title": "Logitech  Wireless Mouse",
				"description": "Versatile: Compatible with iPadOS 13.1 or later* via Bluetooth, in addition to Windows 8, Windows 10 or later and MacOS 10.13 or later; *on the iPad, pointing, clicking and scrolling will be supported by enabling the Assistive Touch accessibility feature",
			   "mrp": "9455", 
				"price":"7599",
  
			  },
			  {
				"userId": 6,
				"id": 6,
				"image":"https://m.media-amazon.com/images/I/61A4tg5IFhL._AC_UY327_FMwebp_QL65_.jpg",
				"title": "Canon M50 Mark",
				"description": "In-camera YouTube live streaming for real-time video engagement Film vertical videos in 4K for social media Wireless connectivity with smartphone and cloud storage Vertical Vlogging Made Easy; Stay Steady and in Control Record in Stunning 4K Resolution; Stay in Focus All the Time; Ready, Touch, Action!",
			   "mrp": "59899", 
				"price":"51599",
  
			  },
			  {
				"userId": 7,
				"id": 7,
				"image":"https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg",
				"title": "Rich Dad Poor Dad",
				"description": "Best known as the author of Rich Dad Poor Dad―the #1 personal finance book of all time―Robert Kiyosaki has challenged and changed the way tens of millions of people around the world think about money. He is an entrepreneur, educator, and investor who believes that each of us has the power to makes changes in our lives, take control of our financial future, and live the rich life we deserve.",
			   "mrp": "330", 
				"price":"301",
  
			  },
			  {
				"userId": 8,
				"id": 8,
				"image":"https://images-eu.ssl-images-amazon.com/images/I/51kO6D7OO3L._SX300_SY300_QL70_FMwebp_.jpg",
				"title": "Multiple Frames Wall Art",
				"description": "High definition picture photo prints on canvas with vivid color on thick high quality canvas to create the look and feel of the original nature art and masterpiece. The canvas painting print is stretched on wooden framed to give original painting.The side margins are also printed to create a particularly decorative effect. Wall art panels and canvas paintings are the modern way to brighten the walls of your home, and relax you after work.",
			   "mrp": "7999", 
				"price":"3589",
  
			  },
			  {
				"userId": 9,
				"id": 9,
				"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZc8uUhD5myUUFZZbiIFbvWrNaIF3f8khdQ&usqp=CAU",
				"title": "Fully-Automatic Front Loading",
				"description": "Fully-automatic front load washing machine: best wash quality, energy and water efficient Energy Rating 5 Star: best in class efficiency.Door Opening Angle : 170 Deg Capacity 6.5 kg: Suitable for families with 3 to 4 members Warranty: 2 years on product, 10 years on motor (T&C) 1200 RPM: higher spin speeds helps in faster drying Washing programs: 14 basic washing programs and can be downloaded multiple",
			   "mrp": "43,490", 
				"price":"31,599",
  
			  },
			  {
				"userId": 10,
				"id": 10,
				"image":"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1469208/2016/9/8/11473315061778-Teakwood-LeathersBlack-Leather-Jacket-7501473315061770-1.jpg",
				"title": "Men Black Solid Leather Jacket",
				"description": "Black solid jacket, has a stand collar, 5 pockets, zip closure, long sleeves, straight hem, and faux fur lining",
			   "mrp": "5000", 
				"price":"3599",
  
			  },
			  {
				"userId": 11,
				"id": 11,
				"image":"https://m.media-amazon.com/images/I/712Dq7ABAyL._SL1500_.jpg",
				"title": "Classic Mosquito Net, Polyester",
				"description": "Classic Mosquito Net is easy to install and pop-ups instantly and automatically. The net are of generous size which can easily fit any bed size ranging from a king size, super king size ,queen size bed and single bed. The net has large zippers for easy entry and exit.",
			    "mrp": "2000", 
				"price":"890",
  
			  },
			  {
				"userId": 12,
				"id": 12,
				"image":"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SX522_.jpg",
				"title": "Lenovo IdeaPad Slim 3",
				"description": "‎Lenovo, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic & technology development area Hefei Anhui China LCFC（Hefei) Electronics Technology Co., Ltd. - NO.1-3188,YUNGU ROAD, HEFEI EXPORT PROCESSING ZONE. ANHUI PROVINCE,CHINA  Tech-Com(Shanghai) Computer Co Ltd - No.6 Ln.58,San-Zhuang Rd., Songjiang EPZ ShangHai, China Wistron InfoComm (Kunshan) Co.Ltd - 168# First Avenue, Kunshan Export Processing Zone, Kunshan, Jiangsu, China Compal information technology (kunshan) CO., LTD. - Address: No. 58, the 1st street, Kunshan Export Processing Zone, Jiangsu, P.R.O.C. CHINA Kunshan Hichain storage Co. Ltd - No. 88 Xinxiang Road  Avenue Kunshan CBZ Wujiang Hichain warehousing LTD - No.2088 Pangjin road, Wujiang economic development area,  Jiangsu, China",
			   "mrp": "50990", 
				"price":"37490",
  
			  }
	],

	post:{}
	
};


export default (state=initialState,action)=>{
	switch(action.type){
		case GET_POST:
      return {
        ...state,
        post: state.data.find((postItem) => postItem.id == action.payload),
      };
		default:
		return state;
	}
}