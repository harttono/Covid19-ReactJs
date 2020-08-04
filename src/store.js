import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { listCountriesReducer, listCountryReducer, detailsCountryReducer } from "./reducers/CountriesReducer";


const reducers = combineReducers({
    listCountries:listCountriesReducer,
    listCountry:listCountryReducer,
    detailCountry:detailsCountryReducer
})

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const store = createStore(reducers,composeEnhancer(applyMiddleware(thunk)));
export default store;