import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import CountrySelected from "./components/CountrySelected";
import CountrySelectedAlpha from "./components/CountrySelectedAlpha";
import { useContext } from "react";
import HomeContext from "./context/Home/HomeContext";
import "./app.scss";
const App = () => {
  const {switchTheme} = useContext(HomeContext)
  return (
    <div>
      <Header />
      <Switch>
        
        <Route path={`/alpha/*`}><CountrySelectedAlpha /></Route>

        <Route path={`/name/*`}><CountrySelected /></Route>

        <Route exact path='/'><Home /></Route>

        <Route path="*">
          <main className={switchTheme ? "container--main-countryDetail ligth-theme-elements" : "container--main-countryDetail dark-theme-elements"}>
            <h2 className={switchTheme ? "error-title ligth-theme-elements" : "error-title dark-theme-elements"}>Error 404 not found</h2>
          </main>
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
