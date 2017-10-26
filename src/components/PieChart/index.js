import React from "react";
import { Pie } from "react-chartjs-2";
import getDataApi from "../getDataApi"

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
        labels:{
            generateLabels: function(chart) {
                var data = chart.data;
                if (data.labels.length && data.datasets.length) {
                    return data.labels.map(function(label, i) {
                        var meta = chart.getDatasetMeta(0);
                        var ds = data.datasets[0];
                        var arc = meta.data[i];
                        var custom = arc && arc.custom ? arc.custom : {};
                        var getValueAtIndexOrDefault = function(value, index, defaultValue) {
                            if (value === undefined || value === null) {
                                return defaultValue;
                            }

                            if (isArray(value)) {
                                return index < value.length ? value[index] : defaultValue;
                            }

                            return value;
                        };
                        var arcOpts = chart.options.elements.arc;
                        var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                        var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                        var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                        return {
                            text: ds.data[i] + "% " +label,
                            fillStyle: fill,
                            strokeStyle: stroke,
                            lineWidth: bw,
                            hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                            // Extra data used for toggling the correct item
                            index: i
                        };
                    });
                }
                return [];
            }
        },
        position:"bottom"
    },

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

export default class PieChart extends React.Component {
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



    }
    render() {
        return (
            <div>
                <div style={styles.graphContainer}>
                    <Pie data={this.state.chartData} options={chartOptions}  />
                </div>
            </div>
        );
    }
};