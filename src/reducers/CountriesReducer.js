const { GET_LIST_COUNTRIES_REQUEST, GET_LIST_COUNTRIES_SUCCESS, GET_LIST_COUNTRIES_FAIL, GET_LIST_COUNTRY_REQUEST, GET_LIST_COUNTRY_SUCCESS, GET_LIST_COUNTRY_FAIL, GET_DETAILS_COUNTRY_REQUEST, GET_DETAILS_COUNTRY_SUCCESS, GET_DETAILS_COUNTRY_FAIL } = require("../constants/countries");
function listCountriesReducer(state={countries:[]},action){
    switch(action.type){
        case GET_LIST_COUNTRIES_REQUEST:
            return{
                loading:true
            }
        case GET_LIST_COUNTRIES_SUCCESS:
            return{
                loading:false,
                countries:action.payload,
                success:true
            } 
        case GET_LIST_COUNTRIES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default: return state;      
    }       
}
function listCountryReducer(state={country:[]},action){
    switch(action.type){
        case GET_LIST_COUNTRY_REQUEST:
            return{
                loading:true
            }
        case GET_LIST_COUNTRY_SUCCESS:
            return{
                loading:false,
                country:action.payload,
                success:true
            }
        case GET_LIST_COUNTRY_FAIL:
            return{
                loading:false,
                error:action.payload,   
            }
        default: return state;
    }
}
function detailsCountryReducer(state={detail:[]},action){
    switch(action.type){
        case GET_DETAILS_COUNTRY_REQUEST:
            return{
                loading:true
            }
        case GET_DETAILS_COUNTRY_SUCCESS:
            return{
                detail:action.payload,
                success:true
            }
        case GET_DETAILS_COUNTRY_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default : return state;
    }
}
export {listCountriesReducer,listCountryReducer,detailsCountryReducer}