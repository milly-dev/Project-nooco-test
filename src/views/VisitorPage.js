import React from 'react';
import TableVisitors from '../components/TableVisitors';
import data from '../data'

export const VisitorPage = () => {
    return (
      <TableVisitors visitors={data.visitors}/>
    )
}
export default VisitorPage;