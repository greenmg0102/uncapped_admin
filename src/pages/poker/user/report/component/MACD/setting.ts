export const profiteChartOption: any = {

    chart: {
        height: 45,
        width: 120,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [
                    {
                        from: 120,
                        to: 67,
                        color: '#6149F4'
                    },
                    {
                        from: 66,
                        to: 34,
                        color: '#776CF9'
                    },
                    {
                        from: 33,
                        to: 0,
                        color: '#FFEB5E'
                    },
                    {
                        from: -120,
                        to: -67,
                        color: '#D85022'
                    },
                    {
                        from: -66,
                        to: -34,
                        color: '#EB7A27'
                    },
                    {
                        from: -33,
                        to: 0,
                        color: '#F6B039'
                    }
                ]
            },
            stroke: {
                show: false,
                width: 1,
            },
            columnWidth: '80%',
        },
        line: {
            colors: {
                ranges: [
                    {
                        from: 120,
                        to: 51,
                        color: '#ffffff'
                    },
                    {
                        from: 50,
                        to: 0,
                        color: '#00ff00'
                    },
                    {
                        from: -120,
                        to: -51,
                        color: '#ff0000'
                    },
                    {
                        from: -50,
                        to: 0,
                        color: '#929292'
                    }
                ]
            },
            borderRadius: 0,
            stroke: {
                show: false,
                width: 2,
            },
            columnWidth: '80%',
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#00ab55'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (val: any) => {
                    return '';
                },
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
};

export const lossChartOption: any = {
    chart: {
        height: 45,
        width: 120,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#e7515a'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (val: any) => {
                    return '';
                },
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
};

export const selectedBitCoinChart = (xaxios: any, type: any): any => {

    return {
        options: {
            chart: {
                height: 350,
                zoom: {
                    enabled: true,
                },
                toolbar: {
                    show: true,
                },
            },

            plotOptions: {
                bar: {
                    colors: {
                        ranges: [
                            {
                                from: 120,
                                to: 67,
                                color: '#6149F4'
                            },
                            {
                                from: 66,
                                to: 34,
                                color: '#776CF9'
                            },
                            {
                                from: 33,
                                to: 0,
                                color: '#FFEB5E'
                            },
                            {
                                from: -120,
                                to: -67,
                                color: '#D85022'
                            },
                            {
                                from: -66,
                                to: -34,
                                color: '#EB7A27'
                            },
                            {
                                from: -33,
                                to: 0,
                                color: '#F6B039'
                            }
                        ]
                    },
                    stroke: {
                        show: false,
                        width: 1,
                    },
                    columnWidth: '80%',
                },
                line: {
                    colors: {
                        ranges: [
                            {
                                from: 120,
                                to: 51,
                                color: '#ffffff'
                            },
                            {
                                from: 50,
                                to: 0,
                                color: '#00ff00'
                            },
                            {
                                from: -120,
                                to: -51,
                                color: '#ff0000'
                            },
                            {
                                from: -50,
                                to: 0,
                                color: '#929292'
                            }
                        ]
                    },
                    borderRadius: 0,
                    stroke: {
                        show: false,
                        width: 2,
                    },
                    columnWidth: '80%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            // colors: ["#A15146", "#155B46", "#115146", "#115146"],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
                borderColor: '#313131',
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'Growth',
                },
                labels: {
                    formatter: function (y: any) {
                        return y.toFixed(0) + "%";
                    }
                }
            },
            xaxis: {
                type: 'string',
                categories: xaxios[type],
                labels: {
                    rotate: -90
                },
            }
        },
    }
};
