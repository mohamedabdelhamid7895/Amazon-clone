import Product from './Product'
import"./Home.css";

function Home() {
   
    return(
    <div className="home">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
         alt="Banner" 
         className="home__image"/>

         <div className="home__row">
            <Product 
                id="15645"
                title="Shop by Category"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                price={451}
            />
            <Product 
                id="15645"
                title="Electronics"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                price={925}
            />
            <Product 
                id="15645"
                title="Shop top categories"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                price={336}
            />
         </div>
         <div className="home__row">
         <Product 
                id="15645"
                title="Computers & Accessories"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            
                price={545}
                />
            <Product 
                id="15645"
                title="Beauty picks"

                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                price={458}
            />
            <Product 
                id="15645"
                title="Deals & Promotions"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
                price={58}
                />
            <Product 
                id="15645"
                title="Explore home bedding"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
                price={264}
                />
         </div>
         <div className="home__row">
         <Product 
                id="156"
                title="Create with strip lights"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                price={11.96}
            />
         </div>
         <div className="home__row">
            <h2 >Discover Amazon</h2>
          </div>


        <div className="home__row hidden">
          
            <Product 
                id="1"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
                />
                <Product 
                id="1"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg"
                />
                <Product 
                id="1"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg"
                
                />
                <Product 
                id="1"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg"
               
                />
                <Product 
                id="1"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg"
            
                /> 

                <Product 
                id="1"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg"
                
                />
            
         </div>

         
    </div>

    )}




export default Home
