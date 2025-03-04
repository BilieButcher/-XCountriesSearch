import {React, useEffect, useState } from "react"
import axios from 'axios';

import Card from "./Card";








const Countries = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
            setCountry(response.data);
        }catch(error){
            console.error(error.response);
        }
    }

   

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <div>
            <div  style={{height:"50px", border:"1px solid black", padding:"5px", paddingTop:"0px", marginBottom:"10px", background:"rgb(248,248,248)"}}>
           <input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Search for countries..." style={{width:"400px", height:"40px", borderRadius:"5px", margin:"4px"}}></input>
           </div>
            <div  style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
            {country
  .filter((index) => search === "" || index.common.toLowerCase().includes(search.toLowerCase()))
  .map((index) => (
    <Card key={index.common} flag={index.png} name={index.common} />
  ))}
           </div>

        </div>
    )
}
export default Countries;