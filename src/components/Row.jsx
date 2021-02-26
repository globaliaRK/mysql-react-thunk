import React, { useState } from 'react';
import { Box, Collapse, IconButton, makeStyles, TableCell, Table, TableBody, TableHead, TableRow, Typography } from '@material-ui/core';

import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    console.log(row);
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.date}</TableCell>
                <TableCell component="th" scope="row">{row.employeeDetails.length}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">Task Details</Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Employee ID</TableCell>
                                        <TableCell align="center">Task ID</TableCell>
                                        <TableCell align="center">Employee Name</TableCell>
                                        <TableCell align="center">Employee Status</TableCell>
                                        <TableCell align="center">Task Details</TableCell>
                                        <TableCell align="center">Task Assign Date (YYYY-MM-DD)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        row.employeeDetails.map((details, i) => details.employeeDetails.map((detail, i) => {
                                            if (details.tid !== null) {
                                                return (
                                                    < TableRow key={i} >
                                                        {console.log(detail)}
                                                        <TableCell align="center" component="th" scope="row">{detail.eid}</TableCell>

                                                        <TableCell children="node" align="center">{details.tid}</TableCell>
                                                        <TableCell align="center">{detail.ename}</TableCell>
                                                        <TableCell align="center">{detail.activestatus}</TableCell>
                                                        <TableCell align="center">{details.tdetail}</TableCell>
                                                        <TableCell align="center" align="center">{details.tassigndate.split('T')[0]}</TableCell>
                                                    </TableRow>
                                                );
                                            }
                                        }))
                                    }
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}

// {
//     "tid": 1,
//     "tdetail": "its urgunt...!",
//     "tassigndate": "2021-02-22T00:00:00.000Z",
//     "employeeDetails": [
//       {
//         "eid": 1,
//         "ename": "rutvik",
//         "activestatus": "active"
//       }
//     ]
//   },