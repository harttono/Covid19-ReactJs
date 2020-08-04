import { GET_LIST_COUNTRIES_REQUEST, GET_LIST_COUNTRIES_SUCCESS, GET_LIST_COUNTRIES_FAIL, GET_LIST_COUNTRY_REQUEST, GET_LIST_COUNTRY_SUCCESS, GET_LIST_COUNTRY_FAIL, GET_DETAILS_COUNTRY_REQUEST, GET_DETAILS_COUNTRY_SUCCESS, GET_DETAILS_COUNTRY_FAIL } from "../constants/countries"
import axios from "axios";
const getCountries = () => async(dispatch) =>{
    try{
        dispatch({type:GET_LIST_COUNTRIES_REQUEST});
        const {data} = await axios.get('https://restcountries.eu/rest/v2/all');
        dispatch({type:GET_LIST_COUNTRIES_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:GET_LIST_COUNTRIES_FAIL,payload:error.message})
    }
}
const getCountry = (country) => async(dispatch) =>{
    try{
       dispatch({type:GET_LIST_COUNTRY_REQUEST});
       const {data} = await axios.get("https://covid-193.p.rapidapi.com/statistics",
       {
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-193.p.rapidapi.com",
            "x-rapidapi-key":"f013150dafmsh52009ecad438b97p10a3f7jsnf917354a99e7",
            "useQueryString":true
            },"params":{
            "country":`${country}`
            }
       })
       dispatch({type:GET_LIST_COUNTRY_SUCCESS,payload:data.response})
    }catch(error){
       dispatch({type:GET_LIST_COUNTRY_FAIL,payload:error.message})
    }
}
const getDetailCountry = (country) => async (dispatch) =>{
   try{
        dispatch({type:GET_DETAILS_COUNTRY_REQUEST,payload:country});
        const {data} = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
        dispatch({type:GET_DETAILS_COUNTRY_SUCCESS,payload:data})
   }catch(error){
       dispatch({type:GET_DETAILS_COUNTRY_FAIL,payload:error.message})
   }

}
export {getCountries,getCountry,getDetailCountry}