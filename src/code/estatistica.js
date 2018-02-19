import Chart from 'chart.js';

export function estatistica () {
    const canvas = document.getElementById('grafico').getContext('2d');
   grafics(canvas);     
}
var grafics = function(canvas){
   
    var backColor = [
        'rgba(255, 99, 132, 0.0)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(255, 159, 64, 0.2)'
     ];
    var border = [
        'rgba(255, 99, 132,50)'
    ];
    var valor = [1, 10, 3, 5];
    
    var rotulo = ["janeiro", "Fevereiro", "Março", "Abril"];

    var datas =  { 
        labels: rotulo ,
        datasets: [{
            label: 'rafoc',
            data: valor,
            backgroundColor: backColor,
            borderColor: border,
            borderWidth: 1
        }]
    };
    var option = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    var grafico = new Chart(canvas,{
        type: 'line',
        data: datas,
        options: option
    });
};
estatistica();