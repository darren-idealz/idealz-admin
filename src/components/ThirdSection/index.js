import React, { Component } from 'react';
import PieChart from '../PieChart';
import HorizontalBarChart from '../HorizontalBarChart';
import './style.css';


class ThirdSection extends Component {

    constructor(props, context) {
        super();

    }


    render() {
        let chart = null;
        if(this.props.chartType === "Pie") {
            chart = <PieChart  dataset={this.props.dataset} options=""/>;
        } else {
            chart = <HorizontalBarChart  dataset={this.props.dataset} options=""/>;
        }
        return (
            <div className="thirdSection">
                <h2 className="icon-{this.props.icon}">{this.props.title}</h2>
                {chart}
            </div>
        );
    }

}

export default ThirdSection;