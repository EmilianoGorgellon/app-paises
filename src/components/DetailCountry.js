import React, {useState} from 'react'
import { Link } from "react-router-dom";
const DetailCountry = (props) => {
    const dataCountry = props.dataCountry;
    const getObjectValueName = props.getObjectValueName;
    const getObjectValueCurrencies = props.getObjectValueCurrencies;
    const getObjectValueLanguages = props.getObjectValueLanguages;

    const [render, setRender] = useState(false);

    const renderPage = () => render ? setRender(false) : setRender(true)

    return (
        <>
            <Link to="/"> Back </Link>
            {dataCountry.map((dato, i) => 
                <section key={i}>
                    <img src={dato.flags.svg} alt={dato.name.common}/>
                    <div>
                        <h2>{dato.name.common}</h2>
                        <div>
                            <p>
                                Native Name: {getObjectValueName[getObjectValueName.length-1].common} <br />
                                Population: {dato.population} <br />
                                Region: {dato.region} <br />
                                Sub Region: {dato.subregion} <br />
                                Capital: {dato.capital[0]}
                            </p>
                            <p>
                                Top Level Domain: {dato.tld[0]} <br />
                                Currencies: {getObjectValueCurrencies[getObjectValueCurrencies.length-1].name} <br />
                                Languages: {getObjectValueLanguages.join(", ")}
                            </p>
                            <Link to={`/name/paraguay`}>Paraguay</Link>
                        </div>
                        <p>Border Countries: </p>
                            {dato.borders.map((data, i) => 
                                <div key={i}>
                                    <Link to={`/alpha/${data}`} onClick={renderPage}>{data}</Link> <br />
                                </div>
                            )}
                    </div>
                </section>
            )}
        </>
    )
}

export default DetailCountry;
