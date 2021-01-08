import React from 'react';
import TableLogs from '../components/TableLogs';
import data from '../data';


export const LogsPage = () => {
    return (
   <TableLogs logs={data.logs}/>
    )
}
export default LogsPage;