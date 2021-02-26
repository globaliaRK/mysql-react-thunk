import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import EmployeeTable from './components/EmployeeTable';
import { fetchDates } from "./actions";

import SelactionBox from './components/SelactionBox';



function App(props) {

  const [selectDate, setSelectDate] = useState("");
  const [dates, setDates] = useState([]);

  useEffect(() => {
    props.fetchDates(selectDate);
    setDates(props.dates);
  });

  useEffect(() => {
    props.fetchDates(selectDate);
  }, [selectDate]);


  return (
    <div>
      <div className="col-8 mx-auto">
        <SelactionBox values={dates} selectDate={selectDate} setSelectDate={setSelectDate} />
        <EmployeeTable value={dates} rows='1' columns="2" pageSize={5} checkboxSelection />
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    dates: state.dates
  }
}

export default connect(mapStateToProps, { fetchDates })(App);