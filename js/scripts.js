$(document).ready(function() {
  console.log('scripts loaded');

  var url = '/js/nations.json';
  var data = [];
  var xCat = [];
  var numAirports = [];

  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: data,
    url: url,
    async: true,
    success: function(data) {
      console.log('data');
      for (i = 0; i < data.length; i++) {
        xCat.push(data[i].name);
        numAirports.push((data[i].Population * 1000000 / data[i].Airports));
      }
      buildCharts();
    } //end of success function
  }); //end of ajax call

  function buildCharts() {
    var myChart = Highcharts.chart('barChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'So You Think <em> Your </em> Airport Is Crowded?'
      },
      subtitle: {
        text: 'Source: CIA World Factbook'
      },
      xAxis: {
        categories: xCat
      },
      yAxis: {
        title: {
          text: 'Number of People for Every One Airport'
        }
      },
      series: [{
        name: 'Number of People at Every Airport',
        data: numAirports
      }]
    }); //end of Highcharts.chart
  } //end of buildCharts function
}); //end of ready wrapper