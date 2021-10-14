import { useContext, useEffect } from "react";
import HomeContext from "../context/Home/HomeContext";
import DetailCountry from "./DetailCountry";
const CountrySelectedAlpha = () => {
    const { getData, dataJson, FunctionCountrySelected } = useContext(HomeContext);
    let getObjectValueName;
    let getObjectValueCurrencies;
    let getObjectValueLanguages;

    useEffect(() => {
        getData();
    }, [])
    
    const url = window.location.pathname;
    const urlArray = url.split("/");
    const countryFilter = dataJson.filter(dato => dato.cca3.toLowerCase() === urlArray[urlArray.length-1].toLowerCase())
    if (countryFilter.length !== 0) {
        getObjectValueName = Object.values(countryFilter.map(dato => dato.name.nativeName)[0]);
        getObjectValueCurrencies = Object.values(countryFilter.map(dato => dato.currencies)[0]);
        getObjectValueLanguages = Object.values(countryFilter.map(dato => dato.languages)[0]);
    }

    return (
        <main>
            <DetailCountry dataCountry={countryFilter} getObjectValueName={getObjectValueName} getObjectValueCurrencies={getObjectValueCurrencies} getObjectValueLanguages={getObjectValueLanguages}  />
        </main>
    )
}

export default CountrySelectedAlpha;
