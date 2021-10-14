import { useContext } from "react";
import HomeContext from "./context/Home/HomeContext";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import CountrySelected from "./components/CountrySelected";
import CountrySelectedAlpha from "./components/CountrySelectedAlpha";
import "./app.scss";
const App = () => {
  const {countrySelected} = useContext(HomeContext);
  console.log(countrySelected[1])
  return (
    <div>
      <Header />
      <Switch>
        
        <Route path={`/alpha/*`}><CountrySelectedAlpha /></Route>

        <Route path={`/name/*`}><CountrySelected /></Route>

        <Route exact path='/'><Home /></Route>

        <Route path="*">
          <h1>Error 404 not found</h1>
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
