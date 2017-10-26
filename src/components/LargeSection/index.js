import React, { Component } from 'react';
import PieChart from '../PieChart';
import HorizontalBarChart from '../HorizontalBarChart';
import './style.css';


class LargeSection extends Component {

    constructor(props, context) {
        super();

    }


    render() {
        return (
            <div className="large-section">
                <h2>{this.props.title}</h2>
                <div className="large-section-content">
                    {this.props.content}
                </div>
            </div>
        );
    }

}

export default LargeSection;