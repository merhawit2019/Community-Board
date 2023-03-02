import React from "react";



const Card = (props) => {
    return (
        <div class="Card">
            <img className="Truck" src={props.imageSrc}/>
            <h3>{props.name}</h3>
            <h4>{props.nationality}</h4>
            <button>View Menu</button>
            

            {/* <img className="Truck" src="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"/>
            <h3>'Birria-Landia'</h3>
            <h4>'Mexican' </h4>
            <button>View Menu</button> */}

        </div>

            

     
        
    )
} 
export default Card;