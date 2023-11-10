Chart.register(ChartDataLabels);

function randomData(min, max) {
  return Math.random() * (max - min) + min;
}

var originalData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
      {
          label: 'Device 1',
          data: [],
          backgroundColor: 'rgba(211, 160, 7, 1)',
          hoverBackgroundColor: 'rgba(102, 102, 102, 1)',
          borderWidth: 1
      },
      {
          label: 'Device 2',
          data: [],
          backgroundColor: 'rgba(239, 184, 16, 1)',
          hoverBackgroundColor: 'rgba(102, 102, 102, 1)',
          borderWidth: 1
      },
      {
          label: 'Device 3',
          data: [],
          backgroundColor: 'rgba(249, 219, 74, 1)',
          hoverBackgroundColor: 'rgba(102, 102, 102, 1)',
          borderWidth: 1
      }
    ]
};

for (let i = 0; i < originalData.labels.length; i++) {
    let total = randomData(5,9);
    let d1 = randomData(0,total);
    let d2 = randomData(0,total-d1);
    let d3 = total - d1 - d2;
    originalData.datasets[0].data.push(d1);
    originalData.datasets[1].data.push(d2);
    originalData.datasets[2].data.push(d3);
}


const hoy = new Date();
let dia = hoy.getDay();


if (dia === 0) {
    dia = originalData.labels.length;
}


var filteredData = {
    labels: originalData.labels.slice(0,dia),
    datasets: [
        {
            label: originalData.datasets[0].label,
            data: originalData.datasets[0].data.slice(0,dia),
            backgroundColor: originalData.datasets[0].backgroundColor,
            hoverBackgroundColor: originalData.datasets[0].hoverBackgroundColor,
            borderWidth: originalData.datasets[0].borderWidth
        },
        {
            label: originalData.datasets[1].label,
            data: originalData.datasets[1].data.slice(0,dia),
            backgroundColor: originalData.datasets[1].backgroundColor,
            hoverBackgroundColor: originalData.datasets[1].hoverBackgroundColor,
            borderWidth: originalData.datasets[1].borderWidth
        },
        {
            label: originalData.datasets[2].label,
            data: originalData.datasets[2].data.slice(0,dia),
            backgroundColor: originalData.datasets[2].backgroundColor,
            hoverBackgroundColor: originalData.datasets[2].hoverBackgroundColor,
            borderWidth: originalData.datasets[2].borderWidth
        }
    ]
};


var barCtx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barCtx, {
  type: 'bar',
  data: filteredData,
  options: {
    plugins: {
      datalabels: {
            // formatter: function(value, context) {
            //     var kWh = filteredData.datasets[context.datasetIndex].data[context.dataIndex];
            //     var costo = kWh * 2.70;
            //     return "S/ "+ costo.toFixed(2);
            // },
            // color: '#000',
            // anchor: 'end',
            // align: 'top'
            display: false
      }
    },
      scales: {
          y: {
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Consumption (kWh)'
              }
          }
      }
  }
});


const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");
const viernes = document.getElementById("viernes");
const sábado = document.getElementById("sábado");
const domingo = document.getElementById("domingo");


if (dia >= 1) {
  lunes.style.display = "block";
} else {
  lunes.style.display = "none";
}

if (dia >= 2) {
  martes.style.display = "block";
} else {
  martes.style.display = "none";
}

if (dia >= 3) {
  miercoles.style.display = "block";
} else {
  miercoles.style.display = "none";
}

if (dia >= 4) {
  jueves.style.display = "block";
} else {
  jueves.style.display = "none";
}

if (dia >= 5) {
  viernes.style.display = "block";
} else {
  viernes.style.display = "none";
}

if (dia >= 6) {
  sabado.style.display = "block";
} else {
  sabado.style.display = "none";
}

if (dia === 0) {
  domingo.style.display = "block";
} else {
  domingo.style.display = "none";
}

function resetData() {
  barChart.data = {
    labels: originalData.labels.slice(0,dia),
    datasets: [
        {
            label: originalData.datasets[0].label,
            data: originalData.datasets[0].data.slice(0,dia),
            backgroundColor: originalData.datasets[0].backgroundColor,
            hoverBackgroundColor: originalData.datasets[0].hoverBackgroundColor,
            borderWidth: originalData.datasets[0].borderWidth
        },
        {
            label: originalData.datasets[1].label,
            data: originalData.datasets[1].data.slice(0,dia),
            backgroundColor: originalData.datasets[1].backgroundColor,
            hoverBackgroundColor: originalData.datasets[1].hoverBackgroundColor,
            borderWidth: originalData.datasets[1].borderWidth
        },
        {
            label: originalData.datasets[2].label,
            data: originalData.datasets[2].data.slice(0,dia),
            backgroundColor: originalData.datasets[2].backgroundColor,
            hoverBackgroundColor: originalData.datasets[2].hoverBackgroundColor,
            borderWidth: originalData.datasets[2].borderWidth
        }
    ]
  };
  barChart.update();
}


const select = document.getElementById("filterSelect");


select.addEventListener("change", function() {
  const selectedValue = select.value;

  if (selectedValue === "all") {
      resetData();
  } else {
      const selectedNumber = parseInt(selectedValue);

      filterData(selectedNumber);
  }
});

function getIndex(value) {
  if (value === "0") {
    return 6;
  } else {
    return value - 1;
  }
}

