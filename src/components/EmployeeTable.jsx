import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Row from './Row';


export default function BasicTable({ value }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>Select Date</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Tasks Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {console.log(value)}
                    {value.map((row, i) => (
                        <Row key={i} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}