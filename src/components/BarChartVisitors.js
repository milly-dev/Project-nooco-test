import React, { Component } from "react";
import { Bar } from 'react-chartjs-2'

class BarChartVisitors extends Component {

    render () {
        return (
            <div>
                 <h1>Data By Users</h1>
                <Bar 
                data={{labels:this.props.visitorNames, 
                datasets: [{
                    label: 'Nomber of connexion this month',
                    data: this.props.numberOfConnections,
                    backgroundColor: this.props.numberOfConnections.map(() => {
                        return "rgba(69, 220, 195, 0.5)";
                    }),
                    borderColor: this.props.numberOfConnections.map(() => {
                        return "rgba(69, 220, 195, 1)";
                    }),
                    borderWidth: 1
                }, 
                {label: 'viewing Nomber of articles',
                data: this.props.numberOfArticles,
                backgroundColor: this.props.numberOfConnections.map(() => {
                    return "rgba(55, 64, 100, 0.5)";
                }),
                borderColor: this.props.numberOfConnections.map(() => {
                    return "rgba(55, 64, 100, 1)";
                }),
                borderWidth: 1}]}}
                height={300}
                width={700}
                option={{ maintainAspectRatio: false}}
                />
    
            </div>
        )
    }
    
}

export default BarChartVisitors;