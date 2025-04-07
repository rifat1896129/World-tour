import './country.css'
export default function Country({country}){

    const{name, capital, flags} = country;

    // console.log(country)
    return(
        <div className="country">

            {/* <h3>Name: </h3> */}

            <h3>Country Name:{name.common}</h3>
            <p>Capital : {capital}</p>
            <img src={flags.png} alt="" srcset="" />

        </div>
    )
}