function filterData(day) {
  var index = getIndex(day);
  var filteredData = {
    labels: originalData.labels.filter((label, i) => i === index),
    datasets: [
        {
            label: originalData.datasets[0].label,
            data: originalData.datasets[0].data.filter((data, i) => i === index),
            backgroundColor: originalData.datasets[0].backgroundColor,
            hoverBackgroundColor: originalData.datasets[0].hoverBackgroundColor,
            borderWidth: originalData.datasets[0].borderWidth
        },
        {
            label: originalData.datasets[1].label,
            data: originalData.datasets[1].data.filter((data, i) => i === index),
            backgroundColor: originalData.datasets[1].backgroundColor,
            hoverBackgroundColor: originalData.datasets[1].hoverBackgroundColor,
            borderWidth: originalData.datasets[1].borderWidth
        },
        {
            label: originalData.datasets[2].label,
            data: originalData.datasets[2].data.filter((data, i) => i === index),
            backgroundColor: originalData.datasets[2].backgroundColor,
            hoverBackgroundColor: originalData.datasets[2].hoverBackgroundColor,
            borderWidth: originalData.datasets[2].borderWidth
        }
    ]
  };

  barChart.data = filteredData;
  barChart.update();
}


function monthlyData(data) {
  return data.reduce((total, currentValue) => total + currentValue, 0) * 2;
}

var data = {
    labels: ["Device 1", "Device 2", "Device 3"],
    datasets: [
      {
        label: "Consumption in kWh",
        data: [],
        backgroundColor: ["rgba(211, 160, 7, 1)", "rgba(239, 184, 16, 1)", "rgba(249, 219, 74, 1)"],
        hoverBackgroundColor: 'rgba(102, 102, 102, 1)',
        borderWidth: 1
      }
    ]
};
let d1 = monthlyData(originalData.datasets[0].data);
let d2 = monthlyData(originalData.datasets[1].data);
let d3 = monthlyData(originalData.datasets[2].data);
data.datasets[0].data.push(d1);
data.datasets[0].data.push(d2);
data.datasets[0].data.push(d3);

  var pieCtx = document.getElementById("pieChart").getContext("2d");
  
  var totalConsumo = data.datasets[0].data.reduce((total, currentValue) => total + currentValue, 0);
  var porcentajes = data.datasets[0].data.map(value => ((value / totalConsumo) * 100).toFixed(2) + "%");
  
  var pieChart = new Chart(pieCtx, {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Circular Graph of Device Power Consumption"
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = context.label || "";
              var value = context.formattedValue || "";
              var percentage = porcentajes[context.dataIndex] || "";
  
              return label + ": " + value + " kWh (" + percentage + ")";
            }
          }
        },
        datalabels: {
          formatter: function(value, context) {
              var costo = value * 2.70;
              return "S/ "+ costo.toFixed(2);
          },
          color: '#000',
          anchor: 'center',
          align: 'center',
          font: {
            size: 15,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetX: 50,
            shadowOffsetY: 50
          }
          
      }
      }
    }
  });

  
var totalMensual = data.datasets[0].data.reduce((total, currentValue) => total + currentValue, 0);

var min = totalMensual * 0.5;
var max = totalMensual * 1.0;

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthlyData = [];

for (var i = 0; i < 12; i++) {
  monthlyData.push(randomValue(min, max));
}


var lineCtx = document.getElementById("lineChart").getContext("2d");

var fechaActual = new Date();
var mesActual = fechaActual.getMonth();

var lineChart = new Chart(lineCtx, {
  type: "line",
  data: {
    labels: months.slice(0, mesActual + 1),
    datasets: [
      {
        label: "Consumption in kWh",
        data: monthlyData.slice(0, mesActual + 1),
        backgroundColor: 'rgba(239, 184, 16, 1)',
        hoverBackgroundColor: 'rgba(249, 219, 74, 1)',
        borderColor: 'rgba(239, 184, 16, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      datalabels: {
          formatter: function(value) {
              var costo = value * 2.70;
              return "S/ "+ costo.toFixed(2);
          },
          color: '#000',
          anchor: 'end',
          align: 'top',
          offset: 10,
          font: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetX: 50,
            shadowOffsetY: 50
          }
      }
    }
  }
});


var primerDiaSemana = fechaActual.getDate() - fechaActual.getDay() + 1;
var ultimoDiaSemana = primerDiaSemana + 6;

var primerDiaSemanaObj = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), primerDiaSemana);
var ultimoDiaSemanaObj = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), ultimoDiaSemana);

var primerDiaSemanaFormatted = primerDiaSemanaObj.toLocaleDateString("es-ES");
var ultimoDiaSemanaFormatted = ultimoDiaSemanaObj.toLocaleDateString("es-ES");

var textoRangoSemana = "From " + primerDiaSemanaFormatted + " to " + ultimoDiaSemanaFormatted;
var textoMesActual = months[mesActual] + " " + fechaActual.getFullYear();
var textoAnioActual = fechaActual.getFullYear();

console.log("Actual week range:", textoRangoSemana);
console.log("Actual month:", textoMesActual);
console.log("Actual year:", textoAnioActual);

function actualizarInformacion() {
  var rangoSemanaElement = document.getElementById("rangoSemana");
  var mesActualElement = document.getElementById("mesActual");
  var anioActualElement = document.getElementById("anioActual");

  rangoSemanaElement.textContent = textoRangoSemana;
  mesActualElement.textContent = textoMesActual;
  anioActualElement.textContent = textoAnioActual;
}

window.onload = actualizarInformacion;