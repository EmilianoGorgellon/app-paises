import React, {useEffect, useState, useContext, useRef} from "react";
import HomeContext from "../context/Home/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HomeCountry from "./HomeCountry";
import { Fade } from "react-reveal"
const Home = () => {
    const { switchTheme, getData, dataJson } = useContext(HomeContext);
    const regionRef = useRef();
    const searchRef = useRef();
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    let filterCountry;
    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])
    const handleChanged = () => {
        setRegion(regionRef.current.value);
        setSearch(searchRef.current.value.toLowerCase());
    }

    if (region !== "" || search !== "") {
        const regionCountry = dataJson.filter(dato => dato.region === region);
        const filterRegionSearch = region !== "" ? regionCountry.filter(dato => dato.name.common.toLowerCase().includes(search)) : dataJson.filter(dato => dato.name.common.toLowerCase().includes(search))
        filterCountry = filterRegionSearch;
    } 

    return (
        <main className={switchTheme ? "container--main ligth-theme-main" : "container--main dark-theme-main"}>
            <Fade right>
                <div className="container--main-filters">
                    <div className="container--main-filters-input">
                        <input onKeyUp={handleChanged} ref={searchRef} className={switchTheme ? "main--filters-input ligth-theme-elements" : "main--filters-input dark-theme-elements"} type="text" placeholder="Search for a country..." />
                        <FontAwesomeIcon icon={faSearch} className="icon--search" />
                    </div>
                    <select ref={regionRef} className={switchTheme ? "main--filters-select ligth-theme-elements" : "main--filters-select dark-theme-elements"} onChange={handleChanged} >
                        <option value="">Filter by region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </Fade>
            <section className={switchTheme ? "container--countrys ligth-theme-main" : "container--countrys dark-theme-main"}>
            {filterCountry !== undefined ? 
                <HomeCountry datos={filterCountry} />
                    : 
                <HomeCountry datos={dataJson} />
            }
            </section>
        </main>
    )
}
export default Home;