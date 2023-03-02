import axios from "axios";

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
    const allCountries = await axios.get("https://client-countries.onrender.com/countries");
    return dispatch({ type: GET_ALL_COUNTRIES, payload: allCountries.data });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`https://client-countries.onrender.com/countries/${id}`);

    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

export function getNameCountry(input) {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        "https://client-countries.onrender.com/countries?name=" + input
      );
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);

    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    
    const info = await axios.get("https://client-countries.onrender.com/activities");

    return dispatch({
      type: GET_ACTIVITIES,
      payload: info.data,
    });
  };
}

export function createActivity(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(
        "https://client-countries.onrender.com/activities",
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




