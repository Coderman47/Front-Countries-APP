import axios, { AxiosError } from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_DETAIL = "GET_DETAIL";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


export function getAllCountries() {
  return async function (dispatch) {
    // const allCountries = await axios.get("https://api-countries-i4ox.onrender.com/countries");
    const allCountries = await axios.get("http://localhost:3001/countries");
    return dispatch({ type: GET_ALL_COUNTRIES, payload: allCountries.data });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    // const json = await axios.get(`https://api-countries-i4ox.onrender.com/countries/${id}`);
    const json = await axios.get(`http://localhost:3001/countries/${id}`);

    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

export function getNameCountry(input) {
  return async function (dispatch) {
    
    try {
      // let response = await axios.get(
      //   "https://api-countries-i4ox.onrender.com/countries?name=" + input
      // );
      let response = await axios.get(
        "http://localhost:3001/countries?name=" + input
      );

      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
        
      });
    } catch (error) {
      console.log(error.message);
      
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    
    // const info = await axios.get("https://api-countries-i4ox.onrender.com/activities");
    const info = await axios.get("http://localhost:3001/activities");
    // console.log("QYE ONDA",info)
    if(info.data.length > 0){
      return dispatch({
        type: GET_ACTIVITIES,
        payload: info.data,
      });
    }
  };
}

export function createActivity(payload) {
  return async function (dispatch) {
    try {

      // const json = await axios.post(
      //   "https://api-countries-i4ox.onrender.com/activities",
      //   payload
      // );

      const json = await axios.post(
        "http://localhost:3001/activities",
        payload
      );
      return dispatch({ type: CREATE_ACTIVITY, payload: payload });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCountriesByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function filterActivity(payload) {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
}

export function setCurrentPage(payload) {
return {
  type: SET_CURRENT_PAGE,
    payload,
  };
}




