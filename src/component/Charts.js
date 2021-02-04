/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  
  // ##############################
  // // // general variables for charts
  // #############################
  
  const chartColor = "#000000";
  
  
  // ##############################
  // // // Dashboard view - Panel chart
  // #############################
  
  const dashboardPanelChart = {
    data: (canvas) => {
      const ctx = canvas.getContext("2d");
      var chartColor = "#000000";
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, chartColor);
      var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.14)");
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "Data",
            borderColor: chartColor,
            pointBorderColor: chartColor,
            pointBackgroundColor: "#2c2c2c",
            pointHoverBackgroundColor: "#2c2c2c",
            pointHoverBorderColor: chartColor,
            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
          },
        ],
      };
    },
    options: {
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0,
        },
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "#fff",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      legend: {
        position: "bottom",
        fillStyle: "red",
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "rgba(0,0,0,0.4)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 10,
            },
            gridLines: {
              drawTicks: true,
              drawBorder: false,
              display: true,
              color: "rgba(255,255,255,0.4)",
              zeroLineColor: "transparent",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0.1)",
            },
            ticks: {
              padding: 10,
              fontColor: "rgba(0,0,0,0.4)",
              fontStyle: "bold",
            },
          },
        ],
      },
    },
  };
  
  
  module.exports = {
    dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  };
  