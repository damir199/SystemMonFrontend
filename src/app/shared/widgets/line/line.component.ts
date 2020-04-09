import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }
  @Input() data: [];

  ngOnInit() {
    this.chartOptions = {
      
      chart: {
        type: 'line'
      },

        
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  subtitle: {
      text: 'Source: thesolarfoundation.com'
  },

  yAxis: {
      title: {
          text: 'Number of Employees'
      }
  },

  xAxis: {
      accessibility: {
          rangeDescription: 'Range: 2010 to 2017'
      }
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2010
      }
  },

  series: [{data: this.data
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
      };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  

    
  
  
  }}


