import React from 'react';
import data from '../data';
import BarChartVisitors from '../components/BarChartVisitors';
import BarChartLogs from '../components/BarChartLogs';


export const Graphics = () => {
    return (
        <div>
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

      <BarChartLogs consultationDates={data.logs.map((log) => {
        return log.date_of_clic;
    })} 
    timeViewing={data.logs.map((log) => {
        return log.time_viewing;
    })}/>
        </div>
     
    )
}
export default Graphics;