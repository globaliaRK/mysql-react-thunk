import _ from 'lodash'
import employeeAPI from './../api/employeeAPI.js'

export const fetchDates = (date) => dispatch => _fetchDates(date, dispatch);


const _fetchDates = _.memoize(async (date, dispatch) => {

    console.log(date);
    const { data } = await employeeAPI.get("", { params: { date } });

    dispatch({ type: "FETCH_DATES", payload: data });
});