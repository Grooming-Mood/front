import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
    
function Gagebar(props){


    return(
        <div>
            <ApexCharts 
                series={[43, 26]}                
                options={{
                    chart: {
                        height : 390,
                        type: 'radialBar'
                    },
                    plotOptions: {
                        radialBar: {
                            offsetY: 0,
                            startAngle: 270,
                            hollow: {
                                margin: 5,
                                size: '30%',
                                background: 'transparent',
                                image : undefined,
                            },
                            dataLabels:{
                                name: {
                                    show: false,
                                },
                                value: {
                                    show: false,
                                }
                            }
                        }
                    },
                    colors: ['#1ab7ea', '#0084ff'],
                    labels: ['Face', 'Voice'],
                    legend: {
                        show: true,
                        floating: true,
                        fontSize: '16px',
                        position: 'left',
                        offsetX: 160,
                        offsetY: 15,
                        labels: { useSeriesColors: true },
                        markers: {size:0},
                        itemMargin: { vertical: 3}
                    },
                    responsive: [ {
                        breakpoint: 480,
                        options: { legend: {show : false}}
                    }]
                }}>              
            </ApexCharts>
        </div>

    );
}

export default Gagebar;

