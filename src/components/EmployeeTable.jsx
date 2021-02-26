import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function BasicTable({ value }) {
    const classes = useStyles();

    const employeeDetails = (employeeDetails) => employeeDetails.map((detail) => {
        return (
            <React.Fragment>
                <TableCell align="center">{detail.eid}</TableCell>
                <TableCell align="center">{detail.ename}</TableCell>
                <TableCell align="center">{detail.activestatus}</TableCell>
            </React.Fragment>
        )
    });

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Task ID</TableCell>
                        <TableCell align="center">Employee ID</TableCell>
                        <TableCell align="center">Employee Name</TableCell>
                        <TableCell align="center">Employee Status</TableCell>
                        <TableCell align="center">Task Details</TableCell>
                        <TableCell align="center">Task Assigndate (YYYY-MM-DD)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.map((row) => {
                        return row.employeeDetails.map((detail, i) => {
                            console.log(detail);
                            if (detail.tid !== null) {
                                return (
                                    <React.Fragment>
                                        <TableRow key={i}>
                                            <TableCell align="center">{detail.tid}</TableCell>
                                            <TableCell align="center">{detail.tdetail}</TableCell>
                                            <TableCell align="center">{detail.tassigndate.split('T')[0]}</TableCell>
                                        </TableRow>
                                        {detail.employeeDetails === [] ? employeeDetails(detail) : ""}
                                    </React.Fragment>

                                )
                            }
                        })
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}