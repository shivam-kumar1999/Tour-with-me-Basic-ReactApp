import { useState } from "react";


function Card({id, image,info,price,name, removeTour}){

    const [readmore, setReadmore]= useState(false)

    function readmoreHandler(){
        return(
            setReadmore(!readmore)
        )
    }


   


    const discription= readmore?info:`${info.substring(0,200)}....`;
      
   

    return(
        <div className="card">

            <img src={image} alt="" className="image" />

           <div className="tour-info"> 

              <div className="tour-detail">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>

              </div>

              <div className="discription">
                     {discription}
                     <span className="readmore" onClick={readmoreHandler}>
                        {readmore ? 'showless': 'readmore'}
                     </span>
              </div>

             </div>
                  
                  <button onClick={()=>{removeTour(id)}}  className="btn-red">Not Intrested</button>

             </div>
        
    )
}

export default Card;