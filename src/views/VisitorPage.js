import React from 'react';
import TableVisitors from '../components/TableVisitors';
import BarChartVisitors from "../components/BarChartVisitors";
import data from '../data'

export const VisitorPage = () => {
    return (
      <div className="visitor-style">
        <div>
      <TableVisitors visitors={data.visitors}/>
      </div>
      <div className="graph-style-users">
        <div className="graph-users">
          <BarChartVisitors
            visitorNames={data.visitors.map((visitor) => {
              return visitor.first_name + " " + visitor.visitor_name;
            })}
            numberOfConnections={data.visitors.map((visitor) => {
              return visitor.number_of_log_this_month;
            })}
            numberOfArticles={data.visitors.map((visitor) => {
              return visitor.number_of_articles_view;
            })}
          />
        </div>
        
        </div>
        </div>
    )
}
export default VisitorPage;