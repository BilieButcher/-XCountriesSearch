
import React from "react";




const Card = ({flag, name}) => {
    return(
        <>
        <div className="countryCard"
        style={{
            width:"200px",
            height:"200px",
            border:"1px solid black",
            borderRadius:"8px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"10px",
            padding:"10px",
            flexDirection:"column",
            textAlign:"center"

        }}
        >
            <img src={flag} alt={name} style={{width:"100px", height:"100px"}}/>
            <h2>{name}</h2>
        </div>
        </>
    );
}

export default Card;