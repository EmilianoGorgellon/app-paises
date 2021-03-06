import { useContext, useState } from "react";
import HomeContext from "../context/Home/HomeContext";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
const HomeCountry = (props) => {
    const { switchTheme } = useContext(HomeContext)
    const datos = props.datos;
    const [quantityProduct, setQuantityProducts] = useState(12);
    let heigthScreen;
    let scroll;
    let maxScrollDown;

    window.onscroll = () => {
        heigthScreen = window.innerHeight;
        scroll = document.documentElement.scrollTop;
        maxScrollDown = document.documentElement.offsetHeight;
        if (heigthScreen + scroll === maxScrollDown) return setQuantityProducts(quantityProduct + 10)
    }

    return (

        datos.map((data, i) => {
            if (i < quantityProduct) {
                return (
                    <Fade left key={i}>
                        <article className={switchTheme ? "container--all-country ligth-theme-elements" : "container--all-country dark-theme-elements"} >
                            <Link to={`/name/${data.name.common}`} className="container--card-link">
                                <img className="all--country-img" src={data.flags.svg} alt={data.name} />
                                <h2 className={switchTheme ? "all--country-name ligth-theme-elements" : "all--country-name dark-theme-elements"} >{data.name.common}</h2>
                                <p className={switchTheme ? "all--country-description ligth-theme-elements" : "all--country-description dark-theme-elements"}>
                                    Population: <span className="text-span">{data.population} </span><br />
                                    Region: <span className="text-span">{data.region} </span><br />
                                    Capital: <span className="text-span">{data.capital} </span>
                                </p>
                            </Link>
                        </article>
                    </Fade>
                )
            }
        }

        )
    )
}

export default HomeCountry;