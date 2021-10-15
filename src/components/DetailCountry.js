import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import HomeContext from '../context/Home/HomeContext';
const DetailCountry = (props) => {
    const dataCountry = props.dataCountry;
    const getObjectValueName = props.getObjectValueName;
    const getObjectValueCurrencies = props.getObjectValueCurrencies;
    const getObjectValueLanguages = props.getObjectValueLanguages;

    const {RenderPage, switchTheme} = useContext(HomeContext)

    const renderPage = () => RenderPage()

    return (
        <div className={switchTheme ? "container--card-detailCountry ligth-theme-main" : "container--card-detailCountry dark-theme-main"}>
            <Link to="/" className={switchTheme ? "link-back ligth-theme-elements" : "link-back dark-theme-elements"}><FontAwesomeIcon icon={faLongArrowAltLeft} />   Back</Link>
            {dataCountry.length !== 0 ? dataCountry.map((dato, i) => 
                <section key={i} className="card--detailCountry">
                    <img src={dato.flags.svg} alt={dato.name.common} className="card--detailCountry-img"/>
                    <div className="container--card-description">
                        <h2 className="card--detailCountry-title">{dato.name.common}</h2>
                        <div className="card--detailCountry-descriptions">
                            <p className="detailCountry-description">
                                Native Name: <span className="detailCountry--description-span">{getObjectValueName[getObjectValueName.length-1].common ? getObjectValueName[getObjectValueName.length-1].common : "No data"}</span> <br />
                                Population: <span className="detailCountry--description-span">{dato.population}</span> <br />
                                Region: <span className="detailCountry--description-span">{dato.region}</span> <br />
                                Sub Region: <span className="detailCountry--description-span">{dato.subregion}</span> <br />
                                Capital: <span className="detailCountry--description-span">{dato.capital ? dato.capital[0] : "No data"} </span>
                            </p>
                            <p className="detailCountry-description">
                                Top Level Domain: <span className="detailCountry--description-span">{dato.tld ? dato.tld[0] : "No data"}</span> <br />
                                Currencies: <span className="detailCountry--description-span">{getObjectValueCurrencies[getObjectValueCurrencies.length-1].name ? getObjectValueCurrencies[getObjectValueCurrencies.length-1].name : "No data"}</span> <br />
                                Languages: <span className="detailCountry--description-span">{getObjectValueLanguages ? getObjectValueLanguages.join(", ") : "No data"}</span>
                            </p>
                        </div>
                        {dato.borders ? 
                            <>
                                <p className="card--detailCountry-borders">Border Countries: </p>
                                <div className="borders--container-links">
                                    {dato.borders.map((data, i) => 
                                        <Link className={switchTheme ? "border-links ligth-theme-elements" : "border-links dark-theme-elements"} key={i} to={`/alpha/${data}`} onClick={renderPage}>{data}</Link> 
                                    )}
                                </div>
                            </>
                            : null    
                        }
                    </div>
                </section>
            ) : <h1 className={switchTheme ? "error-title ligth-theme-elements" : "error-title dark-theme-elements"}>Error, no data was found for this country</h1>}
        </div>
    )
}

export default DetailCountry;
