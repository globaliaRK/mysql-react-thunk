import _ from 'lodash'
import employeeAPI from './../api/employeeAPI.js'

export const fetchDates = (date) => dispatch => _fetchDates(date, dispatch);


const _fetchDates = _.memoize(async (date, dispatch) => {


    const { data } = await employeeAPI.get();
    dispatch({ type: "FETCH_DATES", payload: data });
});