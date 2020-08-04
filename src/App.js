import React,{useEffect} from 'react';
import './App.css';
import DisplayData from './components/displayData';
import About from "./components/About";
import {getCountries,getCountry,getDetailCountry} from "./actions/countriesAction"
import {useSelector,useDispatch} from "react-redux";
import {BrowserRouter as Router,Route,Link } from "react-router-dom"
function App(){
  const listCountries = useSelector(state => state.listCountries)
  const { countries,success} = listCountries;
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getCountries())
    return () => {
    }
  }, [])
  const takeData = (data) =>{
    dispatch(getCountry(data))
    dispatch(getDetailCountry(data))
  }
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
    return (
      <Router>
      <div className="grid-container">
        <header className="header">
          <div className="wrapper">
            <div className="sideMenu">
              <button onClick={openMenu}>&#9776;</button>
              <h1><Link to="/">Coronavirus Disease (COVID-19) Update (Live)</Link> | 2020</h1>
            </div>
            <select onChange={(e) => takeData(e.target.value)}>
            { success ? countries.map( ({id,name}) => <option value={name} key={id}>{name}</option>):"No Data"}
            </select>
          </div>
        </header>
        <aside className="sidebar">
            <button className="close-menu" onClick={closeMenu}>x</button>
            <div>
               <div>
                  <div><img src="images/hart.jpg"></img></div>
                  <div>Suhartono</div>
                  <div><Link to="/about" >Covid-19 App</Link></div>
               </div>
            </div>
        </aside>
        <main className="main">
           <Route path="/" exact component={DisplayData}/>
           <Route path="/about" component={About}/>
        </main>
        <footer className="footer">&copy;By Hartono</footer>
      </div>
    </Router>
    );
}

export default App;
