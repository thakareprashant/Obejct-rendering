import React from 'react'
import data from '../Data/DataObject'
import './Home.css'
const Home = () => {
  return (
    <>
    
     
         
          
           <div className='product-container'>
           {
        data.map((ele)=>{
            return(
            <div className='product-detail'>
               <img src={ele.productImage}
                   className='product-image'
                   alt='product-images'
               />
               <div className='product-name'>{ele.productName}</div>
               </div>
            )
            
        })
    }
    


         


      </div>


    </>
  )
}

export default Home