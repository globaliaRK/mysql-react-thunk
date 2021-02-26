import { FormControl, InputLabel, makeStyles, Select } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const SelactionBox = ({ selectDate, setSelectDate, values }) => {

    const classes = useStyles();


    const options = (values) => values.map((value, i) => {
        console.log(value, i);
        return <option value={value.date} >{value.date}</option>;
    });


    return (

        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Select Dates :- </InputLabel>
            <Select
                native
                value={selectDate}
                onChange={(event) => setSelectDate(event.target.value)}
                inputProps={{
                    name: 'date',
                    id: 'age-native-simple',
                }}
            >
                <option value="all" selected>All Records</option>
                {options(values)}
            </Select>
        </FormControl>
    );
};

export default SelactionBox;