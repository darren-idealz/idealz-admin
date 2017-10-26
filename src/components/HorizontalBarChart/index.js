import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import getDataApi from "../getDataApi"
import './style.css'

const isArray = Array.isArray?
    function(obj) {
        return Array.isArray(obj);
    } :
    function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
var chartOptions = {
    events: [],
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            // grid line settings
            display: false,
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            // grid line settings
            gridLines: {
                display: false
            }
        }]
    }
};

var styles = {
    "graphContainer" : {
        "backgroundColor" : "transparent",
        "height" : 400,
        "width" : 400,
        "marginTop" : "15px",
        "padding" : "20px"
    },

};

export default class HorizontalBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {}
        };
    }
    componentDidMount() {
        let thisGraph = this;
        getDataApi.requestData(this.props.dataset).then(data => {
            thisGraph.setState({chartData : data.data});
        });
        this.state.activeRange="Country";


    }
    handleClick = (proxy,newActiveRange) => {
        //console.log(this);
        let thisGraph = this;
        getDataApi.requestData(this.props.dataset + "&geocode=" + newActiveRange.toLowerCase()).then(data => {
            thisGraph.setState({chartData : data.data});
        });
        thisGraph.setState({activeRange : newActiveRange});
        return false;
    }
    render() {

        return (
            <div>
                <div style={styles.graphContainer}>
                    <HorizontalBar data={this.state.chartData} options={chartOptions}  />
                    <ul className="switch">
                        <li><a href="#" className={this.state.activeRange=="Country" ? "active": null} onClick={(e) => this.handleClick(e, "Country")}>Country</a></li>
                        <li><a href="#" className={this.state.activeRange=="City"  ? "active": null} onClick={(e) => this.handleClick(e, "City")}>City</a></li>
                    </ul>
                </div>
            </div>
        );
    }
};