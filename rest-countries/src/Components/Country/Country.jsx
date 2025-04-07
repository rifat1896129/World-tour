import { useState } from 'react';
import './country.css'
export default function Country({country}){

    const{name, capital, flags} = country;
    const[visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }



    // console.log(country)
    return(
        <div className="country">

            {/* <h3>Name: </h3> */}

            <h3>Country Name:{name.common}</h3>
            <p>Capital : {capital}</p>
            <img src={flags.png} alt="" srcset="" />
            <button onClick={handleVisited} >{visited ? 'Visited' :'jamu na'}</button>
            {visited ? 'Ami ei deshe gesi' : 'ami samne jamu'}

        </div>
    )
}