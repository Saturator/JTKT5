$(document).ready(function() {
    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,

        //String - The colour of each segment stroke
        segmentStrokeColor : "#f0f8ff",

        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 40, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect
        animationEasing : "easeInOutQuart",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

    }

    var ctx1 = $('#chart1').get(0).getContext("2d");
    var data1 = [
        {
            value: 100,
            color:"#EE2455",
            highlight: "#EE5279",
            label: "Algoritmit"
        },
        {
            value: 100,
            color: "#5AD8B7",
            highlight: "#8DCAD9",
            label: "Teköäly"
        },
        {
            value: 100,
            color: "#8CCE47",
            highlight: "#AACE7C",
            label: "Tiedon louhinta"
        },
        {
            value: 50,
            color: "#66BEC4",
            highlight: "#8CBCC4",
            label: "Luonnollisten kielten käsittely"
        },
        {
            value: 50,
            color: "#09A603",
            highlight: "#65A665",
            label: "Konenäkö"
        }
    ];

    var chart1 = new Chart(ctx1).Doughnut(data1,options);

    var ctx2 = $('#chart2').get(0).getContext("2d");
    var data2 = [
        {
            value: 100,
            color:"#605B6E",
            highlight: "#78737F",
            label: "Tietoturva"
        },
        {
            value: 100,
            color: "#AB3775",
            highlight: "#AB6B8C",
            label: "Tiedonhaku"
        },
        {
            value: 100,
            color: "#382C90",
            highlight: "#595390",
            label: "Tietoverkot"
        },
        {
            value: 50,
            color: "#45B47E",
            highlight: "#7EB493",
            label: "Tietokannat"
        },
        {
            value: 100,
            color: "#F9A91B",
            highlight: "#F9C364",
            label: "Hajautettu tietojenkäsittely"
        }
    ];
    var chart2 = new Chart(ctx2).Doughnut(data2,options);

    var ctx3 = $('#chart3').get(0).getContext("2d");
    var data3 = [
        {
            value: 100,
            color:"#F77A52",
            highlight: "#F7A58C",
            label: "Työnkulku"
        },
        {
            value: 100,
            color: "#56C6D9",
            highlight: "#8DCAD9",
            label: "Ohjelmistotekniikka"
        },
        {
            value: 50,
            color: "#45B47E",
            highlight: "#7EB493",
            label: "Tietokannat"
        },
        {
            value: 50,
            color: "#AC73E8",
            highlight: "#AC73E8",
            label: "Käyttöjärjestelmät"
        },
        {
            value: 100,
            color: "#F9D71F",
            highlight: "#F9E572",
            label: "Ohjelmointikielet"
        }
    ];
    var chart3 = new Chart(ctx3).Doughnut(data3,options);

    var ctx4 = $('#chart4').get(0).getContext("2d");
    var data4 = [
        {
            value: 100,
            color:"#EE2455",
            highlight: "#EE5279",
            label: "Algoritmit"
        },
        {
            value: 100,
            color: "#F7A58C",
            highlight: "#F7C1B0",
            label: "Laskennallinen tiede"
        },
        {
            value: 100,
            color: "#8CCE47",
            highlight: "#AACE7C",
            label: "Tiedon louhinta"
        },
        {
            value: 50,
            color: "#F9D71F",
            highlight: "#F9E572",
            label: "Ohjelmointikielet"
        }
    ];
    var chart4 = new Chart(ctx4).Doughnut(data4,options);
});


